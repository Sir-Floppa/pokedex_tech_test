# Pokedex Tech Test

## Requerimientos
- Ver 5 Pokémon aleatorios y refrescar para mostrar nuevos.
- Buscar Pokémon por tipo.
- Ver Pokémon en detalle al hacerle click.
  - También debería poder seleccionar el idioma entre una lista de idioma.
- Responsive.
- Test unitarios en las funciones de Pokémon aleatorios, búsqueda por tipo y visualización de detalles

## Decisiones de Diseño

Se usa Jest para la suit de testing, guardándola como una dependencia de desarrollo.

```
npm install jest --save-dev
```

### Interfaz

#### Vista de Búsqueda

![](./README_Imgs/vistaBusqueda.png)

#### Vista de Visualización Específica

![](./README_Imgs/vistaVisualizacion.png)

### Tests

Para probar la conexión a la API desarrollé los siguientes tests:

```js
it('obtener pokemon por id: 1', async () => {
  let poke = await api.getPokemonById(1);

  expect(poke).toEqual(bulbasaur);
})

it('obtener pokemon por id: 1026', async () => {
  let poke = await api.getPokemonById(1026);

  expect(poke).toEqual(undefined);
})

it('obtener pokemon por id: 0', async () => {
  let poke = await api.getPokemonById(0);

  expect(poke).toEqual(undefined);
})
```

En estos se prueban los casos para id=1, cuyo resultado guardé en el archivo *bulbasaur.js*, y los casos límite de 1026 y 0, que son valores que se salen del rango de la API. Intenté obtener el 1026 programáticamente pero la API no me entrega ninguna manera de hacerlo, así que de momento está hardcodeado.

No hice uno para la selección aleatoria porque esa función solo llama a la funcion de conseguir con Id con un Id aleatorio. Además, no se puede predefinir una salida para algo aleatorio.

### Sobre los tiempos de carga

En ocasiones la aplicación da la sensación de tardar en cargar un los Pokémons, esto se debe al tiempo de respuesta de la API.
https://github.com/PokeAPI/pokeapi/issues/339
Se podría disimlar esperando a que la lista esté poblada para mostrar todos los Pokémons al mismo tiempo, pero siento que eso daría más sensación de lentitud que una tardanza ocasional en cargar uno o dos Pokémons.

# Configuración del Proyecto 

## Instalación de Dependencias
```
npm install
```

### Ejecutar Entorno de Desarrollo
```
npm run serve
```

### Compilado Para Producción
```
npm run build
```

### Despliegue con GH Pages

El comando anterior genera la carpeta _dist_, que por simplicidad y tiempo renombraremos como _docs_.

Con esto podemos hacer un push al repositorio en producción y configurar el entorno de GH Pages desde las configuraciones del repositorio.

Settings >> Pages >> Deploy from branch >> "production/docs".
