<template>
  <div class="business_cooperation_page">
    {{ $i18n.t('cooperation.title') + '-' + $i18n.t('cooperation.AI_partner.title') }}
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