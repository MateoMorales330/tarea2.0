<template>
  <div v-if="libro" class="detalle">
    <router-link to="/">← Volver al inicio</router-link>
    <h1>{{ libro.titulo }}</h1>
    <h2>Autor: {{ libro.autor }}</h2>
    <p class="genero"><span class="nombre">Género:</span> {{ libro.genero }}</p>
    <p class="editorial">Editorial: {{ libro.editorial }}</p>
    <p class="anio_publicacion">Año de publicación: {{ libro.anio_publicacion }}</p>
    <p class="precio">Precio: ${{ libro.precio_uyu }}</p>
  </div>
  <div v-else>
    <p>Cargando información del libro...</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLibroStore } from '@/stores/LibroStore.js'

const props = defineProps({
  id: String, // El router inyecta automáticamente el ID de la URL como prop
})

const store = useLibroStore()
const libro = computed(() => store.obtenerPorIsbn(props.id))
</script>

<style scoped>
.detalle {
  padding: 20px;
  line-height: 1.6;
}

.contenedor {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  border-left: 4px solid #42b883;
}

a {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 20px;
  display: inline-block;
}

a:hover {
  text-decoration: underline;
}

h1 {
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
}

h2 {
  color: #666;
  font-weight: 400;
  font-size: 1.2em;
  margin-bottom: 20px;
}

p {
  color: #555;
  margin: 10px 0;
  font-size: 1.05em;
}

.precio {
  font-size: 1.3em;
  color: #42b883;
  font-weight: bold;
  font-family: sans-serif;
}
</style>
