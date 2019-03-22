import { apolloClient, gqlMutation, gqlQuery } from "../../../graphql";
import { REGISTER_MUTATION, LOGIN_MUTATION, ME_QUERY } from "./types.js";

export default {
  state: {
    isLoggedIn: localStorage.getItem("accessToken").length > 0,
    username: null,
    email: null,
    registerErrors: [],
    loginErrors: [],
    avatarUrl: ""
  },
  getters: {
    username: state => state.username,
    isLoggedIn: state => state.isLoggedIn,
    registerErrors: state => state.registerErrors,
    loginErrors: state => state.loginErrors,
    avatarUrl: state => state.avatarUrl
  },
  setters: {},
  mutations: {
    toggleLoggedIn(state, val) {
      state.isLoggedIn = val;
    },
    registerErrors(state, errors) {
      state.registerErrors = errors;
    },
    clearRegisterErrors(state) {
      state.registerErrors = [];
    },
    loginErrors(state, errors) {
      state.loginErrors = errors;
    },
    clearLoginErrors(state) {
      state.loginErrors = [];
    },
    username(state, data) {
      state.username = data;
    },
    avatarUrl(state, data) {
      state.avatarUrl = data;
    }
  },
  actions: {
    async register({ commit }, data) {
      const {
        data: {
          register: { errors, success }
        }
      } = await gqlMutation(REGISTER_MUTATION, { input: { ...data } });

      if (!success && errors.length) commit("registerErrors", errors);
    },
    async login({ commit }, data) {
      const {
        data: {
          login: { accessToken, refreshToken, errors }
        }
      } = await gqlMutation(LOGIN_MUTATION, data);
      if (errors) {
        commit("toggleLoggedIn", true);
        return commit("loginErrors", errors);
      }

      console.log(accessToken);

      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      localStorage.setItem("refreshToken", `Refresh ${refreshToken}`);
      commit("toggleLoggedIn", true);
    },
    async me({ commit, state }) {
      if (state.username) return;
      const {
        data: {
          me: { username, avatarUrl }
        }
      } = await gqlQuery(ME_QUERY);
      commit("username", username);
      commit("avatarUrl", avatarUrl);
    }
  }
};
