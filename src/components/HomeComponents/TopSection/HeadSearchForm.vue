<template>
    <b-row>
      <b-col sm="12" class="text-center">        
        <b-tabs content-class="mt-3">
          <b-tab title="ИЩУ" active><div>
            <b-card bg-variant="light">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi sed aspernatur quos consequatur facilis officia praesentium necessitatibus iure! Numquam?
              </p>
                           
                <b-form-group
                  label-cols-sm="6"
                  label="Поиск:"
                  label-align-sm="right"
                  label-for="nestedStreet"
                >
                  <b-form-input id="nestedStreet" />
                </b-form-group>
                
                <b-form-group                  
                  label-cols-sm="6"                  
                  label="Страна:" 
                  label-align-sm="right"
                  label-for="exampleInput3">
                  <b-form-select id="exampleInput3" v-model="selected" :options="options">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template slot="first">
                      <option :value="null" disabled>-- Пожалуйста, выберите страну --</option>
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <option value="D">Литва</option> <option value="E">Латвия</option>
                  </b-form-select>
                </b-form-group>
                <b-form-group                  
                  label-cols-sm="6"                  
                  label="Питомец:" 
                  label-align-sm="right"
                  label-for="exampleInput3">
                  <b-form-select id="exampleInput3" v-model="selected" :options="options">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template slot="first">
                      <option :value="null" disabled>-- Вид питомца --</option>
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <option value="D">Литва</option> <option value="E">Латвия</option>
                  </b-form-select>
                </b-form-group>
                <b-form-group                  
                  label-cols-sm="6"                  
                  label="Порода:" 
                  label-align-sm="right"
                  label-for="exampleInput3">
                  <b-form-select id="exampleInput3" v-model="selected" :options="options">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template slot="first">
                      <option :value="null" disabled>-- Порода --</option>
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <option value="D">Литва</option> <option value="E">Латвия</option>
                  </b-form-select>
                </b-form-group>
                <b-form-group                  
                  label-cols-sm="6"                  
                  label="Тип объявления:" 
                  label-align-sm="right"
                  label-for="exampleInput3">
                  <b-form-select id="exampleInput3" v-model="selected" :options="options">
                    <!-- This slot appears above the options from 'options' prop -->
                    <template slot="first">
                      <option :value="null" disabled>-- Тип объявления --</option>
                    </template>

                    <!-- These options will appear after the ones from 'options' prop -->
                    <option value="D">Литва</option> <option value="E">Латвия</option>
                  </b-form-select>
                </b-form-group>

              
            </b-card>
          </div></b-tab>
          <b-tab title="НАШЕЛ"><div>
          <b-card bg-variant="light">
            <b-form-group
              label-cols-lg="3"
              label="Shipping Address"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                label-cols-sm="3"
                label="Street:"
                label-align-sm="right"
                label-for="nestedStreet"
              >
                <b-form-input id="nestedStreet" />
              </b-form-group>

              <b-form-group label-cols-sm="3" label="City:" label-align-sm="right" label-for="nestedCity">
                <b-form-input id="nestedCity" />
              </b-form-group>

              <b-form-group label-cols-sm="3" label="State:" label-align-sm="right" label-for="nestedState">
                <b-form-input id="nestedState" />
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Country:"
                label-align-sm="right"
                label-for="nestedCountry"
              >
                <b-form-input id="nestedCountry" />
              </b-form-group>

              <b-form-group label-cols-sm="3" label="Ship via:" label-align-sm="right" class="mb-0">
                <b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']" />
              </b-form-group>
            </b-form-group>
          </b-card>
        </div></b-tab>          
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
