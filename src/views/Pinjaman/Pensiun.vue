<template>
  <div class="pinjaman-pensiun-section">
    <el-row>
        <el-col :span="24">
            <div class="cover-page-section">
                <img :src="imageCover" alt="cover">
            </div>
        </el-col>
    </el-row>
    <div class="block-section">
      <el-row>
        <el-col :span="24">
          <div v-html="dataPage"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: "pensiun",
  data() {
    return {
      imageCover: require('@/assets/images/slideshow/image2.jpg'),
      logo: 'https://img.freepik.com/free-photo/top-view-businessman-wears-white-shirt-office_295783-1045.jpg?size=626&ext=jpg&ga=GA1.2.1565170034.1603815779',
      dataPage: null
    }
  },
  mounted() {
    console.log(this.$store.state)
    const data = this.$store.state;
    this.dataPage = data.page.pinjaman.pensiun;
  }
}
</script>