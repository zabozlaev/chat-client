<template>
  <div class="menu">
    <div class="user">
      <div class="user__avatar" :style="{'background-image':'url('+ avatarUrl +')'}"></div>
      <div class="user__name">{{username}}</div>
    </div>
    <div class="nav" v-for="(link, idx) in links" :key="idx">
      <router-link
        :to="link.to"
        v-show="link.title === 'Login' || link.title === 'Register' ? !isLoggedIn : isLoggedIn "
        :class="`nav-item nav-item_${link.class}`"
      >{{link.title}}</router-link>
    </div>
    <div class="nav nav_extra">
      <button
        v-show="isLoggedIn"
        class="button nav-item nav-item_logout"
        @click="handleLogout"
      >Logout</button>
      <router-link to="/help" class="nav-item nav-item_help">Help</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      links: [
        {
          to: "/stats",
          title: "Stats",

          class: "stats"
        },
        {
          to: "/login",
          title: "Login",
          class: "login"
        },
        {
          to: "/chat",
          title: "Message",
          class: "chat"
        },
        {
          to: "/invites",
          title: "Invites",
          class: "invites"
        },
        {
          to: "/settings",
          title: "Settings",
          class: "settings"
        },
        {
          to: "/register",
          title: "Register",
          class: "register"
        },
        {
          to: "/create",
          title: "Create",
          class: "create"
        }
      ]
    };
  },

  methods: {
    handleLogout() {
      const { logout, $router } = this;
      logout();
      $router.go();
    },
    ...mapActions(["me", "logout"])
  },

  computed: {
    ...mapGetters(["isLoggedIn", "username", "avatarUrl"])
  },

  mounted() {
    const { me } = this;
    me();
  }
};
</script>

<style lang="scss">
.user {
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
  height: 100%;
  max-height: 70px;

  &__avatar {
    border-radius: 50%;
    background-color: #fff;
    height: 50px;
    width: 50px;
    margin: 0 20px 0 0;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 30px rgba(#5d86fa, 0.6);
    }
  }
}

.nav {
  display: flex;
  flex-direction: column;
  &_extra {
    margin: 50px 0 0 0;
  }
  &-item.router-link-active {
    background-color: #4977f0;
  }
  &-item {
    padding: 25px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      background-color: #4977f0;
    }
    &:before {
      margin: 0 15px 0 0;
    }
    &_time {
      &::before {
        content: url("../assets/icons/time.svg");
      }
    }
    &_message {
      &::before {
        content: url("../assets/icons/message.svg");
      }
    }
    &_contacts {
      &::before {
        content: url("../assets/icons/contact.svg");
      }
    }
    &_deleted {
      &::before {
        content: url("../assets/icons/delete.svg");
      }
    }
    &_settings {
      &::before {
        content: url("../assets/icons/settings.svg");
      }
    }
    &_logout {
      &:hover {
        background-color: #ed5f55;
      }
      &::before {
        content: url("../assets/icons/logout.svg");
      }
    }
    &_help {
      &:hover {
        background-color: #fcce54;
      }
      &::before {
        content: url("../assets/icons/help.svg");
      }
    }
  }
}

.menu {
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: #6692ff;
  color: #fff;
  box-shadow: 30px 0 100px rgba(#bccbef, 0.5);
}
</style>
