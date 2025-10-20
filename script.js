document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addServiceBtn");
  const list = document.getElementById("servicesList");
  const langToggle = document.getElementById("langToggle");
  const adminBtn = document.getElementById("adminBtn");
  const greeting = document.getElementById("userGreeting");

  // Приветствие
  const username = localStorage.getItem("username") || prompt("Введите имя пользователя:") || "Гость";
  localStorage.setItem("username", username);
  greeting.innerHTML = `Привет, <b>${username}</b> 👋`;

  // Переход к админу
  adminBtn.onclick = () => window.open("https://t.me/DevMarket2", "_blank");

  // Добавление услуги
  addBtn.onclick = () => {
    const name = document.getElementById("serviceName").value;
    const desc = document.getElementById("serviceDesc").value;
    const price = document.getElementById("servicePrice").value;
    const user = document.getElementById("serviceUser").value;
    if (!name || !desc || !price || !user) return alert("Заполните все поля");

    const card = document.createElement("div");
    card.className = "serviceCard";
    card.innerHTML = `<h3>${name}</h3><p>${desc}</p><strong>${price}$</strong><br><button>Заказать</button><p>👤 ${user}</p>`;
    list.appendChild(card);

    document.getElementById("serviceName").value = "";
    document.getElementById("serviceDesc").value = "";
    document.getElementById("servicePrice").value = "";
    document.getElementById("serviceUser").value = "";
  };

  // Автоопределение языка
  const lang = navigator.language.startsWith("ru") ? "ru" : "en";
  document.documentElement.lang = lang;

  // Смена языка
  langToggle.onclick = () => {
    document.documentElement.lang = document.documentElement.lang === "ru" ? "en" : "ru";
    alert("Язык переключён: " + (document.documentElement.lang === "ru" ? "Русский" : "English"));
  };
});
