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

    /* ПЛАВНИЙ ПЕРЕХІД ІЗ ЗАСТАВКИ */
.intro {
  transition:
    opacity 1.8s ease,
    filter 1.8s ease,
    transform 1.8s ease;
}

.intro.is-closing {
  opacity: 0;
  filter: blur(22px);
  transform: scale(1.03);
  pointer-events: none;
}

.main-page {
  display: block;
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 1.4s ease,
    transform 1.4s ease;
}

.main-page.is-visible {
  opacity: 1;
  transform: translateY(0);
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