import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary     : "#9db8d6",
                secondary   : "#cee1f0",
                accent      : "#a0aecc",
                accent2     : "#657090",
                accent3     : "#354567"
            }
        }
    }
});
