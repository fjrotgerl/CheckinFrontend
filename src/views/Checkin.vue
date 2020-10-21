<template>
  <div>
    <h1>Checkin</h1>

    <button class="red-button" @click="clearCanvas">Ver Reserva</button> 

    <div class="row center-block" style="">
      <canvas id="myCanvas" width="380" height="180" @mousemove="draw" @mousedown="beginDrawing" @mouseup="stopDrawing" />
    </div>

    <button class="button" @click="clearCanvas">Limpiar</button> 
    <button class="button" @click="confirmCheckin">Confirmar</button> 

  
  </div>
</template>

<script>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  name: "Checkin",
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false
    }
  },
  methods: {
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
    }

  },
  mounted() {
    var c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
  }
}
</script>

<style scoped>
html body {
    padding: 0px;
    margin: 0px;
}

#myCanvas {
  border: 1px solid grey;
}

.center-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>