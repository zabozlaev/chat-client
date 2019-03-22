<template>
  <div class="wrapper">
    <div class="create-pannel">
      <div class="create-form pannel">
        <input
          type="text"
          placeholder="Channel name"
          v-model="name"
          class="input create-form__input"
        >
        <button class="button" @click="handleCreateChannel">Create Channel</button>
      </div>
      <div class="create-user-info"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleCreateChannel() {
      const { createChannel, name } = this;
      createChannel({ name });
      this.$router.push("/chat");
    },
    ...mapActions(["createChannel"])
  }
};
</script>

<style lang="scss">
.create {
  &-form {
    width: 400px;
    display: flex;
    flex-direction: column;
    &__input {
      margin-bottom: 20px;
    }
  }
}
</style>
