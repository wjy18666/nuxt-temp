<template>
  <div class="join_us_page">
    {{ $i18n.t('aboutUs.title') + '-' + $i18n.t('aboutUs.joinUs.title') }}
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