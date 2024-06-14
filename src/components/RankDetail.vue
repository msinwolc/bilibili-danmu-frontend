<!-- <template>
  <h1 class="title">Rank</h1>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <div class="container">
    <div class="button-container">
      <el-button @click="clearFilter">清除过滤</el-button>
    </div>
    <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="" width="180" />
      <el-table-column prop="profit" label="收入" sortable />
      <el-table-column prop="danmu" label="弹幕" sortable />
      <el-table-column prop="watched" label="观看" sortable />

      <el-table-column prop="tatus" label="开播状态" width="100" :filters="[
        { text: '直播中', value: '直播中' },
        { text: '未开播', value: '未开播' },
      ]" :filter-method="filterTag" filter-placement="bottom-end">
        <template #default="scope">
          <el-tag :type="scope.row.status === '未开播' ? '' : 'success'" disable-transitions>{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  /* 可选：添加一些间距 */
  margin-right: 1%;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
// import type { TableColumnCtx, TableInstance } from 'element-plus'
import type { TableInstance } from 'element-plus'

interface User {
  name: string
  danmu: number
  profit: number
  watched: number
  status: string
}

const tableRef = ref<TableInstance>()

// const resetDateFilter = () => {
//   tableRef.value!.clearFilter(['date'])
// }
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  tableRef.value!.clearFilter()
}
// const formatter = (row: User) => {
//   return row.address
// }
const filterTag = (value: string, row: User) => {
  return row.status === value
}
// const filterHandler = (
//   value: string,
//   row: User,
//   column: TableColumnCtx<User>
// ) => {
//   const property = column['property']
//   return row[property] === value
// }

const tableData: User[] = [
  {
    name: '德云色',
    danmu: 2455,
    profit: 4500.0,
    watched: 180689,
    status: '直播中'
  },
  {
    name: '明前奶绿',
    danmu: 1543,
    profit: 2697.0,
    watched: 3409,
    status: '未开播'
  },
  {
    name: 'BLG_whzy',
    danmu: 2455,
    profit: 4500.0,
    watched: 180689,
    status: '未开播'
  },
  {
    name: 'Lol官方赛事解说',
    danmu: 6899,
    profit: 120.0,
    watched: 340689,
    status: '直播中'
  },
]
</script> -->

<template>
  <h1 class="title">Rank</h1>
  <div class="full-screen-list">
    <div class="button-group">
      <el-button :type="selectedTimeRange === '1' ? 'primary' : ''" @click="selectTimeRange('1')">近1天</el-button>
      <el-button :type="selectedTimeRange === '7' ? 'primary' : ''" @click="selectTimeRange('7')">近7天</el-button>
      <el-button :type="selectedTimeRange === '30' ? 'primary' : ''" @click="selectTimeRange('30')">近30天</el-button>
    </div>
    <el-card style="max-width: 100%">
      <!-- <template #header>
              <div class="card-header">
                  <span>Full Screen List with Tables</span>
              </div>
          </template> -->
      <div class="list-content">
        <el-row v-for="item in listItems" :key="item.name" class="list-item">
          <el-col :span="24">
            <el-card class="list-item-card">
              <div class="card-content">
                <div>{{ item.name }}</div>
                <el-table :data="[item]" class="list-item-table" style="width: auto;">
                  <el-table-column prop="profit" label="收入" />
                  <el-table-column prop="danmu" label="弹幕" />
                  <el-table-column prop="watched" label="观看" />
                  <el-table-column prop="tatus" label="开播状态" width="100">
                    <template #default="scope">
                      <el-tag :type="scope.row.status === '未开播' ? '' : 'success'" disable-transitions>{{ scope.row.status
                      }}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'FullScreenListWithTables',
  setup() {
    const listItems = ref([
      {
        name: '德云色',
        danmu: 2455,
        profit: 4500.0,
        watched: 180689,
        status: '直播中'
      },
      {
        name: '明前奶绿',
        danmu: 1543,
        profit: 2697.0,
        watched: 3409,
        status: '未开播'
      },
      {
        name: 'BLG_whzy',
        danmu: 2455,
        profit: 4500.0,
        watched: 180689,
        status: '未开播'
      },
      {
        name: 'Lol官方赛事解说',
        danmu: 6899,
        profit: 120.0,
        watched: 340689,
        status: '直播中'
      },
    ]);

    const selectTimeRange = (range: string) => {
      selectedTimeRange.value = range
    };

    const selectedTimeRange = ref('1');

    watch(selectedTimeRange, (newRange) => {
      console.log(`Selected time range: ${newRange}`);
      // 在这里根据 newRange 进行数据过滤或重新加载数据
    });

    return {
      listItems,
      selectedTimeRange,
      selectTimeRange,
    };
  },

});

</script>

<style scoped>
/* .full-screen-list { */
/* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  overflow-y: auto;
  background-color: #f5f5f5; */
/* } */

.card-header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.list-content {
  padding: 10px;
}

.list-item {
  margin-bottom: 10px;
}

.list-item-card {
  padding: 10px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item-table {
  flex-shrink: 0;
  width: auto;
}

/* 去除下边框线 */
.el-table {
  --el-table-border-color: transport
}

/* Deep selector to override el-card__body padding */
::v-deep(.el-card__body) {
  padding: 10px !important;
}

.button-group {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
