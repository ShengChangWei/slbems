<template>
  <form action="http://192.168.0.81:87/fileController/uploadFile">
    <input id="input-id" type="file" class="file" multiple data-preview-file-type="text">
    <input type="submit">
  </form>
</template>

<script>
export default {
  name: 'file-upload'
}
</script>

<style lang="scss" scoped>
</style>
