<template>
  <div
    class="row"
    style="
      height: 90vh;
      margin-left: 500px;
      margin-top: 10px;
      text-align: right;
    "
  >
    <div class="col-12 col-md-6 flex content-center">
      <q-card>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="شماره همراه" v-model="login.phoneNumber"> </q-input>
            <q-input label="کدملی" type="password" v-model="login.nationalCode">
            </q-input>
            <div>
              <q-btn
                class="full-width"
                color="primary"
                label="ورود"
                type="submit"
                @click="submitLoginForm()"
                rounded
              ></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg"></div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

let $q

export default {
  name: 'Login',
  data () {
    return {
      login: {
        phoneNumber: '',
        nationalCode: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['doLogin']),
    async submitForm () {
      if (!this.login.phoneNumber || !this.login.nationalCode) {
        $q.notify({

          message: 'نام کاربری یا پسورد اشتباه است'
        })
      } else if(!this.login.username && this.login.password) {
        this.addnewuser()}

    },
    addnewuser:function(username,password) {
     axios.post('alaatv.com/api/v2/definitions/UserUpdate'),
	{
		phoneNumber: 'phoneNumber',
		nationalCode: 'nationalCode'
	}


  },
  submitLoginForm: function(){
    this.$router.push('/profile')
  },
  },

}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
