<style>
  .main{
    width:100%;
    min-height:900px;
    padding-top: 10px;
    /*background: url("./assets/img/bg.jpg");*/
    background-size: auto;
    min-width: 1200px;
    height:auto!important;
    height:900px;
  }
  .wrapper{
    width: 1200px;
    margin:0 auto;
    background: #ffffff;
    opacity: 0.9;
    height:100%;
  }
  header{
    width:100%;
    background: #ffffff;
    opacity: 0.9;
  }
  header>div{
    width: 1200px;
    height: 80px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head-left{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .head-left img{
    max-width: 156px;
    max-height:79px;
  }
  .time{
    font-size: 14px;
    margin-left: 10px;
  }
  .head-right{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    line-height: 23px;
  }
  .head-right span{
    cursor: pointer;
  }
  .head-right>ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .head-right>ul>li{
    display: flex;
    align-items: center;
    margin: 0 36px 0 0;
    cursor: pointer;
  }
  .head-right ul li>img{
    margin-right: 10px;
    max-height: 36px;
    max-width: 36px;
  }
  .head-right ul li:first-child{
    position: relative;
  }
  .head-right ul li:first-child img{
    display: none;
  }
  .head-right ul li a{
    font-size: 16px;
    color: #156765;
  }
  .head-right>span{
    font-size: 16px;
    margin-right: 10px;
  }
  .ivu-select-dropdown{
    z-index:1001;
  }
  header button{
    font-size: 14px;
    background: transparent;
    margin-left: 8px;
    cursor: pointer;
    line-height: 2px;
    height: 20px;
    padding: 0 6px;
  }
  /*.person{*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*border-radius: 50%;*/
    /*margin-right: 10px;*/
    /*background: #cccccc;*/
  /*}*/
  .person img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background: #cccccc;
    border-style: none;
  }
  .banquan{
    height: 50px;
    width:100%;
    background: #ffffff;
    opacity: 0.9;
  }
  .banquan div{
    width:1200px;
    margin:0 auto;
  }
  .banquan div p{
    text-align: center;
    line-height: 50px;
    z-index: 111;
  }
  object{
    width:1px;
    height:1px;
    position: absolute;
    left:-36px;
    top:0;
  }
  .btn123{
    margin-left: 10px;
  }
  .mtk{
    margin-left: 100px;
  }
  .mtk>p>span{
    margin-left:20px;
  }
  .passWd>div{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .passWd>div label{
    display: flex;
    width:20%;
    align-items: center;
    justify-content: center;
  }
  .passWd>div .el-input__inner{
    width: 80%!important;
  }
  .el-tabs .el-tabs__header{
    margin: 0!important;
    height:60px;
  }
  .el-tabs__item{
    font-size: 16px;
  }
  .el-tabs__nav{
    margin: 9px 0 0 60px;
  }
  #app{
    background-size: cover;
    background-repeat: no-repeat;
  }
  .el-badge__content{
    position: absolute;
    top:-20px;
    right:-20px;
  }
  /*add avatar css start*/
  .avatar-uploader .el-upload {
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 178px;
    height: 178px;
    display:block;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px!important;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  /*add avatar css end*/
</style>

<template>
  <div id="app" :style="{backgroundImage:'url('+host+skin.bgImg+')'}">
    <!--<header-top :parentData="msg" v-on:headerToApp="openColor" :getIndex="getIndex"></header-top>-->
    <!--模态框-->
    <el-dialog
      title="个人信息:"
      :visible.sync="dialogVisible">
      <div class="mtk">
        <p>&nbsp;&nbsp;姓名:<span>{{userInfo.XM}}</span></p>
        <p>身份证号:<span>{{userInfo.SFZJH}}</span></p>
        <p>邮箱地址:<span>{{userInfo.EMAIL}}</span></p>
        <p>出生年月:<span>{{userInfo.CSRQ}}</span></p>
        <p>所属单位:<span>{{userInfo.FK_UNITNAME}}</span></p>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改密码:"
      :visible.sync="dialogVisible2">
      <div class="passWd">
        <div>
          <label>原密码:</label><el-input type="password" v-model="input1" placeholder="请输入原密码"></el-input>
        </div>
        <div>
          <label>新密码:</label><el-input type="password" v-model="input2" placeholder="请输入新密码"></el-input>
        </div>
        <div>
          <label>确认密码:</label><el-input type="password" v-model="input3" placeholder="请再次输入密码"></el-input>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible2 = false">取 消</el-button>
      <el-button type="primary" @click="pwdConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!--add change avatar-->
    <el-dialog
      title="更换头像:"
      :visible.sync="dialogVisible3">

        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :data="uploadParams"
          :show-file-list="false"
          name="fileload"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>


      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible3 = false">取 消</el-button>
      <el-button type="primary" @click="avatarConfirm">保存</el-button>
      </span>
    </el-dialog>
    <!--add change avatar-->

    <header>
      <div class="wrap">
        <div class="head-left">
          <img :src="skin.logo" alt="" border="0">
          <div class="time" :style="{color:skin.color}">{{a|data}}</div>
        </div>
        <div class="head-right">
          <ul>
            <li v-for="(head,index) in skin.heads" @click="changeSkin2(index)">
              <img :src="head.src" alt="">
              <a :style="{color:skin.color}">{{head.name}}
                <OBJECT classid=clsid:5EEEA87D-160E-4A2D-8427-B6C333FEDA4D id="RTXAX" v-if="head.isRtx"></OBJECT>
                <el-badge :value=emailNum class="item" v-if="head.email">
                </el-badge>
              </a>
            </li>
          </ul>
          <div class="person">
            <img :src="touxiang" alt="用户头像">
          </div>
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link" :style="{color:skin.color}">{{userInfo.XM}}
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="baseInfo">基础信息</el-dropdown-item>
              <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
              <el-dropdown-item command="changeavatar">更换头像</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <button class="btn123" :style="{color:skin.color,borderColor:skin.color}" @click="zhuxiao">注销</button>
        </div>
      </div>
    </header>
    <div class="main">
      <div class="wrapper">
        <my-nav :parentData="skin.color" :host="host"></my-nav>
      </div>
    </div>
    <skin v-on:colorToAll="getColor" v-on:colorToAllBg="getColorBg" :textBg="clickSkin" :host="host" v-if="isShow" v-on:childIsShow1="childShow1" v-on:childIsShow2="childShow2" :picBg="bgSkin" :skin="skin" v-on:colorToAllBgPic="getColorBgPic" v-on:oldSkin="oldSkin"></skin>
    <div class="banquan">
      <div>
        <p>版权所有:上海市青浦教育局  技术支持:青浦教育信息中心 地址:上海市青浦公园路301号  联系我们</p>
      </div>
    </div>
  </div>
</template>

<script>
  import skin from './components/skin'
  import myNav from './components/nav.vue'
  import './assets/font/iconfont.css'

  export default {
    components: {
      myNav,
      skin
    },
    name: 'app',
    data () {
      return {
//        邮件数量
        emailNum: null,
        touxiang: null,
        host: null,
//        模态框
        dialogVisible: false,
        dialogVisible2: false,
        dialogVisible3:false,//上传头像
//        修改密码
        input1: null,
        input2: null,
        input3: null,
        skin: {
          'msg': null,
          'bgImg': null,
          'color': null,
          'logo': null,
          'heads': [
            { 'src': null, 'name': 'RTX', 'isRtx': true },
            { 'src': null, 'name': '消息' },
            {'src': null, 'name': '邮箱', 'email': true},
            { 'src': null, 'name': '换肤' }
          ]
        },
        msg: null,
//        背景图片
        bgImg: null,
//        文字颜色
        color: null,
        isShow: null,
        getIndex: null,
        clickSkin: null,
        bgSkin: null,
        name: null,
        a: new Date(),
//        用户信息
        userInfo: null,
        isOpen: false,
        protocal: null,
        whost: null,
        appNames: null,
//        heads: [
//          { 'src': null, 'name': 'RTX', 'isRtx': true },
//          { 'src': null, 'name': '消息' },
//          {'src': null, 'name': '邮箱', 'email': true},
//          { 'src': null, 'name': '换肤' }
//        ],
        logo: null,
        /*add avatar data*/
        imageUrl: '',
        uploadParams:{"judge":"4","fileloadFileName":""},
        uploadUrl:"",
        uploadedUrl:""
        /*add avatar data*/
      }
    },
    mounted: function () {
      // this.$nextTick(function () {
      this.$http.get(
        'https://portal.qpedu.cn/TeacherPortal/json/Common_getContestPath.json?rand=' + Math.random()
      ).then(function (data) {
        var host = data.data.data
        this.host = host;
        this.uploadUrl=this.host+"json/Upload_image_data.json"
        this.$nextTick(function () {
          // 初始化页面
          this.$http.get(
            host + 'json/ThemeUser_queryForObject_selectScThemeUser.json?rand=' + Math.random()
          ).then(function (data) {
            var getData = data.data.data
            let localstor = window.localStorage
            localstor.setItem('oldSkin', JSON.stringify(getData))
            this.skin.bgImg = getData.backgroundImg
            // 背景
            this.skin.msg = getData.wordColor
            // 文字颜色处理
            this.skin.color = getData.wordColor
            // logo处理
            this.skin.logo = this.host + getData.customLogo
            // 图标
            this.skin.heads[0].src = this.host + getData.rtxIcon
            this.skin.heads[1].src = this.host + getData.newsIcon
            this.skin.heads[2].src = this.host + getData.emailIcon
            this.skin.heads[3].src = this.host + getData.themeIcon
          })
          //          初始化用户信息
//          this.$nextTick(function () {
          this.$http.get(
            host + 'json/Common_getUser_data.json?rand=' + Math.random()
          ).then(function (data) {
            this.userInfo = data.data.data;
            //头像显示
            if(this.userInfo.ZP==""){
              if (this.userInfo.GENDER === '男') {
                this.touxiang = this.host + 'portalseting/img/default/head-man.png'
              } else if (this.userInfo.GENDER === '女') {
                this.touxiang = this.host + 'portalseting/img/default/head-woman.png'
              }
            }else{
                this.touxiang = this.host + this.userInfo.ZP;
            }

//            })
          })
          //          初始化未读邮件数量
          this.$nextTick(function () {
            this.$http.post(
              host + 'json/Teacher_getUnreadMail163Msg_data.json?rand=' + Math.random()
            ).then(function (data) {
              this.emailNum = data.data.data.toString()
            })
          })
        })
      })
      //  })
//      五分钟查询一次未读邮件
      setInterval(function () {
        this.$nextTick(function () {
          this.$http.post(
            this.host + 'json/Teacher_getUnreadMail163Msg_data.json?rand=' + Math.random()
          ).then(function (data) {
            this.emailNum = data.data.data.toString()
          })
        })
      }, 300000)
    },
    methods: {
      // 点击换肤,更换图标
      getColor: function (b) {
        this.getIndex = b
        this.skin.logo = this.host + this.clickSkin[b].customLogo
        this.skin.heads[0].src = this.host + this.clickSkin[b].rtxIcon
        this.skin.heads[1].src = this.host + this.clickSkin[b].newsIcon
        this.skin.heads[2].src = this.host + this.clickSkin[b].emailIcon
        this.skin.heads[3].src = this.host + this.clickSkin[b].themeIcon
        this.skin.color = this.clickSkin[b].wordColor
      },
      // 更换背景
      getColorBg: function (b) {
        this.skin.bgImg = this.clickSkin[b].backgroundImg
      },
      getColorBgPic: function (b) {
        this.skin.bgImg = this.bgSkin[b].color
      },
      // 显示换肤框
      childShow1: function (data) {
        this.isShow = data
//        this.skin = data[1]
      },
      childShow2: function (data) {
        let storage = window.localStorage
        for (var i = 0; i < storage.length; i++) {
          var key = storage.key(i)
          if (key === 'oldSkin') {
            // this.skin = JSON.parse(storage.getItem('oldSkin'))
            var changeSkin = JSON.parse(storage.getItem('oldSkin'))
            this.skin.bgImg = changeSkin.backgroundImg
            // 背景
            this.skin.msg = changeSkin.wordColor
            // 文字颜色处理
            this.skin.color = changeSkin.wordColor
            this.skin.logo = this.host + changeSkin.customLogo
            this.skin.heads[0].src = this.host + changeSkin.rtxIcon
            this.skin.heads[1].src = this.host + changeSkin.newsIcon
            this.skin.heads[2].src = this.host + changeSkin.emailIcon
            this.skin.heads[3].src = this.host + changeSkin.themeIcon
            this.skin.color = changeSkin.wordColor
          }
        }
        this.isShow = data
        this.$forceUpdate()
//        this.skin = data[1]
      },
      // 点击换肤,获取总数据
      changeSkin2: function (_index) {
//        点击RTX
        if (_index === 0) {
          this.$nextTick(function () {
            this.$http.get(
              this.host + 'json/Teacher_getRtxinfo_data.json'
            ).then(function (data) {
              if (data.code === '0000') {
                var key = data.data.sessionkey
                var ip = data.data.data.ip
                var account = data.data.account
                var RTXAX = document.getElementById('RTXAX')
                var RTXCRoot = RTXAX.GetObject('KernalRoot')
                RTXCRoot.loginSessionKey(ip, 8000, account, key)
              }
            }).error(function (data) {
              alert('操作失败,请稍后重试')
            })
          })
        }
//        点击消息
        if (_index === 1) {
          window.open('http://msg.qpedu.cn/front')
        }
//        点击邮箱
        if (_index === 2) {
          window.open(this.host + '/mail163.jsp')
        }
//        点击换肤
        if (_index === 3) {
          this.$nextTick(function () {
            this.$http.get(
              this.host + 'json/ThemeFestival_queryForDefaultList_selectThemeFestivalDefault.json'
            ).then(function (data) {
              var getData = data.data.data
              this.clickSkin = getData
            })
            this.$http.get(
              this.host + 'json/Theme_queryForList_selectThemeIsStyle.json?isStyle=3'
            ).then(function (data) {
              var getData = data.data.data
              this.bgSkin = getData
            })
          })
          this.isShow = !this.isShow
        }
      },
      handleCommand (command) {
//        用户信息
        if (command === 'baseInfo') {
          this.dialogVisible = true
        }
//        修改密码
        if (command === 'changePwd') {
          this.dialogVisible2 = true
        }
//        修改头像
        if(command === 'changeavatar'){
          this.dialogVisible3 = true
        }
      },
//      修改密码确定
      pwdConfirm () {
        if (this.input1 === null) {
          this.$alert('请输入原密码', '系统提示', {
            confirmButtonText: '确定'
          })
          this.input1 = this.input2 = this.input3 = null
          return
        }
        if (this.input2 === null) {
          this.$alert('请输入新密码', '系统提示', {
            confirmButtonText: '确定'
          })
          this.input1 = this.input2 = this.input3 = null
          return
        }
        if (this.input3 === null) {
          this.$alert('请输入确认密码', '系统提示', {
            confirmButtonText: '确定'
          })
          this.input1 = this.input2 = this.input3 = null
          return
        }
        if (this.input2 !== this.input3) {
          this.$alert('两次输入密码不一致', '标题名称', {
            confirmButtonText: '确定'
          })
          this.input1 = this.input2 = this.input3 = null
          return
        }
        this.$http.post(
          this.host + 'json/Teacher_changPassword_data.json', {'userPasswordOld': this.input1, userPassword: this.input2}, {emulateJSON: true}
        ).then(function (data) {
          if (data.data.code !== '0000') {
            this.$alert(data.data.data, '修改密码', {
              confirmButtonText: '确定'
            })
          } else {
            this.$alert('密码修改成功', '修改密码', {
              confirmButtonText: '确定'
            })
            this.dialogVisible2 = false
          }
        })
      },
//      更换头像确认
      avatarConfirm () {
        if(this.uploadedUrl==""){
              return false;
        }
        this.$http.get(
            this.host+"json/UserPhoto_addUserPhoto_data.json",
            {params: {ZP:this.uploadedUrl,userpk:this.userInfo.GUID}}
            ).then(function(data){
                this.touxiang = this.host+this.uploadedUrl;
        });
        this.dialogVisible3 = false;
      },
      /*add methods about change avatar*/
      handleAvatarSuccess(res, file) {
        if(res.code=="0000"){
          this.$message({
            message:"上传头像成功，确认更换请点保存",
            type:"success",
            showClose: true
          })
          this.imageUrl = URL.createObjectURL(file.raw);//js端采用的预览
          this.uploadedUrl=res.data.upFileUrl;
        }else{
          this.$message({
            message:"上传头像失败！",
            type:"error",
            showClose: true
          })
        }
      },
      beforeAvatarUpload(file) {
        const isPic = (file.type === 'image/jpeg')||(file.type === 'image/png');
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isPic) {
          this.$message({
            message:"上传头像图片只能是JPG或Png格式!",
            type:"error",
            showClose: true
          })
        }
        if (!isLt2M) {
          this.$message({
            message:"上传头像图片大小不能超过 2MB!",
            type:"error",
            showClose: true
          })
        }
        this.uploadParams.fileloadFileName=file.name;
        return isPic && isLt2M;
      },
      /*add methods about change avatar*/
//      注销用户
      zhuxiao () {
//        this.$http.get(this.host + 'logout.jsp').then(function (data) {
        window.location.href = 'logout.jsp?rand=' + Math.random()

//        })
      }
    },
    filters: {
//      初始化时间
      data: function (input) {
        var d = new Date(input)
        var year = d.getFullYear()
        var month = d.getMonth() + 1
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
        var dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        return year + '-' + month + '-' + day + ' ' + ' ' + dayNames[d.getDay()]
      }
    }
  }
</script>
