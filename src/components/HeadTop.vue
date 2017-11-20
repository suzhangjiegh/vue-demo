<template>
	<div class="header_container">

		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>

		<el-dropdown  menu-align='start'>
			<img :src="adminInfo.avatar" class="avator">
			<label>{{adminInfo.name}}</label>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item >首页</el-dropdown-item>
				<el-dropdown-item >退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>

	import {mapActions, mapState} from 'vuex'

	export default {
		name:'HeadTop',
		created(){
			if (!this.adminInfo.id) {
				this.getAdminData()
			}
		},
		computed: {
			/**
			 * 将store.state.adminInfo 映射this.adminInfo
			 * 这个this 很重要，这个映射直接映射到当前Vue的this对象上。
			 */
			...mapState(['adminInfo']),
		},
		methods:{
			/**
			 * 将 `this.getAdminData()` 映射为 `this.$store.dispatch('getAdminData')`
			 */
			...mapActions(['getAdminData']),
		},

		beforeUpdate(){
			console.log(this.$route.meta);
		}
	}
</script>

<style scoped>
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
</style>
