import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import datosLibros from '../assets/Datos.js' // Cargando desde assets

export const useLibroStore = defineStore('libroStore', () => {
  const libros = ref(datosLibros)

  // Getters para filtrar de manera limpia
  const librosDestacados = computed(() => libros.value.filter((l) => l.destacado))
  const obtenerPorId = computed(() => (isbn) => libros.value.find((l) => l.isbn === parseInt(isbn)))
  const obtenerPorIsbn = computed(() => (isbn) => libros.value.find((l) => l.isbn === isbn))
  const generosDisponibles = computed(() => [...new Set(libros.value.map((l) => l.genero))])
  const obtenerPorGenero = computed(
    () => (genero) => libros.value.filter((l) => l.genero === genero),
  )
  const obtenerPorPrecio = computed(
    () => (precio_uyu) => libros.value.filter((l) => l.precio_uyu === precio_uyu),
  )
  const obtenerPorEditorial = computed(
    () => (editorial) => libros.value.filter((l) => l.editorial === editorial),
  )
  const obtenerPorAnioPublicacion = computed(
    () => (anio) => libros.value.filter((l) => l.anio_publicacion === anio),
  )

  return {
    libros,
    librosDestacados,
    obtenerPorIsbn,
    generosDisponibles,
    obtenerPorGenero,
    obtenerPorPrecio,
    obtenerPorEditorial,
    obtenerPorAnioPublicacion,
  }
})
