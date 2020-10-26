<template>
  <div class="parent flex">
    <links-widget :Links="linkSet1" />
    <links-widget :Links="linkSet1" />
    <links-widget :Links="linkSet1" />
    <!-- <div class="child">
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
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinksWidget from "@/components/LinksWidget.vue";
import WidgetLink from "@/models/WidgetLink";
import { dataService } from "@/shared/data.service.ts";

export default defineComponent({
  name: "StartPage",
  components: {
    LinksWidget
  },
  data() {
    return {
      linkSet1: [] as WidgetLink[]
    };
  },
  mounted() {
    const list1 = dataService.getLinks("Main");
    this.linkSet1 = list1;
  }
});
</script>
