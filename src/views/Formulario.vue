<template>

  <div>
    <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
    <img src="https://picsum.photos/1500/700?random&#x3D;1" alt="" class="img w-100 h-100 img-auto">
  </div>

  <div class="container-fluid principal mt-start mb-5">
    <div class="row justify-content-center">
        <div class="c-form p-3 py-lg-5 col-11 col-md-7 position position-z-1" style="background-color: #00a5b1;">
            <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                <a href="" class="btn btn-reset btn-block">
                    <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                </a>
            </div>
            <form class="form d-flex flex-wrap">

              <!-- ------------------------------------------------ -->
              <!-- TIPO DOCUMENTO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <select name="tipo_doc" v-model="data.tipo_doc">
                  <option value="" selected disabled>{{this.textValues.TIPO_DOCUMENTO}}</option>
                  <option v-for="item in tipos_documento" v-bind:key="item" :value="item">{{item}}</option>
                </select>
              </div>
              
              <!-- ------------------------------------------------ -->
              <!-- NUMERO DOCUMENTO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.num_documento" type="text" class="form-control text" :placeholder="this.textValues.NUM_DOCUMENTO">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- FECHA EXPEDICION -->
              <!-- ------------------------------------------------ -->
              <div class="c-calendar form-group col-12 col-md-6 reservas__entrada">
                <date-picker
                  v-model="data.fecha_expedicion"
                  :input-props='{
                    placeholder: this.textValues.FECHA_EXPEDICION,
                    readonly: true
                  }'
                />
                <!-- <p for="" class="text label">{{this.textValues.PLACEHOLDER_FECHA_ENTRADA}}</p>
                <div class="date text--date form-control d-lg-flex flex-lg-wrap mb-0 entrada text">
                <span class="item dia text"></span>
                <span class="item mes text"></span>
                <span class="item anio text"></span>              
                </div> -->
              </div>

              <!-- ------------------------------------------------ -->
              <!-- NACIONALIDAD -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <select name="pais" v-model="data.pais_nacimiento">
                  <option value="" selected disabled>{{this.textValues.NACIONALIDAD}}</option>
                  <option v-for="pais in paises" v-bind:key="pais.code" :value="pais.code">{{pais.name}}</option>
                </select>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- PAIS RESIDENCIA -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <select name="fecha_expedicion" v-model="data.pais">
                  <option value="" selected disabled>{{this.textValues.PAIS_RESIDENCIA}}</option>
                  <option v-for="pais in paises" v-bind:key="pais.code" :value="pais.code">{{pais.name}}</option>
                </select>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- EMAIL -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.email" type="text" class="form-control text" :placeholder="this.textValues.EMAIL">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- TELEFONO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.number" type="text" class="form-control text" :placeholder="this.textValues.TELEFONO">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- FECHA NACIMIENTO -->
              <!-- ------------------------------------------------ -->
              <div class="c-calendar form-group col-12 col-md-6 reservas__entrada">
                <!-- ADULTO -->
                <div>
                  <date-picker
                    v-model="data.fecha_nacimiento"
                    :input-props='{
                      placeholder: this.textValues.FECHA_NACIMIENTO,
                      readonly: true
                    }'
                  />
                </div>
                
              </div>

              <!-- ------------------------------------------------ -->
              <!-- SEXO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <select name="sexo" v-model="data.sexo">
                  <option value="" disabled selected>{{this.textValues.SEXO}}</option>
                  <option value="hombre">Hombre</option>
                  <option value="hombre">Mujer</option>
                </select>
              </div>

              <!-- ------------------------------------------------ -->
              <!-- NOMBRE -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.nombre" type="text" class="form-control text" :placeholder="this.textValues.NOMBRE">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- PRIMER APELLIDO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.primer_apellido" type="text" class="form-control text" :placeholder="this.textValues.PRIMER_APELLIDO">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- SEGUNDO APELLIDO -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.segundo_apellido" type="text" class="form-control text" :placeholder="this.textValues.SEGUNDO_APELLIDO">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- DIRECCIÓN -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.direccion" type="text" class="form-control text" :placeholder="this.textValues.DIRECCION">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- POBLACION -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.poblacion" type="text" class="form-control text" :placeholder="this.textValues.POBLACION">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- DIRECCIÓN -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.provincia" type="text" class="form-control text" :placeholder="this.textValues.PROVINCIA">
              </div>

              <!-- ------------------------------------------------ -->
              <!-- CODIGO POSTAL -->
              <!-- ------------------------------------------------ -->
              <div class="form-group col-12 col-md-6">
                <input v-model="data.codigo_postal" type="text" class="form-control text" :placeholder="this.textValues.CODIGO_POSTAL">
              </div>

                <div class="form-group col-12 col-md-12 d-flex align-items-center flex-row-reverse justify-content-start mb-4">
                    <label for="" class="text mr-auto mb-0" style="color: #ffffff;">{{this.textValues.CONSENTIMIENTO_RECIBIR_NOTIFICANCIONES}}</label>
                    <input type="checkbox" v-model="data.acepta_terminos" class="form-control form-control-check mr-3" aria-label="Checkbox for following text input">
                </div>

                <div class="col-12 mb-3">
                    <p class="text mb-2" style="color: #ffffff;">(*) opcional</p>
                    <p class="text" style="color: #ffffff;">(**) opcional</p>
                </div>

                <!-- ------------------------------------------------ -->
                <!-- ERRORES -->
                <!-- ------------------------------------------------ -->
                <div class="c-message col-12">
                  <p v-if="error_cases.nombre" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_NOMBRE}}</p>
                  <p v-if="error_cases.primer_apellido" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PRIMER_APELLIDO}}</p>
                  <p v-if="error_cases.fecha_nacimiento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_FECHA_NACIMIENTO}}</p>
                  <p v-if="error_cases.pais_nacimiento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PAIS_NACIMIENTO}}</p>
                  <p v-if="error_cases.sexo" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_SEXO}}</p>
                  <p v-if="error_cases.tipo_documento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_TIPO_DOCUMENTO}}</p>
                  <p v-if="error_cases.num_documento" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_NUM_DOCUMENTO}}</p>
                  <p v-if="error_cases.fecha_expedicion" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_FECHA_EXPEDICION}}</p>
                  <p v-if="error_cases.pais_residencia" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_PAIS_RESIDENCIA}}</p>
                  <p v-if="error_cases.email" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_EMAIL}}</p>
                  <p v-if="error_cases.aceptar_info" class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR_FALTA_ACEPTAR_INFO}}</p>
                </div>

                <div class="form-group col-12 col-md-6">
                    <label for="" class="sr-only"></label>
                    <button @click="checkForm()" type="button" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">{{this.textValues.CHECK_IN}}</button>
                </div>

                <div class="form-group col-12 col-md-6">
                    <label for="" class="sr-only"></label>
                    <button type="button" class="btn disable btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">{{this.textValues.SALIR}}</button>
                </div>

            </form>
        </div>
    </div>
</div>

<div class="container-fluid mb-3">
    <div class="row">
        <div class="c-logos col-12 py-3" style="background-color: #777777;">
            <h2 class="text title col-12 col-md-6 col-xl-4 mx-md-auto text-center mb-3">
                <img src="https://www.amresortseu.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w">
            </h2>
            <div class="wrapper d-flex w-100 flex-wrap justify-content-lg-center">
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.secretslanzarote.com/wp-content/themes/adgtravel/img/logo.png" alt="" class="img img-w img-auto">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="c-menu-lenguage position-fixed bg p-2 position position-z-1" style="background-color: #ffffff;">
    <i class="icon fas fa-angle-down"></i>
    <ul class="menu list-none mb-0">
        <li id="listEsp" class="item active w-100">
          <a @click="changeLang('es')" :href="'#/form?lang=es&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
        </li>
        <li id="listEng" class="item w-100">
          <a @click="changeLang('en')" :href="'#/form?lang=en&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
        </li>
        <li id="listDe" class="item w-100">
          <a @click="changeLang('de')" :href="'#/form?lang=de&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
        </li>
        <li id="listFr" class="item w-100">
          <a @click="changeLang('fr')" :href="'#/form?lang=fr&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
        </li>
    </ul>
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
      isFormComplete: false,
      tipos_documento: ["DNI", "NIF", "Pasaporte"],
      error_cases: {
        nombre: false,
        primer_apellido: false,
        fecha_nacimiento: false,
        pais_nacimiento: false,
        sexo: false,
        tipo_documento: false,
        num_documento: false,
        fecha_expedicion: false,
        pais_residencia: false,
        aceptar_info: false,
        email: false
      },
      data: {
        "reserva_id": "",
        "fecha_entrada": "",
        "fecha_salida": "",
        "habitacion": "",
        "num_documento": "",
        "tipo_doc": "",
        "fecha_expedicion": "",
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
        "tipo_persona": "",
        "acepta_terminos": false,
        "pais_nacimiento": ""
      },
      dataForRequest: {
        hotel: this.$route.query.hotel,
        localizador: this.$route.query.localizator,
        fecha_entrada: this.$route.query.fechaentrada,
        fecha_salida: this.$route.query.fechasalida,
        apellido: this.$route.query.apellido
      },
      state: {
        highlighted: {
          to: new Date(2016, 0, 5), // Highlight all dates up to specific date
          from: new Date(2016, 0, 26), // Highlight all dates after specific date
          days: [6, 0], // Highlight Saturday's and Sunday's
          daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
          dates: [ // Highlight an array of dates
            new Date(2016, 9, 16),
            new Date(2016, 9, 17),
            new Date(2016, 9, 18)
          ],
          // a custom function that returns true of the date is highlighted
          // this can be used for wiring you own logic to highlight a date if none
          // of the above conditions serve your purpose
          // this function should accept a date and return true if is highlighted
          customPredictor: function(date) {
            // highlights the date if it is a multiple of 4
            if(date.getDate() % 4 == 0){
              return true
            }
          },
          includeDisabled: true // Highlight disabled dates
        }
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
        if (this.$route.query.lang === "de") {
          this.textValues = json.de
          this.actualLang = "de";
        }
        if (this.$route.query.lang === "fr") {
          this.textValues = json.fr
          this.actualLang = "fr";
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
          if (lang === "de") {
            this.textValues = json.de
            this.toggleBodyClass("langDe");
            this.actualLang = "de";
          }
          if (lang === "fr") {
            this.textValues = json.fr
            this.toggleBodyClass("langFr");
            this.actualLang = "fr";
          }
        },       
      }
    },

    methods: {
      checkForm() {

        if (this.data.nombre === "") {
          this.error_cases.nombre = true;
        } else {
          this.error_cases.nombre = false;
        }
        
        if (this.data.primer_apellido === "") {
          this.error_cases.primer_apellido = true;
        } else {
          this.error_cases.primer_apellido = false;
        }

        if (this.data.fecha_nacimiento === "" || this.data.fecha_nacimiento === "0001-01-01T00:00:00") {
          this.error_cases.fecha_nacimiento = true;
        } else {
          this.error_cases.fecha_nacimiento = false;
        }

        if (this.data.pais_nacimiento === "") {
          this.error_cases.pais_nacimiento = true;
        } else {
          this.error_cases.pais_nacimiento = false;
        }

        if (this.data.sexo === "") {
          this.error_cases.sexo = true;
        } else {
          this.error_cases.sexo = false;
        }

        if (this.data.tipo_doc === "") {
          this.error_cases.tipo_documento = true;
        } else {
          this.error_cases.tipo_documento = false;
        }

        if (this.data.num_documento === "") {
          this.error_cases.num_documento = true;
        } else {
          this.error_cases.num_documento = false;
        }

        if (this.data.fecha_expedicion === "" || this.data.fecha_expedicion === "0001-01-01T00:00:00") {
          this.error_cases.fecha_expedicion = true;
        } else {
          this.error_cases.fecha_expedicion = false;
        }

        if (this.data.pais === "") {
          this.error_cases.pais_nacimiento = true;
        } else {
          this.error_cases.pais_nacimiento = false;
        }

        if (this.data.acepta_terminos === true && this.data.email === "") {
          this.error_cases.email = true;
        } else {
          this.error_cases.email = false;
        }

        if (this.data.nombre != "" && this.data.primer_apellido != "" && this.data.fecha_nacimiento != "" && this.data.sexo != "" && this.data.tipo_doc != "" && this.data.num_documento != "" 
        && this.data.fecha_entrada != "" && this.data.pais != "" && this.data.email != "") {
          this.error_cases.nombre           = false;
          this.error_cases.primer_apellido  = false;
          this.error_cases.fecha_nacimiento = false;
          this.error_cases.pais_nacimiento  = false;
          this.error_cases.sexo             = false;
          this.error_cases.tipo_doc         = false;
          this.error_cases.num_documento    = false;
          this.error_cases.fecha_expedicion = false;
          this.error_cases.pais             = false;
          this.error_cases.aceptar_info     = false;
          this.error_cases.email            = false;

          this.goSign();
        }

        console.log(this.data)
        console.log(this.error_cases)
      },
      getReserva() {
        //this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
        this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida)
        .then(response => {
          this.client_data = response.data;
          let json = response.data;
          let clienteId = this.$route.query.id - 1;
          this.customersData = response.data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente[clienteId];
          let dc = this.customersData.DC;
          this.data = {
            "reserva_id": this.client_data.LSReservas[0].Reserva,
            "fecha_entrada": this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaEntrada,
            "fecha_salida": this.client_data.LSReservas[0].LSReservaHabAWA[0].FechaSalida,
            "habitacion": this.client_data.LSReservas[0].LSReservaHabAWA[0].Habitacion,
            "num_documento": this.customersData.IDDocumento,
            "tipo_doc": this.customersData.TipoDocumento,
            "fecha_expedicion": this.customersData.FechaExpedicion,
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
            "numero_cliente": this.customersData.NumeroCliente,
            "tipo_persona": this.customersData.TipoPersona
          }
          console.log(this.data)
        }).catch(error => {
            console.log(error)
          });
        },
        toggleBodyClass(langId) {
          const el = document.body;
          if (langId === "langEsp") {
            document.getElementById("listEsp").classList.add("active");
            document.getElementById("listEng").classList.remove("active");
            document.getElementById("listDe").classList.remove("active");
            document.getElementById("listFr").classList.remove("active");
          } if (langId === "langEng") {
            document.getElementById("listEsp").classList.remove("active");
            document.getElementById("listDe").classList.remove("active");
            document.getElementById("listFr").classList.remove("active");
            document.getElementById("listEng").classList.add("active");
          } if (langId === "langDe") {
            document.getElementById("listEsp").classList.remove("active");
            document.getElementById("listEng").classList.remove("active");
            document.getElementById("listFr").classList.remove("active");
            document.getElementById("listDe").classList.add("active");
          } if (langId === "langFr") {
            document.getElementById("listEsp").classList.remove("active");
            document.getElementById("listEng").classList.remove("active");
            document.getElementById("listDe").classList.remove("active");
            document.getElementById("listFr").classList.add("active");
          }   
        },

        goSign() {
          localStorage.data = JSON.stringify(this.data);
          this.$router.push("/checkin?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.$route.query.hotel + "&localizator=" + this.$route.query.localizator + "&fechaentrada" + this.$route.query.fechaentrada + "&fechasalida=" + this.$route.query.fechasalida + "&apellido=" + this.$route.query.apellido + "&id=" + this.$route.query.id);
        }
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
        } else if (this.$route.query.lang === "de") {
            document.getElementById("listDe").classList.add("active");
        } else if (this.$route.query.lang === "fr") {
            document.getElementById("listFr").classList.add("active");
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
