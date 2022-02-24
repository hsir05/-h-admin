<template>
  <n-layout has-sider content-style="height:100vh">
    <LayoutSider />
    <n-layout content-style="height:100vh">
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content
        content-style="padding: 24px;height: calc(100vh - 70px)"
      >
        <RouterView />
      </n-layout-content>
      <!-- <n-layout-footer>成府路</n-layout-footer> -->
    </n-layout>
  </n-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LayoutSider from "./layoutSider/LayoutSider.vue";

export default defineComponent({
  name: "ParentLayout",
  components: {
    LayoutSider,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
