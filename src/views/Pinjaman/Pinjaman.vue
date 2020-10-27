<template>
  <div class="pinjaman">
    <el-row>
      <PinjamanPensiun v-if="$route.name === 'Pensiun'" />
      <PinjamanRitel v-if="$route.name === 'Ritel'" />
      <PinjamanMikro v-if="$route.name === 'Mikro'" />
    </el-row>
  </div>
</template>

<script>
export default {
    name: "Pinjaman",
    components: {
        PinjamanPensiun: () => import("@/views/Pinjaman/Pensiun"),
        PinjamanRitel: () => import("@/views/Pinjaman/Ritel"),
        PinjamanMikro: () => import("@/views/Pinjaman/Mikro"),
    }
}
</script>