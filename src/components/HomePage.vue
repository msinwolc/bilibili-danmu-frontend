<template>
    <h1 class="title">DANMU</h1>
    <el-card style="max-width: 100%">
        <template #header>
            <div class="card-header">
                <span style="text-align: left;">数据 {{ currentTime }}</span>
            </div>
        </template>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="total" label="总计" />
            <el-table-column prop="living" label="直播中" />
            <el-table-column prop="online" label="在线人数" />
        </el-table>
        <template #footer>寄！</template>
    </el-card>
</template>

<style scoped>
.el-table {
    --el-table-border-color: transport
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const currentTime = ref('')

        const tableData = [
            {
                total: 437598,
                living: 2,
                online: 1,
            }]

        const updateCurrentTime = () => {
            const now = new Date();
            currentTime.value = now.toLocaleString();
        };

        setInterval(updateCurrentTime, 1000);

        return {
            currentTime,
            tableData
        };
    },
})
</script>
