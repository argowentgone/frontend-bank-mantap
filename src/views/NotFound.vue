<template>
  <div class="404-page">
    <el-row type="flex" justify="center" align="center">
        <el-col :span="12">
            <img width="50%" :src="require('@/assets/images/frown-regular.svg')" />
            <h1>404<br /> Page not found</h1>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "Ritel",
}
</script>