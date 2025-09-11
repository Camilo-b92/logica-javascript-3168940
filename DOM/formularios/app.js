document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const colorSelect = document.querySelector("#color");
  const body = document.body;

  const formContainer = document.querySelector(".form-container");
  const userPage = document.querySelector(".userPage");
  const textSaludo = document.querySelector(".text-saludo");
  const textEquipo = document.querySelector(".text-equipo");
  const imgEquipo = document.querySelector(".img-equipo");
  const logoutBtn = document.querySelector(".logout-btn");

  colorSelect.addEventListener("change", () => {
    const selectedColor = colorSelect.value;
    body.style.backgroundColor = selectedColor;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const color = document.querySelector("#color").value;
    const team = document.querySelector("input[name='team']:checked");

    if (!name || !color || !team) {
      alert("Por favor completa todos los campos antes de enviar.");
      return;
    }

    formContainer.style.display = "none";
    userPage.style.display = "block";

    textSaludo.textContent = `Hola ${name}`;
    textEquipo.textContent = team.value;

    if (team.value === "gatos") {
      imgEquipo.src = "img/gatos.jpg";
    } else if (team.value === "mapaches") {
      imgEquipo.src = "img/mapaches.jpg";
    } else if (team.value === "perros") {
      imgEquipo.src = "imgperros.jpg";
    }
  });

  logoutBtn.addEventListener("click", () => {
    userPage.style.display = "none";
    formContainer.style.display = "block";
    form.reset();
    body.style.backgroundColor = "#f0f0f0";
  });
});
