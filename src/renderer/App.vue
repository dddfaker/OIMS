<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'oims'
  }
</script>

<style>
  body{
    margin: 0;
    height: 100vh;
    font-family: "微软雅黑";
  }
  #app{
    height: 100%;
  }
  
  .el-card__header {
    padding: 15px 20px !important;
  }
  .el-card__body{
    padding: 0 !important;
  }
  
  .el-divider{
    width: auto !important;
    margin: 8px 16px !important;
  }

  .cell{
    text-overflow: unset !important;
  }
  
</style>
