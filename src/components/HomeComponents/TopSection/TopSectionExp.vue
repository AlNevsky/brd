<template>    
  <v-card>
    <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Личный опыт
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>  
    
      <div>        
        <v-card-text>
          Правда об эксплуатации всех автомобилей мира из первых рук. Выбирайте интересующую модель машины.
        </v-card-text>
      </div>
    
    <div>
       <v-select
        v-for="item in selectMenu"
        :key="item.title"
        solo
        dense
        label="item.title"
      >{{item.title}}
     </v-select>
    </div>

    <v-card-actions>     
      <v-btn flat color="blue">Посмотреть</v-btn>
    </v-card-actions>
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
        ],
        selectMenu: [
          {title: 'марка автомобиля'},
          {title: 'модель'},
          {title: 'поколение'},
          {title: 'о чём'}
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
