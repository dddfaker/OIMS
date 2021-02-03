<template>
  <el-card class="result-box-content">
    <div slot="header">
      <span class="result-title">量测结果</span>
    </div>
    <div class="result-content">
      <div v-for="o in 4" :key="o">
        {{'量测项目 ' + o }}
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
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