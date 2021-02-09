<template>
  <div class="image-area-content">
    <div ref="imgBox" @click="SelectImgBox(1)"
        :class="['img-box', selectedBox===1?'img-box-selected':'']">
      <canvas id="canvas1"></canvas>
    </div>
    <div @click="SelectImgBox(2)"
        :class="['img-box', selectedBox===2?'img-box-selected':'']">
      <canvas id="canvas2"></canvas>
    </div>
  </div>
</template>

<script>
import { fabric } from 'fabric'

var canvas1 = null
var canvas2 = null

export default {
  data () {
    return {
    }
  },
  computed: {
    img1Name () {
      return this.$store.state.File.params1.curFilename
    },
    img2Name () {
      return this.$store.state.File.params2.curFilename
    },
    selectedBox () {
      return this.$store.state.File.selectedImgBox
    }
  },
  watch: {
    img1Name (nv, ov) {
      if (nv !== '') {
        this.FitBgToCanvas(canvas1, this.$store.state.File.params1.dirPath + nv)
      } else {
        canvas1.clear()
      }
    },
    img2Name (nv, ov) {
      if (nv !== '') {
        this.FitBgToCanvas(canvas2, this.$store.state.File.params2.dirPath + nv)
      } else {
        canvas2.clear()
      }
    }
  },
  methods: {
    SelectImgBox (flag) {
      this.$store.commit('ChangeSelectedImgBox', {
        flag: flag
      })
    },
    FitBgToCanvas (canvas, bgPath) {
      let img = new Image()
      img.src = bgPath
      img.onload = () => {
        let ratio = img.height / img.width
        let scale = canvas.height / img.height
        canvas.setWidth(canvas.height / ratio)
        canvas.setBackgroundImage(bgPath, canvas.renderAll.bind(canvas), {
          top: 0,
          left: 0,
          scaleX: scale,
          scaleY: scale
        })
      }
    }
  },
  mounted () {
    const that = this
    that.$nextTick(() => {
      canvas1 = new fabric.Canvas('canvas1')
      canvas2 = new fabric.Canvas('canvas2')
      let imgBoxHeight = this.$refs.imgBox.clientHeight
      canvas1.setHeight(imgBoxHeight - 5)
      canvas2.setHeight(imgBoxHeight - 5)
    })
  }
}
</script>

<style lang="less">
  // 图片框
  .image-area-content{
    display: flex;
    justify-content: space-around;
    height: 100%;
  }
  .img-box{
    height: 100%;
    width: 50%;
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 20px 0px #bababa;
  }
  .img-box::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  .img-box::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 3px;
  }
  .img-box-selected {
    box-shadow: 0px 0px 18px 0px #6958c7;
  }
</style>