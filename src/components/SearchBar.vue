<template>
  <nav>
    <img src="pokeball.png" alt="">
    
    <button @click="newRandom()">Recargar Aleatorios</button>
    <form action="">
      <div class="form-control">
        <label for="tipo">Tipo</label>
        <select name="tipo" v-model="type">
          <option 
            v-for="type in types"
            :value="type" >{{ type.toUpperCase() }}</option>
        </select>

        <button @click="searchType">Buscar</button>
      </div>
    </form>
    
    <div class="form-control">
      <label for="idioma">Idioma</label>
      <select name="idioma" v-model="lang">
        <option
          v-for="lang in langs"
          :value="lang">{{ lang }}</option>
      </select>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      types: [],
      langs: [],
      lang: 'en'
    }
  },
  async created() {
    this.types = await this.$api.getTypes();
    this.langs = await this.$api.getLanguages();

    this.$watch(() => this.lang, (newParams, oldParams) => {
      this.$emit('newLang', newParams);
    })
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

@media (max-width: 430px) {
  @media (max-height: 1200px) {
    nav {
      width: 35vw;
    }
  }
  nav {
    flex-direction: row;
    width: 100vw;
    gap: 0;
    max-width: 100vw;
    align-items: center;
    justify-content: center;
    height: 20vh;
    padding-left: 1rem;
    padding-right: 1rem;

    .form-control {
      flex-direction: column;
      gap: .5rem;
    }

    select {
      margin: 0;
    }

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

  @media (max-height: 800px) {
    button {
      padding: .5rem;
    }
  }
}

@media (max-height: 430px) {
  nav {
    img {
      margin-right: -2rem;
      position: fixed;
      z-index: 0;
      opacity: .25;
      top: -1%;
      left: -20%;
    }
  }
}


</style>