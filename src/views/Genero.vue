<template>
  <div>
    <h1>Buscar por Género</h1>
    <FiltroGeneros :generos="store.generosDisponibles" @seleccionar="generoSeleccionado = $event" />

    <div v-if="generoSeleccionado" class="resultados">
      <h2>Libros de {{ generoSeleccionado }}</h2>
      <div class="grid-libros">
        <div
          v-for="libro in librosFiltrados"
          :key="libro.isbn"
          class="tarjeta-libro"
          @click="verDetalle(libro.isbn)"
        >
          <h3>{{ libro.titulo }}</h3>
          <p><strong>Autor:</strong> {{ libro.autor }}</p>
          <p class="precio">Precio: ${{ libro.precio_uyu }}</p>
          <p class="editorial">Editorial: {{ libro.editorial }}</p>
          <p class="anio_publicacion">Año: {{ libro.anio_publicacion }}</p>
        </div>
      </div>
    </div>
    <div v-else class="sin-seleccion">
      <p>Selecciona un género para ver los libros disponibles</p>
    </div>
  </div>
</template>

<script setup>
import { useLibroStore } from '@/stores/LibroStore.js'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import FiltroGeneros from '@/components/FiltroGeneros.vue'

const store = useLibroStore()
const router = useRouter()
const generoSeleccionado = ref(null)

const librosFiltrados = computed(() => {
  if (!generoSeleccionado.value) return []
  return store.obtenerPorGenero(generoSeleccionado.value)
})

const verDetalle = (isbn) => {
  router.push({ name: 'libro', params: { id: isbn } })
}
</script>

<style scoped>
.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.tarjeta-libro {
  border: 1px solid #1b2f49;
  padding: 15px;
  border-radius: 8px;
  background-color: #FFBB6A;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.5s ease;
}

.tarjeta-libro:hover {
  border-color: #0fa1e0;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.2);
  transform: translateY(-4px);
}

.sin-seleccion {
  text-align: center;
  padding: 40px;
  color: #001eff;
  font-size: 18px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}
</style>
