<template>
    <el-carousel :interval="5000" arrow="always" class="slideshow-home" height="100vh">
        <el-carousel-item v-for="(item, index) in items" :key="index">
            <img :src="item.src" alt="item.title" class="image-cover-header">
        </el-carousel-item>
    </el-carousel>
</template>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>

<script>
export default {
    name: 'SlideshowHeader',
    data() {
        return {
            items: [
                {
                    title: 'Image 1',
                    src: require('../assets/images/slideshow/image1.jpg')
                },
                {
                    title: 'Image 2',
                    src: require('../assets/images/slideshow/image2.jpg')
                },
                {
                    title: 'Image 3',
                    src: require('../assets/images/slideshow/image3.jpg')
                }
            ]
        }
    }
}
</script>