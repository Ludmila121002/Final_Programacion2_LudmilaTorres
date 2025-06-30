const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

// Funcionalidad del menú móvil
menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Funcionalidad del formulario de contacto
const contactForm = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const backToHome = document.getElementById("backToHome");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Validar todos los campos requeridos
  const requiredFields = contactForm.querySelectorAll("[required]");
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.style.borderColor = "#ff0000"; // Resaltar campo vacío
    } else {
      field.style.borderColor = "#fff"; // Restaurar borde
    }
  });
  
  if (isValid) {
    // Aquí iría el código para enviar el formulario (AJAX, Fetch, etc.)
    // Por ahora solo simulamos el envío
    
    // Ocultar formulario y mostrar mensaje de confirmación
    contactForm.style.display = "none";
    confirmationMessage.style.display = "block";
    
    // Desplazarse suavemente al mensaje
    confirmationMessage.scrollIntoView({ behavior: 'smooth' });
  }
});

// Botón para volver al inicio
backToHome.addEventListener("click", function() {
  // Ocultar mensaje de confirmación y mostrar formulario
  confirmationMessage.style.display = "none";
  contactForm.style.display = "flex";
  
  // Resetear el formulario
  contactForm.reset();
  
  // Restaurar bordes de los campos
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.style.borderColor = "#fff";
  });
  
  // Desplazarse al inicio de la página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});