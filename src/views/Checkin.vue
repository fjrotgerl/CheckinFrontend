<template style="overflow: hidden">
  <div>
    <div class="c-background w-100 h-100 position-fixed bg bg-mask bg-mask-white-05">
        <img src="https://picsum.photos/1500/700?random&#x3D;1" alt="" class="img w-100 h-100 img-auto">
    </div>
    <div class="container-fluid principal mt-start mb-5">
        <div class="row justify-content-center">
            <div class="c-form p-3 py-lg-5 col-11 col-md-11 position position-z-1" style="background-color: #00a5b1;">
                <div class="c-brand col-6 px-4 mx-auto mb-3 mb-lg-5">
                    <a href="" class="btn btn-reset btn-block">
                        <img src="https://www.aluahotels.com/uploads/logoshotel/svg/logo-alua-header.svg" alt="" class="img img-w img-auto">
                    </a>
                </div>
                <div class="d-flex flex-wrap">
                    <div class="c-objectpdf col-12 col-md-8">
                        <!-- <object data="https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/XML_Documentation_Intl.pdf" type="application/pdf" width="100%" height="100%">
                            <embed src="https://images-na.ssl-images-amazon.com/images/G/01/rainier/help/XML_Documentation_Intl.pdf" type="application/pdf" />
                        </object> -->
                        <div id="test" style="background-color: white;">
                          <iframe ref="iframe1" frameborder="0" src="http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf" ></iframe>
                          <!-- <div v-for="pdf in pdfList" v-bind:key="pdf"> -->
                            <!-- <div v-if="$route.query.id == 1" >
                              <iframe frameborder="0" :src="'ficheros/' + pdf + 'eng_txt.txt'" ></iframe>
                            </div>
                            <div v-if="$route.query.id != 1 && !pdf.includes('Doc_1')">
                              <iframe :src="'ficheros/' + pdf + 'eng_txt.txt'" ></iframe>
                            </div> -->
                          <!-- </div> -->
                        </div>
                    </div>
                    <div class="mt-5 col-12 col-md-4" style="padding-left: 10px;">
                        <form class="form d-flex flex-wrap">

                            <div class="form-group col-12" style="text-align:center;">
                                <label for="" class="text text-white">Firma del documento</label>
                                <div v-if="!this.data.covid">
                                  <canvas style="background-color: white;" id="myCanvas" width="380" height="180" />
                                </div>
                                <div v-if="this.data.covid">
                                  <canvas style="background-color: white;" id="myCanvas" width="380" height="180" @mousemove="draw" @mousedown="beginDrawing" @mouseup="stopDrawing" />
                                </div>
                                
                                
                            </div>

                            <div class="align-center form-group col-3 col-md-3" style="margin: 20px;">
                                <label for="" class="sr-only"></label>
                                <button type="button" @click="clearCanvas()" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">{{this.textValues.LIMPIAR}}</button>
                            </div>

                            <div class="form-group col-12 d-flex align-items-center flex-row-reverse justify-content-start mb-4">
                                <label for="" class="text mr-auto mb-0" style="color: #ffffff;">{{this.textValues.ALERTA_COVID}}</label>
                                <input type="checkbox" v-model="data.covid" class="form-control form-control-check mr-3" aria-label="Checkbox for following text input">
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <label for="" class="sr-only"></label>
                                <button type="button" :disabled="!this.finishCheck || !this.data.covid" @click="updateClientData()" :class="'btn btn-solid text-uppercase btn-block text'" style="background-color: #006682; color: #ffffff; ">Guardar</button>
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <label for="" class="sr-only"></label>
                                <button type="button" @click="$router.push('form?lang=' + $route.query.lang + '&profile=' + $route.query.profile + '&hotel=' + $route.query.hotel + '&localizator=' + $route.query.localizator + '&fechaentrada=' + $route.query.fechaentrada + '&fechasalida=' + $route.query.fechasalida + '&apellido=' + $route.query.apellido + '&id=' + $route.query.id)" class="btn btn-solid text-uppercase btn-block text" style="background-color: #006682; color: #ffffff; ">Cancelar</button>
                            </div>

                        </form>
                    </div>
                </div>
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


    <!-- SELECTOR IDIOMÁTICO -->
        <div class="c-menu-lenguage position-fixed bg p-2 position position-z-1" style="background-color: #ffffff;">
            <i class="icon fas fa-angle-down"></i>
            <ul class="menu list-none mb-0">
                <li id="listEsp" class="item w-100">
                <a @click="changeLang('es')" :href="'#/checkin?lang=es&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ESPAÑOL}}</a>
                </li>
                <li id="listEng" class="item w-100">
                <a @click="changeLang('en')" :href="'#/checkin?lang=en&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.INGLES}}</a>
                </li>
                <li id="listDe" class="item w-100">
                <a @click="changeLang('de')" :href="'#/checkin?lang=de&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.ALEMAN}}</a>
                </li>
                <li id="listFr" class="item w-100">
                <a @click="changeLang('fr')" :href="'#/checkin?lang=fr&profile=' + this.actualProfile + '&hotel=' + this.$route.query.hotel + '&localizator=' + this.$route.query.localizator + '&fechaentrada=' + this.$route.query.fechaentrada + '&fechasalida=' + this.$route.query.fechasalida + '&apellido=' + this.$route.query.apellido + '&id=' + this.$route.query.id" class="btn btn-reset text text-uppercase p-1">{{this.textValues.FRANCES}}</a>
                </li>
            </ul>
        </div>
        <!-- FIN SELECTOR IDIOMÁTICO-->

  </div>
</template>

<script>
import json from './../static/config/lang.json'
import profilesJson from './../static/config/profiles.json'


export default {
  name: "Checkin",
  data() {
    return {
      isScrollDown: false,
      finishCheck: false,
      show: true,
      pdfList: [],
      pdfList2: [
        'Doc_1_H00_1_eng_txt.txt',
        'Doc_1_H00_1_esp_txt.txt',
        'Doc_1_H00_1_fra_txt.txt',
        'Doc_1_H00_1_ger_txt.txt',
        'Doc_1_H20_1_eng_txt.txt',
        'Doc_1_H20_1_esp_txt.txt',
        'Doc_1_H20_1_fra_txt.txt',
        'Doc_1_H20_1_ger_txt.txt',
        'Doc_1_H21_1_eng_txt.txt',
        'Doc_1_H21_1_esp_txt.txt',
        'Doc_1_H21_1_fra_txt.txt',
        'Doc_1_H21_1_ger_txt.txt',
        'Doc_1_H22_1_eng_txt.txt',
        'Doc_1_H22_1_esp_txt.txt',
        'Doc_1_H22_1_fra_txt.txt',
        'Doc_1_H22_1_ger_txt.txt',
        'Doc_1_H25_1_eng_txt.txt',
        'Doc_1_H25_1_esp_txt.txt',
        'Doc_1_H25_1_fra_txt.txt',
        'Doc_1_H25_1_ger_txt.txt',
        'Doc_2_H00_2_eng_txt.txt',
        'Doc_2_H00_2_esp_txt.txt',
        'Doc_2_H00_2_fra_txt.txt',
        'Doc_2_H00_2_ger_txt.txt',
        'Doc_3_HBL_3_eng_txt.txt',
        'Doc_3_HBL_3_esp_txt.txt',
        'Doc_3_HBL_3_fra_txt.txt',
        'Doc_3_HBL_3_ger_txt.txt',
        'policia_eng_txt.txt',
        'policia_esp_txt.txt',
        'policia_fra_txt.txt',
        'policia_ger_txt.txt'
      ],
      src:'',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0,
      data: {
        "reserva_id": "",
        "fecha_entrada": "",
        "fecha_salida": "",
        "habitacion": "",
        "num_documento": "",
        "tipo_doc": "",
        "fecha_expedición": "",
        "pais_residencia": "",
        "pais_nacimiento": "",
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
        "acepta_terminos": false,
        "covid": false
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
      hotelsData: "",
      style: {},
      client_data: {},
      api_url: "",
      /* CANVAS */
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false
      /* ----------- */
    }
  },
  methods: {
    getReserva() {
    //this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida + "&Apellido=" + this.dataForRequest.apellido)
      this.axios.get(this.api_url + "/GetAWAReservationPCI?Hotel=" + this.dataForRequest.hotel + "&Localizador=" + this.dataForRequest.localizador + "&FechaEntrada=" + this.dataForRequest.fecha_entrada + "&FechaSalida=" + this.dataForRequest.fecha_salida)
        .then(response => {
          this.client_data = response.data;
          let json = response.data;
          let clienteId = this.$route.query.id - 1;
          this.customersData = response.data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente[clienteId];
          let dc = this.customersData.DC;
          this.data = JSON.parse(localStorage.data);
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

        isCanvasBlank(canvas) {
        return !canvas.getContext('2d')
          .getImageData(0, 0, canvas.width, canvas.height).data
          .some(channel => channel !== 0);
      },

      checkFinish() {
        if (this.isCanvasBlank(this.canvas) && this.data.covid) {
          this.finishCheck = true;
        }
      },

    updateClientData() {
      this.client_data.LSReservas[0].LSReservaHabAWA[0].LSReservaCliente.forEach(element => {
        if (element.NumeroCliente === this.data.numero_cliente) {
          let dc = element.DC;
          element.IDDocumento = this.data.num_documento;
          element.TipoDocumento = this.data.tipo_doc;
          element.FechaExpedicion = this.data.fecha_expedicion;
          element.Pais = this.data.pais_nacimiento;
          element.Email = this.data.email;
          element.FechaNacimiento = this.data.fecha_nacimiento;
          element.Sexo = this.data.sexo;
          element.Nombre = this.data.nombre;
          element.Apellido1 = this.data.primer_apellido;
          element.Apellido2 = this.data.segundo_apellido;
          element.AceptaInfo = this.data.acepta_terminos;
          dc.ApartadoCorreos = null,
          dc.CodigoPostal = this.data.codigo_postal,
          dc.ComunidadAutonoma = "",
          dc.Descripcion = null,
          dc.Direccion = this.data.direccion,
          dc.EMail = null,
          dc.Fax = null,
          dc.Pais = this.data.pais,
          dc.Poblacion = this.data.poblacion,
          dc.Provincia = this.data.provincia,
          dc.Telefono = this.data.telefono,
          dc.TelefonoMovil = null
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
        this.$router.push("/listausuarios?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.$route.query.hotel + "&localizator=" + this.$route.query.localizator + "&fechaentrada" + this.$route.query.fechaentrada + "&fechasalida=" + this.$route.query.fechasalida + "&apellido=" + this.$route.query.apellido);
      })
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
        this.pdfList = profilesJson.default.hotels[0].docs;
      } 

      if (this.$route.query.profile === "other") {
        this.style = profilesJson.other.style;
        this.actualProfile = "other";
        this.api_url = profilesJson.other.api_url;
        this.pdfList = profilesJson.others.hotels[0].docs;
      } 
    },

    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();  
    },
    draw(e) {
      if(this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.finishCheck = true;
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clearCanvas() {
      this.canvas.clearRect(0, 0, 380, 180);
    },
    /* ------------------------------------------------------ */
    applyCssToIframe() {
      let iframes = this.$el.querySelectorAll("iframe");

      iframes.forEach(iframe => {
  
        setTimeout(() => iframe.contentWindow.document.head.innerHTML = '<style>body { overflow: hidden }</style>', 100)
      })
    }

  },

  created() {
    this.checkLang();
    this.checkProfile();
    this.getReserva();
    
  },

  mounted() {
    
    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    var c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
    /* ------------------------------------------------------ */

    if (this.$route.query.lang === "es") {
            document.getElementById("listEsp").classList.add("active");
        } else if (this.$route.query.lang === "en") {
            document.getElementById("listEng").classList.add("active");
        } else if (this.$route.query.lang === "de") {
            document.getElementById("listDe").classList.add("active");
        } else if (this.$route.query.lang === "fr") {
            document.getElementById("listFr").classList.add("active");
        }

    this.applyCssToIframe();
  },

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




</style>