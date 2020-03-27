<template>
  <div class="cases_page">
    {{ $i18n.t('cases.title') }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$i18n.t('cases.title')
    }
  },
}
</script>