import { gqlMutation, gqlQuery, apolloClient } from "../../../graphql/";

import { MESSAGES_QUERY, CREATE_MESSAGE_MUTATION } from "./types";

export default {
  state: {
    messages: []
  },
  mutations: {
    messages(state, data) {
      state.messages = data;
    }
  },
  getters: {
    messages: state => state.messages
  },
  actions: {
    async loadMessages({ commit }, data) {
      const {
        data: { getMessages }
      } = await gqlQuery(MESSAGES_QUERY, { ...data });
      console.log(getMessages);
      commit("messages", getMessages);
    },
    async createMessage({ commit }, data) {
      const {
        data: { createMessage }
      } = await gqlMutation(CREATE_MESSAGE_MUTATION, { ...data });
    }
  }
};
