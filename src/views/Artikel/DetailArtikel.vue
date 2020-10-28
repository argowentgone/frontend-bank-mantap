<template>
    <div class="details-artikel">
        <el-row>
            <el-button type="info"><h1>This is an {{title}} page</h1></el-button>
        </el-row>
    </div>
</template>

<script>
  export default{
    name:'detail-article',
        data (){
            return{
                title:'Detail Artikel'
            }
        }
    }
</script>
