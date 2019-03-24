import Vue from "vue";
import Vuex, { Store } from "vuex";

import user from "./modules/user/";
import channels from "./modules/channels";
import messages from "./modules/messages";
import invites from "./modules/invites";

Vue.use(Vuex);

export default new Store({
  modules: {
    user,
    channels,
    messages,
    invites
  }
});
