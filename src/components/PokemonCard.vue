<template>
<section>
  <img :src="sprite" :alt="`${name} sprite`">
  <div class="name-container">
    <h1>
      {{ name }}
    </h1>
  </div>
</section>
</template>

<script>
export default{
  props: ['name', 'sprite']
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
    /* Estos estilos hacen que el sprite escale sin suavizado */
    /* https://stackoverflow.com/questions/14068103/disable-antialising-when-scaling-images */
    image-rendering: optimizeSpeed;            
    image-rendering: -moz-crisp-edges;         
    image-rendering: -o-crisp-edges;           
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;                
    image-rendering: optimize-contrast;        
    -ms-interpolation-mode: nearest-neighbor;
  }
}

</style>