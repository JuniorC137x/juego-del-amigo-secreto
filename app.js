// 1. CREAR UNA LISTA VACÍA PARA GUARDAR LOS NOMBRES
let listaAmigos = [];

// 2. FUNCIÓN PARA ASIGNAR TEXTO A UN ELEMENTO 
function asignarTextoElemento(elemento, texto) {
    // Buscar el elemento en la página y cambiarle el texto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// 3. FUNCIÓN PARA AGREGAR UN AMIGO A LA LISTA
function agregarAmigo() {
    // Paso 1: Obtener lo que escribió el usuario
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    
    // Paso 2: Limpiar espacios al inicio y final del nombre
    nombreAmigo = nombreAmigo.trim();
    
    // Paso 3: Verificar que no esté vacío
    if (nombreAmigo == '') {
        alert('¡Oye! Tienes que escribir un nombre');
        return;
    }
    
    // Paso 4: Verificar que no esté repetido
    // Buscar si el nombre ya está en la lista
    let estaRepetido = false;
    for (let i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] == nombreAmigo) {
            estaRepetido = true;
            break; 
        }
    }
    
    if (estaRepetido) {
        alert('Este nombre ya está en la lista. Escribe otro nombre.');
        return; // Parar aquí
    }
    
    // Paso 5: Si llegamos aquí, todo está bien. Agregar el nombre
    listaAmigos.push(nombreAmigo);
    
    // Paso 6: Limpiar la caja de texto
    inputAmigo.value = '';
    
    // Paso 7: Mostrar la lista actualizada
    mostrarAmigos();
}

// 4. FUNCIÓN PARA MOSTRAR TODOS LOS AMIGOS EN PANTALLA
function mostrarAmigos() {
    // Si no hay amigos, no mostrar nada
    if (listaAmigos.length == 0) {
        asignarTextoElemento('#listaAmigos', '');
        return;
    }
    
    // Separar los nombres
    let nombresJuntos = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        nombresJuntos = nombresJuntos + listaAmigos[i];
        
        if (i < listaAmigos.length - 1) {
            nombresJuntos = nombresJuntos + ' • ';
        }
    }
    
    // Mostrar la lista en pantalla
    asignarTextoElemento('#listaAmigos', nombresJuntos);
}

// 5. FUNCIÓN PARA SORTEAR UN AMIGO
function sortearAmigo() {
    // Paso 1: Verificar que tengamos al menos 2 amigos
    if (listaAmigos.length < 2) {
        alert('Necesitas agregar al menos 2 amigos para sortear');
        return; // Parar aquí
    }
    
    // Paso 2: Elegir un número aleatorio
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Paso 3: Usar ese número para elegir un amigo
    let amigoElegido = listaAmigos[numeroAleatorio];
    
    // Paso 4: Cambiar el título para mostrar el ganador
    asignarTextoElemento('.section-title', '¡El amigo secreto es: ' + amigoElegido + "!");
    
    // Paso 5: Mostrar botón de reiniciar en el área de resultado
    asignarTextoElemento('#resultado', '<button class="button-reset" onclick="reiniciarJuego()">Reiniciar Juego</button>');
}

// 6. FUNCIÓN PARA REINICIAR TODO EL JUEGO
function reiniciarJuego() {
    // Paso 1: Vaciar la lista de amigos
    listaAmigos = [];
    
    // Paso 2: Volver a poner el título original
    asignarTextoElemento('.section-title', 'Digite el nombre de sus amigos');
    
    // Paso 3: Limpiar la pantalla
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
    
    // Paso 4: Limpiar la caja de texto
    document.getElementById('amigo').value = '';
};