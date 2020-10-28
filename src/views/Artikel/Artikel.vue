<template>
    <div class="artikel-section">
        <el-row>
            <el-button type="info"><h1>This is an {{title}} page</h1></el-button>
        </el-row>
    </div>
</template>

<script>
  export default{
    name:'artikel',
        data (){
            return{
                title:'artikel'
            }
        }
    }
</script>
