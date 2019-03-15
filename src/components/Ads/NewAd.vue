<template>
    <b-container>
        <b-row justify-content-center align-items-center>
            <b-col>                         
              <b-card bg-variant="light">
                <h1 class="text-xs-center">Подать объявление</h1>         
                                 
                  <b-row justify-content-center align-items-center align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Заголовок * :</span></b-col>
                    <b-col cols="6"><b-form-input class="f-item-stlyle" placeholder="Введите заголовок"  id="nestedStreet" /></b-col>
                  </b-row>

                  <b-row justify-content-center align-items-center align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Регион * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="selected" 
                        :options="options"
                        class="f-item-stlyle">
                        <template slot="first">
                          <option :value="null" disabled>-- Выберите регион --</option>
                        </template>

                        <option value="D">Литва</option> <option value="E">Латвия</option>
                      </b-form-select>
                    </b-col>
                  </b-row>

                  <b-row justify-content-center align-items-center align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right "><span>Питомец * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="selected" 
                        :options="options"
                        class="f-item-stlyle">
                        <template slot="first">
                          <option :value="null" disabled>-- Выберите вид питомца --</option>
                        </template>
                        <option value="D">Собаки</option> 
                        <option value="E">Кошки</option>
                      </b-form-select>
                    </b-col>
                  </b-row>
                  <b-row justify-content-center align-items-center align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Порода * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="selected" 
                        :options="options"
                        class="f-item-stlyle">
                        <template slot="first">
                          <option :value="null" disabled>-- Выберите породу --</option>
                        </template>
                        <option value="D">Стаффорд</option>
                        <option value="E">Сфинкс</option>
                      </b-form-select>
                    </b-col>
                    <b-button
                      class="mx-auto image-button" 
                      variant="outline-success"
                      @click="triggerUpload"
                      >Выбрать изображение
                      </b-button>                      
                      <input 
                      ref="fileInput" 
                      type="file" 
                      style="display: none" 
                      accept="image/*"
                      @change="onFileChange">
                      <b-row>
                        <b-col xs12>                    
                          <img 
                            :src="imageSrc" 
                            height="100"
                            v-if="imageSrc">
                        </b-col>
                      </b-row>
                  </b-row>
                
                
                 
            </b-card>
                <b-row>
                <b-col>
                  <b-card bg-variant="light">
                    <h1 class="text-xs-center">Ваши контактные данные</h1>
                 <hr>
                 <br>
                  <b-form-group
                  label-cols-sm="6"
                  label="Регион * :"
                  label-align-sm="right"
                  label-for="nestedStreet"
                >
                  <b-form-input class="f-item-stlyle" placeholder="Выберите Ваш регион"  id="nestedStreet" />
                </b-form-group>
                <b-form-group
                  label-cols-sm="6"
                  label="Номер телефона * :"
                  label-align-sm="right"
                  label-for="nestedStreet"
                >
                  <b-form-input class="f-item-stlyle" placeholder="Введите Ваш номер телефона"  id="nestedStreet" />
                </b-form-group>
                <b-form-group
                  label-cols-sm="6"
                  label="Email * :"
                  label-align-sm="right"
                  label-for="nestedStreet"
                >
                  <b-form-input class="f-item-stlyle" placeholder="Введите Ваш Email адрес"  id="nestedStreet" />
                </b-form-group>
                <b-form-group
                  label-cols-sm="6"
                  label="Контактное лицо * :"
                  label-align-sm="right"
                  label-for="nestedStreet"
                >
                  <b-form-input class="f-item-stlyle" placeholder="Введите имя контактного лица"  id="nestedStreet" />
                </b-form-group>
                  <v-spacer></v-spacer>  
                  <v-btn
                    :loading="loading" 
                    :disabled="!valid || !image || loading"
                    class="success"
                    @click="createAd"
                    >Создать объявление</v-btn>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        valid: false,
        image: null,
        imageSrc: '',
        addType: ['Ищу', 'Нашел', 'Частное'],
        animal: ['Собаки', 'Кошки', 'Птицы', 'Рептилии'],
        breed: ['Сфинкс', 'Питбулль'],
        location: '',
        phoneNumber: '',
        email: '',
        contactName: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            location: this.location,
            phoneNumber: this.phoneNumber,
            email: this.email,
            contactName: this.contactName,
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]

        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>

<style scoped lang="stylus">
  .f-item-stlyle
    max-width: 350px
    width: 100%
    margin: 5px 0 0 0
  .image-button
    margin: 5px 0 0 0    
</style>
