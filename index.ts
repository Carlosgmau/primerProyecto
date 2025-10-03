
/* Ejercicio 1

Escribe una función recursiva llamada sumaRecursiva 
que tome un array de números como argumento y devuelva la suma total de todos sus elementos. No puedes utilizar bucles (for, while).*/

function sumaRecursiva(array: number[]): number {

  if (array.length === 0) return 0; 

  let suma = array.at(-1)!;

  array.pop();

  return suma + sumaRecursiva(array); 
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const resultadoSuma = sumaRecursiva(numeros);
console.log(`La suma recursiva es: ${resultadoSuma}`); // Debería imprimir 15


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 2

Escribe una función llamada procesarUsuarios que tome un array de objetos representando usuarios (con propiedades como id, name, username, email) 
y realice las siguientes operaciones utilizando el método reduce:

    Filtrar: Elimina los usuarios cuyo id sea mayor a 5.
    Transformar: Convierte cada objeto usuario en un string con el formato "Nombre: [name], Username: [username]".
    Reducir: Concatena todos los strings resultantes en un único string, separados por una coma y un espacio. */


interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
}

function procesarUsuarios(usuarios: Usuario[]): string {


  return usuarios


    .reduce((acumulador, usuario) => {


      if (usuario.id <= 5) {

        
        const texto = `Nombre: ${usuario.name}, Username: ${usuario.username}`;


        acumulador.push(texto);


      }
      return acumulador;


    }, [] as string[])


    .join(", ");
}

// Ejemplo de uso (puedes crear un array de usuarios de prueba):
const usuariosDePrueba = [
  { id: 1, name: "Juan", username: "juanito", email: "juan@example.com" },
  { id: 2, name: "Maria", username: "mariita", email: "maria@example.com" },
  { id: 6, name: "Pedro", username: "pedrito", email: "pedro@example.com" }
];

const resultadoProcesado = procesarUsuarios(usuariosDePrueba);
console.log(`Resultado procesado: ${resultadoProcesado}`); // Debería imprimir "Nombre: Juan, Username: juanito, Nombre: Maria, Username: mariita"


/* Ejercicio 3

EEscribe una función asíncrona llamada obtenerTitulosDePosts que realice las siguientes acciones:

    Utiliza fetch para obtener los datos de la siguiente URL: https://jsonplaceholder.typicode.com/posts.
    Maneja posibles errores durante la petición utilizando bloques try...catch.
    Extrae el título (title) de cada post en el array resultante.
    Devuelve un array con los títulos extraídos. */

interface Post {
    title: string
}

async function obtenerTitulosDePosts(): Promise<string[]> {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let body: Post[] = await response.json()
  
  return body.map(post => post.title)
}



// Ejemplo de uso:
obtenerTitulosDePosts()
  .then(titulos => {
    console.log(`Títulos de los posts: ${titulos}`);
  })
  .catch(error => {
    console.error(`Error al obtener los títulos: ${error}`);
  });
 
// Ejemplo con async/await (opcional, para practicar):
async function ejecutarObtenerTitulos() {
  try {
    const titulos = await obtenerTitulosDePosts();
    console.log(`Títulos de los posts (con async/await): ${titulos}`);
  } catch (error) {
    console.error(`Error al obtener los títulos (con async/await): ${error}`);
  }
}
 
ejecutarObtenerTitulos();

