<template>
  <div class="siderBar">
    <!-- 菜单 -->
    <!-- :collapse="isCollapse" -->
    <el-menu
      :default-active="$route.fullPath"
      :style="{width: isCollapse ? '50px': '200px'}"
      background-color="#202c3a"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="false"
      :collapse-transition="true"
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
  </div>
</template>

<script>
import emitter from "@/utils/mitt.js"
export default {
  name:'SiderBar',
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
    // 
    handleSelect(key, path){
      console.log(key, path)
    },
  },
  mounted(){
    emitter.on("showAside", msg=>{ 
      this.isCollapse = msg
    }) 
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