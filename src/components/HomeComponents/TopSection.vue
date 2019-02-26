<template>
  <div>
    <v-container fluid  grid-list-md class="n-pd">  
      <v-layout row wrap>
        <v-flex order-xs2 order-md1 order-sm1 xs12 sm3 md3 lg2>
          <TopSectionSelect></TopSectionSelect>  
        </v-flex>
      <v-flex order-xs1 order-md2 order-sm2 xs12 sm9 md9 lg10>     
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

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import TopSectionSelect from './TopSection/TopSectionSelect.vue'
  export default {
    data () {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Audi',
            items: [
              { title: 'RS 5' },
              { title: 'RS 6' },
              { title: 'RS 8' }
            ]
          },
          {
            action: 'restaurant',
            title: 'BMW',
            items: [
              { title: 'X5 M' },
              { title: 'X6 M' },
              { title: 'M5' },
              { title: 'M3' },
              { title: 'M 760' }
            ]
          },
          {
            action: 'school',
            title: 'Mercedes',
            items: [
              { title: 'E 63' },
              { title: 'GLS 63' },
              { title: 'G 63' },
              { title: 'GLE 63' },
              { title: 'CLS 63' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Volkswagen',
            items: [
              { title: 'Golf' },
              { title: 'Passat' },
              { title: 'Phaeton' },
              { title: 'Arteon' }
            ]
          },
          {
            action: 'healing',
            title: 'Porsche',
            items: [
              { title: 'Cayenne' },
              { title: 'Macan' },
              { title: 'Carrera' },
              { title: '911' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Opel',
            items: [
              { title: 'Insignia' }
            ]
          }
        ]
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
      TopSectionSelect: TopSectionSelect
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
