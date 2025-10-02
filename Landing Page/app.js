const $  = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function debounce(fn, wait = 120) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// Variable para guardar el elemento que abrió el modal
let lastFocusedElement;

/* ---------- Mobile menu ---------- */
(function mobileMenu() {
  const hamburger = $('#hamburger');
  const mainNav = $('#mainNav');
  if (!hamburger || !mainNav) return;

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });
})();

/* ---------- Carousel genérico basado en píxeles (sin cambios) ---------- */
function initPixelCarousel(carouselEl, trackEl, opts = {}) {
    // ... (El código de tu carrusel se mantiene igual)
    if (!carouselEl || !trackEl) return null;

    const slides = Array.from(trackEl.children);
    if (slides.length === 0) return null;

    const state = {
        idx: 0,
        intervalId: null,
        slideWidth: 0,
        opts
    };

    const dotsWrap = opts.dotsWrap || null;
    const prevBtn = opts.prevBtn || null;
    const nextBtn = opts.nextBtn || null;
    const intervalTime = opts.interval || 3000;

    if (dotsWrap && dotsWrap.children.length === 0) {
        slides.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'color-dot';
            btn.setAttribute('aria-label', `Ir al slide ${i + 1}`);
            btn.addEventListener('click', () => {
                state.idx = i;
                goto();
                resetInterval();
            });
            dotsWrap.appendChild(btn);
        });
    }
    const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

    function computeSizes() {
        const viewport = carouselEl.clientWidth;
        state.slideWidth = viewport;

        slides.forEach(sl => {
            sl.style.minWidth = `${state.slideWidth}px`;
            sl.style.maxWidth = `${state.slideWidth}px`;
        });

        trackEl.style.width = `${state.slideWidth * slides.length}px`;
        trackEl.style.transform = `translateX(-${state.idx * state.slideWidth}px)`;
    }

    function goto() {
        trackEl.style.transition = 'transform 0.6s ease';
        trackEl.style.transform = `translateX(-${state.idx * state.slideWidth}px)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === state.idx));
    }

    function next() {
        state.idx = (state.idx + 1) % slides.length;
        goto();
    }
    function prev() {
        state.idx = (state.idx - 1 + slides.length) % slides.length;
        goto();
    }

    function resetInterval() {
        clearInterval(state.intervalId);
        if (opts.interval) {
            state.intervalId = setInterval(next, intervalTime);
        }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => {
        next();
        resetInterval();
    });
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prev();
        resetInterval();
    });

    if (opts.interval) {
        carouselEl.addEventListener('mouseenter', () => clearInterval(state.intervalId));
        carouselEl.addEventListener('mouseleave', () => resetInterval());
        resetInterval();
    }

    window.addEventListener('resize', debounce(computeSizes, 120));

    computeSizes();
    goto();
}


/* ---------- 1) Project carousel (sin cambios) ---------- */
(function projectCarousel() {
  const track = $('#projectTrack');
  if (!track) return;

  const carouselWrap = track.closest('.pc-track-wrap');
  const prev = document.querySelector('.pc-prev');
  const next = document.querySelector('.pc-next');
  const carouselEl = carouselWrap || track.parentElement;

  initPixelCarousel(carouselEl, track, { interval: 5000, prevBtn: prev, nextBtn: next });
})();

/* ---------- 4) Smooth scroll (sin cambios) ---------- */
(function smoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = $(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 70; // Altura del header fijo
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
      }
    });
  });
})();

/* ---------- 5) Reveal on scroll (sin cambios) ---------- */
(function revealOnScroll() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.18 });

  $$('.reveal').forEach(el => obs.observe(el));
})();

/* ---------- 6) Form validation (sin cambios) ---------- */
(function formValidation() {
  const form = $('#contactForm');
  const feedback = $('#formFeedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor completa todos los campos.';
      feedback.style.color = '#B94A2B';
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = 'Ingresa un correo válido.';
      feedback.style.color = '#B94A2B';
      return;
    }

    feedback.textContent = 'Enviando...';
    feedback.style.color = '#655B54';
    setTimeout(() => {
      feedback.textContent = 'Gracias — tu mensaje fue recibido.';
      feedback.style.color = 'var(--brown-2)';
      form.reset();
    }, 800);
  });
})();


(function modalLogic() {
  const modal = $('#modal');
  const modalContent = $('#modalContent');
  const closeBtn = $('#modalClose');
  if (!modal || !modalContent || !closeBtn) return;

  // --- Función para cerrar el modal ---
  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // --- Función para abrir el modal ---
  function openModal(content) {

    lastFocusedElement = document.activeElement;
    
    modalContent.innerHTML = content;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    
    // Mover el foco al botón de cerrar para que los usuarios de teclado puedan salir fácilmente
    closeBtn.focus();
  }

  // --- Contenido de los modales (Capítulos y Equipo) ---
  const chapters = {
    1: `
      <h3>Capítulo 1 — El descubrimiento</h3>
      <p>En una pequeña choza a la orilla de un río en un pueblo alejado de la civilización, vivía una familia numerosa, de la cual Juanes era el menor de cinco hermanos, el consentido de los abuelos. Un día mientras jugaba en el patio de su casa, sin querer patea su balón hacía una repisa, la cual contenía una caja de gran tamaño; la caja cae al suelo y junto a ella proviene un sonido extraño.</p>
      <p><em>—¿Qué será esto?</em> se pregunta Juanes así mismo.</p>
      <p>Juanes con curiosidad, limpia con su mano el polvo que cubría la caja y la abre, encuentra una guitarra. La toma y corre hacía donde su padre.</p>
      <p><em>—Papá, ¿cómo haces que suene tan bonito?</em> exclama Juanes.</p>
      <p>Él al ver emocionado a Juan decide tocar una melodía que sabe que le encantará, y así fue.</p>
      <p><em>—Hijo, la guitarra no solo se toca con las manos… se toca con el corazón</em>, responde su padre.</p>
      <p>El sonido perfecto y armonioso que emitía este instrumento causó en Juanes su primera pasión. Pasó el tiempo y Juanes junto a su padre y sus cinco hermanos fue aprendiendo a tocar la guitarra, junto a ello algunos sonidos característicos de su cultura como el bambuco y algunos boleros.</p>
      <p><em>—¿Crees que algún día yo también pueda hacer música que llegue al corazón?</em> le pregunta Juanes a su padre mientras mira sus ojos.</p>
      <p><em>—Si tocas con amor, siempre llegará, hijo</em>, responde su padre algo serio.</p>
    `,
    2: `
      <h3>Capítulo 2 — Las Líricas</h3>
      <p>Fue así como descubrió que la música podía transformar cualquier dolor en algo hermoso. Luego de tiempo dedicándose aprender sobre instrumentos y perfeccionar su voz, Juan comenzó a componer su primera canción, la cual transmitía sus sentimientos más puros y uno que otro descache.</p>
      <p>Días después de componer su primera canción, el pueblo fue abatido por la violencia, las calles se tiñeron de rojo y un silencio absoluto fue el resultado de la toma de los grupos guerrilleros en la zona. Esta familia al ser sobrevivientes de una masacre, logró escapar a la capital de la montaña.</p>
      <p><em>—Abuelo… ¿por qué tenemos que dejar todo atrás?</em> pregunta Juanes.</p>
      <p><em>—Porque la vida a veces arranca con lo que más amamos. Pero nunca podrán quitarte tu música</em>, responde el abuelo con voz grave y algo cansada.</p>
      <p>En la ciudad, Juanes comenzó a cantar en semáforos uno que otro cover de canciones famosas, junto a ellas su primera canción. A pesar de la desgracia que acechó a la familia, Juan pudo dedicarse a su pasión, la música. Tiempo después compuso su segunda canción, teniendo de inspiración el duelo por la muerte de su abuelo quien falleció días después de llegar a la ciudad a causa de un infarto, esta canción la presenta en uno de los semáforos de la ciudad; mientras cantaba, se provocó un fuerte choque entre varios vehículos y motos que se ubicaban frente a él, por suerte salió ileso y pudo huir rápidamente del lugar.</p>
      <p>Pasado algunos días, la inspiración toma de nuevo su mente y logra componer una tercera canción, pero esta vez Juan ya no tocaría en semáforos, ahora pasó a cantar en restaurantes y tiendas; mientras realizaba una presentación de covers de viejas canciones además de sus dos primeras composiciones, Juan decide cantar por primera vez su tercera composición. En el transcurso de esto, una gran lámpara cae del techo y aplasta a una gran mesa llena de comensales, se generó pánico en el sitio y Juanes tuvo que huir rápido de la zona.</p>
      <p>De camino a casa, iba con su guitarra bajo el brazo y cabizbajo; de repente una gran luz iluminó su camino, Juanes confundido alza su mirada y ve una figura humanoide la cual desprendía una fuerte luz amarilla que impedía dejarlo ver bien. Juanes algo asustado iba a comenzar a correr, pero una voz bastante gruesa lo detuvo.</p>
      <p><em>—No tengas miedo… una maldición te acompaña. Cada vez que avanzas, algo te detiene. Sana, y todo se dará.</em></p>
      <p>Juanes asustado fue notando como la luz se iba apagando y a cabo de segundos se encontraba nuevamente en la calle normal. Al llegar a casa, Juan se va a dormir. En medio de un sueño visualiza a su abuelo, el cual le da un mensaje claro.</p>
      <p><em>—Esa guitarra está maldita. Alguna vez cantó un amor no correspondido. Su dueño murió de tristeza… y la maldición sigue contigo.</em></p>
      <p>Juan despierta de un brinco algo sudoroso y tembloroso; se sienta a orilla de la cama y logra definir el mensaje de su abuelo, esto tras pensar en varios hechos trágicos que ocurrieron cuando cantaba sus propias canciones: como desplazamiento forzado, el choque de autos y por último, la caída de la lámpara.</p>
    `,
    3: `
      <h3>Capítulo 3 — La solución</h3>
      <p>Fue así que Juanes como medida de librar la maldición de la guitarra, comenzó a salir con chicas de las cuales él se enamoraba, les componía canciones y se les cantaba… pero cada vez pasaba algo trágico en el lugar donde se encontraba a consecuencia de la maldición.</p>
      <p>Pasaron varios años bajo esta rutina, pero la maldición no paraba; fue así como un día, Juanes ya triste al ver que la música no lo dejaría ser feliz, decide componer una canción a su madre, junto a ella una carta de despedida a la música porque la abandonaría después de cantarla. Llegó el día y Juan se reúne con su madre en la sala.</p>
      <p><em>—Mamá, esta es mi última canción… es para ti</em>, exclamó Juanes.</p>
      <p>Juan le canta esta canción a su madre, fue una canción hermosa que la conmueve y le provoca lágrimas; al terminar, se dan un fuerte abrazo. Seguidamente, algo se sacude dentro del instrumento y una luz se extiende por toda la habitación iluminando hasta el más pequeño rincón y apareció nuevamente este ser humanoide.</p>
      <p><em>—Juan… lo has logrado. El amor verdadero libera la maldición. Ahora tu guitarra es tu amuleto</em>, exclama.</p>
      <p>Juanes confundido logra descifrar el mensaje del verdadero amor, ese amor que existe entre una madre y un hijo; es así como se entera que el anterior propietario nunca recibió aprecio y amor materno, lo que causó en él una gran frustración hasta llevarlo a la muerte.</p>
      <p>Es así como Juanes se dedicó a componer canciones a partir de sus sentimientos puros y también a amar incondicionalmente hasta las más pequeñas cosas.</p>
      <p><strong>“El amor no solo está en lo romántico… también en las pequeñas cosas, en quienes nos acompañan cada día.”</strong></p>
    `
  };

  const members = {
    gabriel: { name: "Gabriel Torres", role: "Dirección creativa", bio: "Lidera la visión del proyecto...", photo: "gabriel.jpeg" },
    camilo: { name: "Camilo Betancourt", role: "Investigación y narrativa", bio: "Encargado de la investigación...", photo: "camilo.jpeg" },
    brayhan: { name: "Brayhan Caicedo", role: "Diseño visual", bio: "Dise-ador visual que define...", photo: "brayhan.jpeg" }
  };
  
  // --- Event Listeners para abrir los modales ---
  $$('.js-open').forEach(btn => {
    btn.addEventListener('click', () => {
      const chapId = btn.getAttribute('data-chapter');
      openModal(chapters[chapId] || "<p>Capítulo no encontrado.</p>");
    });
  });
  
  $$('.js-member').forEach(btn => {
    btn.addEventListener('click', () => {
      const memberId = btn.getAttribute('data-member');
      const m = members[memberId];
      if (!m) return;
      
      const memberContent = `
        <div style="display:flex;gap:18px;align-items:flex-start;flex-wrap:wrap">
          <img src="${m.photo}" alt="${m.name}" style="width:220px;height:220px;object-fit:cover;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,0.2);">
          <div>
            <h3>${m.name}</h3>
            <h4 style="margin-top:6px;color:var(--muted)">${m.role}</h4>
            <p style="margin-top:10px">${m.bio}</p>
          </div>
        </div>
      `;
      openModal(memberContent);
    });
  });

  // --- Event Listeners para cerrar el modal ---
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

})();