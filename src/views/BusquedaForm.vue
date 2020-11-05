<template>
  <div class="body">
    <!-- HEAD FIJO CON BACKGROUND -->
        <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
            <img class="img w-100 h-100 img-auto" :src="this.style.URL_IMAGEN_FONDO">
        </div>
        <!-- HEAD FIJO CON BACKGROUND -->


        <!-- FORM DE BUSQUEDA DE RESERVA -->
        <div class="container-fluid principal mt-start mb-5">
            <div class="row justify-content-center">
                <div class="c-form p-3 py-lg-5 col-11 col-md-7 position position-z-1" :style="'background-color: ' + this.style.COLOR_FONDO_CUADRO_FORMULARIO + ';'">
                    <div class="c-brand col-6 px-4 mx-auto mb-3">
                        <a href="" class="btn btn-reset btn-block">
                            <img :src="this.style.URL_LOGO_MARCA" alt="" class="img img-w img-auto">
                        </a>
                    </div>
                    <form class="form d-flex flex-wrap" action="{URL_ACTION}" method="{POST/GET}">
                        <div class="form-group col-12 col-md-6">
                            <label for="" class="sr-only"></label>
                            <select class="form-control text" required :data-msg="this.textValues.MENSAJE_DATO_OBLIGATORIO" v-model="data.hotel">
                                <option value="" disabled selected hidden>{{this.textValues.SELECCIONAR_HOTEL}}</option>
                                <option v-for="hotel in hotels" :value="hotel.id" v-bind:key="hotel.id">
                                {{hotel.value}}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-md-6">
                            <input v-model="data.primer_apellido" type="text" class="form-control text" :placeholder="this.textValues.PLACEHOLDER_FIELD">
                        </div>

                        <!--INPUT FECHA ENTRADA-->
                        <div class="c-calendar form-group col-12 col-md-6 reservas__entrada">
                            <!-- <input type="text" name="fecha_entrada" id="fecha_entrada" v-model="data.fecha_entrada"> -->
                            <date-picker
                                v-model="data.fecha_entrada"
                                :locale="textValues.CALENDAR_IDIOMA"
                                :input-props='{
                                    placeholder: this.textValues.PLACEHOLDER_FECHA_ENTRADA,
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
                        <input type="hidden" name="arrival" id="MADG_fechaIn" />
                        <!-- fin INPUT FECHA ENTRADA -->

                        <!-- INPUT FECHA SALIDA -->
                        <div class="c-calendar form-group col-12 col-md-6 reservas__salida">
                            <!-- <input type="text" name="fecha_salida" id="fecha_salida" v-model="data.fecha_salida"> -->
                            <date-picker
                                v-model="data.fecha_salida"
                                :locale="textValues.CALENDAR_IDIOMA"
                                :input-props='{
                                    placeholder: this.textValues.PLACEHOLDER_FECHA_SALIDA,
                                    readonly: true
                                }'
                            />
                            <!-- <p for="" class="text label">{{this.textValues.PLACEHOLDER_FECHA_SALIDA}}</p>
                            <div class="date text--date form-control d-lg-flex flex-lg-wrap mb-0 salida text">
                                <span class="item dia text"></span>
                                <span class="item mes text"></span>
                                <span class="item anio text"></span>
                            </div> -->
                        </div>
                        <input type="hidden" name="departure" id="MADG_fechaOut" />
                        <!-- fin INPUT FECHA SALIDA -->


                        <div class="form-group col-12 mb-lg-4">
                            <input v-model="data.localizador" type="text" class="form-control" :placeholder="this.textValues.PLACEHOLDER_LOCALIZADOR">
                        </div>

                        <div class="c-message col-12" v-if="submitStatus === 'ERROR'">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.MENSAJE_ERROR}}</p>
                        </div>

                        <div class="c-message col-12" v-if="reserva_not_found">
                            <!-- AÑADIR SIGUIENTE <p> EN EL CASO DE QUE HAYA UN ERROR -->
                            <p class="text alert alert-danger mb-0 mb-lg-4">{{this.textValues.RESERVA_NO_ENCONTRADA}}</p>
                        </div>

                        <div class="form-group col-12 mb-4">
                            <label for="" class="sr-only"></label>
                            <button @click="submit"  type="button" class="btn btn-solid btn-block text" :style="'background-color: ' + this.style.COLOR_BOTON + '; color: ' + this.style.COLOR_TEXTO_BOTON + ';'">{{this.textValues.TEXTO_BOTON_SIGUIENTE}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- FIN FORM DE BUSQUEDA DE RESERVA -->

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
                <a @click="changeLang('es')" :href="'#/busqueda?lang=es&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
                </li>
                <li id="listEng" class="item w-100">
                <a @click="changeLang('en')" :href="'#/busqueda?lang=en&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
                </li>
                <li id="listDe" class="item w-100">
                <a @click="changeLang('de')" :href="'#/busqueda?lang=de&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
                </li>
                <li id="listFr" class="item w-100">
                <a @click="changeLang('fr')" :href="'#/busqueda?lang=fr&profile=' + this.actualProfile" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
// @ is an alias to /src
import json from './../static/config/lang.json'
import profilesJson from './../static/config/profiles.json'
import { required, minLength, between } from 'vuelidate/lib/validators'
const config = require('../config')


export default {
  name: 'Home',
  data() {
      return {
          reserva_not_found: false,
          submitStatus: "OK",
          api_url: "",
          data: {
              hotel: "",
              nombre: "",
              primer_apellido: "",
              fecha_entrada: "",
              fecha_salida: "",
              localizador: ""
          },
          actualProfile: "default",
          actualLang: "es",
          textValues: {},
          profiles: profilesJson,
          style: {},
          hotels: {},
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
                  this.hotels = profilesJson.default.hotels;
              } 
              if (this.$route.query.profile === "other") {
                  this.style = profilesJson.other.style;
                  this.actualProfile = "other";
                  this.api_url = profilesJson.other.api_url;
                  this.hotels = profilesJson.other.hotels;
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
          }
          
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
            this.submitStatus = "OK";
            this.getReserva();
        }
    },
    getReserva() {
        this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.data.hotel + "&Localizador=" + this.data.localizador + "&FechaEntrada=" + this.data.fecha_entrada + "&FechaSalida=" + this.data.fecha_salida + "&Apellido=" + this.data.primer_apellido)
        .then(response => {
            
            if (response.data.LSReservas.length === 1) {
                this.reserva_not_found = false;               
                this.$router.push("listausuarios?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + this.data.fecha_entrada + "&fechasalida=" + this.data.fecha_salida + "&apellido=" + this.data.primer_apellido)
            } else if (response.data.LSReservas.length > 1) {
                this.$router.push("reservas?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.data.hotel + "&localizator=" + this.data.localizador + "&fechaentrada=" + this.data.fecha_entrada + "&fechasalida=" + this.data.fecha_salida + "&apellido=" + this.data.primer_apellido)
            } else {
                this.reserva_not_found = true;
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
  },
  created() {
      this.checkLang();
      this.checkProfile();
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
