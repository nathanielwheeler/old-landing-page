import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'


Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
	baseURL: base + "api/",
	timeout: 3000,
	withCredentials: true
})

export default new Vuex.Store({
	state: {
		latestPosts: {},
	},
	mutations: {
		setLatestPosts(state, posts) {
			state.latestPosts = posts
		},
	},
	actions: {
		// #region POSTS

		async getLatestPosts({ commit, dispatch }) {
			try {
				let res = await api.get(`posts`)
				commit('setLatestPosts', res.data)
			} catch (error) {
				console.error(error)
			}
		},

		// #endregion
	}
})
