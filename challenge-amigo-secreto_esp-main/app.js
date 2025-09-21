// Arreglo para almacenar los nombres de los amigos
let amigos = [];

/**
 * Lee el valor del input, valida y añade al arreglo.
 * Luego actualiza la lista visible y limpia el campo de entrada.
 */
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  // Validación: campo vacío
  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  // Actualizar el arreglo de amigos
  amigos.push(nombre);

  // Refrescar la lista en pantalla
  actualizarLista();

  // Limpiar y enfocar el campo
  input.value = '';
  input.focus();
}

/**
 * Recorre el arreglo 'amigos' y pinta cada elemento como <li> en #listaAmigos.
 * Limpia la lista antes de volver a renderizar para evitar duplicados.
 */
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpiar lista existente

  // Iterar sobre el arreglo y crear <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

/**
 * Selecciona aleatoriamente un nombre del arreglo 'amigos'
 * y lo muestra dentro de la lista #resultado.
 */
function sortearAmigo() {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; // limpiar resultado previo

  // Validación: no sortear si la lista está vacía
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  // Índice aleatorio con Math.random() y Math.floor()
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar resultado
  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}

// Extra de usabilidad: permitir "Enter" para agregar
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        agregarAmigo();
      }
    });
  }
});

