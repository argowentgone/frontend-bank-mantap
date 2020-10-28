<template>
    <nav class="header-top-fixed">
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple">Ini LOGO</div></el-col>
            <el-col :span="18">
                <div class="actions-nav-menu">
                    <div class="menu-nav">
                        <el-menu 
                            :default-active="activeindex"
                            :router="true"
                            mode="horizontal"
                            class="menu-nav-custom"
                            @select="handleSelect">
                            <el-menu-item index="1" :route="{name:'Home'}">Home</el-menu-item>
                            <el-submenu index="2" popper-class="menu-nav-custom-items">
                                <template slot="title">Pinjaman</template>
                                <el-menu-item index="2-1" :route="{name:'Pensiun'}">Pinjaman Pensiun</el-menu-item>
                                <el-menu-item index="2-2" :route="{name:'Ritel'}">Pinjaman Ritel</el-menu-item>
                                <el-menu-item index="2-3" :route="{name:'Mikro'}">Pinjaman Mikro</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="3" :route="{name:'Simpanan'}">Simpanan</el-menu-item>
                            <el-menu-item index="4" :route="{name:'Program'}">Program</el-menu-item>
                            <el-menu-item index="5" :route="{name:'Artikel'}">Artikel</el-menu-item>
                        </el-menu>
                    </div>
                    <div class="menu-search">
                        <el-input
                            placeholder="Cari"
                            prefix-icon="el-icon-search"
                            v-model="input2">
                        </el-input>
                    </div>
                    <div class="menu-language">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                ID<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>Bahasa</el-dropdown-item>
                                <el-dropdown-item>English</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </el-col>
        </el-row>
        
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
            input2: null,
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>