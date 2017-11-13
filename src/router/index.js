import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


/**
 * http://blog.csdn.net/qq_27626333/article/details/76228578
 * webpack中利用require.ensure()实现按需加载
 * @param r
 * @constructor
 */
const Manage = r =>require.ensure([], ()=> r(require('@/page/Manage')),'Manage');
const Home= r =>require.ensure([], ()=> r(require('@/page/Home')),'Home');

const UserList= r =>require.ensure([], ()=> r(require('@/page/UserList')),'UserList');
const OrderList= r =>require.ensure([], ()=> r(require('@/page/OrderList')),'OrderList');

console.error(this.routes);
export default new Router({
	routes: [
		{
			path: '/',
			component: Manage,
			// 子组件
			children:[
				{
					path:'home',
					name:'home',
					component:Home,
					meta: ['首页'],
				},
				{
					path:'userlist',
					name:'UserList',
					component:UserList,
					meta: ['数据管理', '用户列表'],
				},
				{
					path:'orderlist',
					name:'OrderList',
					component:OrderList,
					meta: ['数据管理', '订单列表'],
				}
			]
		},

	]
})
