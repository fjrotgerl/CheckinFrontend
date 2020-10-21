<template>
  <div class="">
    <h1>Form</h1>

    <div class="container">

      <div class="row">

        <div class="column">
          <span class="form_title">Reserva</span>
          <p>{{data.reserva_id}}</p>
        </div>

        <div class="column">
          <span class="form_title">Fecha de entrada</span>
          <p>{{data.fecha_entrada}}</p>
        </div>

        <div class="column">
          <span class="form_title">Fecha de salida</span>
          <p>{{data.fecha_salida}}</p>
        </div>

        <div class="column">
          <span class="form_title">Habitación</span>
          <p>{{data.habitacion}}</p>
        </div>

      </div>

      <div class="row">

        <div class="column">
          <label class="form_title">Número de documento</label>
          <input type="text" v-model="data.num_documento" name="num_documento" id="num_documento">
        </div>

        <div class="column">
          <label class="form_title">Tipo de documento</label>
          <select name="tipo_doc" id="tipo_doc" v-model="data.tipo_doc">
            <option v-for="item in tipos_documento" v-bind:key="item" :value="item">{{item}}</option>
          </select>
        </div>

        <div class="column">
          <label class="form_title">Fecha de expedición</label>
          <input type="text" name="fecha_expedición" id="fecha_expedición" v-model="data.fecha_expedición">
        </div>

        <div class="column">
          <label class="form_title">País</label>
          <select name="tipo_doc" id="tipo_doc" v-model="data.pais">
            <option v-for="pais in paises" v-bind:key="pais.code" :value="pais.code">{{pais.name}}</option>
          </select>
        </div>

      </div>

      <div class="row">

        <div class="column">
          <label class="form_title">Email</label>
          <input type="text" v-model="data.email" name="email" id="email">
        </div>

        <div class="column">
          <label class="form_title">Teléfono</label>
          <input type="text" v-model="data.telefono" name="telefono" id="telefono">
        </div>

        <div class="column">
          <label class="form_title">Fecha de nacimiento</label>
          <input type="text" v-model="data.fecha_nacimiento" name="fecha_nacimiento" id="fecha_nacimiento">
        </div>

        <div class="column">
          <label class="form_title">Sexo</label>
          <select name="sexo" id="sexo" v-model="data.sexo">
            <option value="hombre">Hombre</option>
            <option value="hombre">Mujer</option>
          </select>
        </div>

        <div class="column">
          <label class="form_title">Dirección</label>
          <input type="text" v-model="data.direccion" name="direccion" id="direccion">
        </div>        

      </div>

      <div class="row">

        <div class="column">
          <label class="form_title">Nombre</label>
          <input type="text" v-model="data.nombre" name="nombre" id="nombre">
        </div>

        <div class="column">
          <label class="form_title">Primer apellido</label>
          <input type="text" v-model="data.primer_apellido" name="primer_apellido" id="primer_apellido">
        </div>

        <div class="column">
          <label class="form_title">Segundo apellido</label>
          <input type="text" v-model="data.segundo_apellido" name="segundo_apellido" id="segundo_apellido">
        </div>

        <div class="column">
          <label class="form_title">Población</label>
          <input type="text" v-model="data.poblacion" name="poblacion" id="poblacion">
        </div>        

      </div>

      <div class="row">

        <div class="column">
          <label class="form_title">Provincia</label>
          <input type="text" v-model="data.provincia" name="provincia" id="provincia">
        </div>

        <div class="column">
          <label class="form_title">Código postal</label>
          <input type="text" v-model="data.codigo_postal" name="codigo_postal" id="codigo_postal">
        </div>      

      </div>

      <button class="button" @click="$router.push('/checkin')">Check-in</button>

      <button class="button" @click="$router.push('/clientes')">Atras</button>

    </div>
    
  </div>
</template>

<script>
import paisesJson from '../assets/paises'
import json from './../static/config/lang.json'
import profilesJson from './../static/config/profiles.json'

export default {
  name: "Formulario",
  data() {
    return {
      paises: paisesJson,
      tipos_documento: ["DNI", "NIF", "Pasaporte"],
      data: {
        "reserva_id": "H20RE/2",
        "fecha_entrada": "25/05/2020",
        "fecha_salida": "31/07/2020",
        "habitacion": "313",
        "num_documento": "",
        "tipo_doc": "",
        "fecha_expedición": "",
        "pais": "",
        "email": "",
        "telefono": "",
        "fecha_nacimiento": "",
        "sexo": "",
        "direccion": "",
        "nombre": "",
        "poblacion": "",
        "provincia": "",
        "codigo_postal": "",
        "primer_apellido": "",
        "segundo_apellido": ""
      },
      dataForRequest: {
                hotel: this.$route.query.hotel,
                localizador: this.$route.query.localizator,
                fecha_entrada: this.$route.query.fechaentrada,
                fecha_salida: this.$route.query.fechasalida,
                apellido: this.$route.query.apellido
            },
            customersData: {},
            reservaData: {},
            actualProfile: "default",
            actualLang: "es",
            textValues: {},
            profiles: profilesJson,
            style: {},
            checkLang() {
                if (this.$route.query.lang === "es") {
                    this.textValues = json.es
                    this.actualLang = "es";
                }
                if (this.$route.query.lang === "en") {
                    this.textValues = json.en
                    this.actualLang = "en";
                }
            },
            checkProfile() {
                if (this.$route.query.profile === "default") {
                    this.style = profilesJson.default.style;
                    this.actualProfile = "default";
                    this.api_url = profilesJson.default.api_url;
                } 
                if (this.$route.query.profile === "other") {
                    this.style = profilesJson.other.style;
                    this.actualProfile = "other";
                    this.api_url = profilesJson.other.api_url;
                } 
            },
            changeLang(lang) {
                if (lang === "es") {
                    this.textValues = json.es;
                    this.toggleBodyClass("langEsp");
                    this.actualLang = "es";
                }
                if (lang === "en") {
                    this.textValues = json.en
                    this.toggleBodyClass("langEng");
                    this.actualLang = "en";
                }
            },
            
        }
    },

    methods: {
        getReserva() {
            this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
                .then(response => {
                    this.customersData = response.data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente;
                            console.log(this.customersData)

                }).catch(error => {
                    console.log(error)
                });
            },

        toggleBodyClass(langId) {
            const el = document.body;

            if (langId === "langEsp") {
                document.getElementById("listEsp").classList.add("active");
                document.getElementById("listEng").classList.remove("active");
            } if (langId === "langEng") {
                document.getElementById("listEsp").classList.remove("active");
                document.getElementById("listEng").classList.add("active");
            }  
        },
    },

    created() {
        this.checkLang();
        this.checkProfile();
        this.getReserva();
    },

    mounted() {
        if (this.$route.query.lang === "es") {
            document.getElementById("listEsp").classList.add("active");
        } else if (this.$route.query.lang === "en") {
            document.getElementById("listEng").classList.add("active");
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
