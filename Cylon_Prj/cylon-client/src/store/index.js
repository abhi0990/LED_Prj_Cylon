import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    configureRobot: async () => {
      try {
        console.log("called action");
        const res = await axios.post("http://localhost:4000/configureRobot", {
          connections: {
            arduino: { adaptor: "firmata", port: "/devttyACMB" },
          },
          devices: {
            led: { driver: "led", pin: 13 },
          },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    startLED: async () => {
      try {
        const res = await axios.get("http://localhost:4000/startled");
        console.log(res);
      } catch (error) {
        // handle error
        console.log(error);
      }
    },
    stopLED: async () => {
      try {
        const res = await axios.get("http://localhost:4000/stopled");
        console.log(res);
      } catch (error) {
        // handle error
        console.log(error);
      }
    },
  },
  modules: {},
});
