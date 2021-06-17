<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <button class="button" @click="configureRobot">Configure LED</button>
      <button class="button" @click="startLED">Start LED</button>
      <button class="button" @click="stopLED">Stop LED</button>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    configureRobot() {
      console.log("called robot");
      store.dispatch("configureRobot");
    },
    startLED() {
      store.dispatch("startLED");
    },
    stopLED() {
      store.dispatch("stopLED");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}

.button {
  height: 50px;
  width: 200px;
  background-color: darkseagreen;
}
</style>
