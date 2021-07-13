<template>
  <div id="app" class="jumbotron p-3">
    <Codificado />
    <hr />
    <p>Respuestas: 1-B, 2-B, 3-C, 4-B, 5-C</p>
  </div>
</template>

<script>
import Codificado from "./components/Codificado.vue";

export default {
  name: "App",
  components: {
    Codificado,
  },
};
</script>

<style>
#app {
}
</style>
