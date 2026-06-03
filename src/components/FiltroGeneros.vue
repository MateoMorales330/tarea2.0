<template>
  <div class="filtro-generos">
    <p>Selecciona un género:</p>
    <div class="botones">
      <button
        v-for="genero in generos"
        :key="genero"
        type="button"
        @click="$emit('seleccionar', genero)"
        :class="{ activo: genero === generoSeleccionado }"
      >
        {{ genero }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  generos: {
    type: Array,
    required: true,
  },
})

defineEmits(['seleccionar'])

const generoSeleccionado = ref(null)
</script>

<style scoped>
.filtro-generos {
  padding: 20px;
  border: 2px solid black;
  background: #6f5233;
  border-radius: 10px;
}

.botones {
  transition: 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

button {
  border: 1px solid grey;
  background: #c08552;
  color: rgb(255, 255, 255);
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #9c6644;
}

button.activo {
  background: #9c6644;
  font-weight: bold;
}


</style>
