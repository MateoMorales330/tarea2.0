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
  background: #f7f7f7;
  border-radius: 10px;
}

.botones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

button {
  border: none;
  background: #42b883;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #2f8a6d;
}

button.activo {
  background: #1a5a4a;
  font-weight: bold;
}
</style>
