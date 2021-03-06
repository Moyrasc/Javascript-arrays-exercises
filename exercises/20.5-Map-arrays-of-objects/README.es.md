# `20.5` "Mapeando" un arreglo de objetos

El escenario m谩s com煤n para la funci贸n de mapeo es para simplificar los arreglos dados, por ejemplo:

El algoritmo actual crea un arreglo con solo los nombres de las personas y los imprime en la consola.

## 馃摑 Instrucciones:

1. Actualiza la funci贸n `map` para que cree un arreglo donde cada elemento contenga lo siguiente:

```js
Hello, my name is Joe and I am 13 years old
```

##聽Resultado esperado:

Debe quedar algo similar a esto, sin embargo las edades pueden variar.

```js
[ 'Hello, my name is Joe and I am 36 years old',
  'Hello, my name is Bob and I am 47 years old',
  'Hello, my name is Erika and I am 33 years old',
  'Hello, my name is Dylan and I am 23 years old',
  'Hello, my name is Steve and I am 19 years old' ]
```

## 馃挕 Pista:

+ Debes determinar la edad de cada persona seg煤n su fecha de nacimiento (`birthDate`).

+ Busca en Google "C贸mo obtener la edad de la fecha de nacimiento dada en JavaScript".

+ Recuerda la edad tambi茅n depende del mes, si el mes de la fecha actual es mayor o igual al actual suma un a帽o".

+ Dentro de tu funci贸n simplifier, debe devolver una concatenaci贸n.

## Resultado esperado:

```js
[ 'Hello, my name is Joe and I am 13 years old',
  'Hello, my name is Bob and I am 42 years old',
  'Hello, my name is Erika and I am 28 years old',
  'Hello, my name is Dylan and I am 18 years old',
  'Hello, my name is Steve and I am 14 years old' ]
```