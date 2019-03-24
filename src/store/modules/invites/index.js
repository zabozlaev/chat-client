import { gqlMutation, gqlQuery, apolloClient } from "../../../graphql/";

import { INVITES_QUERY } from "./types";

export default {
  state: {
    invites: []
  },
  mutations: {
    invites(state, payload) {
      state.invites = payload;
    }
  },
  getters: {
    invites: state => state.invites
  },
  actions: {
    async loadInvites({ commit }) {
      const {
        data: {
          getInvites: { success, channels }
        }
      } = await gqlQuery(INVITES_QUERY);
      commit("invites", success ? channels : []);
    }
  }
};
