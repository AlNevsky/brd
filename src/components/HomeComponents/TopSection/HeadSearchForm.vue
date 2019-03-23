<template>
    <b-row align-h="center">
      <b-col class="text-center">        
        <b-tabs content-class="mt-3">

          <b-row>
            <b-col>
              
            </b-col>
          </b-row>

          <b-tab title="ИЩУ" active>
            <b-row align-h="center">
              <b-col cols="6">
                <b-card bg-variant="light">
                  <p>
                    Текст информация
                  </p>
                  <b-row class="mb-3">
                    <b-col>
                      <b-card bg-variant="light">
                        <h2 class="text-xs-center">Ищу</h2>

                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3"><span>Поиск :</span></b-col>
                          <b-col cols="6"><b-form-input
                            type="text" 
                            v-model="editedTitle"
                            class="f-item-stlyle" 
                            placeholder="Поиск"  
                            /></b-col>
                        </b-row>
                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3"></b-col>
                          <b-col cols="6">
                            <b-form-checkbox
                              class="align-left"
                              v-for="option in ChekOptions"
                              v-model="selected"
                              :key="option.value"
                              :value="option.value"
                              name="flavour3a"
                            >
                              {{ option.text }}
                            </b-form-checkbox>
                          </b-col>
                        </b-row>
                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3"><span>Регион :</span></b-col>
                          <b-col cols="6"><b-form-select :options="variants"/></b-col>
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите Ваш регион --</option>
                          </template>                  
                        </b-row>

                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3" ><span>Питомец :</span></b-col>
                          <b-col cols="6"><b-form-select v-model="editedAnimal" :options="animals" />
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите вид питомца --</option>
                          </template></b-col>          
                        </b-row> 

                        <b-row class="mb-3" align-v="center">
                          <b-col cols="3"><span>Порода :</span></b-col>
                          <b-col cols="6"><b-form-select v-model="editedBreed" :options="animals" />
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите породу питомца --</option>
                          </template></b-col>          
                        </b-row>  

                        <b-row class="mb-3" align-v="center">
                          <b-col cols="3"><span>Тип объявления :</span></b-col>
                          <b-col cols="6"><b-form-select v-model="editedBreed" :options="animals" />
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите тип объявления --</option>
                          </template></b-col>          
                        </b-row>                        
                        <b-row >
                          <b-col offset="3" cols="6" class="mt-5">
                            <b-button variant="outline-primary">Поиск</b-button>
                          </b-col>
                        </b-row>               
                      </b-card>
                    </b-col>
                  </b-row>
                 </b-card>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="НАШЕЛ">
             <b-row align-h="center">
              <b-col cols="6">
                <b-card bg-variant="light">
                  <p>
                    Текст информация
                  </p>
                  <b-row class="mb-3">
                    <b-col>
                      <b-card bg-variant="light">
                        <h2 class="text-xs-center">Нашел</h2>

                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3" ><span>Заголовок * :</span></b-col>
                          <b-col cols="6"><b-form-input
                            type="text" 
                            v-model="editedTitle"
                            class="f-item-stlyle" 
                            placeholder="Введите заголовок"  
                            /></b-col>
                        </b-row>
                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3"><span>Регион * :</span></b-col>
                          <b-col cols="6"><b-form-select :options="variants"/></b-col>
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите Ваш регион --</option>
                          </template>                  
                        </b-row>

                        <b-row class="mb-2" align-v="center">
                          <b-col cols="3" ><span>Питомец * :</span></b-col>
                          <b-col cols="6"><b-form-select v-model="editedAnimal" :options="animals" />
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите вид питомца --</option>
                          </template></b-col>          
                        </b-row> 

                        <b-row class="mb-3" align-v="center">
                          <b-col cols="3"><span>Порода :</span></b-col>
                          <b-col cols="6"><b-form-select v-model="editedBreed" :options="animals" />
                          <template slot="first">
                            <option :value="null" disabled>-- Выберите породу питомца --</option>
                          </template></b-col>          
                        </b-row>
                        
                        <b-row >
                          <b-col offset="3" cols="6">
                            <b-form-textarea
                              name="description"
                              label="Description"
                              type="text"
                              size="sm"
                              class="f-item-stlyle" 
                              id="textarea-default"
                              v-model="editedDescription"
                              multi-line
                              placeholder="Введите описание к объявлению"
                              rows="8"
                              max-rows="6"
                            />
                          </b-col>
                        </b-row>
                        <b-row >
                          <b-col offset="3" cols="6" class="mt-5">
                            <b-button variant="outline-success">Продолжить</b-button>
                          </b-col>
                        </b-row>
                      </b-card>
                    </b-col>
                  </b-row>
                 </b-card>
              </b-col>
            </b-row>
          </b-tab>
                    
        </b-tabs>
      </b-col>
    </b-row>
</template>

<script>
  export default {
    data () {
      return {
        LocationItems: {
        },
        selected: null,
        options: [
          { value: 'A', text: 'Украина' },
          { value: 'B', text: 'Россия' },
          { value: 'C', text: 'Баларусь' }
        ],
        ChekOptions: [
          { text: 'Orange', value: 'Искать в заголовке и описании' },
          { text: 'Apple', value: 'Только с фото' }
        ]
        // LocationItems: [
        //   { text: 'Адрес', value: null }, 'Регион', 'Город', 'Область', 'Район', 'Индекс'
        // ]
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
