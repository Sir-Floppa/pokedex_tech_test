<template>
  <nav>
    <button>Recargar Aleatorios</button>

    <form action="">
      <div class="form-control">
        <label for="tipo">Tipo</label>
        <select name="tipo" id="" v-model="type">
  
          <option value="prueba1">Prueba1</option>
          <option value="prueba2">Prueba2</option>
          <option value="prueba3">Prueba3</option>
          <option value="prueba4">Prueba4</option>
  
        </select>
      </div>
    </form>

    <button @click="searchType">Buscar</button>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      type: ''
    }
  },
  methods: {
    // Emite una senal que genera los nuevos Pokemon aleatorios.
    newRandom() {
      this.$emit('newRandom');
    }

    // Redirige a la ruta de busqueda.
    searchType() {
      if(this.type != '') {
        this.$router.push(`/${this.type}`)
      }
      else{
        alert('Seleccione un tipo válido.')
      }
    }
  }

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