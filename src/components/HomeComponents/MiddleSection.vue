<template>
  <v-container grid-list-lg class="n-pd">
    <v-layout row wrap>      
      <v-flex
        max-height="500px"             
        xs12
        sm6
        md4
        v-for="ad of Ads"
        :key="ad.id"
      >
        <AdItem :ad="ad"></AdItem>
        
      </v-flex>
    </v-layout>
  </v-container> 
</template>

<script>
  import AdItem from './AdItem.vue'
  export default {
    data: () => ({
    }),
    methods: {
    },
    computed: {
      promoAds () {
        return this.$store.getters.promoAds
      },
      Ads () {
        return this.$store.getters.ads
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    components: {
      AdItem: AdItem
    }
  }
</script>

<style scoped lang="stylus">
  .n-pd
    padding: 25px 0
  .item-bg
    background: rgba(0, 0, 0, 0.2)
</style>
