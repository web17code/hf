<style scoped>
  section{
    display: flex;
    justify-content: flex-start;
  }
  .section-left{
    width: 156px;
    display: flex;
    justify-content: center;
  }
  .section-left ul li{
    display: flex;
    justify-content: center;
    margin-top:40px;
    color: #909e9e;
  }
  .section-left ul li a{
    font-size: 16px;
  }
  .section-left ul li i{
    color: inherit;
  }
  .section-left ul li:last-child{
    margin-bottom: 40px;
  }
  .section-left ul li a{
    color: #909e9e;
  }
  .section-left ul li i{
    line-height: 28px;
  }
  .section-left ul li:first-child i{
    line-height: 24px;
  }
  .section-left ul li i{
    margin-right: 4px;
  }
  .section-left ul li:first-child{
    margin-top: 20px;
  }
  .section-right{
    padding: 0 30px 30px 30px;
    position: relative;
  }
  .right-content>li{
    margin-top: 30px;
  }
  .right-content>li>ul{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    width: 980px;
  }
  .right-content>li>ul>li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 50px;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 4px;
  }
  .gouxuan{
    color: #cccccc;
  }
  .right-content>li>ul>li i{
    margin-right: 4px;
  }
  .right-content>li>ul>li>a{
    color: inherit;
  }
  .right-content>li>ul>li>div{
    width: 30px;
    height: 30px;
    border-radius: 4px;
  }
  .right-content>li>ul>li img{
    padding: 4px 0 0 4px;
  }
  .right-content>li>ul>li>a{
    margin-left: 6px;
    width:86px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .message{
    color: #417a76;
  }
  .message>ul>li>div{
    background: #156765;
  }
  .course{
    color:#e2762d;
  }
  .course>ul>li>div{
    background: #e2762d;
  }
  .edu{
    color: #67891b;
  }
  .edu>ul>li>div{
    background: #67891b;
  }
  .work{
    color: #3e517c;
  }
  .work>ul>li>div{
    background: #3e517c;
  }
  .addApp{
    cursor: pointer;
    position: absolute;
    right:20px;
    top:10px;
  }
  .addyy i{
    margin-right: 4px;
  }
</style>

<template>
  <section>
    <div class="section-left">
      <ul>
        <li v-for="(item,index) in items" @click="daohang(index)" :class="{active:item.active}">
          <i class="iconfont" :class="item.icon" v-if="item.active" :style="{color:color}"></i>
          <i class="iconfont" :class="item.icon" v-else="item.active===false"></i>
          <a href="#" v-if="item.active" :style="{color:color}">{{item.name}}</a>
          <a href="#" v-if="item.active===false">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="section-right" :style="{borderLeftColor:color}">
      <div class="addApp">
        <p class="addyy" :style="{color:color}" v-if="addIsShow" @click="addApp"><i class="iconfont icon-zuojiantou" v-if="iconIsshow"></i><i class="iconfont icon-baocun" v-if="!iconIsshow"></i>{{addApplication}}</p>
      </div>
      <ul class="right-content" v-if="myAppshow">
        <li class="message">
          <p>
            <i class="iconfont icon-ijian-copy"></i>
            信息服务
          </p>
          <ul>
            <li v-for="(appName,index) in appNames"  class="message-img" v-if="appName.APP_TYPE_NAME==='信息服务'&&appName.applicationShow">
              <i class="iconfont icon-gouxuan" v-if="gouxuanShow" :class="{gouxuan:!appName.CUSTOM}" @click="addColor(index)"></i>
              <div>
                <img :src=host+appName.APP_LOGO alt="">
              </div>
              <a v-bind:title="appName.APP_NAME" v-bind:href="appName.APP_AUTH_URL" target="_blank">{{appName.APP_NAME}}</a>
            </li>
          </ul>
        </li>
        <li class="course">
          <p>
            <i class="iconfont icon-book"></i>
            课程支持
          </p>
          <ul>
            <li v-for="(appName,index) in appNames" v-if="appName.APP_TYPE_NAME==='课程支持'&&appName.applicationShow">
              <i class="iconfont icon-gouxuan" v-if="gouxuanShow" :class="{gouxuan:!appName.CUSTOM}" @click="addColor(index)"></i>
              <div>
                <img :src=host+appName.APP_LOGO alt="">
              </div>
              <a v-bind:title="appName.APP_NAME" v-bind:href="appName.APP_AUTH_URL" target="_blank">{{appName.APP_NAME}}</a>
            </li>
          </ul>
        </li>
        <li class="edu">
          <p>
            <i class="iconfont icon-book1"></i>
            教育服务
          </p>
          <ul>
            <li v-for="(appName,index) in appNames" v-if="appName.APP_TYPE_NAME==='教育服务'&&appName.applicationShow">
              <i class="iconfont icon-gouxuan" v-if="gouxuanShow" :class="{gouxuan:!appName.CUSTOM}" @click="addColor(index)"></i>
              <div>
                <img :src=host+appName.APP_LOGO alt="">
              </div>
              <a v-bind:title="appName.APP_NAME" v-bind:href="appName.APP_AUTH_URL" target="_blank">{{appName.APP_NAME}}</a>
            </li>
          </ul>
        </li>
        <li class="work">
          <p>
            <i class="iconfont icon-bijiben-copy"></i>
            业务管理
          </p>
          <ul>
            <li v-for="(appName,index) in appNames" v-if="appName.APP_TYPE_NAME==='业务管理'&&appName.applicationShow">
              <i class="iconfont icon-gouxuan" v-if="gouxuanShow" :class="{gouxuan:!appName.CUSTOM}" @click="addColor(index)"></i>
              <div>
                <img :src=host+appName.APP_LOGO alt="">
              </div>
              <a v-bind:title="appName.APP_NAME" v-bind:href="appName.APP_AUTH_URL" target="_blank">{{appName.APP_NAME}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="schoolShow">
      <ul class="right-content">
        <li class="work" style="margin-left: -30px">
          <p>
            <i class="iconfont icon-book1"></i>
            教育服务
          </p>
          <ul>
            <li v-for="school in schools">
              <div>
                <img src="../assets/img/default111.png" style="padding: 5px 0 0 5px;" alt="">
              </div>
              <a v-bind:title="school.WEB_NAME" v-bind:href="school.WEB_URL" target="_blank">{{school.WEB_NAME}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      color: null,
      host: null
    },
    data () {
      return {
        items: [
          {'icon': 'icon-wode', 'name': '我的应用', 'href': '', 'active': false},
          {'icon': 'icon-wujiaoxing2', 'name': '推荐应用', 'href': '', 'active': true},
          {'icon': 'icon-e', 'name': '学校网站', 'href': '', 'active': false}
        ],
//        添加应用显示
        addIsShow: true,
        addApplication: '添加应用',
//        添加应用图标显示
        iconIsshow: true,
//        勾选图标
        gouxuanShow: false,
        gouxuan: null,
//        我的应用显示
        applicationShow: true,
//        所有应用
        appNames: null,
//        添加我的应用
        toMyapp: null,
        toMyappArr: [],
        myAppshow: true,
//        学校网站
        schools: null,
        schoolShow: false
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // 初始化应用名称
        this.$http.get(
          this.host + 'json/Open_queryForList_GetApps.json'
        ).then(function (data) {
          var getData = data.data.data
          this.appNames = getData
          for (var k = 0; k < this.appNames.length; k++) {
            this.appNames[k].applicationShow = true
          }
        })
      })
    },
    methods: {
      // 导航栏切换
      daohang (index) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].active = false
          this.addIsShow = false
        }
        if (index === 1) {
          this.myAppshow = true
          this.addIsShow = true
          this.schoolShow = false
          for (var k = 0; k < this.appNames.length; k++) {
            this.appNames[k].applicationShow = true
          }
        }
        this.items[index].active = true
        if (index === 0) {
          this.myAppshow = true
          this.schoolShow = false
          for (var j = 0; j < this.appNames.length; j++) {
            this.appNames[j].applicationShow = this.appNames[j].CUSTOM
          }
        }
        if (index === 2) {
          this.myAppshow = false
          this.addIsShow = false
          this.schoolShow = true
          this.$nextTick(function () {
            // 学校网站
            this.$http.get(
              this.host + 'json/Open_queryForList_GetTeacherWebUrl.json'
            ).then(function (data) {
              this.schools = data.data.data
            })
          })
        }
      },
//      添加应用文字切换
      addApp () {
        if (this.addApplication === '添加应用') {
          this.gouxuanShow = true
          this.addApplication = '保存'
          this.iconIsshow = false
        } else if (this.addApplication === '保存') {
          this.addApplication = '添加应用'
          this.iconIsshow = true
          this.gouxuanShow = false
          for (var i = 0; i < this.appNames.length; i++) {
            if (this.appNames[i].CUSTOM === true || this.appNames[i].CUSTOM === 1) {
              this.toMyappArr.push(this.appNames[i].APP_PK)
            }
          }
          this.toMyapp = this.toMyappArr.join(',')
          this.$http.get(
            this.host + 'json/Teacher_setCustomeApp_data.json?idstr=' + this.toMyapp
          ).then(function (data) {
            console.log(data)
          })
        }
      },
//      选中的颜色
      addColor (_index) {
        this.appNames[_index].CUSTOM = !this.appNames[_index].CUSTOM
      }
    }
  }
</script>
