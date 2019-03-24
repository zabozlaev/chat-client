<template>
  <section class="page-invites">
    <div class="invites-list">
      <div class="invites-list__heading">Channels</div>
      <div class="invites-list__item">
        <div class="invites-list__item-avatar"></div>
        <div class="invites-list__item-content">
          <div class="invites-list__item-info">
            <div class="invites-list__item-name">CHANNEL NAME, HUI</div>
            <div class="invites-list__item-time">09:55</div>
          </div>
          <div class="invites-list__item-message">123123</div>
        </div>
        <div class="invites-list__item-actions">
          <div class="invites-list__item-action invites-list__item-action_accept"></div>
          <div class="invites-list__item-action invites-list__item-action_decline"></div>
        </div>
      </div>
    </div>

    <div class="invites-list invites-list_target">
      <div class="invites-list__heading">Friends XXX</div>
      <div class="invites-list__item">
        <div class="invites-list__item-avatar"></div>
        <div class="invites-list__item-content">
          <div class="invites-list__item-info">
            <div class="invites-list__item-name">DMITRO, PUSSY</div>
            <div class="invites-list__item-time">09:55</div>
          </div>
          <div class="invites-list__item-message">RAW SHIT</div>
        </div>
        <div class="invites-list__item-actions">
          <div class="invites-list__item-action invites-list__item-action_accept"></div>
          <div class="invites-list__item-action invites-list__item-action_decline"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["loadInvites"])
  },
  mounted() {
    this.loadInvites();
  }
};
</script>

<style lang="scss">
.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

.invites-list {
  width: 50%;
  background-color: #f4f6fb;
  position: relative;

  &:last-of-type {
    animation-name: slide;
    animation-duration: 1s;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #6692ff;
    box-shadow: 0px 0px 15px 2px rgba(#6692ff, 0.4);
  }

  &__heading {
    padding: 20px 25px;
    font-size: 28px;
    font-weight: 600;
    color: #2f3640;
  }

  &__item {
    padding: 20px 25px;
    display: flex;
    align-items: center;
    position: relative;
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

    &-action {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition: all 0.3s ease;

      &_accept {
        margin: 0 10px 0 0;
        background-color: #2ed573;
        &:hover {
          box-shadow: 0px 0px 15px 2px rgba(#2ed573, 0.4);
        }
      }

      &_decline {
        background-color: #ff6b81;
        &:hover {
          box-shadow: 0px 0px 15px 2px rgba(#ff6b81, 0.4);
        }
      }
    }

    &-actions {
      display: flex;
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
      margin: 0 20px 0 0;
      color: #7b81a6;
    }
    &-time {
      font-weight: 300;
      font-size: 14px;
      color: #a6a2ad;
    }

    &-message {
      color: #2f3640;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
.page-invites {
  display: flex;
  width: 100%;
}
</style>
