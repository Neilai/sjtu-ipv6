<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#050e1e"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <router-link to="/#" class="left">
      <el-menu-item index="#">
        <i class="el-icon-s-promotion"></i>ipv6流量分析系统
      </el-menu-item>
    </router-link>
    <router-link to="/dashboard3">
      <el-menu-item index="/dashboard3">资产发现</el-menu-item>
    </router-link>
    <router-link to="/dashboard2">
      <el-menu-item index="/dashboard2">域名风险</el-menu-item>
    </router-link>
    <router-link to="/dashboard">
      <el-menu-item index="/dashboard">流量分析</el-menu-item>
    </router-link>
    <router-link to="/dashboard4">
      <el-menu-item index="/dashboard4">系统概览</el-menu-item>
    </router-link>
  </el-menu>
</template>
<script>
</script>
<style lang="scss">
.el-menu--horizontal > a {
  float: right;
  font-size: 16px ;
  &.router-link-active {
    border-bottom: 2px solid #ffd04b;
  }
}
.left {
  float: left !important;
  font-size: 20px !important;
}
.el-menu.el-menu--horizontal {
  // border-bottom: solid 1px #666e98;
}
.el-menu-item{
  font-size:16px;
}
.el-icon-s-promotion
 {
  color: #ffd04b !important;
  font-size: 1.4em !important;
  font-weight: bolder !important;
}
</style>