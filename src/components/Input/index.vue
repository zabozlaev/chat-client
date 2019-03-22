<template>
  <input :type="inputType" :class="`input ${inputClass}`">
</template>

<script>
export default {
  props: ["inputType", "inputClass"]
};
</script>

<style lang="scss">
.input {
  padding: 15px;
  background-color: #fff;
  border: none;
  outline: none;
  letter-spacing: 0.5px;
  font-size: 20px;
  &:focus {
    background-color: #f4f4ff;
  }
}
</style>
