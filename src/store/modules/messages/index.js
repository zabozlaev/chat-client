import { gqlMutation, gqlQuery, apolloClient } from "../../../graphql/";

import {
  MESSAGES_QUERY,
  CREATE_MESSAGE_MUTATION,
  SEARCH_MESSAGE_QUERY
} from "./types";

export default {
  state: {
    messages: [],
    searchMessages: []
  },
  mutations: {
    messages(state, data) {
      state.messages = data;
    },
    searchMessages(state, data) {
      state.searchMessages = data;
    },
    updateMessages(state, data) {
      state.messages.push(data);
    }
  },
  getters: {
    messages: state => state.messages
  },
  actions: {
    async loadMessages({ commit, state }, data) {
      // if (!state.loggedIn) return;

      const {
        data: { getMessages }
      } = await gqlQuery(MESSAGES_QUERY, { ...data });
      console.log(getMessages);
      commit("messages", getMessages);
    },
    async createMessage({ commit, state }, data) {
      // if (!state.loggedIn) return;
      const {
        data: { createMessage }
      } = await gqlMutation(CREATE_MESSAGE_MUTATION, { ...data });
    },
    async searchMessages({ commit }, data) {
      const {
        data: {
          searchMessages: { messages }
        }
      } = await gqlQuery(SEARCH_MESSAGE_QUERY, { ...data });
      commit("searchMessages", messages);
    }
  }
};
