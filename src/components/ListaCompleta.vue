<template>
  <div class="lista-completa">
    <div v-if="libros.length">
      <TarjetaLibro v-for="libro in libros" :key="libro.isbn" :libro="libro" />
    </div>
    <p v-else>No hay libros disponibles.</p>
  </div>
</template>

<script setup>
import TarjetaLibro from './TarjetaLibro.vue'

defineProps({
  libros: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.lista-completa {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}


</style>
