// ─── Translations ────────────────────────────────────────────────────────────
const translations = {
    tr: {
        nav_home: 'Ana Sayfa',
        nav_about: 'Hakkımızda',
        nav_projects: 'Projeler',
        nav_contact: 'İletişim',
        hero_title: 'Geleceği',
        hero_title_gradient: 'Kodluyoruz',
        hero_subtitle: 'Modern, hızlı ve dinamik web projeleri ile fikirlerinizi dijital dünyaya taşıyoruz. Bizimle birlikte sınırları aşın.',
        hero_btn_projects: 'Projelerimizi Gör',
        hero_btn_contact: 'Bize Ulaşın',
        about_title: 'Biz Kimiz?',
        about_desc: 'Yenilikçi fikirleri koda dökerek muhteşem deneyimler tasarlayan bir ekibiz.',
        role_frontend: 'Frontend Geliştirici',
        role_backend: 'Backend Geliştirici',
        role_uiux: 'UI/UX Tasarımcı',
        projects_title: 'Projelerimiz',
        projects_desc: 'Geliştirdiğimiz bazı modern web çözümleri.',
        proj_dental_title: 'Diş Kliniği Sitesi',
        proj_dental_desc: 'Randevu sistemi entegre, güven uyandıran modern bir klinik tanıtım sitesi.',
        proj_beauty_title: 'Güzellik & Spa Sitesi',
        proj_beauty_desc: 'Şık ve zarif tasarımıyla hizmetleri öne çıkaran güzellik merkezi platformu.',
        proj_diet_title: 'Diyetisyen Platformu',
        proj_diet_desc: 'Online randevu ve diyet programı takibi sunan sağlıklı yaşam platformu.',
        proj_ecom_title: 'E-Ticaret Platformu',
        proj_ecom_desc: 'Modern bir alışveriş deneyimi sunan, yüksek performanslı e-ticaret altyapısı.',
        proj_cafe_title: 'Kafe & Restoran Sitesi',
        proj_cafe_desc: 'Menü yönetimi ve rezervasyon özellikli şık kafe ve restoran platformu.',
        contact_title: 'Birlikte Çalışalım',
        contact_desc: 'Yeni bir projeye mi başlıyorsunuz? Fikirlerinizi gerçeğe dönüştürmek için buradayız. Bize ulaşın!',
        contact_location: 'İstanbul, Türkiye',
        form_name_label: 'Adınız',
        form_name_placeholder: 'Adınız Soyadınız',
        form_email_label: 'E-posta',
        form_message_label: 'Mesajınız',
        form_message_placeholder: 'Bize projenizden bahsedin...',
        form_submit: 'Gönder',
        form_sending: 'Gönderiliyor...',
        form_sent: 'Gönderildi!',
        form_error: 'Hata! Tekrar deneyin.',
        footer_text: '© 2026 Agalar Yazılım. Tüm hakları saklıdır.',
    },
    en: {
        nav_home: 'Home',
        nav_about: 'About',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        hero_title: 'Building the',
        hero_title_gradient: 'Future',
        hero_subtitle: 'We bring your ideas to the digital world with modern, fast, and dynamic web projects. Push the limits with us.',
        hero_btn_projects: 'See Our Projects',
        hero_btn_contact: 'Get In Touch',
        about_title: 'Who Are We?',
        about_desc: 'A team that designs remarkable experiences by turning innovative ideas into code.',
        role_frontend: 'Frontend Developer',
        role_backend: 'Backend Developer',
        role_uiux: 'UI/UX Designer',
        projects_title: 'Our Projects',
        projects_desc: 'Some of the modern web solutions we have built.',
        proj_dental_title: 'Dental Clinic Website',
        proj_dental_desc: 'A modern clinic website with an integrated appointment system that builds trust.',
        proj_beauty_title: 'Beauty & Spa Website',
        proj_beauty_desc: 'An elegant beauty center platform that highlights services with a stylish design.',
        proj_diet_title: 'Dietitian Platform',
        proj_diet_desc: 'A healthy lifestyle platform offering online appointments and diet program tracking.',
        proj_ecom_title: 'E-Commerce Platform',
        proj_ecom_desc: 'A high-performance e-commerce infrastructure offering a modern shopping experience.',
        proj_cafe_title: 'Cafe & Restaurant Website',
        proj_cafe_desc: 'A stylish cafe and restaurant platform with menu management and reservations.',
        contact_title: "Let's Work Together",
        contact_desc: 'Starting a new project? We are here to turn your ideas into reality. Reach out!',
        contact_location: 'Istanbul, Turkey',
        form_name_label: 'Your Name',
        form_name_placeholder: 'Full Name',
        form_email_label: 'Email',
        form_message_label: 'Message',
        form_message_placeholder: 'Tell us about your project...',
        form_submit: 'Send',
        form_sending: 'Sending...',
        form_sent: 'Sent!',
        form_error: 'Error! Please try again.',
        footer_text: '© 2026 Agalar Yazılım. All rights reserved.',
    }
};

let currentLang = localStorage.getItem('lang') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const label = lang === 'tr' ? 'EN' : 'TR';
    document.getElementById('lang-toggle').textContent = label;
    document.getElementById('lang-toggle-mobile').textContent = label;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
});

document.getElementById('lang-toggle-mobile').addEventListener('click', () => {
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
});

setLanguage(currentLang);

// ─── EmailJS ─────────────────────────────────────────────────────────────────
emailjs.init('qUYUU4p349w_ECDnP');

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const t = translations[currentLang];

    submitBtn.disabled = true;
    submitBtn.textContent = t.form_sending;

    emailjs.sendForm('service_lajdckq', 'template_brho46r', this)
        .then(() => {
            submitBtn.textContent = t.form_sent;
            submitBtn.style.background = 'var(--gradient-2)';
            contactForm.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = t.form_submit;
                submitBtn.style.background = '';
            }, 3000);
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            submitBtn.textContent = t.form_error;
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = t.form_submit;
                submitBtn.style.background = '';
            }, 3000);
        });
});

// ─── Theme ───────────────────────────────────────────────────────────────────
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateIcons(savedTheme);

function toggleTheme() {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
}

themeToggleBtn.addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

function updateIcons(theme) {
    sunIcon.classList.toggle('hidden', theme !== 'dark');
    moonIcon.classList.toggle('hidden', theme === 'dark');
    document.getElementById('sun-icon-mobile').classList.toggle('hidden', theme !== 'dark');
    document.getElementById('moon-icon-mobile').classList.toggle('hidden', theme === 'dark');
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ─── Scroll Animations ───────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up, .slide-in-right').forEach(el => observer.observe(el));

// ─── Navbar Scroll + Scroll Spy ──────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll('section[id], header[id]');

window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? 'var(--shadow-md)' : 'none';
    navbar.style.background = window.scrollY > 50 ? 'var(--glass-bg)' : 'transparent';

    let currentId = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) currentId = section.getAttribute('id');
    });

    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
    });
});
