<template>
  <div class="body">
    <!-- HEAD FIJO CON BACKGROUND -->
        <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
            <img src="{URL_IMAGEN_FONDO}" alt="" class="img w-100 h-100 img-auto">
        </div>
        <!-- HEAD FIJO CON BACKGROUND -->

        <!-- FORM -->
        <div class="container-fluid principal mt-start mb-5">
            <div class="row justify-content-center">
                <div class="c-form p-3 p-lg-5 col-11 col-md-7 col-xl-5 position position-z-1" style="background-color: {COLOR_BACKGROUND};">
                    <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                        <a href="" class="btn btn-reset btn-block">
                            <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                        </a>
                    </div>
                    <div class="w-100">
                        <div v-for="cliente in customersData" v-bind:key="cliente.NumeroCliente">
                            <div @click="$router.push('/form?lang=' + actualLang + '&profile=' + actualProfile + '&hotel=' + dataForRequest.hotel + '&localizator=' + dataForRequest.localizador + '&fechaentrada=' + dataForRequest.fecha_entrada + '&fechasalida=' + dataForRequest.fecha_salida + '&apellido=' + dataForRequest.apellido)" class="b-user col-12 mb-3 d-flex flex-wrap align-items-center pr-0" style="background-color: {COLOR_FILAS};">
                                <div v-if="cliente.Estado === 1">
                                    <i class="icon fas fa-check icon-size-1-4 icon-color-gray_dark mr-3"></i>
                                </div>
                                <div v-if="cliente.Estado === 0">
                                    <i class="icon fas fa-times icon-size-1-4 icon-color-gray_dark mr-3"></i>
                                </div>
                                
                                <p class="text mb-0"><i class="icon icon-color-gray_icon fas fa-user-friends mr-2"></i>{{cliente.Nombre + " " + cliente.Apellido1 + " " + cliente.Apellido2}}</p>
                                <div class="actions d-flex ml-auto">
                                    <button class="btn btn-solid p-lg-3" style="background-color: {COLOR_BOTON_EDITAR};"><i class="icon fas fa-pen icon-color-white"></i></button>
                                    <button class="btn btn-solid p-lg-3" style="background-color: {COLOR_BOTON_ELIMINAR};"><i class="icon far fa-trash-alt icon-color-white"></i></button>
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-12 px-0">
                            <button type="button" class="btn btn-solid btn-block text" style="background-color: {COLOR_BOTON_AÑADIRNUEVO}; color: {COLOR_TEXT};">{TXT_AGREGAR NUEVO USUARIO}</button>
                        </div>
                        <div class="form-group col-12 px-0">
                            <button type="button" class="btn btn-solid btn-block text" style="background-color: {COLOR_BOTON_TERMINAR}; color: {COLOR_TEXT}; ">{TXT_TERMINAR}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FORM -->

        <!-- FOOTER DE MARCAS -->
        <div class="container-fluid mb-3">
            <div class="row">
                <div class="c-logos col-12 py-3" style="background-color: {HEX_BACKGROUND_FONDO_CUADRO_MARCAS};">
                    <h2 class="text title col-12 col-md-6 col-xl-4 mx-md-auto text-center mb-3">
                        <img src="{URL_LOGO_MARCA_AM_RESORTS}" alt="" class="img img-w">
                    </h2>
                    <div class="wrapper d-flex w-100 flex-wrap justify-content-lg-center">
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_1}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_2}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_3}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <!-- ... -->
                        <div class="c-brand col-6 col-md-2 col-lg-auto mx-auto mb-3">
                            <a href="" class="btn btn-reset btn-block">
                                <img src="{URL_LOGO_MARCA_N}" alt="" class="img img-w img-auto">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FIN FOOTER DE MARCAS-->

        <!-- SELECTOR IDIOMÁTICO -->
        <div class="c-menu-lenguage position-fixed p-2 position position-z-1" style="background-color: {HEX_BACKGROUND_CUADRO_IDIOMAS};">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li id="listEsp" class="item w-100">
                    <a @click="changeLang('es')" :href="'#/listausuarios?lang=es&profile=' + this.actualProfile + '&hotel=' + this.dataForRequest.hotel + '&localizator=' + this.dataForRequest.localizador + '&fechaentrada=' + this.dataForRequest.fecha_entrada + '&fechasalida=' + this.dataForRequest.fecha_salida + '&apellido=' + this.dataForRequest.apellido" class="btn btn-reset text text-uppercase p-1">Español</a>
                </li>
                <li id="listEng" class="item w-100">
                    <a @click="changeLang('en')" :href="'#/listausuarios?lang=en&profile=' + this.actualProfile + '&hotel=' + this.dataForRequest.hotel + '&localizator=' + this.dataForRequest.localizador + '&fechaentrada=' + this.dataForRequest.fecha_entrada + '&fechasalida=' + this.dataForRequest.fecha_salida + '&apellido=' + this.dataForRequest.apellido" class="btn btn-reset text text-uppercase p-1">Inglés</a>
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
// @ is an alias to /src
require ("./../static/js/index")
import json from './../static/config/lang.json'
import profilesJson from './../static/config/profiles.json'

export default {
    name: 'Home',
    data() {
        return {
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
