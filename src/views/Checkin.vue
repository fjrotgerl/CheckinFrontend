<template style="overflow: hidden">
  <div>
    <h1>Checkin</h1>

    <!-- ------------------------------------ -->
    <!-- FIRMA -->
    <!-- ------------------------------------ -->
    <button class="red-button" @click="clearCanvas">Ver Reserva</button> 

    <div class="row center-block" style="">
      <canvas id="myCanvas" width="380" height="180" @mousemove="draw" @mousedown="beginDrawing" @mouseup="stopDrawing" />
    </div>

    <button class="button" @click="clearCanvas">Limpiar</button> 
    <button class="button" @click="confirmCheckin">Confirmar</button> 
    <!-- ------------------------------------ -->

    <div id="test" style=" width: 700px; height: 800px; overflow: scroll; overflow-x: hidden">
      <div v-for="pdf in pdfList" v-bind:key="pdf">
        <div v-if="$route.query.id == 1" >
          <iframe seamless='seamless' frameborder="0" scrolling="yes"  :src="'ficheros/' + pdf + 'eng_txt.txt'" ></iframe>
        </div>
        <div v-if="$route.query.id != 1 && !pdf.includes('Doc_1')">
          <iframe :src="'ficheros/' + pdf + 'eng_txt.txt'" ></iframe>
        </div>
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
import json from './../static/config/lang.json'
import profilesJson from './../static/config/profiles.json'


export default {
  name: "Checkin",
  data() {
    return {
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
        this.$router.push("/listausuarios?lang=" + this.actualLang + "&profile=" + this.actualProfile + "&hotel=" + this.$route.query.hotel + "&localizator=" + this.$route.query.localizator + "&fechaentrada" + this.$route.query.fechaentrada + "&fechasalida=" + this.$route.query.fechasalida + "&apellido=" + this.$route.query.apellido);
      })
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

    /* ------------------------------------------------------ */
    /* CANVAS */
    /* ------------------------------------------------------ */
    confirmCheckin() {
      this.$router.push("/clientes");
    },
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
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#myCanvas {
  border: 1px solid grey;
}


</style>