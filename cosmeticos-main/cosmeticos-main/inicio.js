// Asegurarse de que el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

  /** Efecto dinámico de las mariposas flotantes */
  function moverElemento(elemento) {
    function actualizarPosicion() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      elemento.style.left = `${x}px`;
      elemento.style.top = `${y}px`;

      const scale = Math.random() * 1.5 + 0.5;
      const rotate = Math.random() * 360;

      elemento.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

      setTimeout(actualizarPosicion, Math.random() * 1000 + 500);
    }

    actualizarPosicion();
  }

  /** Mover todas las mariposas dinámicas por toda la pantalla */
  const mariposasDinamicas = document.querySelectorAll('.extra-mariposa');
  mariposasDinamicas.forEach(mariposa => {
    moverElemento(mariposa);
  });

  /** Manejo del botón Start */
  const startBtn = document.getElementById('start-btn');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = "productos.html";
    });
  }

  /** Manejo de la mariposa estática con enlace */
  const mariposaEstatica = document.querySelector('.static-mariposa');
  if (mariposaEstatica) {
    mariposaEstatica.addEventListener('click', () => {
      window.location.href = "productos.html";
    });
  }
});
// Asegurarse de que el DOM esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

  // Manejo del evento del botón Start
  const startBtn = document.getElementById('start-btn');

  startBtn.addEventListener('click', () => {
    alert('¡Comenzaste tu experiencia con YAMID!');
    window.location.href = "productos.html";
  });
});

