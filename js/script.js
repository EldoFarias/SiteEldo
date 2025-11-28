// ==========================================
// GLOBAL VARIABLES
// ==========================================

let currentTestimonial = 0;
const projectsData = {
    1: {
        title: 'E-Commerce Mobile',
        description: 'Aplicativo completo de vendas online com sistema de pagamento integrado, carrinho de compras, catálogo de produtos, sistema de avaliações e notificações push.',
        image: 'https://via.placeholder.com/800x500/667eea/ffffff?text=App+E-Commerce',
        tags: ['Flutter', 'Firebase', 'API Rest', 'Stripe'],
        features: [
            'Catálogo de produtos com filtros avançados',
            'Carrinho de compras com cálculo automático',
            'Múltiplas formas de pagamento (cartão, Pix, boleto)',
            'Sistema de rastreamento de pedidos',
            'Notificações push em tempo real',
            'Avaliações e comentários de produtos',
            'Área do cliente com histórico de compras'
        ],
        technologies: ['Flutter 3.0', 'Firebase Authentication', 'Firestore Database', 'Cloud Functions', 'Stripe API', 'Google Maps API'],
        links: [
            { text: 'Ver na Google Play', url: 'https://play.google.com', icon: 'fab fa-google-play' }
        ]
    },
    2: {
        title: 'Sistema de Gestão Empresarial',
        description: 'Plataforma web completa para gestão de processos corporativos, incluindo controle de estoque, vendas, compras, financeiro e recursos humanos.',
        image: 'https://via.placeholder.com/800x500/764ba2/ffffff?text=Sistema+Gestão',
        tags: ['C#', '.NET Core', 'SQL Server', 'Angular'],
        features: [
            'Gestão completa de estoque com controle de lotes',
            'Módulo de vendas com emissão de NF-e',
            'Controle financeiro com fluxo de caixa',
            'Gestão de compras e fornecedores',
            'Relatórios gerenciais personalizados',
            'Controle de acesso por perfil de usuário',
            'Dashboard com KPIs em tempo real'
        ],
        technologies: ['ASP.NET Core 6.0', 'Entity Framework', 'SQL Server 2019', 'Angular 14', 'SignalR', 'Crystal Reports'],
        links: [
            { text: 'Ver Demonstração', url: 'https://demo.example.com', icon: 'fas fa-external-link-alt' }
        ]
    },
    3: {
        title: 'Dashboard Analytics',
        description: 'Painel de controle interativo com visualização de dados em tempo real, gráficos dinâmicos e indicadores de performance para análise de negócios.',
        image: 'https://via.placeholder.com/800x500/f093fb/ffffff?text=Dashboard+Analytics',
        tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
        features: [
            'Gráficos interativos e responsivos',
            'Atualização de dados em tempo real',
            'Filtros dinâmicos por período e categoria',
            'Exportação de relatórios em PDF e Excel',
            'Alertas configuráveis de métricas',
            'Interface dark/light mode',
            'Integração com múltiplas fontes de dados'
        ],
        technologies: ['React 18', 'Chart.js', 'D3.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
        links: [
            { text: 'Código no GitHub', url: 'https://github.com', icon: 'fab fa-github' }
        ]
    },
    4: {
        title: 'App de Delivery',
        description: 'Aplicativo de entregas com rastreamento GPS em tempo real, sistema de pedidos, pagamento integrado e chat entre cliente e entregador.',
        image: 'https://via.placeholder.com/800x500/4facfe/ffffff?text=App+Delivery',
        tags: ['Kotlin', 'Android', 'Google Maps', 'Firebase'],
        features: [
            'Rastreamento em tempo real com GPS',
            'Sistema de pedidos com múltiplos restaurantes',
            'Chat integrado entre cliente e entregador',
            'Pagamento online e offline',
            'Sistema de avaliação de entregas',
            'Notificações de status do pedido',
            'Histórico completo de pedidos'
        ],
        technologies: ['Kotlin', 'Android Jetpack', 'Google Maps SDK', 'Firebase Realtime Database', 'Retrofit', 'Room Database'],
        links: [
            { text: 'Ver na Google Play', url: 'https://play.google.com', icon: 'fab fa-google-play' }
        ]
    },
    5: {
        title: 'Portal Institucional',
        description: 'Website corporativo responsivo com CMS integrado, área administrativa, blog, galeria de fotos e formulários de contato.',
        image: 'https://via.placeholder.com/800x500/00f2fe/ffffff?text=Portal+Institucional',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
        features: [
            'Design responsivo e moderno',
            'CMS para gerenciamento de conteúdo',
            'Blog com sistema de comentários',
            'Galeria de fotos com lightbox',
            'Formulários de contato com validação',
            'SEO otimizado',
            'Integração com redes sociais'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'PHP 8', 'MySQL', 'WordPress API'],
        links: [
            { text: 'Visitar Website', url: 'https://example.com', icon: 'fas fa-external-link-alt' }
        ]
    },
    6: {
        title: 'App de Fitness',
        description: 'Aplicativo multiplataforma para acompanhamento de treinos, dietas e evolução física com gráficos de progresso.',
        image: 'https://via.placeholder.com/800x500/43e97b/ffffff?text=App+Fitness',
        tags: ['Flutter', 'SQLite', 'Firebase Auth', 'Charts'],
        features: [
            'Planos de treino personalizados',
            'Contador de calorias e macros',
            'Gráficos de evolução física',
            'Timer para exercícios',
            'Histórico completo de treinos',
            'Metas e desafios semanais',
            'Integração com wearables'
        ],
        technologies: ['Flutter', 'SQLite', 'Firebase Authentication', 'Provider', 'FL Charts', 'Health Connect API'],
        links: [
            { text: 'Ver na App Store', url: 'https://apps.apple.com', icon: 'fab fa-app-store-ios' }
        ]
    },
    7: {
        title: 'Business Intelligence Dashboard',
        description: 'Plataforma de BI com indicadores de performance (KPIs), relatórios dinâmicos e análise preditiva para tomada de decisões.',
        image: 'https://via.placeholder.com/800x500/fa709a/ffffff?text=BI+Dashboard',
        tags: ['.NET', 'Power BI', 'SQL', 'Azure'],
        features: [
            'KPIs personalizáveis por usuário',
            'Relatórios dinâmicos e interativos',
            'Análise preditiva com ML',
            'Integração com múltiplas fontes',
            'Alertas automáticos de métricas',
            'Exportação em diversos formatos',
            'Acesso via mobile e desktop'
        ],
        technologies: ['.NET 6', 'Power BI Embedded', 'SQL Server', 'Azure ML', 'Dapper', 'SignalR'],
        links: [
            { text: 'Ver Demonstração', url: 'https://demo.example.com', icon: 'fas fa-external-link-alt' }
        ]
    },
    8: {
        title: 'Plataforma E-Learning',
        description: 'Sistema completo de ensino online com videoaulas, exercícios, certificados e área do aluno e professor.',
        image: 'https://via.placeholder.com/800x500/fee140/333333?text=E-Learning',
        tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
        features: [
            'Player de vídeo com controle de progresso',
            'Sistema de exercícios e avaliações',
            'Emissão de certificados digitais',
            'Chat e fórum para alunos',
            'Área do professor com analytics',
            'Sistema de gamificação',
            'Upload e gestão de conteúdo'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Socket.io', 'PDF-Lib'],
        links: [
            { text: 'Acessar Plataforma', url: 'https://platform.example.com', icon: 'fas fa-external-link-alt' }
        ]
    },
    9: {
        title: 'App de Controle Financeiro',
        description: 'Gerenciador de finanças pessoais com gráficos de receitas e despesas, planejamento de orçamento e alertas.',
        image: 'https://via.placeholder.com/800x500/30cfd0/ffffff?text=App+Financeiro',
        tags: ['Java', 'Android', 'Room DB', 'MPAndroidChart'],
        features: [
            'Registro de receitas e despesas',
            'Categorização automática',
            'Gráficos de evolução patrimonial',
            'Planejamento de orçamento mensal',
            'Alertas de vencimento de contas',
            'Exportação de relatórios',
            'Múltiplas contas e cartões'
        ],
        technologies: ['Java', 'Android SDK', 'Room Database', 'LiveData', 'MPAndroidChart', 'WorkManager'],
        links: [
            { text: 'Ver na Google Play', url: 'https://play.google.com', icon: 'fab fa-google-play' }
        ]
    }
};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initAOS();
    initNavigation();
    initTypingEffect();
    initPortfolioFilter();
    initTestimonials();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
    initModal();
});

// ==========================================
// PARTICLES.JS CONFIGURATION
// ==========================================

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#667eea'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#667eea',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ==========================================
// AOS ANIMATION LIBRARY
// ==========================================

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100
        });
    }
}

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// TYPING EFFECT
// ==========================================

function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Desenvolvedor Full-Stack',
        'Especialista em Mobile',
        'Criador de Soluções Tech',
        'Desenvolvedor Android',
        'Expert em Flutter'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next text
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ==========================================
// PORTFOLIO FILTER
// ==========================================

function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 10);
                    } else {
                        item.classList.add('hide');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ==========================================
// TESTIMONIALS SLIDER
// ==========================================

function initTestimonials() {
    const track = document.querySelector('.testimonial-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + totalCards) % totalCards;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % totalCards;
            updateSlider();
        });
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalCards;
        updateSlider();
    }, 5000);
}

// ==========================================
// CONTACT FORM
// ==========================================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('.submit-btn');
            const formMessage = form.querySelector('.form-message');

            // Show loading state
            submitBtn.classList.add('loading');
            formMessage.style.display = 'none';

            // Get form data
            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };

            // Send email using FormData and mailto
            try {
                // Criar corpo do email
                const emailSubject = `Contato do Site: ${formData.subject}`;
                const emailBody = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;

                // Opção 1: Usar mailto (abre cliente de email do usuário)
                // window.location.href = `mailto:eldofarias81@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

                // Opção 2: Enviar para um backend (recomendado)
                // Para usar esta opção, você precisará criar um backend simples
                // Por enquanto, vamos usar o Formspree (gratuito)

                const response = await fetch('https://formspree.io/f/xanyqpjb', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        _replyto: formData.email,
                        _subject: `Contato do Site: ${formData.subject}`
                    })
                });

                if (response.ok) {
                    // Success
                    formMessage.textContent = 'Mensagem enviada com sucesso! Retornarei em breve.';
                    formMessage.className = 'form-message success';
                    formMessage.style.display = 'block';
                    form.reset();
                } else {
                    throw new Error('Erro no envio');
                }

            } catch (error) {
                // Error - Fallback para mailto
                formMessage.innerHTML = 'Não foi possível enviar automaticamente. <a href="mailto:eldofarias81@outlook.com?subject=Contato do Site&body=Nome: ' + formData.name + '%0D%0AEmail: ' + formData.email + '%0D%0A%0D%0A' + formData.message + '" style="color: var(--primary-color); text-decoration: underline;">Clique aqui para abrir seu cliente de email</a>.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            } finally {
                submitBtn.classList.remove('loading');
            }
        });
    }
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Check if it's a valid section
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const section = document.querySelector(href);
                const offsetTop = section.offsetTop - 80; // Offset for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// PROJECT MODAL
// ==========================================

function initModal() {
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Open modal
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function openModal(projectId) {
        const project = projectsData[projectId];

        if (!project) return;

        // Populate modal
        document.querySelector('.modal-image').src = project.image;
        document.querySelector('.modal-image').alt = project.title;
        document.querySelector('.modal-title').textContent = project.title;
        document.querySelector('.modal-description').textContent = project.description;

        // Tags
        const tagsContainer = document.querySelector('.modal-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });

        // Features
        const featuresList = document.querySelector('.features-list');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Technologies
        const techList = document.querySelector('.tech-list');
        techList.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });

        // Links
        const linksContainer = document.querySelector('.modal-links');
        linksContainer.innerHTML = '';
        project.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'btn btn-primary';
            a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
            linksContainer.appendChild(a);
        });

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add animation on scroll for elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
}

// Initialize animation on scroll
animateOnScroll();

// Console message for developers
console.log('%c👋 Olá, Desenvolvedor!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%c🚀 Gostou do portfólio? Entre em contato!', 'font-size: 14px; color: #764ba2;');
console.log('%c📧 contato@eldofarias.com', 'font-size: 12px; color: #a0aec0;');