<template>
  <div class="navbar">
    <hamburger :is-active="$store.state.sidebar"
               class="hamburger-container"
               @toggleClick="toggleSideBar"> </hamburger>
    <!-- <breadcrumb class="breadcrumb-container"> </breadcrumb> -->
    <img class="nav-title"
         src="@/assets/images/nav_title.png"
         alt="">

    <div class="right-menu">
      <el-dropdown class="avatar-container"
                   trigger="click">
        <div class="avatar-wrapper">
          <img src="@/assets/images/logo.png"
               class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown"
                          class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!-- 大屏按钮 -->
    <el-button class="btn-daping"
               size="medium"
               type="primary"
               icon="Eicons slbems-xietongzhihuidaping"
               @click="toPath()">大屏系统</el-button>
  </div>
</template>

<script>
import hamburger from './hamburger.vue';
// import breadcrumb from './breadcrumb.vue';
export default {
  name: 'nav-bar',
  components: {
    hamburger
    // breadcrumb
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar');
    },
    toPath() {
      const { href } = this.$router.resolve({
        name: 'energyScreen'
      });
      window.open(href, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .nav-title {
    padding-top: 12px;
  }
  .hamburger-container {
    line-height: 52px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .btn-daping {
    float: right;
    margin: 6px 20px 0 0;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

