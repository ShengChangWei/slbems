<template>

  <div class="has-logo">
    <logo :collapse="!$store.state.sidebar"></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :collapse="!$store.state.sidebar"
               :background-color="variables.menuBg"
               :text-color="variables.menuText"
               :unique-opened="false"
               :active-text-color="variables.menuActiveText"
               :collapse-transition="false"
               mode="vertical">
        <template v-for="(item, index) in curMenu">
          <el-submenu v-if="item.children.length>0"
                      :key="index"
                      :index="item.url">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="(ite, inx) in item.children">
              <el-menu-item :key="inx"
                            :index="ite.url"
                            @click="toPath(ite.url)">
                <i :class="ite.icon"></i>
                <span slot="title">{{ ite.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
          <el-menu-item v-else
                        :key="index"
                        :index="item.url"
                        @click="toPath(item.url)">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>

</template>

<script>
import logo from './logo';
import variables from '@/styles/variables.scss';
import loginService from '@/api/login.js';
export default {
  name: 'side-bar',
  components: {
    logo
  },
  data() {
    return {
      curMenu: [
        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '综合运行监视',
          describe: '',
          type: 'menu',
          url: '/operationMonitorin',
          icon: 'Eicons slbems-zongheyunhangjianshi',
          parentId: '1',
          order: 1524463150870,
          children: []
        },

        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '基础台账管理',
          describe: '',
          type: 'menu',
          url: '/basicAccount',
          icon: 'Eicons slbems-shujubaobiaoguanli',
          parentId: '1',
          order: 1524463150870,
          children: [
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '单位概况',
              describe: '',
              type: 'menu',
              url: '/basicAccount/unitProfile',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            },
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '智能水表管理',
              describe: '',
              type: 'menu',
              url: '/basicAccount/waterManage',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            }
          ]
        },
        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '监测预警管理',
          describe: '',
          type: 'menu',
          url: '/monitoringWarning',
          icon: 'Eicons slbems-shujubaobiaoguanli',
          parentId: '1',
          order: 1524463150870,
          children: [
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '用水监测管理',
              describe: '',
              type: 'waterMonitoring',
              url: '/monitoringWarning/waterMonitoring',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            },
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '预警管理',
              describe: '',
              type: 'menu',
              url: '/monitoringWarning/warningManage',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            }
          ]
        },

        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '数据报表管理',
          describe: '',
          type: 'menu',
          url: '/dataReport',
          icon: 'Eicons slbems-shujubaobiaoguanli',
          parentId: '1',
          order: 1524463150870,
          children: [
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '用水数据报表',
              describe: '',
              type: 'menu',
              url: '/dataReport/userWaterReport',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            },
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '用电数据报表',
              describe: '',
              type: 'menu',
              url: '/dataReport/userElectricityReport',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            }
          ]
        },
        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '统计分析',
          describe: '',
          type: 'menu',
          url: '/11',
          icon: 'Eicons slbems-shujubaobiaoguanli',
          parentId: '1',
          order: 1524463150870,
          children: []
        },

        {
          id: 'd2b45d754acf4dc8b6faca86189a06ff',
          sn: 'home',
          name: '运行维护管理',
          describe: '',
          type: 'menu',
          url: '/12232',
          icon: 'Eicons slbems-shujubaobiaoguanli',
          parentId: '1',
          order: 1524463150870,
          children: [
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '设备运行状态管理',
              describe: '',
              type: 'menu',
              url: '',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            },
            {
              id: 'd2b45d754acf4dc8b6faca86189a06ff',
              sn: 'home',
              name: '维修管理',
              describe: '',
              type: 'menu',
              url: '',
              icon: 'fa fa-circle',
              parentId: '1',
              order: 1524463150870,
              children: []
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.getUserMenus();
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
    variables() {
      return variables;
    }
  },
  methods: {
    getUserMenus() {
      loginService.getUserMenus().then(res => {
        console.log(res);
      });
    },
    toPath(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style  lang="scss">
.el-scrollbar__view {
  height: 100%;
  .el-menu {
    height: 100%;
    i {
      padding-right: 10px;
      color: #fff;
    }
  }
  .el-submenu .el-menu-item {
    i {
      padding-right: 10px !important;
      font-size: 12px;
    }
    min-width: 179px !important;
    &.is-active {
      i {
        color: #fd9b0d;
      }
    }
  }
}

.el-menu-item i {
  padding-right: 10px;
  color: #fff;
}
</style>
