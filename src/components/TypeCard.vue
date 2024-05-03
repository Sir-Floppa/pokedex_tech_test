<template>
  <span class="type-card" @click="$router.push(`/${type.type.name}`)">
    {{ type.type.name }}
  </span>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style>
.type-card {
  background-color: rgb(57, 57, 97);
  color: white;
  padding: .75rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  border-radius: 1rem;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgb(26, 26, 97);
    background-color: rgb(28, 28, 90);
  }

  &:active {
    border: 2px solid rgb(34, 34, 94);
    background-color: rgb(86, 86, 139);
  }
}
</style>