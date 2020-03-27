<template>
  <div class="pass_flow_page">
    {{ $i18n.t('industryPlan.title') + '-' + $i18n.t('industryPlan.passFlow.title') }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('industryPlan.title')
    }
  },
}
</script>