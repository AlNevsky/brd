<template>
    <b-container>
        <b-row justify-content-center align-items-center>
            <b-col>                         
              <b-card bg-variant="light">
                <h1 class="text-xs-center">Подать объявление</h1>         
                                 
                  <b-row align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Заголовок * :</span></b-col>
                    <b-col cols="6"><b-form-input 
                      v-model="title"
                      class="f-item-stlyle" 
                      placeholder="Введите заголовок"  
                      id="nestedStreet" /></b-col>
                  </b-row>

                  <b-row align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Регион * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="form.location" 
                        :options="locations"
                        class="f-item-stlyle">
                        <!-- <template slot="first">
                          <option :value="null" disabled>-- Выберите регион --</option>
                        </template> -->

                        <!-- <option value="D">Литва</option> <option value="E">Латвия</option> -->
                      </b-form-select>
                    </b-col>
                  </b-row>

                  <b-row align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right "><span>Питомец * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="animal" 
                        :options="animals"
                        class="f-item-stlyle">
                        <template slot="first">
                          <option :value="null" disabled>-- Выберите вид питомца --</option>
                        </template>
                        <option value="D">Собаки</option> 
                        <option value="E">Кошки</option>
                      </b-form-select>
                    </b-col>
                  </b-row>

                  <b-row align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Порода * :</span></b-col>
                    <b-col cols="6">
                      <b-form-select 
                        id="exampleInput3" 
                        v-model="breed" 
                        :options="breeds"
                        class="f-item-stlyle">
                        <template slot="first">
                          <option :value="null" disabled>-- Выберите породу --</option>
                        </template>                        
                      </b-form-select>
                    </b-col>                    
                  </b-row>

                  <b-row align-v="center">
                    <b-col offset-sm="3" cols="3" class="text-right"><span>Описание * :</span></b-col>
                    <b-col cols="6">
                      <b-form-textarea
                        class="f-item-stlyle" 
                        id="textarea"
                        v-model="description"
                        placeholder="Введите описание к объявлению"                        
                      />
                    </b-col>
                  </b-row>
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
                    
              </b-card>
              <b-row>
                <b-col>
                  <b-card bg-variant="light">
                    <h1 class="text-xs-center">Ваши контактные данные</h1>
                    <b-row align-v="center">
                      <b-col offset-sm="3" cols="3" class="text-right"><span>Регион * :</span></b-col>
                      <b-col cols="6">
                      <b-form-select                        
                        id="exampleInput3" 
                        v-model="form.location" 
                        :options="locations"
                        class="f-item-stlyle">
                   
                      </b-form-select>
                    </b-col>
                    </b-row>
                    <b-row align-v="center">
                      <b-col offset-sm="3" cols="3" class="text-right"><span>Номер телефона * :</span></b-col>
                      <b-col cols="6"><b-form-input v-model="phoneNumber" class="f-item-stlyle" placeholder="Введите свой контакнтый номер телефона"  id="nestedStreet" /></b-col>
                    </b-row>
                    <b-row align-v="center">
                      <b-col offset-sm="3" cols="3" class="text-right"><span>Email * :</span></b-col>
                      <b-col cols="6"><b-form-input v-model="email" class="f-item-stlyle" placeholder="Введите свой контактный email"  id="nestedStreet" /></b-col>
                    </b-row>
                    <b-row align-v="center">
                      <b-col offset-sm="3" cols="3" class="text-right"><span>Контактное лицо * :</span></b-col>
                      <b-col cols="6"><b-form-input v-model="contactName" class="f-item-stlyle" placeholder="Введите имя контактного лица"  id="nestedStreet" /></b-col>
                    </b-row>
                     <b-btn
                      :loading="loading"                      
                      class="success"
                      @click="createAd"
                      >Create ad</b-btn>
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
        form: {
          location: '',
          animal: '',
          breed: ''
        },
        title: '',
        description: '',
        valid: false,
        image: null,
        imageSrc: '',
        addType: [{text: 'Select One', value: null}, 'Ищу', 'Нашел', 'Частное'],
        animals: ['Собаки', 'Кошки', 'Птицы', 'Рептилии'],
        breeds: ['Сфинкс', 'Питбулль', 'Бенгальский попугай', 'Чистый змей'],
        locations: [{text: 'США', value: null}, 'Украина', 'Россия', 'Беларусь'],
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
        if (this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            animal: this.animal,
            breed: this.breed,
            locations: this.locations,
            phoneNumber: this.phoneNumber,
            email: this.email,
            contactName: this.contactName,
            promo: this.promo,
            image: this.image
            // location: this.location,
            // phoneNumber: this.phoneNumber,
            // email: this.email,
            // contactName: this.contactName,
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
