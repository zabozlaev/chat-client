<template>
  <div class="menu">
    <div class="user">
      <div class="user__avatar"></div>
      <div class="user__name">coder</div>
    </div>
    <div class="nav">
      <router-link to="/time" exact class="nav-item nav-item_time">Timeline</router-link>
      <router-link to="/chat" class="nav-item nav-item_message">Message</router-link>
      <router-link to="/asdad" class="nav-item nav-item_contacts">Contacts</router-link>
      <router-link to="/asdasd" class="nav-item nav-item_deleted">Deleted</router-link>
      <router-link to="/asdasdasdas" class="nav-item nav-item_settings">Settings</router-link>
    </div>
    <div class="nav nav_extra">
      <router-link to="/asdasdasd" class="nav-item nav-item_logout">Logout</router-link>
      <router-link to="/asdasdasdadsd" class="nav-item nav-item_help">Help</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.user {
  display: flex;
  align-items: center;
  padding: 25px 40px 45px 40px;

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
    padding: 40px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    font-size: 18px;
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
      &::before {
        content: url("../assets/icons/logout.svg");
      }
    }
    &_help {
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
