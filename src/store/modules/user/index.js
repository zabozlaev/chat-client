import { apolloClient, gqlMutation, gqlQuery } from "../../../graphql";
import {
  REGISTER_MUTATION,
  LOGIN_MUTATION,
  ME_QUERY,
  LOGOUT_MUTATION
} from "./types.js";

export default {
  state: {
    isLoggedIn: localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken").length > 0
      : false,
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
    },
    me(state, { avatarUrl, username }) {
      state.avatarUrl = avatarUrl;
      state.username = username;
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
          login: { accessToken, refreshToken, errors, user }
        }
      } = await gqlMutation(LOGIN_MUTATION, data);
      if (errors) {
        commit("toggleLoggedIn", true);
        return commit("loginErrors", errors);
      }

      localStorage.setItem("accessToken", `Bearer ${accessToken}`);
      localStorage.setItem("refreshToken", refreshToken);
      commit("toggleLoggedIn", true);
      commit("me", user);
    },
    async me({ commit, state }) {
      // if (!state.loggedIn || state.username) return;
      const {
        data: {
          me: { username, avatarUrl }
        }
      } = await gqlQuery(ME_QUERY);
      commit("username", username);
      commit("avatarUrl", avatarUrl);
    },
    async logout({ commit, state }) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!state.loggedIn || !refreshToken || refreshToken.trim().length < 1) {
        return;
      }

      const {
        data: { logout }
      } = await gqlMutation(LOGOUT_MUTATION, { refreshToken });
      console.log(logout);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    }
  }
};
