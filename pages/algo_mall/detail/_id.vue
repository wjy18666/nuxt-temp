<template>
  <div class="algo_mall_detail_page">
    {{ detail.text + '-' + detail.id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    }
  },
  created() {
    let params = this.$route.params
    this.detail = {
      id:  params.id,
      text: '算法商店-详情'
    }
  }
}
</script>