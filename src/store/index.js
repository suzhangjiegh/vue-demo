/**
 * Created by jie on 2017/11/9.
 * 组件间的通讯
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 3
 *消息分发后 最终设置到state中
 */
const state = {
	adminInfo:{}
};

/**
 * 2
 * 唯一标识符 store通过他用于异步与同步间通讯
 */
const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	}
};

/**
 * 1
 * @type {{}}
 */
const actions = {

	// 应该异步 使用同步设置
	/**
	 * assets的加载使用require 或者 import
	 * static的加载为路径加载
	 * 方法二
	 * import avatar from '../assets/avatar.png'
	 * avatar:avatar,
	 * @param commit
	 */
	getAdminData({commit}){
		commit('saveAdminInfo', {
			name:'小小',
			avatar:'./static/avatar.png',
			id:123
		});
	}

};

export default new Vuex.Store({
	state,
	mutations,
	actions,
})
