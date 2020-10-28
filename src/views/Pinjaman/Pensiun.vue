<template>
  <div class="pinjaman-pensiun-section">
    <el-row>
        <el-col :span="24">
            <div class="cover-page-section">
                <img :src="imageCover" alt="cover">
            </div>
        </el-col>
    </el-row>
    <el-row>
      <el-button type="info"><h1>This is an pensiun page</h1></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "pensiun",
    data() {
        return {
            imageCover: require('@/assets/images/slideshow/image2.jpg'),
            logo: 'https://img.freepik.com/free-photo/top-view-businessman-wears-white-shirt-office_295783-1045.jpg?size=626&ext=jpg&ga=GA1.2.1565170034.1603815779',
        }
    }
}
</script>