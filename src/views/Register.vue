<template>
  <div class="wrapper">
    <div class="panel">
      <input type="email" v-model="email" class="input register__input" placeholder="email">
      <input type="text" v-model="username" class="input register__input" placeholder="username">
      <input
        type="password"
        v-model="password"
        class="input register__input"
        placeholder="password"
      >
      <Errors v-show="registerErrors.length > 0" :Errors="registerErrors"/>
      <button class="button" @click="handleRegister">Register</button>
      <div class="suggestion">
        <p class="suggestion__question">Have already got an account?</p>
        <router-link tag="button" to="/login" class="button button_bright">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Errors from "../components/Errors";

export default {
  components: { Errors },
  data() {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  methods: {
    handleRegister() {
      const { email, password, username } = this;
      this.register({ email, password, username });
    },
    clearErrors() {},
    ...mapActions(["register"]),
    ...mapMutations(["clearRegisterErrors"])
  },
  computed: {
    ...mapGetters(["registerErrors"])
  },
  watch: {
    email() {
      if (this.registerErrors.length < 0) return;
      this.clearRegisterErrors();
    },
    password() {
      if (this.registerErrors.length < 0) return;
      this.clearRegisterErrors();
    },
    username() {
      if (this.registerErrors.length < 0) return;
      this.clearRegisterErrors();
    }
  }
};
</script>

<style lang="scss">
.error {
  &-path {
    font-size: 20px;
  }
  &-message {
    margin-top: 15px;
    font-size: 15px;
    letter-spacing: 0.5px;
  }
}

.errors__list {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  &-item {
    color: #661d1d;
    background-color: #ff7070;
    margin: 15px 0;
    padding: 15px;
  }
}

.register {
  &__input {
    margin-bottom: 15px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  transition: opacity 0.5s;
}
</style>
