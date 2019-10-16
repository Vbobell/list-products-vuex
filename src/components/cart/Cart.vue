<template>
  <section>
    <h2>Cart</h2>
    <ul>
      <li v-for="c in cart" :key="c.id">
          <label>{{ c.name }}</label>
          <span>{{ c.amount }}</span>
      </li>
    </ul>
  </section>
</template>

<script src="./cart.js"></script>