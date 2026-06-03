<script setup>
import { useLibroStore } from '@/stores/LibroStore.js'
import { useRouter } from 'vue-router'

const librosStore = useLibroStore()
const router = useRouter()

const verDetalle = (isbn) => {
  router.push({ name: 'libro', params: { id: isbn } })
}
</script>

<template>
  <div class="inicio-container">
    <h1>📚 Catálogo de Libros</h1>

    <div class="grid-libros">
      <div
        v-for="libro in librosStore.libros"
        :key="libro.isbn"
        class="tarjeta-libro"
        @click="verDetalle(libro.isbn)"
      >
        <h3>{{ libro.titulo }}</h3>
        <p><strong>Autor:</strong> {{ libro.autor }}</p>
        <p><strong>Género:</strong> {{ libro.genero }}</p>
        <p class="precio">Precio: ${{ libro.precio_uyu }}</p>
        <p class="editorial">Editorial: {{ libro.editorial }}</p>
        <p class="anio_publicacion">Año de publicación: {{ libro.anio_publicacion }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor principal limitado al tamaño de la pantalla */
.inicio-container {
  background-color: #ffedda;
  max-width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}

/* El Grid adapta la cantidad de columnas según el ancho de la pantalla */
.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Estilo de cada tarjeta para evitar que el texto rompa el diseño */
.tarjeta-libro {
  border: 1px solid #000000;
  padding: 15px;
  border-radius: 8px;
  background-color: #f0e0d0;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}
.tarjeta-libro:hover {
  border-color: #3ff7e1;
  background-color: #f9f9f9;
  box-shadow: #4e80b5;
  transform: translateY(-4px);
}

.descripcion {
  font-size: 0.9em;
  color: #1e293b;
  /* Corta el texto con puntos suspensivos si es demasiado extenso */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


</style>
