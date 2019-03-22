<template>
  <div class="wrapper">
    <div class="panel">
      <input v-model="email" class="input login__input" placeholder="email" inputType="password">
      <input class="input login__input" v-model="password" placeholder="password" type="password">
      <button class="button login__button" @click="handleLogin">Login</button>
      <Errors v-show="loginErrors.length > 0" :errors="loginErrors"/>
      <div class="suggestion">
        <p class="suggestion__question">Don't have an account?</p>
        <button class="button button_bright login__register-button">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import { mapActions, mapGetters, mapMutations } from "vuex";
import Errors from "../components/Errors";

export default {
  components: {
    Input,
    Errors
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      const { email, password, login } = this;
      login({ email, password });
    },
    ...mapActions(["login"]),
    ...mapMutations(["clearLoginErrors"])
  },
  computed: {
    ...mapGetters(["loginErrors"])
  },
  watch: {
    email() {
      const { loginErrors, clearLoginErrors } = this;
      if (loginErrors.length === 0) return;
      clearLoginErrors();
    },
    password() {
      const { loginErrors, clearLoginErrors } = this;
      if (loginErrors.length === 0) return;
      clearLoginErrors();
    }
  }
};
</script>

<style lang="scss">
.login {
  &__input {
    margin-bottom: 15px;
  }
}

.suggestion {
  display: flex;
  flex-direction: column;
  text-align: center;
  &__question {
    padding: 15px;
    color: #a9aecb;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 200px;
  }
}

.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

.button {
  padding: 15px;
  outline: none;
  border: none;
  color: #fff;
  background-color: #4977f0;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #6692ff;
  }
  &_bright {
    background-color: #f3f5fd;
    color: #4977f0;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>

