<template>
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-custom">
      <a class="navbar-brand text-light" href="#">
        <img src="/src/assets/logo3.jpeg" alt="Logo" class="logo-image" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- Usar ms-auto para alinear los enlaces a la derecha -->
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home <i class="fas fa-home"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Nosotros <i class="fas fa-users"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Productos <i class="fas fa-box-open"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/treatments">Tratamientos <i class="fas fa-spa"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacto <i class="fas fa-phone"></i></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="fondoApp">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Puedes añadir cualquier estado si lo necesitas más adelante
    };
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fondoApp {
  position: relative; /* Para usar pseudo-elemento */
  padding: 20px;
}

.fondoApp::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/assets/fondoApp.jpg');
  background-size: cover; /* Cubre todo el contenedor */
  background-repeat: repeat-y; /* Repite la imagen verticalmente si es necesario */
  background-position: center; /* Centra la imagen */
  z-index: -1; /* Envía el fondo detrás del contenido */
}

.router-view {
  position: relative; /* Para asegurarse de que el contenido esté sobre el fondo */
  z-index: 1; /* Asegura que el contenido esté por encima del fondo */
}


.bg-custom {
  background: rgba(12, 12, 12, 0.568);
}

.navbar {
  width: 98%;
  border: 2px solid #e06363;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e57373;
  padding: 0.5rem 1rem; /* Ajusta este valor para reducir la altura */
}

.navbar-light .navbar-nav .nav-link {
  color: #e57373;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.navbar-light .navbar-nav .nav-link.active {
  color: #d32f2f;
}

.navbar-light .nav-link:hover {
  border: 2px solid #e06363;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e57373;
}

.logo-image {
  height: 60px; /* Ajusta la altura del logo si es necesario */
  margin-left: 35px;
  vertical-align: middle;
  max-width: 100%; /* Cambia de 120% a 100% */
  object-fit: contain;
  border: 2px solid #e06363;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e57373;
}
</style>
