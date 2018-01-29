<template>
  <div class="footer">
    <tabbar>
      <tabbar-item :selected="url == 'http://localhost:8090/views/home/home.html'" link="http://localhost:8090/views/home/home.html">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item show-dot :selected="url == 'http://localhost:8090/views/course/course.html#/recommend'" link="http://localhost:8090/views/course/course.html">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
        <span slot="label">课程</span>
      </tabbar-item>
      <tabbar-item :selected="url == 'http://localhost:8090/views/recruit/recruit.html'" link="http://localhost:8090/views/recruit/recruit.html">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <span slot="label">招聘</span>
      </tabbar-item>
      <tabbar-item  :selected="url == 'http://localhost:8090/views/message/message.html#/notice'" link="http://localhost:8090/views/message/message.html#/notice">
        <!-- <img slot="icon" src="../assets/images/icon-message.png"> -->
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item :selected="url == 'http://localhost:8090/views/user/user.html'" link="http://localhost:8090/views/user/user.html">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      dafault: '资讯',
      url: location.href
    }
  }
}
</script>
<style lang="less" >
    .footer{
        position: fixed;
        bottom: 0;
        width:100%;
        .weui-tabbar__item.vux-tabbar-simple{
          height: 1rem;
          line-height: 1rem;
          p{
            font-size: .3rem;
            line-height: 1rem;
          }
          
        }
        .weui-tabbar__label{
            font-size: .3rem;
          }
    }
</style>
