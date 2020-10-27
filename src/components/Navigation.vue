<template>
    <nav class="header-top-fixed">
        <el-menu 
            :default-active="activeindex"
            :router="true"
            mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="1" :route="{name:'Home'}">Home</el-menu-item>
            <el-menu-item index="2" :route="{name:'Articles'}">Simpanan</el-menu-item>
            <el-submenu index="3">
                <template slot="title">Pinjaman</template>
                <el-menu-item index="3-1" :route="{name:'Pensiun'}">Pinjaman Pensiun</el-menu-item>
                <el-menu-item index="3-2" :route="{name:'Ritel'}">Pinjaman Ritel</el-menu-item>
                <el-menu-item index="3-3" :route="{name:'Mikro'}">Pinjaman Mikro</el-menu-item>
            </el-submenu>
            <el-menu-item index="4" :route="{name:'Articles'}">Articles</el-menu-item>
        </el-menu>
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/pinjaman">Pinjaman</router-link>
            <router-link to="/about">About</router-link>
        </div> -->
    </nav>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            activeindex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>