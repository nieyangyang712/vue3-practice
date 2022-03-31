<template>
  <div class="el-header">

    <div class="tilte">
      <img class="logoimg" src="../assets/logo.png">
      <span class="tit-text"> vue3-Admin</span>
    </div>

    <div class="toggle-button" @click='toggleCollapse'>
      <el-icon :size="22" style="margin-right: 10px;color: #fff;">  
        <fold v-if="iscollapse" /> 
        <expand v-else />
      </el-icon>
    </div>

    <div class="toolbar">
      <el-dropdown>
        <el-icon :size="22" style="margin-right: 10px;vertical-align: middle;color: #fff;"><user-filled /></el-icon>

        <span class="el-dropdown-link">
          admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item  @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {Fold, Expand, UserFilled, ArrowDown } from '@element-plus/icons-vue'
import emitter from "@/utils/mitt.js"
export default {
  name:'HeaderBar',
  components:{Fold, Expand, UserFilled, ArrowDown },
  data() {
    return {
      iscollapse: false,
    }
  },
  methods:{
    // 左侧展开折叠
    toggleCollapse(){
      this.iscollapse = !this.iscollapse
      emitter.emit("showAside", this.iscollapse)
    },
    //退出登录
    logout() {
      this.$confirm("您确定要退出登录吗？ 是否继续?", "温馨提示：", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push("/login")
        // // 回调store里面的登出接口
        // that.$store.dispatch("user/FedLogOut").then(() => {
        //   that.$store.dispatch('tagsView/delAllViews', null, { root: true })
        //   that.$router.push("/login")
        // }).catch((err) => {
        //   that.$message.error(err)
        // })
      })
    }
  }
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
    .toggle-button{
      position: absolute;
      /* width: 100px; */
      top: 20px;
      left: 200px;
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