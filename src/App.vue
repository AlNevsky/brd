<template>
  <v-container class="n-pd">    
    <v-app>
      <v-navigation-drawer        
        app 
        temporary 
        v-model="drawer">
        <v-list>
          <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-if="isUserLoggedIn"
            @click="onLogout"
          >
            <v-list-tile-content>            
              <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        class="item-bg blue-grey lighten-4"
        >
        <v-toolbar-side-icon
          @click="drawer =!drawer"
          class="hidden-md-and-up"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link
            to="/" 
            tag="span"
            class="pointer"
          >
            Cars
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          flat
          >
            <v-icon left>
              {{link.icon}}
            </v-icon>
            {{link.title}}
          </v-btn>

          <v-btn
          @click="onLogout"
          flat
          v-if="isUserLoggedIn"
          >
            <v-icon left>
              exit_to_app
            </v-icon>
            Logout
          </v-btn>

        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view/>
      </v-content>

      <template v-if="error">
        <v-snackbar
          color="error"
          @input="closeError"    
          :multi-line="true"      
          :timeout="5000"    
          value="true"  
        >
          {{error}}
          <v-btn
            dark
            flat
            @click="closeError"
          >
            Close
          </v-btn>
        </v-snackbar>
      </template>
    </v-app>       
 </v-container>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New Item', icon: 'note_add', url: '/new'},
          {title: 'My Item', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="stylus">
  .item-bg
    background: rgba(0, 0, 0, 0.2)
  .n-pd0
    padding-top: 2px    

  .pointer 
    cursor: pointer
  
</style>
