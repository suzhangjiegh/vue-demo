<template>
	<div>
		<headtop></headtop>
		<div class="table_container">
			<table>
				<thead>
				<tr>
					<th>#</th>
					<th>订单 ID</th>
					<th>总价格</th>
					<th>订单状态</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				<template v-for="(item,index) in tableData">
					<tr>
						<td>{{index}}</td>
						<td>{{item.id}}</td>
						<td>{{item.total_amount}}</td>
						<td>{{item.status_bar.title}}</td>
						<th>
							<button v-on:click="showItem(index)">详情</button>
						</th>
					</tr>
					<tr v-if="index == i" class="details">
						<td>{{index}}</td>
						<td>{{item.id}}</td>
						<td>{{item.total_amount}}</td>
						<td>{{item.status_bar.title}}</td>
					</tr>
				</template>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	/* eslint-disable no-mixed-spaces-and-tabs */


	import headtop from '../components/HeadTop.vue'
	import {getOrderList} from '../api/getData'

	export default {
		data(){
			return {
				tableData: [],
				i:-1,
			}
		},
		components: {
			headtop
		},
		created(){
			this.getOrder();
		},
		methods: {
			async getOrder(){
				const data =await getOrderList("body");
				console.log("OrderList.vue", data);
				this.tableData = data;
			},
			showItem(index){
			    this.i = (this.i==index) ? -1 : index;
			}

		}
	}
</script>

<style scoped>
	th, td {
		width: 100px;
		text-align: center;
	}
	button{
		background: red;
	}
	.details{

	}
</style>
