<template>  
  <v-container class="cont-bg">
    <v-layout row wrap class="c-layout">
      <v-flex>      
      <v-timeline>
        <v-timeline-item
          color="green lighten-2"
          fill-dot
          right
        >
          <v-card class="item-bg">
            <v-card-title class="grey darken-3 text-xs-center">              
              <h2 class=" white--text font-weight-light">First Step</h2>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex xs10>
                 <p class="font-weight-medium font-italic item-text text-xs-center">
                    Lorem ipsum dolor sit amet, no nam oblique veritus. 
                    Commune scaevola imperdiet nec ut, sed euismod convenire 
                    principes at. Est et nobis iisque percipit.
                 </p>
                </v-flex>
                <v-flex xs2>
                  <v-icon size="64">mdi-calendar-text</v-icon>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="green lighten-1"
          fill-dot
          left
          small
        >
          <v-card class="item-bg">
            <v-card-title class="grey darken-3">
              <h2 class="mr-3 white--text font-weight-light">Second Step</h2>              
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex>
                  <p class="item-text">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Iste quos voluptatem eos 
                    accusantium! Ipsum numquam consequuntur natus 
                    perspiciatis, mollitia doloremque modi!
                  </p>
                </v-flex>                
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="green lighten-1"
          fill-dot
          right
        >
          <v-card class="item-bg">
            <v-card-title class="grey darken-3">              
              <h2 class="white--text font-weight-light">Third Step</h2>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex>
                  <p class="item-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum temporibus a accusantium, nihil reiciendis cupiditate.                    
                    Nostrum, error? Dolorum maiores blanditiis nam.
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>

     

      <v-divider></v-divider>
      <v-divider></v-divider>
      
      <v-stepper v-model="e1" class="item-bg" dark non-linear>
        <v-stepper-header>
          <v-stepper-step editable  white :complete="e1 > 1" step="1">contact exchange</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 2" step="2">inspection car</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="3">You have keys</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-5"
            color="grey lighten-3"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5"
            color="grey lighten-3"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
              <v-card
                class="mb-5"
                color="grey lighten-3"
                height="250px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
      </v-stepper>
      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0
      }
    },
    methods: {
    },
    computed: {
    }
  }
</script>

<style scoped lang="stylus"> 
  .cont-bg       
      background-image url(../../images/cont-bg.jpeg)
      padding: 0;
  .item-bg      
      background: rgba(0, 0, 0, 0.6)
  .item-text
    color: #f3f3f3
    font-size: 15px
    padding: 0       
    margin: 0
  .c-layout
    background: rgba(0, 0, 0, 0.5)       
</style>
