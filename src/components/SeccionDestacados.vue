<template>
  <div class="seccion-destacados">
    <h2>Libros Destacados del Mes</h2>

    <div class="grilla-libros">
      <TarjetaLibro v-for="libro in libros" :key="libro.id" :libro="libro" />
    </div>

    <p v-if="libros.length === 0" class="mensaje-vacio">
      No hay libros destacados en este momento.
    </p>
  </div>
</template>

<script setup>
// Importamos el componente de la tarjeta para poder usarlo arriba
import TarjetaLibro from './TarjetaLibro.vue'

// Definimos que este componente espera recibir un Array llamado 'libros'
defineProps({
  libros: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.seccion-destacados {
  margin-top: 20px;
}

.grilla-libros {
  display: grid;
  /* Esto crea columnas automáticas que se adaptan al tamaño de la pantalla */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.mensaje-vacio {
  color: #666;
  font-style: italic;
}
</style>
