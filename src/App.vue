<template>
  <div>
    <Header></Header>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./views/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
}
</style>
