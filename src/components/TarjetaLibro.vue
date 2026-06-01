<template>
  <div class="tarjeta" @click="verDetalle">
    <h3>{{ libro.titulo }}</h3>
    <p>
      <em>{{ libro.autor }}</em>
    </p>
    <span class="badge">{{ libro.genero }}</span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  libro: Object,
})

const router = useRouter()

const verDetalle = () => {
  router.push({ name: 'libro', params: { id: props.libro.isbn } })
}
</script>

<style scoped>
.tarjeta {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  cursor: pointer;
  border-radius: 6px;
}
.tarjeta:hover {
  border-color: #42b883;
  background-color: #f9f9f9;
}
.badge {
  background: #35495e;
  color: white;
  padding: 2px 6px;
  font-size: 0.8em;
  border-radius: 4px;
}
</style>
