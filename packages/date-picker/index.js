import datePicker from "./src/date-picker.vue";

datePicker.install = function (Vue) {
  Vue.component(datePicker.name, datePicker);
};

export default datePicker;
