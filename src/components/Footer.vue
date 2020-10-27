<template>
  <div class="footer-section">
    <el-row type="flex" justify="space-around" class="footer-info">
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
    <el-row type="flex">
        <el-col :span="6"><div class="bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>