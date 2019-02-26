<template>
  <v-card>
    <v-toolbar class="item-bg blue-grey lighten-4">
        <v-toolbar-title><p class="text-xs-center">Deutsch</p></v-toolbar-title>          
      </v-toolbar>
    <v-img
      :src="ad.imageSrc"
      height="300px"
    >
      <v-bottom-nav        
        :value="true"
        absolute
        color="transparent"
      >
        <div class="pt-4 pl-2">
          <v-rating 
            v-model="rating"
            color="#EEFF41" 
            background-color="yellow"
            dense></v-rating>
        </div>
      </v-bottom-nav>          
    </v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ad.title}}</h3>
        <span class="grey--text">1,000 miles of wonder</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>                  
      <v-btn
        class="grey lighten-3 mr-2"              
        :to="'/ad/' + ad.id"
        flat
        >Open
        </v-btn>
      <app-buy-modal :ad='ad'></app-buy-modal>

      <v-btn icon @click="changeShow">
        <v-icon>{{ isShow ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>            
    </v-card-actions>
    
    <v-slide-y-transition>
      <v-card-text v-if="isShow" :key="ad.id"> 
        {{ad.description}}
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      rating: 0,
      isShow: false
    }
  },
  methods: {
    changeShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

