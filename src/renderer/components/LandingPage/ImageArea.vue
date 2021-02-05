<template>
  <div class="image-area-content">
    <div class="img-box" ref="imgBox">
      <img :src="img1" :height="img1Height">
    </div>
    <div class="img-box">
      <img :src="img2" :height="img2Height">
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  data () {
    return {
      img1Height: 'auto',
      img2Height: 'auto'
    }
  },
  computed: {
    img1 () {
      return this.$store.state.File.params1.curFilePath
    },
    img2 () {
      return this.$store.state.File.params2.curFilePath
    }
  },
  mounted () {
    const that = this
    var erd = elementResizeDetectorMaker()
    // 监听容器高度变化（窗口变化），动态地改变图片大小
    erd.listenTo(that.$refs.imgBox, (element) => {
      that.$nextTick(() => {
        that.$data.img1Height = element.clientHeight - 5
        that.$data.img2Height = element.clientHeight - 5
      })
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
</style>