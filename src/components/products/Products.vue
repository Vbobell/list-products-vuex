<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.amount }}</td>
        <td>
          <button @click="addToCart(product.id)">Buy</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script src="./products.js"></script>