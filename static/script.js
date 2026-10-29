
/* =====================================
   KHAYITBOYEVV - MAIN JAVASCRIPT
===================================== */

const translations = {
    uz: {
        navHome: "Bosh sahifa",
        navAbout: "Men haqimda",
        navJourney: "Hayot yo‘lim",
        navGallery: "Galereya",
        navContact: "Aloqa",

        heroLabel: "SHAXSIY PORTFOLIO",
        heroIntro: "Salom, men",
        heroTitle: "Abdulla Hayitboyev",
        heroText: "Men — Abdulla Hayitboyev, internetda Khayitboyevv nomi bilan tanilganman. Dasturlash, texnologiyalar va marketingga qiziqaman.",
        heroButton: "Men haqimda",
        contactButton: "Bog‘lanish",

        metaOne: "Tug‘ilgan yilim",
        metaTwo: "O‘zbekiston",
        metaThree: "Katta maqsadlar",
        portraitCaption: "ABDULLA HAYITBOYEV",

        aboutLabel: "MEN HAQIMDA",
        aboutTitle: "Har bir insonning o‘z hikoyasi bor.",
        aboutText: "Men — Abdulla Hayitboyev. Internetda Khayitboyevv nomi bilan tanilganman. Yangi bilimlarni o‘rganish, dasturlash, kompyuter texnologiyalari va marketing sohalariga qiziqaman. Kelajakda o‘z sohamning yetuk mutaxassisi bo‘lishni maqsad qilganman.",
        editHint: "Har kuni o‘zimning yaxshiroq versiyam bo‘lishga intilaman.",

        factOneTitle: "Texnologiya",
        factOneText: "Dasturlash va kompyuter texnologiyalari.",
        factTwoTitle: "Marketing",
        factTwoText: "Marketing va shaxsiy brend rivojlantirish.",
        factThreeTitle: "Ijod",
        factThreeText: "Musiqa va qo‘shiq kuylash.",

        personalLabel: "SHAXSIY MA'LUMOTLAR",
        birthLabel: "Tug‘ilgan sana",
        birthValue: "29-avgust 2007-yil",
        birthPlaceLabel: "Tug‘ilgan joy",
        birthPlaceValue: "Uzunbuloq, G‘allaorol, Jizzax",
        roleLabel: "Maqomim",
        roleValue: "Talaba | Bo‘lajak marketolog va dasturchi",
        interestsLabel: "Qiziqishlarim",
        interestsValue: "Dasturlash, kompyuter texnologiyalari, qo‘shiq kuylash",
        goalLabel: "Kelajakdagi maqsadim",
        goalValue: "Shaxsiy brend yaratish va kuchli dasturchi bo‘lish",

        journeyLabel: "HAYOT YO‘LIM",
        journeyTitle: "Mening hikoyam",
        journeyText: "O‘tmish, bugun va kelajak sari.",
        timeOneTitle: "Boshlanish",
        timeOneText: "29-avgust kuni Jizzax viloyatining Uzunbuloq qishlog‘ida tug‘ilganman.",
        timeTwoDate: "Bugun",
        timeTwoTitle: "O‘rganish",
        timeTwoText: "Ta’lim olyapman, yangi bilimlar va texnologiyalarni o‘rganyapman.",
        timeThreeDate: "Kelajak",
        timeThreeTitle: "Maqsadlar",
        timeThreeText: "Kuchli dasturchi va marketolog bo‘lish, shaxsiy brend yaratish.",

        galleryLabel: "GALEREYA",
        galleryTitle: "Esda qolarli lahzalar",
        galleryText: "Hayotimdan kichik lavhalar.",

        contactLabel: "ALOQA",
        contactEyebrow: "BIRGA ALOQADA BO‘LAYLIK",
        contactTitle: "Har qanday yaxshi g‘oya suhbatdan boshlanadi.",
        contactText: "Men bilan ijtimoiy tarmoqlar orqali bog‘lanishingiz mumkin.",

        backTop: "Yuqoriga ↑",
        footerText: "Barcha huquqlar himoyalangan.",
        missingPhoto: "Surat"
    },

    en: {
        navHome: "Home",
        navAbout: "About me",
        navJourney: "My journey",
        navGallery: "Gallery",
        navContact: "Contact",

        heroLabel: "PERSONAL PORTFOLIO",
        heroIntro: "Hello, I'm",
        heroTitle: "Abdulla Hayitboyev",
        heroText: "I'm Abdulla Hayitboyev, known online as Khayitboyevv. I'm interested in programming, technology and marketing.",
        heroButton: "About me",
        contactButton: "Get in touch",

        metaOne: "Birth year",
        metaTwo: "Uzbekistan",
        metaThree: "Big ambitions",
        portraitCaption: "ABDULLA HAYITBOYEV",

        aboutLabel: "ABOUT ME",
        aboutTitle: "Everyone has their own story.",
        aboutText: "I'm Abdulla Hayitboyev, known online as Khayitboyevv. I'm interested in learning new things, programming, computer technology and marketing. My goal is to become a skilled professional in my field.",
        editHint: "Every day I strive to become a better version of myself.",

        factOneTitle: "Technology",
        factOneText: "Programming and computer technology.",
        factTwoTitle: "Marketing",
        factTwoText: "Marketing and personal brand development.",
        factThreeTitle: "Creativity",
        factThreeText: "Music and singing.",

        personalLabel: "PERSONAL INFORMATION",
        birthLabel: "Date of birth",
        birthValue: "29 August 2007",
        birthPlaceLabel: "Place of birth",
        birthPlaceValue: "Uzunbuloq, Gallaorol, Jizzakh",
        roleLabel: "Current status",
        roleValue: "Student | Aspiring marketer and developer",
        interestsLabel: "Interests",
        interestsValue: "Programming, computer technology, singing",
        goalLabel: "Future goal",
        goalValue: "Building a personal brand and becoming a skilled developer",

        journeyLabel: "MY JOURNEY",
        journeyTitle: "My story",
        journeyText: "From the past, through today, towards the future.",
        timeOneTitle: "Beginning",
        timeOneText: "I was born on 29 August in Uzunbuloq village, Jizzakh region.",
        timeTwoDate: "Today",
        timeTwoTitle: "Learning",
        timeTwoText: "I'm studying and learning new skills and technologies.",
        timeThreeDate: "Future",
        timeThreeTitle: "Goals",
        timeThreeText: "Becoming a skilled developer and marketer and building a personal brand.",

        galleryLabel: "GALLERY",
        galleryTitle: "Memorable moments",
        galleryText: "A few glimpses from my life.",

        contactLabel: "CONTACT",
        contactEyebrow: "LET'S CONNECT",
        contactTitle: "Every great idea begins with a conversation.",
        contactText: "You can contact me through my social networks.",

        backTop: "Back to top ↑",
        footerText: "All rights reserved.",
        missingPhoto: "Photo"
    },

    ru: {
        navHome: "Главная",
        navAbout: "Обо мне",
        navJourney: "Мой путь",
        navGallery: "Галерея",
        navContact: "Контакты",

        heroLabel: "ЛИЧНОЕ ПОРТФОЛИО",
        heroIntro: "Привет, я",
        heroTitle: "Абдулла Хайитбоев",
        heroText: "Я — Абдулла Хайитбоев, известный в интернете под именем Khayitboyevv. Интересуюсь программированием, технологиями и маркетингом.",
        heroButton: "Обо мне",
        contactButton: "Связаться",

        metaOne: "Год рождения",
        metaTwo: "Узбекистан",
        metaThree: "Большие цели",
        portraitCaption: "АБДУЛЛА ХАЙИТБОЕВ",

        aboutLabel: "ОБО МНЕ",
        aboutTitle: "У каждого человека своя история.",
        aboutText: "Я — Абдулла Хайитбоев, известный в интернете как Khayitboyevv. Интересуюсь новыми знаниями, программированием, компьютерными технологиями и маркетингом. Моя цель — стать профессионалом в своей области.",
        editHint: "Каждый день я стремлюсь стать лучше.",

        factOneTitle: "Технологии",
        factOneText: "Программирование и компьютерные технологии.",
        factTwoTitle: "Маркетинг",
        factTwoText: "Маркетинг и развитие личного бренда.",
        factThreeTitle: "Творчество",
        factThreeText: "Музыка и пение.",

        personalLabel: "ЛИЧНАЯ ИНФОРМАЦИЯ",
        birthLabel: "Дата рождения",
        birthValue: "29 августа 2007 года",
        birthPlaceLabel: "Место рождения",
        birthPlaceValue: "Узунбулок, Галляарал, Джизак",
        roleLabel: "Статус",
        roleValue: "Студент | Будущий маркетолог и программист",
        interestsLabel: "Интересы",
        interestsValue: "Программирование, компьютерные технологии, пение",
        goalLabel: "Цель на будущее",
        goalValue: "Создать личный бренд и стать сильным программистом",

        journeyLabel: "МОЙ ПУТЬ",
        journeyTitle: "Моя история",
        journeyText: "Из прошлого через настоящее к будущему.",
        timeOneTitle: "Начало",
        timeOneText: "Я родился 29 августа в селе Узунбулок Джизакской области.",
        timeTwoDate: "Сегодня",
        timeTwoTitle: "Обучение",
        timeTwoText: "Получаю образование, изучаю новые знания и технологии.",
        timeThreeDate: "Будущее",
        timeThreeTitle: "Цели",
        timeThreeText: "Стать хорошим программистом и маркетологом, создать личный бренд.",

        galleryLabel: "ГАЛЕРЕЯ",
        galleryTitle: "Памятные моменты",
        galleryText: "Небольшие фрагменты моей жизни.",

        contactLabel: "КОНТАКТЫ",
        contactEyebrow: "ДАВАЙТЕ БУДЕМ НА СВЯЗИ",
        contactTitle: "Любая хорошая идея начинается с разговора.",
        contactText: "Вы можете связаться со мной через социальные сети.",

        backTop: "Наверх ↑",
        footerText: "Все права защищены.",
        missingPhoto: "Фото"
    }
};


/* =====================================
   2. SAFE LOCAL STORAGE
===================================== */

function getSavedValue(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (error) {
        return fallback;
    }
}

function saveValue(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.warn("Sozlamani saqlab bo‘lmadi:", error);
    }
}


/* =====================================
   3. LANGUAGE SYSTEM
===================================== */

function applyLanguage(language) {
    if (!translations[language]) {
        language = "uz";
    }

    const words = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(words, key)) {
            element.textContent = words[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (Object.prototype.hasOwnProperty.call(words, key)) {
            element.placeholder = words[key];
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        const key = element.dataset.i18nAlt;

        if (Object.prototype.hasOwnProperty.call(words, key)) {
            element.alt = words[key];
        }
    });

    const languageSelect = document.querySelector("#language");

    if (languageSelect) {
        languageSelect.value = language;
    }

    saveValue("portfolio-language", language);
}


/* =====================================
   4. THEME SYSTEM
===================================== */

function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light-theme", isLight);

    const themeButton = document.querySelector("#themeToggle");

    if (themeButton) {
        themeButton.textContent = isLight ? "☾" : "☀";

        themeButton.setAttribute(
            "aria-label",
            isLight ? "Tungi rejimga o‘tish" : "Kunduzgi rejimga o‘tish"
        );

        themeButton.setAttribute("aria-pressed", String(isLight));
    }

    saveValue("portfolio-theme", theme);
}


/* =====================================
   5. MOBILE MENU
===================================== */

function initializeMobileMenu() {
    const menuButton = document.querySelector("#menuToggle");
    const navigation = document.querySelector("#navLinks");

    if (!menuButton || !navigation) return;

    function closeMenu() {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    }

    menuButton.addEventListener("click", event => {
        event.stopPropagation();

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "×" : "☰";
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", event => {
        if (
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
}


/* =====================================
   6. PHOTO GALLERY
===================================== */

function initializeGallery() {
    const lightbox = document.querySelector("#lightbox");
    const lightboxImage = document.querySelector("#lightboxImage");
    const lightboxCaption = document.querySelector("#lightboxCaption");

    const closeButton = document.querySelector("#lightboxClose");
    const previousButton = document.querySelector("#prevPhoto");
    const nextButton = document.querySelector("#nextPhoto");

    const galleryItems = Array.from(
        document.querySelectorAll(".gallery-item")
    );

    if (
        !lightbox ||
        !lightboxImage ||
        !closeButton ||
        !previousButton ||
        !nextButton ||
        galleryItems.length === 0
    ) return;

    let currentPhoto = 0;
    let lastFocusedElement = null;

    function showPhoto(index) {
        currentPhoto = (index + galleryItems.length) % galleryItems.length;

        const item = galleryItems[currentPhoto];
        const image = item.querySelector("img");

        if (!image) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        if (lightboxCaption) {
            const language = getSavedValue("portfolio-language", "uz");
            const photoText = translations[language]?.missingPhoto || "Photo";

            lightboxCaption.textContent =
                image.alt || `${photoText} ${currentPhoto + 1}`;
        }
    }

    function openLightbox(index) {
        lastFocusedElement = document.activeElement;

        showPhoto(index);

        lightbox.hidden = false;
        document.body.classList.add("lightbox-open");

        closeButton.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.classList.remove("lightbox-open");

        lightboxImage.src = "";

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const photoIndex = Number(item.dataset.photo);

            openLightbox(
                Number.isInteger(photoIndex) ? photoIndex : index
            );
        });
    });

    closeButton.addEventListener("click", closeLightbox);

    previousButton.addEventListener("click", () => {
        showPhoto(currentPhoto - 1);
    });

    nextButton.addEventListener("click", () => {
        showPhoto(currentPhoto + 1);
    });

    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", event => {
        if (lightbox.hidden) return;

        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
        if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
    });
}


/* =====================================
   7. SOCIAL LINKS
===================================== */

function initializeSocialLinks() {
    const socialLinks = {
        instagram: "https://instagram.com/_khayitboyevv_x17_",
        telegram: "https://t.me/khayitboyevv_oo7"
    };

    Object.entries(socialLinks).forEach(([name, url]) => {
        document.querySelectorAll(`[data-social="${name}"]`).forEach(link => {
            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    });
}


/* =====================================
   8. CURRENT YEAR
===================================== */

function updateCurrentYear() {
    const yearElement =
        document.querySelector("#year") ||
        document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


/* =====================================
   9. INITIALIZE WEBSITE
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(
        getSavedValue("portfolio-language", "uz")
    );

    applyTheme(
        getSavedValue("portfolio-theme", "dark")
    );

    const languageSelect = document.querySelector("#language");

    if (languageSelect) {
        languageSelect.addEventListener("change", event => {
            applyLanguage(event.target.value);
        });
    }

    const themeButton = document.querySelector("#themeToggle");

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const isLight = document.body.classList.contains("light-theme");

            applyTheme(isLight ? "dark" : "light");
        });
    }

    initializeMobileMenu();
    initializeGallery();
    initializeSocialLinks();
    updateCurrentYear();

    console.log("KHAYITBOYEVV website successfully initialized.");
});
