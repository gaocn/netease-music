<template>
  <div class="home">
    <div id="d1"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
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