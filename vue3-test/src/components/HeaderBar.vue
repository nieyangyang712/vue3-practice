<template>
  <div class="el-header">
    <div class="tilte">
      <img class="logoimg" src="../assets/logo.png">
      <span class="tit-text"> vue3-Admin</span>
    </div>
    <div class="toolbar">
      <el-dropdown>
        <el-icon :size="22" style="margin-right: 10px;vertical-align: middle;color: #fff;"><user-filled /></el-icon>

        <span class="el-dropdown-link">
          admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {UserFilled, ArrowDown } from '@element-plus/icons-vue'
export default {
  name:'HeaderBar',
  components:{UserFilled, ArrowDown }
}
</script>

<style scoped lang="less">
  .el-header {
    position: relative;
    background-color: #202c3a;
    color: #fff;
    --el-header-padding: 0px !important;
    .tilte{
      width: 200px;
      min-height: 60px;
      line-height: 60px;
      display: flex;
      transition: all .3s;
      .logoimg{
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        padding: 3px;
        margin-left: 5px;
        margin-top: 10px;
      }
      .tit-text{
        display: inline-block;
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        vertical-align: middle;
        padding-left: 10px;
      }
    }
    .toolbar {
      position: absolute;
      display: inline-flex;
      align-items: center;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      .el-dropdown-link {
        display: inline-block;
        font-size: 18px;
        color: #fff;
      }
    }
  }
</style>