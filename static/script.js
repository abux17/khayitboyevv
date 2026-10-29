
/* =====================================
   KHAYITBOYEVV - MAIN JAVASCRIPT
===================================== */


/* =====================================
   1. TRANSLATIONS
===================================== */

const translations = {

    uz: {
        navHome: "Bosh sahifa",
        navAbout: "Men haqimda",
        navJourney: "Mening yo‘lim",
        navGallery: "Galereya",
        navContact: "Aloqa",

        heroLabel: "SHAXSIY PORTFOLIO",
        heroIntro: "Salom, men Abdulla Hayitboyev.",
        heroTitle: "O‘z hikoyamni yaratyapman.",
        heroText: "Har bir kun — yangi imkoniyat, har bir qadam — yangi tajriba.",
        discover: "Men haqimda",
        viewPhotos: "Suratlarni ko‘rish",

        metaOne: "Maqsad sari",
        metaTwo: "Doimiy rivojlanish",
        metaThree: "Yangi tajribalar",
        portraitCaption: "Abdulla Hayitboyev",

        aboutLabel: "MEN HAQIMDA",
        aboutTitle: "Har bir insonning o‘z hikoyasi bor.",
        aboutText: "Men yangi bilimlar olishni, o‘rganishni va o‘z ustimda ishlashni yaxshi ko‘raman.",
        editHint: "Har kuni o‘zimning yaxshiroq versiyam bo‘lishga intilaman.",
        readStory: "Hikoyamni o‘qish →",

        factOneTitle: "Shaxsiyat",
        factOneText: "Har doim yangi narsalarni o‘rganishga intilaman.",
        factTwoTitle: "Qiziqishlar",
        factTwoText: "Texnologiya, ijod va yangi tajribalar.",
        factThreeTitle: "Maqsad",
        factThreeText: "Kelajakda katta natijalarga erishish.",

        journeyLabel: "MENING YO‘LIM",
        journeyTitle: "Har bir qadam muhim.",
        journeyText: "Rivojlanish — bu doimiy jarayon.",

        timeOneTitle: "Boshlanish",
        timeOneText: "Yangi bilimlar va tajribalar sari ilk qadamlar.",
        timeTwoTitle: "Rivojlanish",
        timeTwoText: "O‘rganish, izlanish va o‘z ustimda ishlash.",
        timeThreeTitle: "Kelajak",
        timeThreeText: "Katta maqsadlar va yangi marralar sari.",

        galleryLabel: "GALEREYA",
        galleryTitle: "Xotiralar va lahzalar.",
        galleryText: "Hayotimdagi unutilmas lahzalardan lavhalar.",
        galleryHint: "Surat ustiga bosib, kattalashtirib ko‘rishingiz mumkin.",

        contactLabel: "ALOQA",
        contactEyebrow: "Keling, bog‘lanamiz.",
        contactTitle: "Yangi tanishuvlarga doim ochiqman.",
        contactText: "Quyidagi ijtimoiy tarmoqlar orqali men bilan bog‘lanishingiz mumkin.",
        socialHint: "Ijtimoiy tarmoqlarim.",
        
        backTop: "Yuqoriga ↑",
        missingPhoto: "Surat",

        birthValue: "2000",
        birthPlaceValue: "O‘zbekiston",
        roleValue: "Marketolog",
        interestsValue: "Texnologiya, ijod",
        goalValue: "Rivojlanish"
    },


    en: {
        navHome: "Home",
        navAbout: "About me",
        navJourney: "My journey",
        navGallery: "Gallery",
        navContact: "Contact",

        heroLabel: "PERSONAL PORTFOLIO",
        heroIntro: "Hello, I'm Abdulla Hayitboyev.",
        heroTitle: "Creating my own story.",
        heroText: "Every day is a new opportunity, every step is a new experience.",
        discover: "About me",
        viewPhotos: "View photos",

        metaOne: "Towards goals",
        metaTwo: "Constant growth",
        metaThree: "New experiences",
        portraitCaption: "Abdulla Hayitboyev",

        aboutLabel: "ABOUT ME",
        aboutTitle: "Everyone has their own story.",
        aboutText: "I love gaining new knowledge, learning and working on myself.",
        editHint: "Every day I strive to become a better version of myself.",
        readStory: "Read my story →",

        factOneTitle: "Personality",
        factOneText: "I always strive to learn new things.",
        factTwoTitle: "Interests",
        factTwoText: "Technology, creativity and new experiences.",
        factThreeTitle: "Goals",
        factThreeText: "Achieving great results in the future.",

        journeyLabel: "MY JOURNEY",
        journeyTitle: "Every step matters.",
        journeyText: "Growth is a continuous process.",

        timeOneTitle: "Beginning",
        timeOneText: "First steps towards new knowledge and experiences.",
        timeTwoTitle: "Development",
        timeTwoText: "Learning, exploring and working on myself.",
        timeThreeTitle: "Future",
        timeThreeText: "Towards bigger goals and new achievements.",

        galleryLabel: "GALLERY",
        galleryTitle: "Memories and moments.",
        galleryText: "Moments from my life worth remembering.",
        galleryHint: "Click on a photo to view it in a larger size.",

        contactLabel: "CONTACT",
        contactEyebrow: "Let's connect.",
        contactTitle: "Always open to new connections.",
        contactText: "You can contact me through the social networks below.",
        socialHint: "My social networks.",

        backTop: "Back to top ↑",
        missingPhoto: "Photo",

        birthValue: "2000",
        birthPlaceValue: "Uzbekistan",
        roleValue: "Marketer",
        interestsValue: "Technology, creativity",
        goalValue: "Development"
    },


    ru: {
        navHome: "Главная",
        navAbout: "Обо мне",
        navJourney: "Мой путь",
        navGallery: "Галерея",
        navContact: "Контакты",

        heroLabel: "ЛИЧНОЕ ПОРТФОЛИО",
        heroIntro: "Привет, я Абдулла Хайитбоев.",
        heroTitle: "Создаю свою собственную историю.",
        heroText: "Каждый день — новая возможность, каждый шаг — новый опыт.",
        discover: "Обо мне",
        viewPhotos: "Посмотреть фото",

        metaOne: "К своим целям",
        metaTwo: "Постоянное развитие",
        metaThree: "Новый опыт",
        portraitCaption: "Абдулла Хайитбоев",

        aboutLabel: "ОБО МНЕ",
        aboutTitle: "У каждого человека своя история.",
        aboutText: "Мне нравится получать новые знания, учиться и работать над собой.",
        editHint: "Каждый день я стремлюсь стать лучше.",
        readStory: "Читать мою историю →",

        factOneTitle: "Личность",
        factOneText: "Всегда стремлюсь узнавать что-то новое.",
        factTwoTitle: "Интересы",
        factTwoText: "Технологии, творчество и новый опыт.",
        factThreeTitle: "Цель",
        factThreeText: "Добиваться больших результатов в будущем.",

        journeyLabel: "МОЙ ПУТЬ",
        journeyTitle: "Каждый шаг имеет значение.",
        journeyText: "Развитие — это постоянный процесс.",

        timeOneTitle: "Начало",
        timeOneText: "Первые шаги к новым знаниям и опыту.",
        timeTwoTitle: "Развитие",
        timeTwoText: "Обучение, поиск и работа над собой.",
        timeThreeTitle: "Будущее",
        timeThreeText: "К большим целям и новым достижениям.",

        galleryLabel: "ГАЛЕРЕЯ",
        galleryTitle: "Воспоминания и моменты.",
        galleryText: "Моменты моей жизни, которые хочется помнить.",
        galleryHint: "Нажмите на фотографию, чтобы увеличить её.",

        contactLabel: "КОНТАКТЫ",
        contactEyebrow: "Давайте общаться.",
        contactTitle: "Всегда открыт новым знакомствам.",
        contactText: "Вы можете связаться со мной через социальные сети ниже.",
        socialHint: "Мои социальные сети.",

        backTop: "Наверх ↑",
        missingPhoto: "Фото",

        birthValue: "2000",
        birthPlaceValue: "Узбекистан",
        roleValue: "Маркетолог",
        interestsValue: "Технологии, творчество",
        goalValue: "Развитие"
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

    document.documentElement.lang = language;

    const words = translations[language];

    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(words, key)) {
            element.textContent = words[key];
        }

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {

        const key = element.dataset.i18nPlaceholder;

        if (Object.prototype.hasOwnProperty.call(words, key)) {
            element.placeholder = words[key];
        }

    });


    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {

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

        themeButton.setAttribute(
            "aria-pressed",
            String(isLight)
        );

    }

    saveValue("portfolio-theme", theme);

}


/* =====================================
   5. MOBILE MENU
===================================== */

function initializeMobileMenu() {

    const menuButton = document.querySelector("#menuToggle");
    const navigation = document.querySelector("#navLinks");

    if (!menuButton || !navigation) {
        return;
    }

    function closeMenu() {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    }

    menuButton.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.textContent = isOpen ? "×" : "☰";

    });


    navigation.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", closeMenu);

    });


    document.addEventListener("click", (event) => {

        if (
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

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
    ) {
        return;
    }

    let currentPhoto = 0;
    let lastFocusedElement = null;


    function showPhoto(index) {

        if (index < 0) {
            index = galleryItems.length - 1;
        }

        if (index >= galleryItems.length) {
            index = 0;
        }

        currentPhoto = index;

        const item = galleryItems[currentPhoto];

        const image = item.querySelector("img");

        if (!image) {
            return;
        }

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        if (lightboxCaption) {

            const language = getSavedValue("portfolio-language", "uz");

            const photoText = translations[language]?.missingPhoto || "Surat";

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


    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (lightbox.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showPhoto(currentPhoto - 1);
        }

        if (event.key === "ArrowRight") {
            showPhoto(currentPhoto + 1);
        }

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

        document.querySelectorAll(`[data-social="${name}"]`).forEach((link) => {

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

    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

}


/* =====================================
   9. INITIALIZE WEBSITE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Saved language
    const savedLanguage = getSavedValue(
        "portfolio-language",
        "uz"
    );

    applyLanguage(savedLanguage);


    // Saved theme
    const savedTheme = getSavedValue(
        "portfolio-theme",
        "dark"
    );

    applyTheme(savedTheme);


    // Language selector
    const languageSelect = document.querySelector("#language");

    if (languageSelect) {

        languageSelect.addEventListener("change", (event) => {

            applyLanguage(event.target.value);

        });

    }


    // Theme button
    const themeButton = document.querySelector("#themeToggle");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            const isLight = document.body.classList.contains("light-theme");

            applyTheme(isLight ? "dark" : "light");

        });

    }


    // Initialize other features
    initializeMobileMenu();

    initializeGallery();

    initializeSocialLinks();

    updateCurrentYear();

    console.log("KHAYITBOYEVV website successfully initialized.");

});
