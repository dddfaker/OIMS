<template>
  <el-card class="result-box-content">
    <div slot="header">
      <span class="result-title">量测结果</span>
    </div>
    <div class="result-content" v-if="isParsed2">
      <div>ss: {{result.ss}}</div>
      <div>pt: {{result.pt}}</div>
      <div>pi: {{result.pi}}</div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      result: {
        'ss': '',
        'pt': '',
        'pi': ''
      }
    }
  },
  computed: {
    isParsed2 () {
      let curFilename = this.$store.state.File.params2.curFilename
      let resList = this.$store.state.File.params2.resList
      if (resList[curFilename]) {
        return this.$store.state.File.params2.resList[curFilename].isParsed
      } else {
        return false
      }
    }
  },
  watch: {
    isParsed2 (nv, ov) {
      if (nv) {
        let curFilename = this.$store.state.File.params2.curFilename
        let parseRes = JSON.parse(JSON.stringify(this.$store.state.File.params2.resList[curFilename].parseRes))
        this.result = this.CalResult(parseRes)
      } else {
        this.result = {
          'ss': '',
          'pt': '',
          'pi': ''
        }
      }
    }
  },
  methods: {
    CalResult (parseRes) {
      let ss = Math.atan((parseRes.p1[1] - parseRes.p0[1]) / (parseRes.p1[0] - parseRes.p0[0])) *
                180 / Math.PI
      let pt = 90.0 - (Math.atan((parseRes.p3[1] - parseRes.p2[1]) / (parseRes.p3[0] - parseRes.p2[0])) *
                180 / Math.PI)
      let pi = ss + pt
      return {
        'ss': ss.toFixed(2),
        'pt': pt.toFixed(2),
        'pi': pi.toFixed(2)
      }
    }
  }
}
</script>

<style lang="less">
  @result_box_height_ratio: 55%;
  // 量测结果栏
  .result-box-content{
    margin: 8px 8px 0px 8px;
    height: @result_box_height_ratio;
  }
  .result-title{
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }
  .result-content{
    padding: 20px;
  }
</style>