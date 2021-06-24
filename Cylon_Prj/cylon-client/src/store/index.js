import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showButton: false,
  },
  mutations: {
    updateButtonStatus: (state, status) => {
      state.showButton = status;
    },
  },
  getters: {
    showButtonStatus: (state) => state.showButton,
  },
  actions: {
    configureRobot: async ({ commit }) => {
      try {
        console.log("called action");
        commit("updateButtonStatus", false);
        const res = await axios.post("http://localhost:4000/configureRobot", {
          connections: {
            arduino: { adaptor: "firmata", port: "/devttyACMB" },
          },
          devices: {
            led: { driver: "led", pin: 13 },
          },
        });
        console.log(res.data.data.status);
        if (res.data.data.status === "success") {
          commit("updateButtonStatus", true);
        }
      } catch (error) {
        commit("updateButtonStatus", false);
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
    toggleLED: async () => {
      try {
        const res = await axios.get("http://localhost:4000/toggle");
        console.log(res);
      } catch (error) {
        // handle error
        console.log(error);
      }
    },
  },
  modules: {},
});
