<template>
  <div class="industry_plan_page">
    {{ $i18n.t('industryPlan.title') + '-' + $i18n.t('industryPlan.security.title') }}
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