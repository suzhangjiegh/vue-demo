<template>
	<div>
		<headtop></headtop>
		<div class="table_container">
			<!--<table>
				<thead>
				<tr>
					<th>#</th>
					<th>注册日期</th>
					<th>用户姓名</th>
					<th>注册地址</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(item,index) in tableData">
					<td>{{index}}</td>
					<td>{{item.registe_time}}</td>
					<td>{{item.username}}</td>
					<td>{{item.city}}</td>
				</tr>
				</tbody>
			</table>-->

			<el-table
				:data="tableData"
				highlight-current-row
				style="width: 100%">
				<el-table-column
					type="index"
					width="100">
				</el-table-column>
				<el-table-column
					property="registe_time"
					label="注册日期"
					width="220">
				</el-table-column>
				<el-table-column
					property="username"
					label="用户姓名"
					width="220">
				</el-table-column>
				<el-table-column
					property="city"
					label="注册地址">
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>

	import headtop from '../components/HeadTop.vue'

	export default {
		data(){
			return {
				tableData: [{
					registe_time: '2016-05-02',
					username: '王小虎',
					city: '上海市普陀区金沙江路 1518 弄'
				}, {
					registe_time: '2016-05-04',
					username: '王小虎',
					city: '上海市普陀区金沙江路 1517 弄'
				}, {
					registe_time: '2016-05-01',
					username: '王小虎',
					city: '上海市普陀区金沙江路 1519 弄'
				}, {
					registe_time: '2016-05-03',
					username: '王小虎',
					city: '上海市普陀区金沙江路 1516 弄'
				}],
				currentRow: null,
				offset: 0,
				limit: 20,
				count: 0,
				currentPage: 1,
			}
		},
		components: {
			headtop
		}
	}
</script>


<!--<el-table
				:data="tableData"
				highlight-current-row
				style="width: 100%">
				<el-table-column
					type="index"
					width="100">
				</el-table-column>
				<el-table-column
					property="registe_time"
					label="注册日期"
					width="220">
				</el-table-column>
				<el-table-column
					property="username"
					label="用户姓名"
					width="220">
				</el-table-column>
				<el-table-column
					property="city"
					label="注册地址">
				</el-table-column>
			</el-table>-->
