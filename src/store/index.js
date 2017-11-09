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
const state = {};

/**
 * 2
 * 唯一标识符 store通过他用于异步与同步间通讯
 */
const mutations = {};

/**
 * 1
 * @type {{}}
 */
const actions = {};

export default new Vuex.Store({
	state,
	mutations,
	actions,
})
