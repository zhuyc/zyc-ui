<template>
  <div>这是一个datePicker组件!!!</div>
</template>

<script>
export default {
  name: "datePicker",
  created() {
    console.log("datePicker init");

    setTimeout(() => {
      console.log('延时倒计时');
    }, 1000);
  },
};
</script>

<style lang="scss"></style>
