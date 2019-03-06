<template>
  <main class="page-chat">
    <section class="dialogs-list">
      <div class="dialogs-list__tags">
        <div class="dialogs-list__tag">Family</div>
      </div>
      <div class="dialogs-list__items">
        <div class="dialogs-list__item">
          <div class="dialogs-list__item-avatar"></div>
          <div class="dialogs-list__item-content">
            <div class="dialogs-list__item-name">John</div>
            <div class="dialogs-list__item-time">09:55</div>
            <div class="dialogs-list__item-message">{{ message | messagePreview}}</div>
          </div>
          <div class="dialogs-list__item-tag"></div>
        </div>
        <div class="dialogs-list__item">
          <div class="dialogs-list__item-avatar"></div>
          <div class="dialogs-list__item-content">
            <div class="dialogs-list__item-name">John</div>
            <div class="dialogs-list__item-time">09:55</div>
            <div class="dialogs-list__item-message">{{ message | messagePreview}}</div>
          </div>
          <div class="dialogs-list__item-tag"></div>
        </div>
        <div class="dialogs-list__item">
          <div class="dialogs-list__item-avatar"></div>
          <div class="dialogs-list__item-content">
            <div class="dialogs-list__item-name">John</div>
            <div class="dialogs-list__item-time">09:55</div>
            <div class="dialogs-list__item-message">{{ message | messagePreview}}</div>
          </div>
          <div class="dialogs-list__item-tag"></div>
        </div>
        <div class="dialogs-list__item">
          <div class="dialogs-list__item-avatar"></div>
          <div class="dialogs-list__item-content">
            <div class="dialogs-list__item-name">John</div>
            <div class="dialogs-list__item-time">09:55</div>
            <div class="dialogs-list__item-message">{{ message | messagePreview}}</div>
          </div>
          <div class="dialogs-list__item-tag"></div>
        </div>
        <div class="dialogs-list__item">
          <div class="dialogs-list__item-avatar"></div>
          <div class="dialogs-list__item-content">
            <div class="dialogs-list__item-name">John</div>
            <div class="dialogs-list__item-time">09:55</div>
            <div class="dialogs-list__item-message">{{ message | messagePreview}}</div>
          </div>
          <div class="dialogs-list__item-tag"></div>
        </div>
      </div>
    </section>
    <section class="dialog">
      <div class="dialog-bar">
        <input type="text" class="dialog-bar__search-input" placeholder="Search Message">
      </div>
      <div class="dialog-messages">
        <div class="dialog-message dialog-message_in">
          <div class="dialog-message__avatar"></div>
          <div class="dialog-message__content">
            Этимология
            В своём изначальном понимании греческий термин «космос» (порядок, мироустройство) имел философскую основу, определяя гипотетический замкнутый вакуум вокруг Земли — центра Вселенной[1]. Тем не менее, в языках на латинской основе и её заимствованиях к одинаковой семантике применяют практический термин «пространство» (так как с научной точки зрения обволакивающий Землю вакуум бесконечен), поэтому в русском и близких ему языках в результате реформенной корректировки родился своеобразный оксюморон «космическое пространство».
          </div>
        </div>
        <div class="dialog-message dialog-message_out">
          <div class="dialog-message__avatar"></div>
          <div
            class="dialog-message__content"
          >Чёткой границы не существует, атмосфера разрежается постепенно по мере удаления от земной поверхности, и до сих пор нет единого мнения, что считать фактором начала космоса. Если бы температура была постоянной, то давление бы изменялось по экспоненциальному закону от 100 кПа на уровне моря до нуля. Международная авиационная федерация в качестве рабочей границы между атмосферой и космосом установила высоту в 100 км (линия Кармана), потому что на этой высоте для создания подъёмной аэродинамической силы необходимо, чтобы летательный аппарат двигался с первой космической скоростью, из-за чего теряется смысл авиаполёта[2][3][4][5].</div>
        </div>
      </div>
      <div class="dialog-input">
        <textarea class="dialog-input__text-field" placeholder="Write something..."></textarea>
        <div class="dialog-input__file">
          <input type="file" class="dialog-input__file-real">
          <div class="dialog-input__file-fake"></div>
        </div>
        <div class="dialog-input__tools"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at quasi minus! Cupiditate aliquid omnis voluptates, modi provident eius possimus ut similique inventore reprehenderit quisquam laudantium minus delectus numquam libero."
    };
  },
  filters: {
    messagePreview(message) {
      return message.length < 50 ? message : `${message.slice(0, 49)}...`;
    }
  },
  methods: {
    scrollBottomOnMessage() {}
  }
};
</script>

<style lang="scss">
// dialog
.dialog {
  height: 100vh;
  overflow-y: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-bar {
    display: flex;
    height: 100%;
    max-height: 100px;
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
      color: #9da3c4;

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
        &__triangle {
          left: -100px;
        }
        &__avatar {
          margin: 0 20px 0 0;
        }
      }
    }
    &_out {
      flex-direction: row-reverse;
      .dialog-message {
        &__triangle {
          transform: rotate(135deg);
          z-index: 2;
          top: -15px;
          right: -100px;
        }
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
    &__triangle {
      width: 100px;
      height: 100px;
      position: absolute;
      overflow: hidden;
      transform: rotate(-45deg);
      z-index: 2;
      top: -15px;
      &::after {
        content: "";
        position: absolute;
        width: 35px;
        height: 35px;
        background: #fff;
        transform: rotate(-90deg); /* Не забываем про префиксы */
        top: 71px;
        left: 71px;
        box-shadow: 0px 0px 15px 2px rgba(#bcc7ee, 0.4);
      }
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
    height: 280px;
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
      max-height: 170px;
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
    max-height: calc(100vh - 126px);
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
    max-height: 100px;
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
