import Engine from '@ideeza/vue3dengine'
import Vue from "vue";

const Components = {
  'etcs':Engine.etcs,
  'etcd':Engine.etcd,
  'ct':Engine.ct,
  'etp':Engine.etp,
  'eus':Engine.eus,
  'cu':Engine.cu,
  'eud':Engine.eud,
  'cou':Engine.cou,
  'gu': Engine.gu
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});