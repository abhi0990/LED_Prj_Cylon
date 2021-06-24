<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <button class="button" v-if="!showButtonStatus" @click="configureRobot">
        Configure LED
      </button>
      <button class="button" v-if="showButtonStatus" @click="startLED">
        Start LED
      </button>
      <button class="button" v-if="showButtonStatus" @click="stopLED">
        Stop LED
      </button>
      <button class="button" v-if="showButtonStatus" @click="toggleLED">
        Toggle LED
      </button>
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
  computed: {
    showButtonStatus() {
      return store.getters.showButtonStatus;
    },
  },
  methods: {
    configureRobot() {
      store.dispatch("configureRobot");
    },
    startLED() {
      store.dispatch("startLED");
    },
    stopLED() {
      store.dispatch("stopLED");
    },
    toggleLED() {
      store.dispatch("toggleLED");
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
