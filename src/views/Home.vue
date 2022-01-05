<template>
  <div class="home">
    <top-nav></top-nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopNav from "@/components/TopNav.vue";

@Options({
  components: {
    TopNav,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background-color: skyblue;
}
</style>