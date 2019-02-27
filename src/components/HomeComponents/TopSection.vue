<template>
  <div>
    <v-container fluid  grid-list-md class="n-pd">  
      <v-layout row wrap>
        <v-flex order-xs2 order-md1 order-sm1 xs12 sm3 md3 lg2>
          <TopSectionSelect></TopSectionSelect>  
        </v-flex>
        <v-flex order-xs1 order-md2 order-sm2 xs12 sm9 md6 lg8>     
          <v-carousel>
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
            <div class="carousel-link">
              <v-btn 
              :to="'/ad/' + ad.id"
              class="red lighten-2"
              >{{ad.title}}</v-btn>
            </div>              
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex order-xs3 order-md3 order-sm3 xs12 sm3 md3 lg2>
          <TopSectionExp></TopSectionExp>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import TopSectionSelect from './TopSection/TopSectionSelect.vue'
  import TopSectionExp from './TopSection/TopSectionExp.vue'
  export default {
    data () {
      return {
      }
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
      TopSectionSelect: TopSectionSelect,
      TopSectionExp: TopSectionExp
    }
  }
</script>

<style scoped lang="stylus">
  .n-pd
    padding: 25px 0
  .item-bg
      background: rgba(0, 0, 0, 0.2)      
  .carousel-link 
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
</style>
