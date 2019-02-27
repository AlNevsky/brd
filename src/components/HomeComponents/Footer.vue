<template>
  <v-container grid-list-lg class="cont-pd ">
    <v-layout>      
      <v-flex>
         <v-footer
          dark
          height="auto"
        >          
          <v-card
            flat
            tile
            class="grey lighten white--text text-xs-center"
          >            
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-3 white--text"
                icon
              >
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              &copy;2018 — <strong>C-Shop</strong>
            </v-card-text>

            <v-divider></v-divider>
            
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              flat
              round
              >
                {{ link }}
            </v-btn>
          </v-card>
        </v-footer>        
      </v-flex>
    </v-layout>
  </v-container> 
</template> 

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fa fa-share-alt',
        'fa fa-comment'
      ]
    }),
    methods: {
    },
    computed: {
    }
  }
</script>

<style scoped lang="stylus">
  .cont-pd 
    padding: 20px 0 0 0
  .c-layout
    background: rgba(0, 0, 0, 0.5)    
</style>
