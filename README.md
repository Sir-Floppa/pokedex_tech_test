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
