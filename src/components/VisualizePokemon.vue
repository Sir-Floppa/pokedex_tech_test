<template>
<main>
  <h1>4. Charmander</h1>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="">


  <div class="type-card-container">
    <span class="type-card">
      Fuego
    </span>
  </div>

  
  <div class="abilities-container">
    <div class="ability">
      <div class="name-container">
        <h1>Solar Power</h1>
      </div>
      <p>
        During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.
      </p>
    </div>
    
    <div class="ability">
      <div class="name-container">
        <h1>Solar Power</h1>
      </div>
      <p>
        During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.
      </p>
    </div>
  </div>
</main>


</template>

<script>

export default {
  
}
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #ef5350;
    text-align: center;
  }

  img {
    width: 30%;
  }

  .type-card-container {
    display: flex;
    gap: 1rem;

    .type-card {
      text-transform: uppercase;
      color: white;
      font-size: 1.25rem;
      font-weight: bold;
      background-color: rgb(87, 109, 151);
      padding: .25rem 1rem;
      border-radius: .25rem;
      cursor: pointer;
    }
  }

  .abilities-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    
    .ability {
      width: 20%;
      filter: drop-shadow(0 0 .25rem rgba(0, 0, 0, 0.5));
      background-color: white;
      border-radius: 1rem;

      .name-container {
        height: 6rem;
        border-radius: 1rem 1rem 0 0;
        filter: none;
        background-color: #ef5350;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        margin: 1rem;
      }

      h1 {
        color: white;
        background-color: #ef5350;
      }
    }
  }

}
</style>