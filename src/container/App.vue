<template>
  <div class="customer">
    <Title :parentData = "{ title: 'List products' }"></Title>
    <Products :parentData = "{ products: products }"></Products>
  </div>
</template>

<script src="./app.js"></script>
<style lang="scss" src="./app.scss"></style>