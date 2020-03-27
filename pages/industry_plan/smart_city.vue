<template>
  <div class="smart_city_page">
    {{ $i18n.t('industryPlan.title') + '-' + $i18n.t('industryPlan.smartCity.title') }}
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