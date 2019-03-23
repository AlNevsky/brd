<template>  
  <div>
    <b-button class="warning" slot="activator" v-b-modal.modalPrevent>Редактировать</b-button>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      size="lg"
      title="Редактирование объявления"
      hide-footer      
    >
      <form @submit.stop.prevent="handleSubmit">        
        
        <b-row class="mb-3">
          <b-col>
            <b-card bg-variant="light">
              <h2 class="text-xs-center">Объявление</h2>

              <b-row class="mb-2" align-v="center">
                <b-col cols="3" ><span>Заголовок * :</span></b-col>
                <b-col cols="9"><b-form-input
                  type="text" 
                  v-model="editedTitle"
                  class="f-item-stlyle" 
                  placeholder="Введите заголовок"  
                  /></b-col>
              </b-row>
              <b-row class="mb-2" align-v="center">
                <b-col cols="3"><span>Регион * :</span></b-col>
                <b-col><b-form-select v-model="form.location" :options="editedLocations"/></b-col>
                <template slot="first">
                  <option :value="null" disabled>-- Выберите Ваш регион --</option>
                </template>                  
              </b-row>

              <b-row class="mb-2" align-v="center">
                <b-col cols="3" ><span>Питомец * :</span></b-col>
                <b-col><b-form-select v-model="form.animals" :options="editedAnimal" />
                <template slot="first">
                  <option :value="null" disabled>-- Выберите вид питомца --</option>
                </template></b-col>          
              </b-row> 

              <b-row class="mb-3" align-v="center">
                <b-col cols="3"><span>Порода :</span></b-col>
                <b-col><b-form-select v-model="form.breed" :options="editedBreed" />
                <template slot="first">
                  <option :value="null" disabled>-- Выберите породу питомца --</option>
                </template></b-col>          
              </b-row>
              <b-row>
                <b-col>
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
            </b-card>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-card bg-variant="light">
              <h2 class="text-xs-center">Ваши контактные данные</h2>
              <b-row class="mb-2" align-v="center">
                <b-col cols="3"><span>Регион * :</span></b-col>
                <b-col cols="9">
                <b-form-select                        
                  id="exampleInput3" 
                  v-model="form.location" 
                  :options="editedLocations"
                  class="f-item-stlyle">
              
                </b-form-select>
              </b-col>
              </b-row>
              <b-row class="mb-2" align-v="center">
                <b-col cols="3"><span>Номер телефона * :</span></b-col>
                <b-col cols="9"><b-form-input v-model="editedPhoneNumber" class="f-item-stlyle" placeholder="Введите свой контакнтый номер телефона"/></b-col>
              </b-row>
              <b-row class="mb-2" align-v="center">
                <b-col cols="3"><span>Email * :</span></b-col>
                <b-col cols="9"><b-form-input v-model="editedEmail" class="f-item-stlyle" placeholder="Введите свой контактный email"/></b-col>
              </b-row>
              <b-row class="mb-3" align-v="center">
                <b-col cols="3"><span>Контактное лицо * :</span></b-col>
                <b-col cols="9"><b-form-input v-model="editedContactName" class="f-item-stlyle" placeholder="Введите имя контактного лица"/></b-col>
              </b-row>
              <b-row>
                <b-col  offset-sm="10">
                  <b-btn                   
                    :loading="loading"                      
                    class="success"
                    @click="onSave"
                    >Применить</b-btn>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      form: {
        location: '',
        animal: '',
        breed: '',
        phoneNumber: ''
      },
      editedTitle: this.ad.title,
      editedDescription: this.ad.description,
      editedAnimal: this.ad.animals,
      editedBreed: this.ad.breeds,
      editedLocations: this.ad.locations,
      editedPhoneNumber: this.ad.phoneNumber,
      editedEmail: this.ad.email,
      editedContactName: this.ad.contactName
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.modal = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {
        console.log('this.phoneNumber', this.phoneNumber)
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          phoneNumber: this.editedPhoneNumber,
          email: this.editedEmail,
          contactName: this.editedContactName,
          id: this.ad.id
        })
      }
    }
  }
}
</script>

