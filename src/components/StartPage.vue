<template>
  <div class="parent flex">
    <div class="child">
      test1
    </div>
    <div class="child">
      <ul>
        <li>
          <a href="https://www.reddit.com/user/bentus/m/drones/">/drones</a>
        </li>
        <li>DevHints</li>
        <li>StackOverflow</li>
        <li>Vue Example</li>
      </ul>
    </div>
    <div class="child">
      test3
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartPage",
  props: {
    msg: String
  }
});
</script>

<style lang="scss">
</style>
