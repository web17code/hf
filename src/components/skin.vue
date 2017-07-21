<style scoped>
  .skin{
    position: fixed;
    bottom: 0;
    width:100%;
    height:360px;
    min-width: 1200px;
    z-index: 112;
  }
  .skin-top{
    height:60px;
    background: rgba(0,0,0,0.6);
    filter: alpha(opacity=40);
  }
  .skin-top>div{
    width:1200px;
    margin: 0 auto;
  }
  .skin-left{
    height:100%;
    float: left;
  }
  .skin-left ul{
    height:100%;
  }
  .skin-left ul li{
    float: left;
    width: 120px;
    height:100%;
    cursor: pointer;
    line-height: 60px;
    text-align: center;
  }
  .skin-left ul li.active{
    background: #000000;
    opacity: 1;
  }
  .skin-left ul li p{
    color: #ffffff;
    width: 120px;
    font-size: 14px;
  }
  .skin-right{
    float: right;
    margin-top: 14px;
  }
  .skin-right button{
    width:80px;
    height: 32px;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    border:none;
  }
  .btn1{
    background: #046a69;
    margin-right: 30px;
  }
  .btn2{
    background: #261d3b;
    margin-right: 4px;
  }
  .skin-bottom{
    background: #000000;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    overflow: auto;
  }
  .skin-bottom li{
    box-sizing: border-box;
  }
  .skin-bottom>div{
    width:1200px;
  }
  .skin-bottom>div>.skin-bottom1{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skin-bottom ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skin-bottom ul li{
    width:50px;
    height: 50px;
    margin: 10px 5px 0 5px;
    /*border: 4px solid #ffffff;*/
    border-radius: 4px;
    overflow: hidden;
  }
  .skin-bottom .picback>li{
    width:200px;
    height:120px;
  }
  .skin-bottom .picback>li img{
    width:200px;
    height:120px;
    margin: 10px 5px 0 5px;
  }
  .picbg{
    padding: 10px 80px;
    margin-top: 140px;
    overflow: auto;
  }
  .picbg p{
    color: #ffffff;
    margin-left: 10px;
  }

</style>

<template>
  <div class="skin">
    <div class="wripper">
      <div class="skin-top">
        <div>
          <div class="skin-left">
            <ul>
              <li v-for="(color,index) in colors" @click="changeColor(index)" :class="{active:color.active}">
                <p>{{color.name}}</p>
              </li>
            </ul>
          </div>
          <div class="skin-right">
            <button class="btn1" @click="confirm">确认</button>
            <button class="btn2" @click="cancle">取消</button>
          </div>
        </div>
      </div>
      <div class="skin-bottom">
        <!--<ul>-->
          <!--<li></li>-->
        <!--</ul>-->
        <div >
          <div v-if="isShow1" class="skin-bottom1">
            <ul>
              <li  v-bind:style="{background:bg.wordColor,border:bg.borderColor1}" v-for="(bg,index) in textBg" @click="toParent(index)"></li>
            </ul>
          </div>
          <div v-if="isShow2" class="skin-bottom2">
            <div class="picbg">
              <p>纯色背景</p>
              <ul>
                <li v-bind:style="{background:bg.wordColor,border:bg.borderColor2}" v-for="(bg,index) in textBg" @click="toParentBg(index)"></li>
              </ul>
              <p style="margin-top: 40px;">图片背景</p>
              <ul class="picback">
                <li v-for="(bg,index) in picBg" @click="toParentPicBg(index)">
                  <img :src=host+bg.color alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      textBg: null,
      host: null,
      picBg: null,
      skin: null
    },
    data () {
      return {
        colors: [
          {'name': '文字颜色', 'active': true},
          {'name': '更换背景', 'active': false}
        ],
        // 选择文字还是背景
        currentView: 'textColor',
        bgs: null,
        changeIndex: null,
        isShow1: true,
        isShow2: false,
        changeBgColor: null,
        cancalSkin: null
      }
    },
    methods: {
      changeColor (index) {
        for (var i = 0; i < this.colors.length; i++) {
          this.colors[i].active = false
          if (index === 0) {
            this.currentView = 'textColor'
            this.isShow1 = true
            this.isShow2 = false
          } else {
            this.currentView = 'bgColor'
            this.isShow2 = true
            this.isShow1 = false
          }
        }
        this.colors[index].active = true
      },
      // 向父级传递数据
      toParent (_index) {
        for (var i = 0; i < this.textBg.length; i++) {
          this.textBg[i].borderColor1 = ''
        }
        this.textBg[_index].borderColor1 = '4px solid #ffffff'
        this.$forceUpdate()
        this.changeIndex = this.textBg[_index].themeFestivalPk
        this.$emit('colorToAll', _index)
      },
      toParentBg (_index) {
        for (var i = 0; i < this.textBg.length; i++) {
          this.textBg[i].borderColor2 = ''
        }
        this.textBg[_index].borderColor2 = '4px solid #ffffff'
        this.$forceUpdate()
        this.changeBgColor = this.textBg[_index].backgroundImg
        this.$emit('colorToAllBg', _index)
      },
      toParentPicBg (_index) {
        this.changeBgColor = this.picBg[_index].color
        this.$emit('colorToAllBgPic', _index)
      },
      // 确认换肤
      confirm () {
        this.$http.get(
          this.host + 'json/ThemeUser_insert_insertScThemeUser.json?themeColor=' + this.changeIndex + '&backgroundStyle=' + this.changeBgColor
        ).then(function (data) {
          console.log(data)
        })
        this.$emit('childIsShow1', false)
      },
      // 取消换肤
      cancle () {
        this.$emit('childIsShow2', false)
      }
    }
  }
</script>

