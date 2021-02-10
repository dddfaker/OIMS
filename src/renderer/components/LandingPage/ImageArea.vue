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
        let imgInfo = JSON.parse(JSON.stringify(this.$store.state.File.params1.fileList[nv]))
        this.ShowImage(canvas1, imgInfo)
      } else {
        canvas1.clear()
      }
    },
    img2Name (nv, ov) {
      if (nv !== '') {
        let imgInfo = JSON.parse(JSON.stringify(this.$store.state.File.params2.fileList[nv]))
        this.ShowImage(canvas2, imgInfo)
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
    // 将图片设置为背景，并调整图片与画布大小。若有量测数据，则渲染至画布上
    ShowImage (canvas, imgInfo) {
      let that = this
      let img = new Image()
      img.src = imgInfo.path
      img.onload = () => {
        let ratio = img.height / img.width
        let scale = canvas.height / img.height
        let originalHeight = img.height
        canvas.setWidth(canvas.height / ratio)
        canvas.setBackgroundImage(imgInfo.path, canvas.renderAll.bind(canvas), {
          top: 0,
          left: 0,
          scaleX: scale,
          scaleY: scale
        })
        if (imgInfo.isMeasured) {
          let parseRes = that.ParseResult(imgInfo.measureRes, scale, originalHeight)
          let filename = imgInfo.path.split('\\').pop()
          let tempItem = JSON.parse(JSON.stringify(that.$store.state.File.params2.fileList[filename]))
          tempItem.isParsed = true
          tempItem['parseRes'] = parseRes
          // 改后会导致文件列表项被刷新！！！！
          that.$store.commit('ChangeFileListItem', {
            flag: 2,
            filename: filename,
            fileListItem: tempItem
          })
        }
      }
    },
    ParseResult (measureRes, scale, originalHeight) {
      let parseRes = {}
      let sXmin = this.RestoreX(measureRes.sacrum.xmin, scale)
      let sYmin = this.RestoreY(measureRes.sacrum.ymin, scale, originalHeight)
      let sXmax = this.RestoreX(measureRes.sacrum.xmax, scale)
      let sYmax = this.RestoreY(measureRes.sacrum.ymax, scale, originalHeight)
      let f1Xmin = this.RestoreX(measureRes.femoralhead1.xmin, scale)
      let f1Ymin = this.RestoreY(measureRes.femoralhead1.ymin, scale, originalHeight)
      let f1Xmax = this.RestoreX(measureRes.femoralhead1.xmax, scale)
      let f1Ymax = this.RestoreY(measureRes.femoralhead1.ymax, scale, originalHeight)
      let p0 = [sXmin, sYmin]
      let p1 = [sXmax, sYmax]
      let p3 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2]
      let p5 = [(f1Xmin + f1Xmax) / 2, (f1Ymin + f1Ymax) / 2]
      let p2 = p5
      let p6 = null
      // 第二个股骨头可能不存在
      if (measureRes.hasOwnProperty('femoralhead2')) {
        let f2Xmin = this.RestoreX(measureRes.femoralhead2.xmin, scale)
        let f2Ymin = this.RestoreY(measureRes.femoralhead2.ymin, scale, originalHeight)
        let f2Xmax = this.RestoreX(measureRes.femoralhead2.xmax, scale)
        let f2Ymax = this.RestoreY(measureRes.femoralhead2.ymax, scale, originalHeight)
        p6 = [(f2Xmin + f2Xmax) / 2, (f2Ymin + f2Ymax) / 2]
        p2 = [(p5[0] + p6[0]) / 2, (p5[1] + p6[1]) / 2]
      }
      parseRes = {
        'p0': p0,
        'p1': p1,
        'p2': p2,
        'p3': p3,
        'p5': p5,
        'p6': p6
      }
      return parseRes
    },
    // 还原x坐标
    RestoreX (x, scale) {
      let res = Number.parseInt(x) * 5 * scale
      return Number.parseInt(res)
    },
    // 还原y坐标
    RestoreY (y, scale, originalHeight) {
      let res = (Number.parseInt(y) * 5 + originalHeight / 2) * scale
      return Number.parseInt(res)
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