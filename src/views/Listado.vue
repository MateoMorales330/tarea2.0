<template>
  <div>
    <h1>Catálogo Completo</h1>
    <ListaCompleta :libros="store.libros" />
  </div>
</template>

<script setup>
import { useLibroStore } from '@/stores/LibroStore.js'
import ListaCompleta from '@/components/ListaCompleta.vue'
const store = useLibroStore()
</script>
<style>


</style>