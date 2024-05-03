<template>
<section @click="$router.push(`./visualizar/${id}`)">
  <img :src="sprite" :alt="`${name} sprite`">
  <div class="name-container">
    <h1>
      {{id}}. {{ name }}
    </h1>
  </div>
</section>
</template>

<script>
export default{
  props: ['id', 'name', 'sprite']
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: white;
  height: min-content;

  filter: drop-shadow(0 0 .25rem rgba(0, 0, 0, 0.5));

  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    img {
      width: 110% !important;
      filter: drop-shadow(0 0 .25rem rgba(0, 0, 0, 0.5));
    }
  }

  .name-container {
    height: 6rem;
    border-radius: 0 0 1rem 1rem;
    filter: none;
    background-color: #ef5350;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
    text-align: center;
    text-transform: capitalize;
  }

  img {
    width: 100%;
    transition: width .25s;
  }
}

@media (max-width: 1200px) {
  section {
    flex-direction: row;
    width: 100%;

    .name-container {
      border-radius: 0 1rem 1rem 0;
      height: 100%;
      width: 100%;
    }

    img {
      width: 50%;
    }
  }
}

</style>