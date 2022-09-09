<template>
  <div>
    <h1>Home</h1>
    <h3>not proxied</h3>
    <img
      width="400"
      src="https://picsum.photos/id/237/536/354.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"
    />
    <h3>proxied</h3>
    <img
      width="400"
      v-bind:src="'/id/237/536/354.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o'"
    />
  </div>
</template>

<script></script>