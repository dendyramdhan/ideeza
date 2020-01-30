<template>
      <div>
        <nuxt-child></nuxt-child>
      </div>
</template>

<style scoped>
  .select-layout-btn [type="radio"]:checked,
  .select-layout-btn [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  .select-layout-btn [type="radio"]:checked+label,
  .select-layout-btn [type="radio"]:not(:checked)+label {
    position: relative;
    padding: 4px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    border: 1px solid #fff;
  }

  .select-layout-btn [type="radio"]:not(:checked)+label:after {
    border: none;
  }

  .select-layout-btn [type="radio"]:checked+label {
    border: 1px solid #ff14c9;
  }

  .w-1-8 {
    width: 12.5%
  }
</style>
