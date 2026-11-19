// Часы в заголовке вкладки
const baseTitle = document.title;
function tick() {
  const time = new Date().toLocaleTimeString("ru-RU");
  document.title = time + " | " + baseTitle;
}
tick();
setInterval(tick, 1000);

// Текущая дата во всплывающем окне
function showToday() {
  const today = new Date();
  const text = today.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
  alert("Сегодня " + text);
}

// Удалить все цифры из текста, результат в новом окне
function cleanDigits() {
  const source = document.getElementById("digitsInput").value;
  let clean = "";
  for (let i = 0; i < source.length; i++) {
    if (isNaN(source[i]) || source[i] === " ") {
      clean += source[i];
    }
  }
  const newWindow = window.open("", "", "width=420,height=220");
  newWindow.document.write("<h3>Текст без цифр:</h3><p>" + clean + "</p>");
}

// Автопрокрутка блока с отзывами через 5 секунд
function autoScroll() {
  const box = document.getElementById("reviews");
  if (box) {
    setTimeout(function () {
      box.scrollTo({ top: box.scrollHeight, behavior: "smooth" });
    }, 5000);
  }
}
autoScroll();
