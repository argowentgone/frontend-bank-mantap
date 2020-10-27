<template>
    <div class="details-article">
        <el-row>
            <el-button type="info"><h1>This is an {{title}} page</h1></el-button>
        </el-row>
    </div>
</template>

<script>
  export default{
    name:'details-article',
        data (){
            return{
                title:'Details Articles'
            }
        }
    }
</script>
