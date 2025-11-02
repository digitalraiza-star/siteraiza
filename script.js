// script.js

// ===========================
// Menu Mobile
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
});

// ===========================
// Scroll Suave
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Considera o header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===========================
// Animação de Scroll (Fade-in)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos com classe fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Header Fixo com Mudança de Cor
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        // Mudança de cor do header
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--branco)';
            header.style.backdropFilter = 'none';
        }
        
        // Hide/show header no scroll
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            // Scroll para baixo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll para cima
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
});

// ===========================
// Animação do Botão WhatsApp
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        // Pulsar animation
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 600);
        }, 3000);
    }
});

// ===========================
// Contador de Estatísticas (Opcional)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const counterElements = document.querySelectorAll('.counter');
    
    if (counterElements.length > 0) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(counter => observer.observe(counter));
    }
    
    function startCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const steps = 60;
        const step = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, duration / steps);
    }
});

// ===========================
// Validação de Formulário (Para futuros formulários)
// ===========================
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// ===========================
// Modal Simples (Para futuras implementações)
// ===========================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal clicando fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ===========================
// Troca de Planos (Opcional)
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggles = document.querySelectorAll('.pricing-toggle');
    
    pricingToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            // Atualizar preços conforme o período
            updatePrices(period);
            
            // Atualizar estado ativo
            pricingToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function updatePrices(period) {
        // Implementar lógica de mudança de preços se necessário
        console.log('Período selecionado:', period);
    }
});

// ===========================
// Carousel Simples (Para futuras implementações)
// ===========================
class SimpleCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.slides = this.container?.querySelectorAll('.carousel-slide');
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        if (!this.container || this.slides.length === 0) return;
        
        this.showSlide(this.currentIndex);
        
        // Adicionar controles se necessário
        this.addControls();
    }
    
    showSlide(index) {
        this.slides.forEach(slide => slide.style.display = 'none');
        this.slides[index].style.display = 'block';
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
    
    addControls() {
        // Implementar controles de próximo/anterior
    }
}

// ===========================
// Loading Screen (Opcional)
// ===========================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// ===========================
// Otimização de Performance
// ===========================
// Debounce para eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce em eventos pesados
window.addEventListener('scroll', debounce(function() {
    // Código pesado do scroll
}, 10));

window.addEventListener('resize', debounce(function() {
    // Código de redimensionamento
}, 250));

// ===========================
// Controle de Áudio/Video (Para futuras implementações)
// ===========================
function toggleVideo(videoId) {
    const video = document.getElementById(videoId);
    if (video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}

// ===========================
// Inicialização de Componentes
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carousels se existirem
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        new SimpleCarousel(carousel.id);
    });
    
    // Adicionar classe loaded ao body para transições
    document.body.classList.add('loaded');
});

// ===========================
// Tratamento de Erros
// ===========================
window.addEventListener('error', function(e) {
    console.error('Erro capturado:', e.error);
});

// ===========================
// Service Worker (Para PWA - Opcional)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registrado com sucesso: ', registration.scope);
            })
            .catch(function(error) {
                console.log('Falha no registro do ServiceWorker: ', error);
            });
    });
}
