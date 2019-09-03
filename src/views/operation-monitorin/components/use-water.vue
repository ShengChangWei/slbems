<template>
    <div class="water-container">
        <img src="@/assets/images/pc/sbgwt.png"
             alt="">
    </div>
</template>

<script>
export default {
  name: 'use-water'
};
</script>

<style lang="scss">
.water-container {
  position: relative;
  height: 100%;
  width: 100%;
  img {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
