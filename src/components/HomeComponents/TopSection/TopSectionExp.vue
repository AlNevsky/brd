<template>
  <v-card>   
    <v-navigation-drawer permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Меню
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

     <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"        
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Личный блог', icon: 'dashboard' },
          { title: 'Альбомы', icon: 'dashboard' },
          { title: 'Добавить автомобиль', icon: 'dashboard' },
          { title: 'История просмотров', icon: 'dashboard' },
          { title: 'Гости', icon: 'dashboard' },
          { title: 'Закладки', icon: 'question_answer' }
        ]
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
