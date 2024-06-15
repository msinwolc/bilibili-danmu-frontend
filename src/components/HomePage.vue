<template>
    <h1 class="title">DANMU</h1>
    <el-card style="max-width: 100%">
        <template #header>
            <div class="card-header">
                <span style="text-align: left;">数据 {{ currentTime }}</span>
            </div>
        </template>
        <el-table :data="[tableData]" style="width: 100%">
            <el-table-column prop="danmuCount" label="总计" />
            <el-table-column prop="livingCount" label="直播中" />
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
import axios from 'axios';
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const currentTime = ref('')

        const tableData = ref([])

        const updateCurrentTime = () => {
            const now = new Date();
            currentTime.value = now.toLocaleString();
        };

        const fetchData = async () => {
            try {
                const response = await axios.get('/api/home');
                tableData.value = response.data;
            } catch (error) {
                console.error(error);
            }
        }

        setInterval(updateCurrentTime, 1000);
        fetchData();

        return {
            currentTime,
            tableData
        };
    },
})
</script>
