<template>
  <div class="about_us_page">
    {{ $i18n.t('aboutUs.title') + '-' + $i18n.t('aboutUs.companyProfile.title') }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('aboutUs.title')
    }
  },
}
</script>