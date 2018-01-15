<style scoped>
  nav{
    display: flex;
    justify-content: space-between;
    /*height: 60px;*/
    align-items: center;
  }
  nav ul{
    display: flex;
    justify-content: flex-start;
  }
  nav ul li{
    display: flex;
    padding: 6px 0 0 0;
    margin-right: 60px;
    color: #666;
    font-size: 16px;
    flex-direction: column;
    align-items: center;
  }
  nav ul li a{
    color: inherit;
    font-size: 16px;
  }
  nav ul li.active a{
    color: inherit;
  }
  nav ul li.active b{
    width:140%;
    height: 4px;
    margin-top: 2px;
    border-radius: 2px;
  }
  nav .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #156765;
    border:1px solid #156765;
    background: transparent;
    margin-right: 26px;
    border-radius: 4px;
    cursor: pointer;
    width: 60px;
    height: 32px;
  }
  nav .btn span{
    font-size: 24px;
    font-weight:300;
    margin-right: 4px;
  }

</style>
<style>
  .el-tabs{
    width:100%;
  }
  .el-tabs__nav-scroll{
    height:60px;
  }
  .el-tabs__item{
    font-size: 16px;
  }
  .el-tabs__item.is-active{
    color: inherit!important;
  }
  .el-tabs__active-bar{
    background-color: transparent!important;
    border-bottom: 3px solid;
  }
  .el-tabs__header{
    border-bottom-color: inherit!important;
  }
</style>

<template>
  <nav :style="{borderBottomColor:color}">
    <el-tabs v-model="activeName" @tab-click="getColor(ele)" :style="{color:color}">
      <!--<el-tab-pane label="推荐" disabled></el-tab-pane>-->
      <el-tab-pane label="导航" name="first"><my-content :color="color" :host="host"></my-content></el-tab-pane>
      <!--<el-tab-pane label="视频" name="second"><iframe scrolling="auto" width="100%" height="100%" style="min-height: 520px" src="http://xyys.qpedu.cn/video/toQpIndex.action" frameborder="0"></iframe></el-tab-pane>
      <el-tab-pane label="图片" name="third"><iframe scrolling="auto" width="100%" height="100%" style="min-height: 520px" src="http://photo.qpedu.cn/Eduplate/PicLibrary/Web/SubjectIndex.aspx" frameborder="0"></iframe></el-tab-pane>-->
    </el-tabs>
  </nav>
</template>

<script>
  import myContent from './content.vue'
  export default {
    components: {
      myContent
    },
    props: {
      parentData: null,
      host: null
//      color: null
    },
    data () {
      return {
        navs: [
          {'name': '导航', 'active': true, 'link': 'content'},
          {'name': '视频', 'active': false, 'link': 'video'},
          {'name': '图片', 'active': false, 'link': 'pic'}
        ],
        activeName: 'first'
      }
    },
    computed: {
      // 子组件数据处理
      color () {
        return this.parentData
      }
    },
    methods: {
      getColor (ele) {
        console.log(ele)
      }
    }
  }
</script>

