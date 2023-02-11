<template>
  <header id="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

#header {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: $primary;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    min-height: 150px;
    width: 100%;

    .logo {
      display: flex;
      justify-content: flex-start;
    }
  }
}

@media (max-width: 520px) {
  .container {
    flex-wrap: wrap;

    .logo {
      margin-top: 15px;
    }
  }
}
</style>
