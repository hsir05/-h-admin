<template>
  <div>welcome</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useAppStore } from "@/store/modules/useAppStore";
export default defineComponent({
  name: "Welcome",
  setup() {
    const appStore = useAppStore();
    console.log(appStore.getIsCache);

    return {};
  },
});
</script>
