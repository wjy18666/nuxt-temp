<template>
  <div class="algo_mall_page">
    {{ $i18n.t('algoMall.title') }}
    <n-link to="/algo_mall/detail/11">算法详情</n-link>
  </div>
</template>

<script>
export default {
  mounted() {
    //  console.log(this.router)
  },
  head() {
    return {
      title: this.$i18n.t('algoMall.title')
    }
  },
}
</script>