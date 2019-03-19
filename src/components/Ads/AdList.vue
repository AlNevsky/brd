<template>
  <b-container>
    <b-row>
      <b-row row v-if="!loading && myAds.length !== 0">
        <b-col>
          <h1 class="text--secondary mb-3 text-center">Мои объявления</h1>
          <b-col             
            class="elevation-10 pd-0 mb-2 adList-item-stlyle"
            v-for="ad in myAds"
            :key="ad.id"            
            >
            <b-card>
              <b-row>
              <b-col sm="3">
                <v-img
                :src="ad.imageSrc"
                height="300px"
                >
                </v-img>
              </b-col>
              <b-col>
                <b-card-text>
                  <h2 class="text--primary">{{ad.title}}</h2>
                  <b-breadcrumb :items="breadcrumbList" />
                  <p>{{ad.description}}</p>
                </b-card-text>
                  <b-button
                    variant="outline-primary"                       
                    :to="'/ad/' + ad.id"
                    >Подробнее...</b-button>                  
                </b-col>
              </b-row>
            </b-card>
          </b-col>   
        </b-col>
      </b-row>
      <b-row v-else-if="!loading && myAds.length === 0">
        <b-col xs12 class="text-xs-center">
          <h1 class="text--primary">
            You have no ads
          </h1>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col xs12 class="text-xs-center">
          <v-progress-circular
            :size="100"
            :width="4"
            indeterminate
            color="green"
          ></v-progress-circular>
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data () {
      return {
        breadcrumbList: [
          {
            text: 'Ищу',
            href: '#'
          },
          {
            text: 'Собаки',
            href: '#'
          },
          {
            text: 'Стаффорд',
            active: true
          }
        ]
      }
    },
    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>

<style scoped lang="stylus">
  // .adList-item-stlyle
  //   max-height: 350px
  //   height : 100%
  .pd-0
    padding: 0

</style>