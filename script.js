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

// ─── WebGL Shader Background ──────────────────────────────────────────────────
(function initShaderBackground() {
    const vsSource = `
        attribute vec4 aVertexPosition;
        void main() {
            gl_Position = aVertexPosition;
        }
    `;

    const fsSource = `
        precision highp float;
        uniform vec2  iResolution;
        uniform float iTime;
        uniform float iDark;

        const float overallSpeed      = 0.2;
        const float gridSmoothWidth   = 0.015;
        const float axisWidth         = 0.05;
        const float majorLineWidth    = 0.025;
        const float minorLineWidth    = 0.0125;
        const float majorLineFrequency = 5.0;
        const float minorLineFrequency = 1.0;
        const float scale             = 5.0;
        const float minLineWidth      = 0.01;
        const float maxLineWidth      = 0.2;
        const float lineSpeed         = 1.0 * overallSpeed;
        const float lineAmplitude     = 1.0;
        const float lineFrequency     = 0.2;
        const float warpSpeed         = 0.2 * overallSpeed;
        const float warpFrequency     = 0.5;
        const float warpAmplitude     = 1.0;
        const float offsetFrequency   = 0.5;
        const float offsetSpeed       = 1.33 * overallSpeed;
        const float minOffsetSpread   = 0.6;
        const float maxOffsetSpread   = 2.0;
        const int   linesPerGroup     = 16;

        #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
        #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
        #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
        #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

        float random(float t) {
            return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
        }

        float getPlasmaY(float x, float horizontalFade, float offset) {
            return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
        }

        void main() {
            vec2 fragCoord = gl_FragCoord.xy;
            vec2 uv    = fragCoord / iResolution.xy;
            vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

            float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
            float verticalFade   = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

            space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
            space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

            /* theme-adaptive colours */
            vec4 bgColor1  = mix(vec4(0.94, 0.92, 0.99, 1.0), vec4(0.08, 0.08, 0.28, 1.0), iDark);
            vec4 bgColor2  = mix(vec4(0.98, 0.94, 1.00, 1.0), vec4(0.28, 0.08, 0.48, 1.0), iDark);
            vec4 lineColor = mix(vec4(0.28, 0.05, 0.72, 1.0), vec4(0.40, 0.20, 0.80, 1.0), iDark);
            vec4 fadeEdge  = mix(vec4(1.00, 1.00, 1.00, 1.0), vec4(0.00, 0.00, 0.00, 1.0), iDark);

            vec4 lines = vec4(0.0);

            for (int l = 0; l < linesPerGroup; l++) {
                float normalizedLineIndex = float(l) / float(linesPerGroup);
                float offsetTime     = iTime * offsetSpeed;
                float offsetPosition = float(l) + space.x * offsetFrequency;
                float rand      = random(offsetPosition + offsetTime) * 0.5 + 0.5;
                float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
                float offset    = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex))
                                  * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
                float linePosition = getPlasmaY(space.x, horizontalFade, offset);
                float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0
                           + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

                float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
                vec2  circlePos = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
                float circle = drawCircle(circlePos, 0.01, space) * 4.0;

                lines += (line + circle) * lineColor * rand;
            }

            vec4 fragColor = mix(bgColor1, bgColor2, uv.x);
            fragColor = mix(fadeEdge, fragColor, verticalFade);
            fragColor.a = 1.0;

            /* dark: additive bright lines on dark bg
               light: multiply-darken so lines appear as darker strokes on white */
            /* dark: additive glow on dark bg
               light: blend towards lineColor so lines appear as saturated purple strokes */
            vec4 linesAdditive = fragColor + lines * verticalFade;
            float lineIntensity = clamp(dot(lines.rgb, vec3(0.2, 0.1, 0.7)) * 1.8 * verticalFade, 0.0, 0.75);
            vec4 linesDarken   = mix(fragColor, lineColor * 0.65, lineIntensity);
            fragColor = mix(linesDarken, linesAdditive, iDark);

            gl_FragColor = fragColor;
        }
    `;

    const hero   = document.getElementById('home');
    const canvas = document.createElement('canvas');
    canvas.id    = 'shader-canvas';
    hero.insertBefore(canvas, hero.firstChild);

    const gl = canvas.getContext('webgl');
    if (!gl) { console.warn('WebGL not supported'); return; }

    function loadShader(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error('Shader error:', gl.getShaderInfoLog(s));
            gl.deleteShader(s);
            return null;
        }
        return s;
    }

    const program = gl.createProgram();
    gl.attachShader(program, loadShader(gl.VERTEX_SHADER,   vsSource));
    gl.attachShader(program, loadShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return;
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const vertexLoc     = gl.getAttribLocation(program,  'aVertexPosition');
    const resolutionLoc = gl.getUniformLocation(program, 'iResolution');
    const timeLoc       = gl.getUniformLocation(program, 'iTime');
    const darkLoc       = gl.getUniformLocation(program, 'iDark');

    function resize() {
        canvas.width  = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    const startTime = Date.now();
    let   darkValue = document.documentElement.getAttribute('data-theme') === 'dark' ? 1.0 : 0.0;

    function render() {
        const target = document.documentElement.getAttribute('data-theme') === 'dark' ? 1.0 : 0.0;
        darkValue += (target - darkValue) * 0.05;

        const t = (Date.now() - startTime) / 1000;
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(timeLoc, t);
        gl.uniform1f(darkLoc, darkValue);
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
        gl.vertexAttribPointer(vertexLoc, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vertexLoc);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}());

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
