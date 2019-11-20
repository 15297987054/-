<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
      <!-- <ClassForm /> -->
    </div>
  </a-locale-provider>
</template>

<script>
import ClassForm from '@/views/classForm/classForm'
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'
// 引用cdn还可以这么写
import { locales } from 'ant-design-vue'
const zhCN = locales.zh_CN

export default {
  mixins: [AppDeviceEnquire],
  components:{
    ClassForm
  },
  data () {
    return {
      locale: zhCN
    }
  },
  mounted () {

  }
}
</script>
<style>
  #app {
    height: 100%;
  }
</style>
