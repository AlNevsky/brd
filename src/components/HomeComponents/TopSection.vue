<template>
  <div>
    <v-container fluid  grid-list-md class="n-pd">  
      <v-layout row wrap>
        <v-tabs
          centered
          color="blue-grey lighten-3"
          dark
          icons-and-text
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab href="#tab-1">
            Ищу
            <v-icon>search</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Нашел
            <v-icon>note_add</v-icon>
          </v-tab>

          <v-tab-item
            v-for="i in 2"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>

        <v-flex xs12 sm3 md3 lg6>

        </v-flex>

        <v-flex xs12 sm9 md6 lg6>     
          
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
        text: 'Lorem ipsum sit aet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
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
