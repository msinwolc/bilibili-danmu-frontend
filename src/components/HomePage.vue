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
        <template #footer>
            <div>寄！</div>
            <el-button type="text" @click="isCollapseActive = !isCollapseActive" style="padding: 0; border: none;">
                <i :class="isCollapseActive ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
            </el-button>
            <el-collapse v-model="isCollapseActive">
                <el-collapse-item name="1">
                    <template #title>添加up（输入uid）</template>
                    <div class="input-container">
                        <el-input v-model="inputValue" placeholder="请输入uid" @input="handleInput"></el-input>
                        <el-button @click="handleSubmit" :disabled="!inputValue.trim()" type="primary">提交</el-button>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </template>
    </el-card>
</template>

<style scoped>
.el-table {
    --el-table-border-color: transport
}

.input-container {
  display: flex;
  align-items: center;
}

</style>

<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue'
import { ElNotification } from 'element-plus';

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

        const inputValue = ref('');
        const handleSubmit = async () => {
            try {
                const response = await axios.post('/api/home/add_up', { uid: inputValue.value });
                if (response.status === 200) {
                    ElNotification({
                        title: '成功',
                        message: '添加成功',
                        type: 'success',
                    });
                } else {
                    ElNotification({
                        title: '失败',
                        message: '添加失败，请稍后重试',
                        type: 'error',
                    });
                }
            } catch (error) {
                console.error("请求失败:", error);
                ElNotification({
                    title: '错误',
                    message: '提交失败，请检查网络连接或稍后重试',
                    type: 'error',
                });
            }
        };

        const handleInput = (inputValueText: string) => {
            // 使用正则表达式过滤非数字字符
            const numericValue = inputValueText.replace(/\D/g, '');
            // 更新绑定的输入框值
            inputValue.value = numericValue;
        };

        return {
            currentTime,
            tableData,
            inputValue,
            handleInput,
            handleSubmit
        };
    },
})
</script>
