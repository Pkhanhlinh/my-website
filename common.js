// Language translations
const translations = {
    vi: {
        home: "Home",
        homestay: "Homestay Om.vibe",
        healing: "Healing",
        villa: "Flamingo",
        healthy: "Healthy",
        // Add more translations as needed
    },
    en: {
        home: "Home",
        homestay: "Om.vibe Homestay",
        healing: "Healing",
        villa: "Flamingo",
        healthy: "Wellness",
    },
    fr: {
        home: "Accueil",
        homestay: "Homestay Om.vibe",
        healing: "Guérison",
        villa: "Flamingo",
        healthy: "Santé",
    },
    ja: {
        home: "ホーム",
        homestay: "Om.vibe ホームステー",
        healing: "ヒーリング",
        villa: "フラミンゴ",
        healthy: "健康",
    },
    ko: {
        home: "홈",
        homestay: "Om.vibe 홈스테이",
        healing: "힐링",
        villa: "플라밍고",
        healthy: "건강",
    },
    zh: {
        home: "首页",
        homestay: "Om.vibe 家庭旅馆",
        healing: "疗愈",
        villa: "弗拉明戈",
        healthy: "健康",
    },
    ru: {
        home: "Главная",
        homestay: "Om.vibe Гостевой дом",
        healing: "Исцеление",
        villa: "Фламинго",
        healthy: "Здоровье",
    }
};

let currentLanguage = 'vi';

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update button text
    const langBtn = document.getElementById('lang-button');
    const langNames = {
        vi: 'Language: Tiếng Việt 🇻🇳',
        en: 'Language: English 🇺🇸',
        fr: 'Language: Français 🇫🇷',
        ja: 'Language: 日本語 🇯🇵',
        ko: 'Language: 한국어 🇰🇷',
        zh: 'Language: 中文 🇨🇳',
        ru: 'Language: Русский 🇷🇺'
    };
    langBtn.innerHTML = langNames[lang] + ' ▼';
}

document.addEventListener('DOMContentLoaded', function() {
    // Add header content with navigation buttons (for pages using header-placeholder)
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 3em; font-weight: 900; font-family: 'Times New Roman', 'Arial Unicode MS', Arial, sans-serif; text-transform: uppercase;">KALYNK_AN TUỆ</div>
    <div class="nav-buttons">
        <a href="index.html" class="button" data-i18n="home">Home</a>
        <a href="homestay.html" class="button" data-i18n="homestay">Homestay Om.vibe</a>
        <a href="healing.html" class="button" data-i18n="healing">Healing</a>
        <a href="villa.html" class="button" data-i18n="villa">Flamingo</a>
        <a href="healthy.html" class="button" data-i18n="healthy">Healthy</a>
    </div>
</div>
`;
    }

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    }

    // Add language switcher to header (works for both inline headers and header-placeholder)
    const headerDiv = document.querySelector('#header-placeholder > div') || document.querySelector('header > div');
    if (headerDiv) {
        // Check if language switcher already exists
        if (!document.getElementById('language-switcher')) {
            const langSwitcher = document.createElement('div');
            langSwitcher.id = 'language-switcher';
            langSwitcher.innerHTML = `
                <div class="dropdown">
                    <button id="lang-button" class="lang-btn">
                        Language: Tiếng Việt 🇻🇳 ▼
                    </button>
                    <div class="dropdown-content">
                        <a href="#" onclick="changeLanguage('vi'); return false;">Tiếng Việt 🇻🇳</a>
                        <a href="#" onclick="changeLanguage('en'); return false;">English 🇺🇸</a>
                        <a href="#" onclick="changeLanguage('fr'); return false;">Français 🇫🇷</a>
                        <a href="#" onclick="changeLanguage('ja'); return false;">日本語 🇯🇵</a>
                        <a href="#" onclick="changeLanguage('ko'); return false;">한국어 🇰🇷</a>
                        <a href="#" onclick="changeLanguage('zh'); return false;">中文 🇨🇳</a>
                        <a href="#" onclick="changeLanguage('ru'); return false;">Русский 🇷🇺</a>
                    </div>
                </div>
            `;
            
            // Insert at the beginning of the header div
            headerDiv.insertBefore(langSwitcher, headerDiv.firstChild);
            
            // Add data-i18n attributes to navigation buttons
            const navButtons = headerDiv.querySelectorAll('.nav-buttons .button, .buttons .button');
            const buttonKeys = ['home', 'homestay', 'healing', 'villa', 'healthy'];
            navButtons.forEach((button, index) => {
                if (buttonKeys[index]) {
                    button.setAttribute('data-i18n', buttonKeys[index]);
                }
            });
            
            // Apply saved language
            changeLanguage(currentLanguage);
        }
    }

    // Add active class to current page button
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let activeLink = document.querySelector(`a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

// Make changeLanguage available globally
window.changeLanguage = changeLanguage;
