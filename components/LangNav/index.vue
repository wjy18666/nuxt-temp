<template>
  <div class="lang_nav">
    <el-dropdown :hide-on-click="false" @command="switchLang">
      <span class="el-dropdown-link">
        {{ $i18n.t('lang') + ' ' }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) in $i18n.t('langList')"
          :key="index"
          :command="item.command">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-tooltip
      effect="dark"
      placement="bottom">
      <span>
        {{ $i18n.t('lang') + ' ' }}
        <i class="el-icon-caret-bottom"></i>
      </span>
      <div slot="content">
        <p
          class="jump_link"
          v-for="(lang, index) in $i18n.t('langList')"
          :key="index"
          @click="switchLang(lang.command)">
          {{ lang.name }}
        </p>
      </div>
    </el-tooltip> -->
  </div>
</template>

<script>
import { setStorageItem } from '~/utils'

export default {
  data() {
    return {
      langUrl: ''
    }
  },
  created() {
    console.log('this.$route', this.$route)
  },
  methods: {
    switchLang(lang) {
      let route = this.$route
      let query = route.query

      this.$store.commit('SET_LANG', lang)
      setStorageItem('lang', lang)
      
      this.$router.push({
        path: route.path,
        query: {
          ...query,
          lang
        },
        replace: true
      })
      console.log('switchLang query', route, this.$router)
    }
  }
}
</script>

<style lang="less">
  .lang_nav {
    padding: 0 20px;
    line-height: 45px;
    cursor: pointer;

    a, .el-dropdown-link {
      color: @nav_color;
      cursor: pointer;

      &:hover {
        color: @nav_color_h;
      }
    }
  }
</style>