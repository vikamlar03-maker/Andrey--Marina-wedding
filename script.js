document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro");
  const introVideo = document.getElementById("introVideo");
  const mainPage = document.getElementById("mainPage");
  const music = document.getElementById("weddingMusic");

  let invitationOpened = false;

  function openInvitation() {
    if (invitationOpened) return;
    invitationOpened = true;

    // Запускаємо музику після натискання
    music.play().catch(function () {
      console.log("Браузер не дозволив автоматично запустити музику.");
    });

    // Плавне розмиття та зникнення заставки
    intro.style.transition =
      "opacity 1.3s ease, filter 1.3s ease, transform 1.3s ease";

    intro.style.opacity = "0";
    intro.style.filter = "blur(18px)";
    intro.style.transform = "scale(1.04)";

    if (introVideo) {
      introVideo.style.transition = "filter 1.3s ease";
      introVideo.style.filter = "blur(14px) brightness(0.45)";
    }

    // Показуємо основну сторінку
    setTimeout(function () {
      intro.style.display = "none";
      mainPage.style.display = "block";
      window.scrollTo(0, 0);
    }, 1300);
  }

  // Можна натиснути в будь-якому місці заставки
  intro.addEventListener("click", openInvitation);
});