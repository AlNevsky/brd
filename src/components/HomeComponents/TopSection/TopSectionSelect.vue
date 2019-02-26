<template>
  <v-card>  
    <v-toolbar class="item-bg blue-grey lighten-4">
      <v-toolbar-title class="text-xs-center">Deutsch</v-toolbar-title>          
    </v-toolbar>                 
    <v-card>            
      <v-list>
        <v-list-group
          v-for="item in carList"
          v-model="item.active"
          :key="item.title"                  
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"                  
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>                    
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-card>
     <!-- <v-select
      v-for="item in carList"
      :key="item.title"
      solo
      dense
     >{{item.title}}</v-select>     -->
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        carList: [
          {
            id: 1,
            title: 'Audi',
            items: [
              { title: 'RS 5' },
              { title: 'RS 6' },
              { title: 'RS 8' }
            ]
          },
          {
            id: 2,
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
            id: 3,
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
            id: 4,
            title: 'Volkswagen',
            items: [
              { title: 'Golf' },
              { title: 'Passat' },
              { title: 'Phaeton' },
              { title: 'Arteon' }
            ]
          },
          {
            id: 5,
            title: 'Porsche',
            items: [
              { title: 'Cayenne' },
              { title: 'Macan' },
              { title: 'Carrera' },
              { title: '911' }
            ]
          },
          {
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
    }
  }
</script>

<style scoped lang="stylus">
  .n-pd
    padding: 25px 0
  .item-bg
      background: rgba(0, 0, 0, 0.2)  
</style>
