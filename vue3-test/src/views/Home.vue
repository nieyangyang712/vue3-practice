<template>
  <div class="layout-container">
    <header-bar />
    <side-bar />

    <!-- <el-container>
      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container> -->

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

import HeaderBar from '@/components/HeaderBar.vue'; 
import SideBar from '@/components/SideBar.vue'; 

@Options({
  components: {
    HeaderBar, SideBar
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
.layout-container {
  height: 100%;
  background-color: #F5F7FA;
  position: relative;
 
  .el-aside {
    width: 240px;
    color: var(--el-text-color-primary);
    background: #fff !important;
    border-right: solid 1px #e6e6e6;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    padding: 0;
  }
 
}
</style>