<template>
  <section class="dialogs-list">
    <div class="dialogs-list__tags">
      <div class="dialogs-list__tag">Family</div>
    </div>
    <div class="dialogs-list__items">
      <div
        class="dialogs-list__item"
        @click="switchChannel(channel)"
        :class="currentChannel  && channel.id === currentChannel.id ? 'dialogs-list__item_active': ''"
        v-show="channels.length !== 0"
        v-for="(channel, idx) in channels"
        :key="idx"
      >
        <div class="dialogs-list__item-avatar"></div>
        <div class="dialogs-list__item-content">
          <div class="dialogs-list__item-info">
            <div class="dialogs-list__item-name">{{channel.name}}</div>
            <div class="dialogs-list__item-time">09:55</div>
          </div>
          <div class="dialogs-list__item-message">123123</div>
        </div>
        <div class="dialogs-list__item-tag"></div>
      </div>
    </div>
    <div class="dialogs-empty" v-show="channels.length === 0">
      <p class="dialogs-empty__message">You have no dialogs started!</p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  props: ["channels"],
  methods: {
    switchChannel(args) {
      const { selectCurrentChannel, loadMessages } = this;
      selectCurrentChannel(args);
      loadMessages({ channelId: args.id });
    },
    ...mapMutations(["selectCurrentChannel"]),
    ...mapActions(["loadMessages"])
  },
  computed: {
    ...mapGetters(["currentChannel"])
  }
};
</script>

<style lang="scss">
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
    &:hover {
      background-color: #fff;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
    }

    &_active {
      background-color: #fff;
      box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
    }

    &-content {
      width: 100%;
    }

    &-info {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 10px 0;
      width: 100%;
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
    }

    &_message {
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
}
</style>
