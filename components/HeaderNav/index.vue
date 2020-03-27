<template>
  <div class="header_nav">
    <div class="nav_list clearfix">
      <div
        v-for="(item, index) in $i18n.t('navs')"
        :class="getRouteSActive(item)"
        :key="index">
        <JumpLink
          :list="item"
          :_blank="item._blank"
          :path="item.path"
          :router-name="item.name" />
      </div>
      <span class="fl">|</span>
      <LangNav class="fl"></LangNav>
    </div>
  </div>
</template>

<script>
import LangNav from '../LangNav'
import JumpLink from '../JumpLink'

export default {
  components: {
    LangNav,
    JumpLink
  },
  data() {
    return {
      //  navList: this.$i18n.t('navs')
    }
  },
  methods: {
    getRouteSActive(item) {
      let route = this.$route
      let { path, fullPath } = route

      if (item.path === '/') {
        if (path === '/') {
          return 'active nav_list_item'
        }

        return 'nav_list_item'
      }

      return fullPath.indexOf(item.path) > -1 ? 'active nav_list_item' : 'nav_list_item'
    }
  }
}
</script>

<style lang="less">
.header_nav {
  background: #1A1A1A;
  color: @nav_color;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  height: 45px;
  font-size: 14px;
  line-height: 45px;

  .nav_list {
    display: inline-block;

    .nav_list_item {
      float: left;
      padding: 0 20px;
      position: relative;

      &.active:before {
        display: block;
        width: 80%;
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
      }

      &:Hover {
        color: @nav_color_h;
      }
    }
  }
}
  
</style>