<template>
  <div class="logo">
    <img src="../../assets/icons/n.svg" class="w-25px mr-5" alt="logo" />
    <span class="logo-title">Naive Admin</span>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.logo {
  width: 100%;
  @apply h-45px text-center flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
