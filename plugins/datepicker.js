// https://vcalendar.io

import VCalendar from 'v-calendar';
import Vue from 'vue'

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />

});
