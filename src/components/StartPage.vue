<template>
  <div class="parent flex">
    <div class="child">
      test1
    </div>
    <div class="child">
      <ul>
        <li>tst</li>
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
.parent.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  height: 100vh;
}

.child {
  min-width: 200px;
  min-height: 200px;
  background-color: #928374;
  //color:#928374;
  margin: 5px;
  padding: 5px;
}
</style>
