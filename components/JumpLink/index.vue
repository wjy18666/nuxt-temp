<template>
  <div class="jump_link">
    <div v-if="list.children && list.children.length">
      <!-- <el-tooltip
        effect="dark"
        placement="bottom">
        <span>
          {{ routerName + ' '}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <div slot="content">
          <p
            class="jump_link_child"
            v-for="(child, index) in list.children"
            :key="index">
            <a
              :href="list.path + child.path + '?lang=' + $store.state.locale">
              {{ child.name }}
            </a>
          </p>
        </div>
      </el-tooltip> -->
      <el-dropdown placement="bottom" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ routerName + ' '}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            class="jump_link_child"
            v-for="(child, index) in list.children"
            :key="index"
            :command="list.path + child.path">
            {{ child.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div v-else>
      <n-link v-if="!_blank" :to="path">
        {{ routerName }}
      </n-link>
      <a v-else :href="path" target="_blank">{{ routerName }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({})
    },
    path: {
      type: String,
      default: ''
    },
    _blank: {
      type: Boolean,
      default: false
    },
    routerName: {
      type: String,
      default: ''
    },
  },
  methods: {
    //  子路由跳转
    handleCommand(path) {
      this.$router.push({
        path,
        query: {
          lang: this.$store.state.locale
        }
      })
    }
  }
}
</script>

<style lang="less">
  .jump_link {
    padding: 0 5px;
    font-size: @font14;
    cursor: pointer;

    .el-tooltip {
      cursor: pointer;
    }

    .el-dropdown {
      color: @nav_color;

      &:hover {
        color: @nav_color_h;
      }
    }

    .el-dropdown-menu {
      min-width: 200px;
    }

    a {
      color: @nav_color;

      &:hover {
        color: @nav_color_h;
      }
    }
  }
  .jump_link_child {
    line-height: 30px;
    padding: 0 15px;

    a {
      color: @nav_color;
      font-size: @font14;

      &:hover {
        color: @nav_color_h;
      }
    }
  }
</style>