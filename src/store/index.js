import Vue from 'vue'
import Vuex from 'vuex'
// import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    page: {
      pinjaman: {
        pensiun: null,
        ritel: null,
        mikro: null,
      }
    },
    user: {},
  },
  mutations: {
    setDataPagePinjamanPensiun(state, newPage) {
			state.page.pinjaman.pensiun = newPage;
    },
    setDataPagePinjamanRitel(state, newPage) {
      state.page.pinjaman.ritel = newPage;
    },
    setDataPagePinjamanMikro(state, newPage) {
      state.page.pinjaman.mikro = newPage;
    },
    logout(state) {
      state.user = null;
    },
    login(state, {user}) {
      state.user = user;
    }
  },
  actions: {
    getDataPage(store) {
      console.log('store', store);
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        localStorage.setItem("STORE", user);
        commit("login", { user });
        resolve();
      });
    },
    logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit("logout");
				localStorage.removeItem("STORE");
				resolve();
			});
		},
  },
  modules: {
  }
})
