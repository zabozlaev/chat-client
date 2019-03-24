<template>
  <main class="page-chat">
    <DialogList :channels="channels"/>
    <Chat :username="username" :channelId="currentChannel ? currentChannel.id : null"/>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Chat from "../components/Chat";
import DialogList from "../components/Dialogs";
import { close } from "fs";

export default {
  components: {
    Chat,
    DialogList
  },
  data() {
    return {
      message: "asdasd"
    };
  },
  filters: {
    messagePreview(message) {
      return message.length < 50 ? message : `${message.slice(0, 49)}...`;
    }
  },
  methods: {
    scrollBottomOnMessage() {},
    ...mapActions(["loadChannels", "loadMessages", "me"]),
    handleMessageLoad() {
      if (this.channels.length === 0 || !this.channels[0]) return;

      setImmediate(() =>
        this.loadMessages({ channelId: this.currentChannel.id })
      );
    }
  },
  computed: {
    ...mapGetters(["channels", "messages", "username", "currentChannel"])
  },

  mounted() {
    this.loadChannels();
    this.handleMessageLoad();
  }
};
</script>

<style lang="scss">
// dialog
/* .dialog {
  height: 100vh;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-bar {
    display: flex;
    height: 100%;
    max-height: 70px;
    align-items: center;
    padding: 0px 0 0px 25px;
    border-bottom: 1px solid #ededed;
    &__search-input {
      background-color: #f3f5fd;
      border: none;
      outline: none;
      padding: 10px 30px 10px 50px;
      border-radius: 50px;
      width: 170px;
      background-image: url("../assets/icons/search.svg");
      background-repeat: no-repeat;
      background-position: 10px 7px;
      font-weight: 100;
      font-size: 16px;
      color: #2f3640;

      &::placeholder {
        color: #c7cde8;
      }
    }
  }
  &-messages {
    height: 850px;
    overflow-y: scroll;
    padding: 0 25px;
    color: #2f3640;

    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  &-message {
    display: flex;
    position: relative;

    margin: 25px 0;

    &_in {
      .dialog-message {
        &__avatar {
          margin: 0 20px 0 0;
        }
      }
    }
    &_out {
      flex-direction: row-reverse;
      .dialog-message {
        &__avatar {
          margin: 0 0 0 20px;
        }
      }
    }

    &__avatar {
      height: 50px;
      min-width: 50px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 30px 0 0;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
    }
    &__content {
      position: relative;
      background-color: #fff;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
      padding: 10px 30px;
      border-radius: 5px;
      line-height: 24px;
      font-size: 16px;
    }
  }

  &-input {
    border-top: 1px solid #ededed;
    padding: 10px 0 0 25px;
    height: 145px;
    position: relative;

    &__file {
      position: absolute;
      right: 0;
      top: 0px;
      &-fake {
        width: 50px;
        height: 50px;
        padding: 5px;
        background-color: #6692ff;
        background-image: url("../assets/icons/addFile.svg");
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
      }
      &-real {
        cursor: pointer;
        position: absolute;
        width: 60px;
        height: 60px;
        opacity: 0;
      }
    }

    &__text-field {
      resize: none;
      outline: none;
      border: none;
      width: 90%;
      max-height: 125px;
      height: 100%;
      font-family: "Proxima";
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      overflow-y: scroll;
      padding: 0;
      color: #2f3640;

      &::-webkit-scrollbar {
        width: 0px;
      }

      &::placeholder {
        font-size: 16px;
        font-weight: 300;
        color: #d7d9e6;
      }
    }
    &__button {
      padding: 50px;
      background-color: #6692ff;
      outline: none;
      border: none;
      transition: all 0.5s ease;
      cursor: pointer;
      color: #fff;
      &:hover {
        background-color: #4977f0;
      }
    }
    &__tools {
      display: flex;
      align-items: center;
    }
  }
}
// end

.page-chat {
  height: 100vh;
  width: 100%;
  display: flex;
}

.dialogs-list {
  max-width: 420px;
  width: 100%;
  background-color: #f4f6fb;
  overflow-y: hidden;

  &__items {
    max-height: calc(100vh - 71px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  &__item {
    padding: 20px 25px;
    display: flex;
    position: relative;
    cursor: pointer;
    transition: all ease 0.4s;
    &:first-of-type {
      padding: 40px 25px 20px 25px;
    }
    &:hover {
      background-color: #fff;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
    }

    &-tag {
      position: absolute;
      height: 25px;
      width: 5px;
      background-color: #fe7e7e;
      top: 20px;
      right: 0;

      box-shadow: 0px 0px 15px 2px rgba(#fe7e7e, 0.4);
    }

    &-avatar {
      height: 50px;
      min-width: 50px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 20px 0 0;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
    }

    &-name {
      font-size: 16px;
      font-weight: 700;
      color: #7b81a6;
    }
    &-time {
      font-weight: 300;
      font-size: 14px;
      color: #a6a2ad;
      margin: 10px 0 10px 0;
    }

    &-message {
      color: #2f3640;
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__tags {
    display: flex;
    height: 100%;
    max-height: 70px;
    align-items: center;
    padding: 0px 0 0px 25px;
    border-bottom: 1px solid #d9d9da;
  }
  &__tag {
    color: #656b92;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    margin: 0 60px 0 0;
    &::before {
      content: "";
      height: 10px;
      width: 10px;
      display: inline-block;
      margin: 0 10px 0 0;
      border-radius: 50%;
      background-color: #fb787a;
      box-shadow: 3px 3px 7px 0 rgba(#fb787a, 0.4);
    }
  }
} */
</style>
