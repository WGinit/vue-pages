<template>
  <div class="recruit-container">
      <div class="search">
          <search
            @result-click="resultClick"
            @on-change="getResult"
            :results="results"
            v-model="value"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
            ref="search"></search>
      </div>
      <div class="banner">
        <swiper :aspect-ratio="300/800" :loop="true" dots-position="center">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index" ><a :href="item.url"><img :src="item.img"></a></swiper-item>
        </swiper>
    </div>
    <div class="tab">
        <div class="nav-item"><a href="../home/information.html">最新职位</a></div>
        <div class="nav-item"><a href="">职位库</a></div>
        <div class="nav-item"><a href="">名企</a></div>
        <div class="nav-item"><a href="">招聘会</a></div>
    </div>
    <footer>
        <Navbar></Navbar>
    </footer>
  </div>
</template>

<script>
import Lib from 'assets/js/lib'
import Navbar from 'components/Footerbar'
import { Search, Group, Cell, XButton, Tab, TabItem, Swiper, SwiperItem} from 'vux'

const baseList = [{
  url: 'http://baidu.com',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'http://lihua1108.com',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'http://86ym.cn',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton,
    Swiper,
    SwiperItem,
    Navbar
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: 'test',
      list: baseList
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style lang="less">
.recruit-container{
    width:100%;
    overflow: hidden;
    .tab{
        width:100%;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        background: #fff;
        .nav-item{
            flex:1;
            text-align: center;
            a{
                display: block
            }
        }
    }

}
</style>

