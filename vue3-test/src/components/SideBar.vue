<template>
  <div class="siderBar">
    <el-aside :width="iscollapse ? '64px' : '200px'">
      <div class="toggle-button" @click='toggleCollapse'>
        <el-icon v-if="iscollapse" :size="22" style="margin-right: 10px;color: #fff;"> <fold /> </el-icon>
        <el-icon v-else :size="22" style="margin-right: 10px;color: #fff;"> <expand /></el-icon>
      </div>
      <!-- 菜单 -->
      <el-menu
        :default-active="active"
        class="sidebar-menu"
        background-color="#f9f9f9"
        text-color="#565656"
        unique-opened
        router
        active-text-color="#0079fe"
        :collapse="isCollapse"
        @select="handleSelect">
        <template v-for="item in menuList">
          <template v-if="item.children && item.level == 0">
            <el-submenu :index="String(item.id)" :key="item.id">
              <template #title>
                <i class="el-icon-s-order" style="margin-right: 5px;font-size:20px;"></i>
                <span>{{ item.menuName }}</span>
              </template>
              <el-menu-item v-for="(items, i) in item.children" :key="i" :index="items.menuUrl" :route="`/${items.menuUrl}`" :to="items.id" >
                {{items.menuName}}
              </el-menu-item>
            </el-submenu>
          </template>

          <template v-else>
            <template v-if="item.children && item.level == 0">
              <el-submenu :index="String(item.id)" :key="item.id">
                <template #title>
                  <i class="el-icon-s-order" style="margin-right: 5px;font-size:20px;"></i>
                  <span>{{ item.menuName }}</span>
                </template>
                <el-menu-item v-for="(items, i) in item.children" :key="i" :index="items.menuUrl" :route="`/${items.menuUrl}`" :to="items.id" >
                  {{items.menuName}}
                </el-menu-item>
              </el-submenu>
            </template>

            <template v-else>
              <el-menu-item :index="item.menuUrl" :route="`/${item.menuUrl}`" :key="item.id" :to="item.id">
                {{item.menuName}}
              </el-menu-item>
            </template>
          </template>

        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import {Fold, Expand } from '@element-plus/icons-vue'
export default {
  name:'SiderBar',
  components:{Fold, Expand },
  data(){
    return {
      iscollapse: false,
      activePath: null,
      menuList: [
        { id: '1', icon: 'index', title: '首页', menuName:'首页', menuUrl: ''},
        { id: '2', icon: 'UserFilled', title: '用户管理', menuName: '用户管理', menuUrl: '', level: 0, children:[
          {id: '3', parentId: '2', icon: 'UserFilled', title: '用户信息', menuName: '用户信息', menuUrl: '' }
        ]},
      ]
    }
  },
  methods:{
    // 展开折叠
    toggleCollapse(){
      this.iscollapse = !this.iscollapse
    },
    // 
    handleSelect(key, path){
      console.log(key, path)
    },
  }
}
</script>

<style scoped lang="less">
  .siderBar{
    width: 200px;
    height: calc(100vh - 60px);
    background-color: #202c3a;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
    .toggle-button{
      width: 200px;
      height: 20px;
      text-align: right;
    }

    .el-menu{
      background-color: #202c3a !important;
      color: #fff !important;
    }
    .el-sub-menu .el-menu{
      background-color: #202c3a !important;
      color: #fff !important;
    }
    .el-menu-item{
      color: #fff !important;
    }
    .el-menu-item.is-active{
      background: #273158;
    }
    .el-menu-item:hover{
      background-color: #000;
    }
  }
</style>