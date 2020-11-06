<template>
  <div class="parent flex">
    <links-widget :Links="linkSet1" WidgetTitle="Core" />
    <links-widget :Links="linkSet2" WidgetTitle="Learn" />
    <links-widget :Links="linkSet3" WidgetTitle="Work" />
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
      linkSet1: [] as WidgetLink[],
      linkSet2: [] as WidgetLink[],
      linkSet3: [] as WidgetLink[]
    };
  },
  mounted() {
    this.linkSet1 = dataService.getLinks("Core");
    this.linkSet2 = dataService.getLinks("Learn");
    this.linkSet3 = dataService.getLinks("Work");
  }
});
</script>
