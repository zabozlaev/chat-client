<template>
  <div class="errors">
    <p>Some errors have appeared there:</p>
    <div class="errors__list">
      <transition-group name="fade">
        <div class="errors__list-item" v-for="(error) in errors" :key="error.path">
          <div class="error-path">{{error.path}}</div>
          <div class="error-message">{{error.message}}</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ["errors"]
};
</script>

<style>
</style>
