<template>
	<div>
		<headtop></headtop>
		<div class="table_container">

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
	import {getUserList} from '../api/getData'

	export default {
		data(){
			return {
				tableData: []
			}
		},
		components: {
			headtop
		},
		created(){
			this.getUser();
		},
		methods: {
			async getUser(){
				const data =await getUserList("body");
				console.log("UserList.vue", data)
				this.tableData = data.tableData;
			}

		}
	}
</script>
