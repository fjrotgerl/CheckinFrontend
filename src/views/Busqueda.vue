<template>
  <div class="">
    <h1>Form</h1>

    <div class="container">

      <div class="row">

        <div class="column">
          <label class="form_title">Hotel (*)</label>
          <select name="hotel" id="hotel" v-model="data.hotel">
            <option v-for="item in hoteles" v-bind:key="item" :value="item">{{item}}</option>
            <div class="" v-if="!$v.data.hotel.required && submitStatus === 'ERROR'">Campo necesario</div>
          </select>
        </div>

        <div class="column">
          <label class="form_title">Fecha de entrada (*)</label>
          <input type="text" name="fecha_entrada" id="fecha_entrada" v-model="data.fecha_entrada">
          <div class="" v-if="!$v.data.fecha_entrada.required && submitStatus === 'ERROR'">Campo necesario</div>
        </div>

        <div class="column">
          <label class="form_title">Primer apellido (*)</label>
          <input type="text" name="primer_apellido" id="primer_apellido" v-model="data.primer_apellido">
          <div class="" v-if="!$v.data.primer_apellido.required && submitStatus === 'ERROR'">Campo necesario</div>
        </div>


      </div>

      <div class="row">

        <div class="column">
          <label class="form_title">Localizador</label>
          <input type="text" name="localizador" v-model="data.localizador" id="email">
        </div>

        <div class="column">
          <label class="form_title">Fecha de salida</label>
          <input type="text" name="fecha_salida" id="fecha_salida" v-model="data.fecha_salida">
        </div>
        
      </div>

    </div>

    <button class="button" @click="submit">Buscar</button> 
    <button class="button" @click="updateClientData">Actualizar</button> 

  </div>
</template>

<script>
const config = require('../config')
import { required, minLength, between } from 'vuelidate/lib/validators'


export default {
  name: "Formulario",
  data() {
    return {
      hoteles: ["H20", "Hotel 2", "Hotel 3"],
      submitStatus: '',
      data: {
        hotel: "",
        fecha_entrada: "",
        primer_apellido: "",
        localizador: "",
        fecha_salida: "",
      },
      client_data: []
    }
  },
  validations: {
    data: {
        hotel: {
          required
        },
        fecha_entrada: {
          required
        },
        primer_apellido: {
          required
        },
        localizador: {},
        fecha_salida: {},
      },
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.buscarReserva();
        this.submitStatus = "OK";
      }
    },
    buscarReserva() {
      this.axios.get(config.API_URL + "/GetAWAReservationPCI?Hotel=" + this.data.hotel + "&Localizador=" + this.data.localizador + "&FechaEntrada=" + this.data.fecha_entrada + "&FechaSalida=" + this.data.fecha_salida + "&Apellido=" + this.data.primer_apellido)
      .then(response => {
        console.log(response.data);
        this.client_data = response.data;
      })
    },
    updateClientData() {
      this.client_data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente.forEach(element => {
        element.Apellido1 = "Hall2"
        
      });
      this.axios.post(config.API_URL + "/PostAWAReservationGuests", this.client_data.LSReservas[0])
      .then(response => {
        console.log(response);
      })

    }
      
  }
}
</script>

<style>
body {
  max-width: 1800px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 10px;
}

.column > p {
  padding: 10px 0 20px 0;
}

.form_title {
  font-weight: 700;  
}

input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>
