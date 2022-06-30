<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px; margin-left: 500px;">
      <q-input rounded standout v-model="text" label="نام" />
      <q-input rounded standout v-model="text" label=" نام خانوادگی" />

      <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="استان">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="item in ostan"
              :key="item.index"
              value="{{item.id}}"
              v-model="id"
              >{{ item.title }}
              <q-item-section>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="شهر">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="city in shahr"
              :key="city.index"
              value="{{city.id}}"
              >{{ city.name }}
              <q-item-section>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="جنسیت">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="gender in jensiat"
              :key="gender.index"
              >{{ gender.name }}
              <q-item-section>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="q-pa-md">
        <q-btn-dropdown color="primary" label="رشته">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="grade in reshteh"
              :key="grade.index"
              >{{ grade.name }}
              <q-item-section>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ostan: null,
      city: null,
      jensiat: null,
      reshteh: null,
    };
  },
  methods: {},
  created() {
    var axios = require("axios");

    var province = {
      method: "get",
      url: "https://alaatv.com/api/v2/megaroute/getUserFormData",
      headers: {},
    };

    axios(province)
      .then(function (response) {
        var ostan = response.data.data["provinces"];

        /*       ostan.forEach(myFunction);
        function myFunction(item, index) {
          console.log(item.title);
        } */

        var cities = response.data.data["cities"];
        this.reshteh = response.data.data["major"];
        this.jensiat = response.data.data["gender"];

        var globalOne = 0;
        var id = 15;
        cities.filter(cityName);

        function cityName() {
          var ostan = response.data.data["provinces"];
          var cities = response.data.data["cities"];
          if (response.data.data["cities"][globalOne]["province"]["id"] == id)
            console.log(response.data.data["cities"][globalOne]["title"]);
          globalOne++;
        }
      })

      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>
