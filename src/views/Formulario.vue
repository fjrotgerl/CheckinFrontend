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
          <input type="text" v-model="data.primer_apellido">
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

      
      

    </div>

    <div class="row">

        <div class="column">
          <input type="checkbox" v-model="data.acepta_terminos">
          <label class="form_title" for="checkbox">¿Acepta los términos y condiciones?</label>
        </div> 

        <div class="column"> 
          <button class="button" @click="$router.push('/checkin')">Check-in</button>
          <button class="button" @click="updateClientData()">Atras</button>
        </div>
    
    </div>

    <!-- SELECTOR IDIOMÁTICO -->
        <div class="c-menu-lenguage position-fixed p-2 position position-z-1" style="background-color: {HEX_BACKGROUND_CUADRO_IDIOMAS};">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li id="listEsp" class="item w-100">
                    <a @click="changeLang('es')" :href="'#/busquedaform?lang=es&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">Español</a>
                </li>
                <li id="listEng" class="item w-100">
                    <a @click="changeLang('en')" :href="'#/busquedaform?lang=en&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">Inglés</a>
                </li>
                <li class="item w-100">
                    <a href="{URL_LANG_3}" class="btn btn-reset text text-uppercase p-1">{LANG_3}</a>
                </li>
            </ul>
        </div>
        <!-- FIN SELECTOR IDIOMÁTICO-->
    
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
        "reserva_id": "",
        "fecha_entrada": "",
        "fecha_salida": "",
        "habitacion": "",
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
        "segundo_apellido": "",
        "acepta_terminos": false
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
      client_data: {},
      api_url: "",
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
          this.client_data = response.data;
          let json = response.data;
          this.customersData = response.data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente[0];
          let dc = this.customersData.DC;
          this.data = {
            "reserva_id": this.client_data.LSReservas[0].Reserva,
            "fecha_entrada": this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaEntrada,
            "fecha_salida": this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaSalida,
            "habitacion": this.client_data.LSReservas[0].LSReservaHabAWA[0].Habitacion,
            "num_documento": this.customersData.IDDocumento,
            "tipo_doc": this.customersData.TipoDocumento,
            "fecha_expedición": this.customersData.FechaExpedicion,
            "pais": dc.Pais,
            "email": this.customersData.EMail,
            "telefono": dc.Telefono,
            "fecha_nacimiento": this.customersData.FechaNacimiento,
            "sexo": this.customersData.Sexo,
            "direccion": dc.Direccion,
            "nombre": this.customersData.Nombre,
            "poblacion": dc.Poblacion,
            "provincia": dc.Provincia,
            "codigo_postal": this.customersData.CodigoPostal,
            "primer_apellido": this.customersData.Apellido1,
            "segundo_apellido": this.customersData.Apellido2,
            "acepta_terminos": this.customersData.AceptaInfo,
            "numero_cliente": this.customersData.NumeroCliente
          }
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

        updateClientData() {
          this.client_data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente.forEach(element => {
            
            if (element.NumeroCliente === this.data.numero_cliente) {
              let dc = element.DC;
              element.IDDocumento = this.data.num_documento;
              element.TipoDocumento = this.data.tipo_doc;
              element.FechaExpedicion = this.data.fecha_expedición;
              element.Pais = this.data.pais;
              element.Email = this.data.email;
              dc.Telefono = this.data.telefono;
              element.FechaNacimiento = this.data.FechaNacimiento;
              element.Sexo = this.data.sexo;
              dc.Direccion = this.data.direccion;
              element.Nombre = this.data.nombre;
              dc.Poblacion = this.data.poblacion;
              dc.Provincia = this.data.provincia;
              element.CodigoPostal = this.data.codigo_postal;
              element.Apellido1 = this.data.primer_apellido;
              element.Apellido2 = this.data.segundo_apellido;
              element.AceptaInfo = this.data.acepta_terminos;
            }
            
          });

          this.axios.post(this.api_url + "/PostAWAReservationGuests", {
            'Hotel': 'H20',
            'LSReservas': [
              {
                'HotelFactura': this.client_data.LSReservas[0].HotelFactura,
                'Reserva': this.client_data.LSReservas[0].Reserva,
                'Localizador': this.client_data.LSReservas[0].Localizador,
                'EntidadNegocio': this.client_data.LSReservas[0].EntidadNegocio,
                'LSReservaHabAWA': [
                  {
                    'Linea': this.client_data.LSReservas[0].LSReservaHabAWA.Linea,
                    'Referencia': this.client_data.LSReservas[0].LSReservaHabAWA.Referencia,
                    'LSReservaCliente': this.client_data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente
                  }
                ]
              }
            ]
          })
          .then(response => {
            console.log(response);
          })
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
