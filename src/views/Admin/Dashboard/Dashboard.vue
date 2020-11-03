<template>
    <div class="dashboard">
        <el-container style="height: 100vh; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="[]">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-document"></i>Pages</template>
                    <el-submenu index="1-1">
                        <template slot="title">Pinjaman</template>
                        <el-menu-item index="1-1-1" @click="pinjamanMenuHandler('pensiun')">Pensiun</el-menu-item>
                        <el-menu-item index="1-1-2" @click="pinjamanMenuHandler('ritel')">Ritel</el-menu-item>
                        <el-menu-item index="1-1-3" @click="pinjamanMenuHandler('mikro')">Mikro</el-menu-item>
                    </el-submenu>
                    <el-submenu index="1-2">
                        <template slot="title">Simpanan</template>
                        <el-menu-item index="1-2-1" @click="showSimpananTabungaku = !showSimpananTabungaku">Tabunganku</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="1-3">
                        <template slot="title">Tentang Kami</template>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-news"></i>Artikel</template>
                    <el-menu-item index="2-1">List</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-notebook-1"></i>Events</template>
                    <el-menu-item index="3-1">List</el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>
            
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <span style="margin-right: 7px;">{{$store.state.user}}</span>
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Settings</el-dropdown-item>
                            <el-dropdown-item>
                                <el-button type="text" @click="logoutHandler">Logout</el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                
                <el-main>
                    <!--<div class="show-panel-table">
                        <el-table :data="tableData">
                            <el-table-column prop="date" label="Date" width="140">
                            </el-table-column>
                            <el-table-column prop="name" label="Name" width="120">
                            </el-table-column>
                            <el-table-column prop="address" label="Address">
                            </el-table-column>
                        </el-table>
                    </div> -->
                    <div class="show-panel">
                        <PinjamanPensiun v-if="showPinjamanPensiun" />
                        <PinjamanRitel v-if="showPinjamanRitel" />
                        <PinjamanMikro v-if="showPinjamanMikro" />
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    
    .el-aside {
        color: #333;
    }
</style>

<script>
export default {
    name: "dashboard",
    components: {
        PinjamanPensiun: () => import("@/views/Admin/Dashboard/Pinjaman/Pensiun"),
        PinjamanRitel: () => import("@/views/Admin/Dashboard/Pinjaman/Ritel"),
        PinjamanMikro: () => import("@/views/Admin/Dashboard/Pinjaman/Mikro"),
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: 'Admin',
            address: 'No. 189, Grove St, Los Angeles',
        };
        return {
            tableData: Array(20).fill(item),
            showPinjamanPensiun: false,
            showPinjamanRitel: false,
            showPinjamanMikro: false,
            showSimpananTabungaku: false,
        }
    },
    mounted() {
        // this.showPinjamanPensiun = true;
    },
    methods: {
        pinjamanMenuHandler(value) {
            if (value === 'pensiun') {
                this.showPinjamanPensiun = true;
                this.showPinjamanRitel = false;
                this.showPinjamanMikro = false;
            }
            if (value === 'ritel') {
                this.showPinjamanPensiun = false;
                this.showPinjamanRitel = true;
                this.showPinjamanMikro = false;
            }
            if (value === 'mikro') {
                this.showPinjamanPensiun = false;
                this.showPinjamanRitel = false;
                this.showPinjamanMikro = true;
            }
        },
        logoutHandler() {
            alert("me")
			this.$store.dispatch("logout").then(() => {
				this.$router.push("/login");
			});
		},
    }
}
</script>