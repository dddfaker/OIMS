<template>
  <div class="main-container">
    <div class="tool-header">
      <tool-header></tool-header>
    </div>
    <div class="main-content">
      <div class="main-panel">
        <div class="sub-tool-header">
          <sub-tool-header></sub-tool-header>
        </div>
        <div class="img-area">
          <image-area></image-area>
        </div>
      </div>
      <div class="side-panel">
        <result-box></result-box>        
        <file-list-area></file-list-area>
      </div>
    </div>
  </div>
</template>

<script>
import Toolheader from './LandingPage/ToolHeader'
import SubToolHeader from './LandingPage/SubToolHeader'
import ResultBox from './LandingPage/ResultBox'
import FileListArea from './LandingPage/FileListArea'
import ImageArea from './LandingPage/ImageArea'

export default {
  components: {
    'tool-header': Toolheader,
    'sub-tool-header': SubToolHeader,
    'result-box': ResultBox,
    'file-list-area': FileListArea,
    'image-area': ImageArea
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
  @tool_header_height: 52px;
  @sub_tool_header_height: 36px;
  .main-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
  .tool-header{
    flex: 0 0 @tool_header_height;
  }
  .sub-tool-header{
    flex: 0 0 @sub_tool_header_height;
  }
  .main-content{
    flex: 1 1 auto;
    flex-direction: row;
    display: flex;
  }
  .main-panel{
    display: flex;
    flex-direction: column;
    width: 70%;
    background: #c8c8c8;
  }
  .img-area{
    flex: 1 1 auto;
    height: 100%;
    padding: 10px;
  }
  .side-panel{
    display: flex;
    flex-direction: column;
    width: 30%;
    background: #f0f2f3;
    box-shadow: -4px 80px 10px #bcbcbc;
  }
</style>
