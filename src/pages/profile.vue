 <template>
 <div class="q-pa-md">

    <div class="q-gutter-md" style="max-width: 300px;margin-left: 500px;">




      <q-input rounded standout v-model="text" label="نام" />
            <q-input rounded standout v-model="text" label=" نام خانوادگی" />



   <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="استان">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label v-for="item in province" :key="item.index">{{item.name}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>



   <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="شهر">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label value="id"  v-for="shahr in getshahr" :key="shahr.index">{{gender.name}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>

   <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="جنسیت">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label v-for="gender in getgender" :key="gender.index">{{gender.name}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>
   <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="رشته">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label v-for="grade in getgrade" :key="grade.index">{{grade.name}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>


    </div>
     </div>

</template>

<script>
export default {
  data(){
    return{
      province:"",
      getgender:"",
      getgrade:"",
    }
  },
methods:{
  getprovince:function(){
            axios
        .get(
          "alaatv.com/api/v2/definitions/Province",

        )
        .then((response) => {

          console.log(response);
          this.province= response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    getgender:function(){
            axios
        .get(
          "alaatv.com/api/v2/ definitions/Gender",

        )
        .then((response) => {

          console.log(response);
          this.getgender= response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },    getgrade:function(){
            axios
        .get(
          "alaatv.com/api/v2/definitions/Grade",

        )
        .then((response) => {

          console.log(response);
          this.getgrade= response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },



getshahr : function(){
      axios
        .post(
          "alaatv.com/api/v2/definitions/Shahr",

          {
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },id
          }
        )
        .then((response) => {

           this.shahr=response.data.value
           console.log(response.data)


          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
}
}
}

</script>

<style>

</style>
