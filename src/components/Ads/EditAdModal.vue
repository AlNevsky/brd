<template>
  <!-- <v-dialog width="400px" v-model="modal">
    <b-button class="warning" flat slot="activator">Редактировать</b-button>
    <v-card>
      <v-container>

        <v-layout row>
          <v-flex>
            <v-card-title>
              <h1>Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-layout row>
          <v-flex>
            <v-card-text>
              <v-text-field name="title" label="Title" type="text" v-model="editedTitle"></v-text-field>
              <v-text-field
                name="description"
                label="Description"
                type="text"
                multi-line
                v-model="editedDescription"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-layout row>
          <v-flex>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" flat @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog> -->
  <div>
    <b-button class="warning" slot="activator" v-b-modal.modalPrevent>Редактировать</b-button>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Редактирование объявления"
      @ok="handleOk"
      @shown="clearName"
    >
      <form @submit.stop.prevent="handleSubmit">        
        
      <b-row align-v="center">
        <b-col cols="3" class="text-right"><span>Заголовок * :</span></b-col>
        <b-col cols="9"><b-form-input
        type="text" 
          v-model="editedTitle"
          class="f-item-stlyle" 
          placeholder="Введите заголовок"  
          /></b-col>
      </b-row>
      <b-row class="mb-1" align-v="center">
        <b-col cols="3" class="text-right"><span>Регион * :</span></b-col>
        <b-col><b-form-select :options="variants" v-model="headerBgVariant" /></b-col>
        <template slot="first">
          <option :value="null" disabled>-- Выберите Ваш регион --</option>
        </template>                  
      </b-row>

      <b-row class="mb-1" align-v="center">
        <b-col cols="3" class="text-right"><span>Питомец * :</span></b-col>
        <b-col><b-form-select v-model="editedAnimal" :options="animals" />
        <template slot="first">
          <option :value="null" disabled>-- Выберите вид питомца --</option>
        </template></b-col>          
      </b-row> 

      <b-row class="mb-1" align-v="center">
        <b-col cols="3" class="text-right"><span>Порода :</span></b-col>
        <b-col><b-form-select v-model="editedBreed" :options="animals" />
        <template slot="first">
          <option :value="null" disabled>-- Выберите породу питомца --</option>
        </template></b-col>          
      </b-row>
      <b-row>
        <b-col>
          <b-form-textarea
            class="f-item-stlyle" 
            id="textarea"
            v-model="description"
            placeholder="Введите описание к объявлению"
            rows="3"
            max-rows="6"
          />
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-card bg-variant="light">
            <h1 class="text-xs-center">Ваши контактные данные</h1>
            <b-row align-v="center">
              <b-col cols="3"><span>Регион * :</span></b-col>
              <b-col cols="9">
              <b-form-select                        
                id="exampleInput3" 
                v-model="form.location" 
                :options="locations"
                class="f-item-stlyle">
            
              </b-form-select>
            </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="3" ><span>Номер телефона * :</span></b-col>
              <b-col cols="9"><b-form-input v-model="phoneNumber" class="f-item-stlyle" placeholder="Введите свой контакнтый номер телефона"  id="nestedStreet" /></b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="3" ><span>Email * :</span></b-col>
              <b-col cols="9"><b-form-input v-model="email" class="f-item-stlyle" placeholder="Введите свой контактный email"  id="nestedStreet" /></b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="3" ><span>Контактное лицо * :</span></b-col>
              <b-col cols="9"><b-form-input v-model="contactName" class="f-item-stlyle" placeholder="Введите имя контактного лица"  id="nestedStreet" /></b-col>
            </b-row>
              <b-btn
              :loading="loading"                      
              class="success"
              @click="createAd"
              >Create ad</b-btn>
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
        breed: ''
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
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
      }
    }
  }
}
</script>

