<template>
  <div class="child">
    <div class="title">{{ WidgetTitle }}</div>
    <ul>
      <li v-for="link in Links" :key="link.href">
        <a v-bind:href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WidgetLink from "@/models/WidgetLink";

export default defineComponent({
  name: "links-widget",
  props: {
    WidgetTitle: {
      type: String,
      default: ""
    },
    Links: {
      type: Array as () => Array<WidgetLink>
    }
  }
});
</script>
