<template>
  <table>
    <thead>
      <tr>
        <th>Cart</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in cart" :key="c.id">
        <td>{{ c.name }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script src="./cart.js"></script>