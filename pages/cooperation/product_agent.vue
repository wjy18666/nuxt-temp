<template>
  <div class="product_agent_page">
    {{ $i18n.t('cooperation.title') + '-' + $i18n.t('cooperation.productAgent.title') }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('cooperation.title')
    }
  },
}
</script>