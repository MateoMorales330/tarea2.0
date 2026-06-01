<template>
  <nav class="navbar">
    <router-link to="/">Inicio</router-link>
    <router-link to="/listado">Catálogo Completo</router-link>
    <router-link to="/genero">Buscar por Género</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  background-color: #35495e;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navbar a:hover,
.navbar a.router-link-active {
  background-color: #42b883; /* Resalta la página en la que estás */
}
</style>
