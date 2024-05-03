<template>
  <nav>
    <img src="pokeball.png" alt="">
    
    <form action="">
      <button @click="newRandom()">Recargar Aleatorios</button>
      <div class="form-control">
        <label for="tipo">Tipo</label>
        <select name="tipo" v-model="type">
  
          <option :value="type" v-for="type in types">{{ type.toUpperCase() }}</option>
  
        </select>
        <button @click="searchType">Buscar</button>
      </div>
    </form>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      types: []
    }
  },
  async created() {
    this.types = await this.$api.getTypes();
  },
  methods: {
    // Emite una senal que genera los nuevos Pokemon aleatorios.
    newRandom() {
      this.$router.push('/')
      this.$emit('newRandom');
    },

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
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

img {
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.form-control {
  display: flex;
  align-items: center;
  flex-direction: row;
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
select {
  margin: 1rem;
  padding: 1rem;
  border-radius: .5rem;
}

@media (max-width: 420px) {
  nav {
    flex-direction: row;
    width: 100vw;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
    height: 20vh;
    padding: 0;

    * {
      z-index: 2;
    }
    
    form {
      gap: 1rem;
      margin-top: 1rem;
    }

    label {
      font-weight: bold;
    }

    img {
      width: 75%;
      margin-right: -2rem;
      position: fixed;
      z-index: 0;
      opacity: .25;
      top: -1%;
      left: -25%;
    }
  }
}
</style>