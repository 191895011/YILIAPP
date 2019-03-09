<template>
  <div class='hrss' style="min-height: 100vh;">
    <router-view/>
    <menus/>
  </div>
</template>

<script>
import Menus from "@/components/menus";
export default {
  data() {
    return {
    };
  },
  components: {
    Menus
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
</style>