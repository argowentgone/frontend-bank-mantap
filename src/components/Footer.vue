<template>
  <div class="footer-section">
    <el-row type="flex" justify="space-around" class="footer-menu">
        <el-col :span="6">
          <div class="bg-primary">x</div>
        </el-col>
        <el-col :span="6">
          <div class="bg-primary">y</div>
        </el-col>
        <el-col :span="6">
          <div class="bg-primary">z</div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="footer-contact">
        <el-col :span="6">
          <div class="bg-primary">1</div>
        </el-col>
        <el-col :span="6">
          <div class="bg-primary">2</div>
        </el-col>
        <el-col :span="6">
          <div class="bg-primary">3</div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>