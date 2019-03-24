import { gqlMutation, gqlQuery } from "../../../graphql/";
import { CHANNELS_QUERY, CREATE_CHANNEL_MUTATION } from "./types";

export default {
  state: {
    channels: [],
    currentChannel: null
  },
  mutations: {
    channels(state, payload) {
      state.channels = payload;
    },
    selectCurrentChannel(state, payload) {
      state.currentChannel = payload;
    },
    addChannel(state, payload) {
      state.channels = [...state.channels, payload];
    }
  },
  getters: {
    channels: state => state.channels,
    currentChannel: state => state.currentChannel
  },
  actions: {
    async loadChannels({ commit }) {
      const {
        data: { getChannels }
      } = await gqlQuery(CHANNELS_QUERY);
      console.log(getChannels);
      commit("channels", getChannels);
      commit("selectCurrentChannel", getChannels[0] || []);
    },
    async createChannel({ commit }, data) {
      const {
        data: {
          createChannel: { success, channel }
        }
      } = await gqlMutation(CREATE_CHANNEL_MUTATION, { ...data });
      commit("addChannel", channel);
      console.log(success);
    },
    selectCurrentChannel({ commit }, payload) {
      commit("selectCurrentChannel", payload);
    }
  }
};
