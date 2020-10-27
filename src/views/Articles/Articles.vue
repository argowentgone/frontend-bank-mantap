<template>
    <div class="articles">
        <el-row>
            <el-button type="info"><h1>This is an {{title}} page</h1></el-button>
        </el-row>
    </div>
</template>

<script>
  export default{
    name:'articles',
        data (){
            return{
                title:'Articles'
            }
        }
    }
</script>
