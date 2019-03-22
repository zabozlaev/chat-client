<template>
  <section class="dialog">
    <div class="dialog-bar">
      <input type="text" class="dialog-bar__search-input" placeholder="Search Message">
    </div>
    <div class="dialog-messages">
      <div
        class="dialog-message"
        :class="message.author.username === username ? 'dialog-message_out': 'dialog-message_in'"
        v-for="(message, index) in messages"
        :key="index"
      >
        <div
          class="dialog-message__avatar"
          :style="{'background-image': 'url('+message.author.avatarUrl+')'}"
        ></div>
        <div class="dialog-message__content">
          <div class="dialog-message__text">{{message.text}}</div>
          <div class="dialog-message__date">{{message.created | dateFromNow}}</div>
        </div>
      </div>
    </div>
    <div class="dialog-input">
      <textarea
        class="dialog-input__text-field"
        @keypress.13="handleCreateMessage"
        v-model="text"
        placeholder="Write something..."
      ></textarea>
      <div class="dialog-input__tools"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { MESSAGE_SUBSCRIPTION } from "./types";

import { MESSAGES_QUERY } from "../../store/modules/messages/types.js";

export default {
  props: ["channelId"],
  data() {
    return {
      text: ""
    };
  },

  apollo: {
    newChannelMessage: {
      subscribeToMore: {
        document: MESSAGE_SUBSCRIPTION,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables() {
          return {
            channelId: this.channelId || 1
          };
        },
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          // Here, return the new result from the previous with the new data
          console.log(subscriptionData);
        }
      }
    }
  },

  methods: {
    scrollBottom() {
      const container = this.$el.querySelector(".dialog-messages");
      container.scrollTop = container.scrollHeight;
    },
    handleCreateMessage() {
      const { createMessage, text, currentChannel } = this;
      if (text.trim().length === 0) return;
      createMessage({ text, channelId: currentChannel.id });
      this.text = "";
    },
    ...mapActions(["createMessage"])
  },
  computed: {
    ...mapGetters(["messages", "username", "currentChannel"])
  },
  updated() {
    this.scrollBottom();
  }
};
</script>

<style lang="scss">
.dialogs__empty {
  &-message {
    padding: 20px;
    text-align: center;
  }
}
.dialog {
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
      /* background-image: url("../assets/icons/search.svg"); */
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
        /* background-image: url("../assets/icons/addFile.svg"); */
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

.page-chat {
  height: 100vh;
  width: 100%;
  display: flex;
}
</style>
