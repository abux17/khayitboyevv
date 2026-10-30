
(() => {
  "use strict";

  const translations = {
    uz: {
      navHome:"Bosh sahifa",
      navAbout:"Men haqimda",
      navJourney:"Yo‘lim",
      navGallery:"Galereya",
      navContact:"Aloqa",
      availability:"Yangi imkoniyatlarga ochiqman",
      heroKicker:"Salom, men",
      heroRole:'Bo‘lajak marketolog <span>•</span> Dasturchi',
      heroDescription:"G‘oyalarni foydali loyihalarga aylantirishga intilaman. Marketing, texnologiya va ijod kesishgan nuqtada o‘z yo‘limni qurmoqdaman.",
      contactMe:"Men bilan bog‘laning",
      discover:"Men haqimda",
      born:"Tug‘ilgan yil",
      based:"O‘zbekiston",
      curiosity:"Qiziqish va izlanish",
      aboutEyebrow:"TANISHUV",
      aboutTitle:"Men haqimda",
      aboutLead:"Maqsadlarim, qiziqishlarim va o‘zim haqimda qisqacha.",
      storyTitle:"O‘rganishdan to‘xtamayman.",
      storyText:"Men Abdulla Hayitboyevman. Hozirda bilim va tajribamni oshirib, marketing hamda dasturlash yo‘nalishlarida rivojlanmoqdaman. Har bir yangi loyiha — o‘zimni sinash va yangi ko‘nikma egallash uchun imkoniyat.",
      skillOneTitle:"Marketing",
      skillOneText:"Brend, auditoriya va kreativ g‘oyalar.",
      skillTwoTitle:"Dasturlash",
      skillTwoText:"Kod, web va raqamli yechimlar.",
      skillThreeTitle:"Musiqa",
      skillThreeText:"Qo‘shiq aytish va ijodiy ifoda.",
      skillFourTitle:"Texnologiya",
      skillFourText:"Kompyuterlar va yangi texnologiyalar.",
      detailName:"ISM",
      detailBirth:"TUG‘ILGAN SANA",
      detailPlace:"TUG‘ILGAN JOY",
      detailFocus:"ASOSIY MAQSAD",
      birthPlace:"Uzunbuloq, G‘allaorol, Jizzax",
      goal:"Kuchli mutaxassis bo‘lish",
      journeyEyebrow:"RIVOJLANISH",
      journeyTitle:"Mening yo‘lim",
      journeyLead:"Har bir qadam — kelajakdagi katta maqsadlar sari.",
      journeyNow:"HOZIR",
      journeyNext:"KEYINGI QADAM",
      journeyGoal:"KATTA MAQSAD",
      journeyOneTitle:"Bilim va tajriba to‘plash",
      journeyOneText:"Marketing, dasturlash va kompyuter texnologiyalarini o‘rganish, amaliy loyihalar ustida ishlash.",
      journeyTwoTitle:"Shaxsiy brendni rivojlantirish",
      journeyTwoText:"O‘z ishlarimni namoyish etish, foydali kontent yaratish va professional aloqalarni kengaytirish.",
      journeyThreeTitle:"Malakali mutaxassisga aylanish",
      journeyThreeText:"Kuchli loyihalar yaratish va o‘z sohamda haqiqiy qiymat bera olish.",
      galleryEyebrow:"LAHZALAR",
      galleryTitle:"Galereya",
      galleryLead:"Hayotimdan ayrim kadrlar.",
      contactEyebrow:"ALOQA",
      contactTitle:"Biror loyiha yoki g‘oya bormi?",
      contactText:"Hamkorlik, taklif yoki shunchaki suhbat uchun men bilan bog‘laning.",
      rights:"Barcha huquqlar himoyalangan."
    },

    en: {
      navHome:"Home",
      navAbout:"About",
      navJourney:"Journey",
      navGallery:"Gallery",
      navContact:"Contact",
      availability:"Open to new opportunities",
      heroKicker:"Hello, I'm",
      heroRole:'Aspiring Marketer <span>•</span> Developer',
      heroDescription:"I turn ideas into useful projects. I'm building my path where marketing, technology and creativity meet.",
      contactMe:"Get in touch",
      discover:"Discover more",
      born:"Year of birth",
      based:"Uzbekistan",
      curiosity:"Curiosity & growth",
      aboutEyebrow:"INTRODUCTION",
      aboutTitle:"About me",
      aboutLead:"A little about my goals, interests and personality.",
      storyTitle:"Always learning.",
      storyText:"I'm Abdulla Hayitboyev. I'm growing my knowledge and experience in marketing and software development. Every new project is a chance to challenge myself and gain a new skill.",
      skillOneTitle:"Marketing",
      skillOneText:"Brands, audiences and creative ideas.",
      skillTwoTitle:"Development",
      skillTwoText:"Code, web and digital solutions.",
      skillThreeTitle:"Music",
      skillThreeText:"Singing and creative expression.",
      skillFourTitle:"Technology",
      skillFourText:"Computers and emerging technology.",
      detailName:"NAME",
      detailBirth:"DATE OF BIRTH",
      detailPlace:"PLACE OF BIRTH",
      detailFocus:"MAIN GOAL",
      birthPlace:"Uzunbuloq, Gallaorol, Jizzakh",
      goal:"Become a skilled professional",
      journeyEyebrow:"GROWTH",
      journeyTitle:"My journey",
      journeyLead:"Every step takes me closer to bigger goals.",
      journeyNow:"CURRENTLY",
      journeyNext:"NEXT STEP",
      journeyGoal:"LONG-TERM GOAL",
      journeyOneTitle:"Building knowledge and experience",
      journeyOneText:"Learning marketing, programming and computer technology while working on practical projects.",
      journeyTwoTitle:"Growing a personal brand",
      journeyTwoText:"Showcasing my work, creating useful content and building professional connections.",
      journeyThreeTitle:"Becoming a skilled professional",
      journeyThreeText:"Creating meaningful projects and delivering real value in my field.",
      galleryEyebrow:"MOMENTS",
      galleryTitle:"Gallery",
      galleryLead:"A few frames from my life.",
      contactEyebrow:"CONTACT",
      contactTitle:"Have a project or an idea?",
      contactText:"Reach out for collaboration, suggestions or simply a conversation.",
      rights:"All rights reserved."
    },

    ru: {
      navHome:"Главная",
      navAbout:"Обо мне",
      navJourney:"Мой путь",
      navGallery:"Галерея",
      navContact:"Контакты",
      availability:"Открыт новым возможностям",
      heroKicker:"Привет, я",
      heroRole:'Будущий маркетолог <span>•</span> Разработчик',
      heroDescription:"Стараюсь превращать идеи в полезные проекты. Развиваюсь на пересечении маркетинга, технологий и творчества.",
      contactMe:"Связаться со мной",
      discover:"Обо мне",
      born:"Год рождения",
      based:"Узбекистан",
      curiosity:"Интерес и развитие",
      aboutEyebrow:"ЗНАКОМСТВО",
      aboutTitle:"Обо мне",
      aboutLead:"Кратко о моих целях, интересах и увлечениях.",
      storyTitle:"Я постоянно учусь.",
      storyText:"Меня зовут Абдулла Хаитбоев. Я развиваю знания и опыт в маркетинге и программировании. Каждый новый проект — возможность проверить себя и освоить новый навык.",
      skillOneTitle:"Маркетинг",
      skillOneText:"Бренды, аудитория и креативные идеи.",
      skillTwoTitle:"Разработка",
      skillTwoText:"Код, веб и цифровые решения.",
      skillThreeTitle:"Музыка",
      skillThreeText:"Пение и творческое самовыражение.",
      skillFourTitle:"Технологии",
      skillFourText:"Компьютеры и новые технологии.",
      detailName:"ИМЯ",
      detailBirth:"ДАТА РОЖДЕНИЯ",
      detailPlace:"МЕСТО РОЖДЕНИЯ",
      detailFocus:"ГЛАВНАЯ ЦЕЛЬ",
      birthPlace:"Узунбулок, Галляараль, Джизак",
      goal:"Стать квалифицированным специалистом",
      journeyEyebrow:"РАЗВИТИЕ",
      journeyTitle:"Мой путь",
      journeyLead:"Каждый шаг приближает к большим целям.",
      journeyNow:"СЕЙЧАС",
      journeyNext:"СЛЕДУЮЩИЙ ШАГ",
      journeyGoal:"БОЛЬШАЯ ЦЕЛЬ",
      journeyOneTitle:"Получение знаний и опыта",
      journeyOneText:"Изучение маркетинга, программирования и компьютерных технологий, работа над практическими проектами.",
      journeyTwoTitle:"Развитие личного бренда",
      journeyTwoText:"Демонстрация своих работ, создание полезного контента и расширение профессиональных связей.",
      journeyThreeTitle:"Стать профессионалом",
      journeyThreeText:"Создавать сильные проекты и приносить реальную пользу в своей сфере.",
      galleryEyebrow:"МОМЕНТЫ",
      galleryTitle:"Галерея",
      galleryLead:"Несколько кадров из моей жизни.",
      contactEyebrow:"КОНТАКТЫ",
      contactTitle:"Есть проект или идея?",
      contactText:"Свяжитесь со мной для сотрудничества, предложений или просто общения.",
      rights:"Все права защищены."
    }
  };

  const languageSelect = document.getElementById("languageSelect");
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  function safeGet(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Sayt localStorage ishlamasa ham ishlashda davom etadi.
    }
  }

  function applyLanguage(language) {
    const selected = translations[language] ? language : "uz";

    document.documentElement.lang = selected;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (translations[selected][key] !== undefined) {
        element.innerHTML = translations[selected][key];
      }
    });

    if (languageSelect) {
      languageSelect.value = selected;
    }

    safeSet("portfolio-language", selected);
  }

  function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);

    if (themeToggle) {
      themeToggle.textContent = isLight ? "☾" : "☼";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Qorong‘i rejim" : "Yorug‘ rejim"
      );
    }

    safeSet("portfolio-theme", isLight ? "light" : "dark");
  }

  function initializeMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }

  function initializeGallery() {
    const cards = Array.from(
      document.querySelectorAll("[data-gallery-index]")
    );

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightboxImage");
    const caption = document.getElementById("lightboxCaption");

    const closeButton = document.getElementById("lightboxClose");
    const previousButton = document.getElementById("lightboxPrev");
    const nextButton = document.getElementById("lightboxNext");

    if (!cards.length || !lightbox || !image) return;

    let currentIndex = 0;

    const items = cards.map((card) => ({
      src: card.querySelector("img")?.getAttribute("src") || "",
      alt: card.querySelector("img")?.getAttribute("alt") || "Gallery image"
    }));

    function showImage(index) {
      currentIndex = (index + items.length) % items.length;

      image.src = items[currentIndex].src;
      image.alt = items[currentIndex].alt;

      caption.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ` +
        `${String(items.length).padStart(2, "0")}`;
    }

    function openLightbox(index) {
      showImage(index);

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";
      closeButton?.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");

      document.body.style.overflow = "";
    }

    cards.forEach((card, index) => {
      card.addEventListener("click", () => openLightbox(index));
    });

    closeButton?.addEventListener("click", closeLightbox);

    previousButton?.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("is-open")) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showImage(currentIndex - 1);
      if (event.key === "ArrowRight") showImage(currentIndex + 1);
    });
  }

  function initializeYear() {
    const year = document.getElementById("currentYear");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  // Saqlangan sozlamalarni yuklash
  const savedLanguage = safeGet("portfolio-language", "uz");
  const savedTheme = safeGet("portfolio-theme", "dark");

  // Dastlabki sozlamalar
  applyLanguage(savedLanguage);
  applyTheme(savedTheme);

  // Til almashtirish
  languageSelect?.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });

  // Rang rejimini almashtirish
  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme")
      ? "dark"
      : "light";

    applyTheme(nextTheme);
  });

  initializeMenu();
  initializeGallery();
  initializeYear();
})();
