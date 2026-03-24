const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

/* abrir/cerrar menú */
toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
});

/* efecto scroll */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const seccion = document.querySelector(".seccion1");

window.addEventListener("scroll", () => {
    const pos = seccion.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 100) {
        seccion.style.opacity = "1";
        seccion.style.transform = "translateY(0)";
    }
});


// 📲 WHATSAPP AUTOMÁTICO
const botones = document.querySelectorAll(".btn-card");

botones.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let producto = btn.getAttribute("data-product");

        let mensaje = `Hola, quiero comprar el ${producto}`;
        let url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
});


// 🔍 FILTROS
const filtros3 = document.querySelectorAll(".filtros button");
const cards = document.querySelectorAll(".disponibles");

filtros3.forEach(btn => {
    btn.addEventListener("click", () => {
        let filtro = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filtro === "all" || card.getAttribute("data-model") === filtro) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});



const counters = document.querySelectorAll(".contador");

const activarContador = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
            const increment = target / 50;

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
};

// activar cuando aparece en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activarContador();
        }
    });
});

observer.observe(document.querySelector(".seccion4"));


const faqItems = document.querySelectorAll(".faq-item");

// ACORDEÓN
faqItems.forEach(item => {
    item.addEventListener("click", () => {
        faqItems.forEach(i => {
            if(i !== item) i.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});

// ANIMACIÓN AL SCROLL
const observerer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faqItems.forEach(item => observerer.observe(item));


// Animación cuando se hace scroll
const contacto = document.querySelector(".contacto");

const observererr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            contacto.classList.add("show");
        }
    });
}, { threshold: 0.2 });

observererr.observe(contacto);


// FILTROS POR MODELO
const filtros1 = document.querySelectorAll('.filtros button');
const productos2 = document.querySelectorAll('.disponibles');

filtros1.forEach(btn => {
    btn.addEventListener('click', () => {
        const filtro = btn.getAttribute('data-filter');
        productos2.forEach(producto => {
            if(filtro === 'all' || producto.dataset.model === filtro){
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});

// BOTONES CARRUSEL
const seccion3 = document.querySelector('.seccion2');
const nextBtn2 = document.querySelector('.next');
const prevBtn1 = document.querySelector('.prev');

nextBtn2.addEventListener('click', () => {
    seccion3.scrollBy({ left: seccion3.offsetWidth * 0.8, behavior: 'smooth' });
});

prevBtn1.addEventListener('click', () => {
    seccion3.scrollBy({ left: -seccion3.offsetWidth * 0.8, behavior: 'smooth' });
});


// FILTROS
const filtros = document.querySelectorAll('.filtros button');
const productos = document.querySelectorAll('.disponibles');

filtros.forEach(btn => {
    btn.addEventListener('click', () => {
        const filtro = btn.getAttribute('data-filter');
        productos.forEach(producto => {
            if(filtro === 'all' || producto.dataset.model === filtro){
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
        actualizarDots();
    });
});

// CARRUSEL BOTONES
const seccion2 = document.querySelector('.seccion2');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

function crearDots() {
    dotsContainer.innerHTML = '';
    const items = seccion2.querySelectorAll('.disponibles');
    items.forEach((_, i) => {
        const span = document.createElement('span');
        if(i === 0) span.classList.add('active');
        dotsContainer.appendChild(span);
        span.addEventListener('click', () => {
            seccion2.scrollLeft = i * seccion2.offsetWidth * 0.8;
            actualizarDots();
        });
    });
}

function actualizarDots() {
    const items = seccion2.querySelectorAll('.disponibles');
    const dots = dotsContainer.querySelectorAll('span');
    const index = Math.round(seccion2.scrollLeft / (seccion2.offsetWidth * 0.8));
    dots.forEach(dot => dot.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    seccion2.scrollBy({ left: seccion2.offsetWidth * 0.8, behavior: 'smooth' });
    setTimeout(actualizarDots, 300);
});
prevBtn.addEventListener('click', () => {
    seccion2.scrollBy({ left: -seccion2.offsetWidth * 0.8, behavior: 'smooth' });
    setTimeout(actualizarDots, 300);
});

// AUTO PLAY CARRUSEL
setInterval(() => {
    if(window.innerWidth <= 768){
        if(seccion2.scrollLeft + seccion2.offsetWidth >= seccion2.scrollWidth){
            seccion2.scrollLeft = 0;
        } else {
            seccion2.scrollBy({ left: seccion2.offsetWidth * 0.8, behavior: 'smooth' });
        }
        actualizarDots();
    }
}, 5000); // cada 5 segundos

// Inicializar dots
crearDots();