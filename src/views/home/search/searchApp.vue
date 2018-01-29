<template>
  <div class="container">
      <header>
          <div class="search">
                <search
                @result-click="resultClick"
                @on-change="getResult"
                :results="results"
                v-model="value"
                @on-focus="onFocus"
                @on-cancel="onCancel"
                @on-submit="onSubmit"
                ref="search"></search>
          </div>
      </header>
  </div>
</template>

<script>
import Lib from 'assets/js/lib'
import { Search, Group, Cell, XButton } from 'vux'

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton
  },
  mounted () {
    this.$refs.search.setFocus();
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
      value: ''
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
@import '~vux/src/styles/1px.less';

  .search{
    float: left;
    width: 100%;
    overflow: hidden;
    .weui-search-bar{
      background-color: #f00;
      .weui-search-bar__cancel-btn{
        color: #fff
      }
    }
    .weui-search-bar{
      height: 1rem;
      line-height: 1rem;
      font-size: .4rem;
    }
  }

</style>
