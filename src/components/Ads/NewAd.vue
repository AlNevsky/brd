<template>
    <v-container>
        <v-layout 
          row 
          class="row-style" 
          justify-center>
            
            <v-flex xs6>
                 <h1 class="text-xs-center">Подать объявление</h1>
                 <br>
                 <hr>
                 <br>
                 <v-form
                  class="mb-3"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >               
                 
                    <p>Заголовок объявления</p>
                                
                 
                    <v-text-field                  
                      label="Solo"
                      hide-details
                      placeholder="Ведите заголовок объявления"
                      solo
                      v-model="title"
                    ></v-text-field> 
                <v-overflow-btn
                  class="item-style"                                 
                  hide-details
                  :items="dropdown_icon"
                  label="Тип объявления"
                  segmented
                  target="#dropdown-example"
                ></v-overflow-btn>

                <v-overflow-btn
                  class="item-style"
                  hide-details
                  :items="dropdown_icon"
                  label="Вид животного"
                  segmented
                  target="#dropdown-example"
                ></v-overflow-btn> 

                 <v-overflow-btn
                  class="item-style"
                  hide-details
                  :items="dropdown_icon"
                  label="Порода"
                  segmented
                  target="#dropdown-example"
                ></v-overflow-btn>
                  <!-- <v-textarea                     
                    name="title" 
                    label="Ведите заголовок объявления" 
                    type="text"                    
                    v-model="title"
                    required
                    >
                    
                  </v-textarea> -->
                  <v-textarea
                    class="item-style"
                    hide-details                     
                    name="description" 
                    label="Введите описание для объявления" 
                    type="text"
                    v-model="description"
                    multi-line
                   
                    >
                  </v-textarea>
                </v-form>
                <v-layout class="mb-3">
                  <v-flex>
                    <v-btn
                      class="green lighten-3"
                      @click="triggerUpload"
                    >
                      Выбрать изображение
                      <v-icon right dark>cloud_upload</v-icon>
                    </v-btn>
                    <input 
                      ref="fileInput" 
                      type="file" 
                      style="display: none" 
                      accept="image/*"
                      @change="onFileChange">
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12>                    
                    <img 
                      :src="imageSrc" 
                      height="100"
                      v-if="imageSrc">
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>                    
                     <v-switch
                        label="Add to promo"
                        v-model="promo"
                        color="primary"
                     ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                <br>
                <br>
                <br>

                 <h1 class="text-xs-center">Ваши контактные данные</h1>
                 <hr>
                 <br>
                  <v-text-field
                  class="item-style"
                  hide-details
                  label="Solo"
                  placeholder="Ваш город"
                  solo
                  v-model="title"
                ></v-text-field>   
                <v-text-field
                  class="item-style"
                  hide-details
                  label="Solo"
                  placeholder="Номер телефона"
                  solo
                  v-model="title"
                ></v-text-field>   
                <v-text-field
                  class="item-style"
                  hide-details
                  label="Solo"
                  placeholder="Email адрес"
                  solo
                  v-model="title"
                ></v-text-field>   
                <v-text-field
                  class="item-style"
                  hide-details
                  label="Solo"
                  placeholder="Контактное лицо"
                  solo
                  v-model="title"
                ></v-text-field>
                <v-spacer></v-spacer>  
                <v-btn
                      :loading="loading" 
                      :disabled="!valid || !image || loading"
                      class="success"
                      @click="createAd"
                      >Create ad</v-btn>


                  </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: ''
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
  .item-style
    background-color: #fff
    padding: 0
    margin: 10px 0 10px 0
  .row-style
    background-color: #e1e1e1
  .n-pd
    padding: 0
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
