<template>
  <StartPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StartPage from "./views/StartPage.vue";

export default defineComponent({
  name: "App",
  components: {
    StartPage
  }
});
</script>

<style lang="scss">
@import "@/design/main.scss";
</style>
