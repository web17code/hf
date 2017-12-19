<style scoped>
    main {
        width: 100%;
        min-height: 900px;
        padding-top: 10px;
        /*background: url("./assets/img/bg.jpg");*/
        background-size: auto;
        min-width: 1200px;
    }

    .wrapper {
        width: 1200px;
        margin: 0 auto;
        background: #ffffff;
        opacity: 0.9;
    }

    header {
        width: 100%;
        background: #ffffff;
        opacity: 0.9;
    }

    header > div {
        width: 1200px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .head-left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .time {
        font-size: 14px;
        margin-left: 10px;
    }

    .head-right {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        line-height: 23px;
    }

    .head-right span {
        cursor: pointer;
    }

    .head-right > ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .head-right > ul > li {
        display: flex;
        align-items: center;
        padding: 0 36px 0 0;
    }

    .head-right ul li > img {
        margin-right: 10px;
        max-height: 36px;
        max-width: 36px;
    }

    .head-right ul li a {
        font-size: 16px;
        color: #156765;
    }

    .head-right > span {
        font-size: 16px;
        margin-right: 10px;
    }

    .ivu-select-dropdown {
        z-index: 1001;
    }

    header button {
        font-size: 14px;
        background: transparent;
        margin-left: 8px;
        cursor: pointer;
        line-height: 2px;
        height: 20px;
        padding: 0 6px;
    }

    .person {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        background: #cccccc;
    }

    .banquan {
        height: 50px;
        width: 100%;
        background: #ffffff;
        opacity: 0.9;
        position: absolute;
    }

    .banquan div {
        width: 1200px;
        margin: 0 auto;
    }

    .banquan div p {
        text-align: center;
        line-height: 50px;
        z-index: 111;
    }

    object {
        width: 1px;
        height: 1px;
    }

    .btn {
        margin-left: 10px;
    }

    .mtk {
        margin-left: 100px;
    }

    .passWd > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }

    .passWd > div label {
        display: flex;
        width: 20%;
        align-items: center;
        justify-content: center;
    }

    .passWd > div .el-input__inner {
        width: 80% !important;
    }
</style>

<template>
    <div id="app" :style="{backgroundImage:'url('+host+bgImg+')'}">
        <!--<header-top :parentData="msg" v-on:headerToApp="openColor" :getIndex="getIndex"></header-top>-->
        <!--模态框-->
        <el-dialog
                title="个人信息:"
                :visible.sync="dialogVisible">
            <div class="mtk">
                <p>姓名:<span>{{userInfo.XM}}</span></p>
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
                    <label>原密码:</label>
                    <el-input type="password" v-model="input1" placeholder="请输入原密码"></el-input>
                </div>
                <div>
                    <label>新密码:</label>
                    <el-input type="password" v-model="input2" placeholder="请输入新密码"></el-input>
                </div>
                <div>
                    <label>确认密码:</label>
                    <el-input type="password" v-model="input3" placeholder="请再次输入密码"></el-input>
                </div>
            </div>

            <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible2 = false">取 消</el-button>
      <el-button type="primary" @click="pwdConfirm">确 定</el-button>
      </span>
        </el-dialog>

        <header>
            <div class="wrap">
                <div class="head-left">
                    <img :src="logo" alt="">
                    <div class="time" :style="{color:color}">{{a | data}}</div>
                </div>
                <div class="head-right">
                    <ul>
                        <li v-for="(head,index) in heads">
                            <img :src="head.src" alt="">
                            <a :style="{color:color}" @click="changeSkin2(index)">{{head.name}}
                                <OBJECT classid=clsid:5EEEA87D-160E-4A2D-8427-B6C333FEDA4D  id="RTXAX"
                                        v-if="head.isRtx"></OBJECT>
                            </a>
                        </li>
                    </ul>
                    <div class="person"></div>
                    <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link" :style="{color:color}">{{userInfo.XM}}朱老师
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="baseInfo">基础信息</el-dropdown-item>
                            <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
                            <el-dropdown-item command="editNet">注销网络</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <!--<div style="position: relative">-->
                    <!--<span :style="{color:color}">{{userInfo.XM}}朱老师</span>-->
                    <!--<i class="iconfont icon-sanjiaoxing-copy" style="margin-right: 4px"></i>-->
                    <!--<ul style="position: absolute;">-->
                    <!--<li>afasd</li>-->
                    <!--<li>afasd</li>-->
                    <!--<li>afasd</li>-->
                    <!--<li>afasd</li>-->
                    <!--<li>afasd</li>-->
                    <!--</ul>-->
                    <!--</div>-->

                    <button class="btn" :style="{color:color,borderColor:color}" @click="zhuxiao">注销</button>
                </div>
            </div>
        </header>
        <main>
            <div class="wrapper">
                <my-nav :parentData="color"></my-nav>
                <!--<my-content :color="color" :host="host"></my-content>-->
                <router-view :host="host" :color="color"></router-view>
            </div>
        </main>
        <skin v-on:colorToAll="getColor" v-on:colorToAllBg="getColorBg" :textBg="clickSkin" :host="host" v-if="isShow"
              v-on:childIsShow="childShow"></skin>
        <div class="banquan">
            <div>
                <p>版权所有:上海市青浦教育局  技术支持:青浦教育信息中心 地址:上海市青浦公园路301号  联系我们</p>
            </div>
        </div>
    </div>
</template>

<script>
    import skin from './skin'
    import myNav from './nav.vue'
    import '../assets/font/iconfont.css'

    export default {
        props: {
            host: null
        },
        components: {
            myNav,
            skin
        },
        name: 'app',
        data () {
            return {
//        模态框
                dialogVisible: false,
                dialogVisible2: false,
                dialogVisible3: false,
//        修改密码
                input1: null,
                input2: null,
                input3: null,
                // 向子组件传递的数据
                msg: null,
//        背景颜色
                bgColor: '#156667',
//        背景图片
                bgImg: null,
//        文字颜色
                color: null,
                isShow: null,
                getIndex: null,
                clickSkin: null,
                name: null,
                a: new Date(),
//        用户信息
                userInfo: null,
                isOpen: false,
                protocal: null,
                whost: null,
                appNames: null,
                heads: [
                    {'src': this.host + 'portalseting/img/baseimg/rtx3.png', 'name': 'RTX', 'isRtx': true},
                    {'src': this.host + 'portalseting/img/baseimg/message3.png', 'name': '消息'},
                    {'src': this.host + 'portalseting/img/baseimg/email3.png', 'name': '邮箱'},
                    {'src': this.host + 'portalseting/img/baseimg/skin3.png', 'name': '换肤'}
                ],
                logo: this.host + 'portalseting/img/baseimg/logo3.png'
            }
        },
        mounted: function () {

            this.$nextTick(function () {
                console.log(this.host)
                // 初始化页面
                this.$http.get(
                    this.host + 'json/ThemeUser_queryForObject_selectScThemeUser.json?userPk=222'
                ).then(function (data) {
                    var getData = data.data.data
                    this.bgImg = getData.backgroundImg
                    // 背景
                    this.msg = getData.wordColor
                    // 文字颜色处理
                    this.color = getData.wordColor
                    // logo处理
                    this.logo = this.host + getData.customLogo
                    // 图标
                    this.heads[0].src = this.host + getData.rtxIcon
                    this.heads[1].src = this.host + getData.newsIcon
                    this.heads[2].src = this.host + getData.emailIcon
                    this.heads[3].src = this.host + getData.themeIcon
                })
            })
//      初始化用户信息
            this.$nextTick(function () {
                this.$http.get(
                    this.host + 'json/Common_getUser_data.json'
                ).then(function (data) {
                    this.userInfo = data.data.data
                })
            })
        },
        methods: {
            // 点击换肤,更换图标
            getColor: function (b) {
                this.getIndex = b
                this.logo = this.host + this.clickSkin[b].customLogo
                this.heads[0].src = this.host + this.clickSkin[b].rtxIcon
                this.heads[1].src = this.host + this.clickSkin[b].newsIcon
                this.heads[2].src = this.host + this.clickSkin[b].emailIcon
                this.heads[3].src = this.host + this.clickSkin[b].themeIcon
                this.color = this.clickSkin[b].wordColor
            },
            // 更换背景
            getColorBg: function (b) {
                this.bgImg = this.clickSkin[b].backgroundImg
                console.log(this.bgImg)
            },
            // 显示换肤框
            childShow: function (data) {
                this.isShow = data[0]
            },
            // 点击换肤,获取总数据
            changeSkin2: function (_index) {
                if (_index === 0) {
                    this.$nextTick(function () {
                        this.$http.get(
                            this.host + 'json/Teacher_getRtxinfo_data.json'
                        ).then(function (data) {
                            if (data.code === '0000') {
                                var key = data.data.sessionkey
                                var ip = data.data.ip
                                var account = data.data.account
                                var RTXAX
                                var RTXCRoot = RTXAX.GetObject('KernalRoot')
                                RTXCRoot.loginSessionKey(ip, 8000, account, key)
                            }
                        }).error(function (data) {
                            alert('操作失败,请稍后重试')
                        })
                    })
                }
                if (_index === 3) {
                    this.$nextTick(function () {
                        this.$http.get(
                            this.host + 'json/ThemeFestival_queryForDefaultList_selectThemeFestivalDefault.json?userPk=222'
                        ).then(function (data) {
                            var getData = data.data.data
                            this.clickSkin = getData
                        })
                    })
                    this.isShow = !this.isShow
                }
            },
            handleCommand (command) {
                if (command === 'baseInfo') {
                    this.dialogVisible = true
                }
                if (command === 'changePwd') {
                    this.dialogVisible2 = true
                }
            },
//      修改密码确定
            pwdConfirm () {
                if (this.input1 === null) {
                    this.$alert('请输入原密码', '系统提示', {
                        confirmButtonText: '确定'
                    })
                    this.input1 = null
                    this.input2 = null
                    this.input3 = null
                    return
                }
                if (this.input2 === null) {
                    this.$alert('请输入新密码', '系统提示', {
                        confirmButtonText: '确定'
                    })
                    this.input1 = null
                    this.input2 = null
                    this.input3 = null
                    return
                }
                if (this.input3 === null) {
                    this.$alert('请输入确认密码', '系统提示', {
                        confirmButtonText: '确定'
                    })
                    this.input1 = null
                    this.input2 = null
                    this.input3 = null
                    return
                }
                if (this.input2 !== this.input3) {
                    this.$alert('两次输入密码不一致', '标题名称', {
                        confirmButtonText: '确定'
                    })
                    this.input1 = null
                    this.input2 = null
                    this.input3 = null
                    return
                }
                this.$http.post(
                    this.host + 'json/Teacher_changPassword_data.json', {
                        'userPasswordOld': this.input1,
                        userPassword: this.input2
                    }, {emulateJSON: true}
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
//      注销用户
            zhuxiao () {
                this.$http.get(this.host + 'logout.jsp').then(function (data) {
                    console.log(data.data)
                    window.location.href = 'logout.jsp?rand=' + Math.random()
                })
            }
        },
        filters: {
            data: function (input) {
                var d = new Date(input)
                var year = d.getFullYear()
                var month = d.getMonth() + 1
                var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
                var dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                return year + '-' + month + '-' + day + ' ' + ' ' + dayNames[d.getDay()]
            },
            birty: function (data) {
                var year = data.getFullYear()
                var month = data.getMonth()
                var day = data.getDate() < 10 ? '0' + data.getData() : '' + data.getDate()
                return year + '-' + month + '-' + day
            }
        }
    }
</script>

