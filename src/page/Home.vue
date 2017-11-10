<template>
	<div>
		<headtop></headtop>
		首页
	</div>
</template>

<script>

	import headtop from '../components/HeadTop.vue'

	export default {

		components:{
			headtop
		},
		beforeCreate: function () {
			console.error("===========beforeCreate============",new Date());
		},
		created(){
			console.error("===========created============",new Date());
			console.error("===========this.$route============");
			console.error(this.$route);
		},
		beforeMount: function () {
			console.error("===========beforeMount============",new Date());
		},
		mounted: function () {
			console.error("===========mounted============",new Date());
		},
		beforeUpdate: function () {
			console.error("===========beforeUpdate============",new Date());
		},
		updated: function () {
			console.error("===========updated============",new Date());

		},
		beforeDestroy: function () {
			console.error("===========beforeDestroy============",new Date());
		},
		destroyed: function () {
			console.error("===========destroyed============",new Date());
		}
	}
</script>
