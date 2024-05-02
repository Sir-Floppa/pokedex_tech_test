<template>
  <nav>
    <button>Recargar Aleatorios</button>

    <form action="">
      <div class="form-control">
        <label for="tipo">Tipo</label>
        <select name="tipo" id="">
  
          <option value="prueba">Prueba</option>
  
        </select>
      </div>
    </form>

    <button>Buscar</button>

  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  color: white;
  background-color: #ef5350;
  padding: 2rem;
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.form-control {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}

button {
  background-color: white;
  border: none;
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid transparent;

  &:hover {
    background-color: rgb(221, 221, 221);
    border: 1px solid grey;
  }

  &:active {
    background-color: grey;
  }
}
</style>