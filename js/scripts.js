const WHATSAPP_PHONE_E164 = "51999999999";
const DEFAULT_MESSAGE =
  "Hola, vengo de la web de KELION ACADEMY.\n" +
  "Nivel actual: ____\n" +
  "Área de interés: ____\n" +
  "Objetivo: ____\n" +
  "Me interesa certificación: Observación / Asistencia / Aprobación.\n";

function buildWhatsAppLink(phoneE164, message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phoneE164}?text=${text}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const machine = document.getElementById("heroMachine");
  if (machine) requestAnimationFrame(() => machine.classList.add("is-animated"));
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const waLink = buildWhatsAppLink(WHATSAPP_PHONE_E164, DEFAULT_MESSAGE);

  const btnHero = document.getElementById("whatsappHero");
  const btnCta = document.getElementById("whatsappCta");

  if (btnHero) btnHero.href = waLink;
  if (btnCta) btnCta.href = waLink;

  const copyBtn = document.getElementById("copyMsg");
  const hint = document.getElementById("copyHint");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(DEFAULT_MESSAGE);
        if (hint) hint.textContent = "Mensaje copiado. Pégalo en WhatsApp y completa tus datos.";
      } catch {
        if (hint) hint.textContent = "No se pudo copiar automáticamente. Copia manualmente el mensaje.";
      }
    });
  }

  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});