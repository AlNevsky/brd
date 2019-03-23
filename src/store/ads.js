import * as fb from 'firebase'

class Ad {
  constructor (title, description, animal, breed, locations, phoneNumber, email, contactName, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.animal = animal
    this.breed = breed
    this.locations = locations
    this.phoneNumber = phoneNumber
    this.email = email
    this.contactName = contactName
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
    // this.location = location
    // this.phoneNumber = phoneNumber
    // this.email = email
    // this.contactName = contactName
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    },
    updateAd (state, {title, description, phoneNumber, email, contactName, id}) {
      const ad = state.ads.find(a => {
        return a.id === id
      })

      ad.title = title
      ad.description = description
      ad.phoneNumber = phoneNumber
      ad.email = email
      ad.contactName = contactName
    },
    updateShow (state, {isShow, id}) {
      const ad = state.ads.find(a => {
        return a.id === id
      })
      console.log('isShow', isShow)
      ad.isShow = isShow
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      const image = payload.image

      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          payload.animal,
          payload.breed,
          payload.locations,
          payload.phoneNumber,
          payload.email,
          payload.contactName,
          getters.user.id,
          '',
          payload.promo
        )

        const ad = await fb.database().ref('ads').push(newAd)
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))

        const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
        const imageSrc = fileData.metadata.downloadURLs[0]

        await fb.database().ref('ads').child(ad.key).update({
          imageSrc
        })

        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.animal, ad.breed, ad.locations, ad.phoneNumber, ad.email, ad.contactName, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async updateAd ({commit}, {title, description, phoneNumber, email, contactName, id}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        await fb.database().ref('ads').child(id).update({
          title, description, phoneNumber, email, contactName
        })
        commit('updateAd', {
          title, description, phoneNumber, email, contactName, id
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state, getters) {
      return state.ads.filter(ad => {
        return ad.ownerId === getters.user.id
      })
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    },
    counterForShow (state) {
      return state.isShowCounter
    }
  }
}
