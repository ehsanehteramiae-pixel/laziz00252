// ==================== Data ====================
const menuData = {
    kilo: [
        { id: 101, name: 'کباب چنجه گوسفندی', price: '۲۵۵,۰۰۰', category: 'kababi', image: 'images/kilo/kabab-chanje-gosfandi.png' },
        { id: 102, name: 'جوجه اسپایسی', price: '۹۹,۰۰۰', category: 'kababi', image: 'images/kilo/joje-espaysi.png' },
        { id: 103, name: 'جوجه کباب زعفرانی', price: '۹۹,۰۰۰', category: 'kababi', image: 'images/kilo/joje-kabab-zaferani.png' },
        { id: 104, name: 'پیراشکی مرغ', price: '۵۰,۸۰۰', category: 'fingerfood', image: 'images/kilo/Pirashki.png' },
        { id: 105, name: 'استامبولی', price: '۴۶,۰۰۰', category: 'poloi', image: 'images/kilo/estamboli.png' },
        { id: 106, name: 'باقالی پلو', price: '۲۷,۳۰۰', category: 'poloi', image: 'images/kilo/baghali-polo.png' },
        { id: 107, name: 'بریانی مرغ', price: '۵۰,۸۰۰', category: 'khorak', image: 'images/kilo/biryani-morgh.png' },
        { id: 108, name: 'پلو مکزیکی', price: '۵۰,۸۰۰', category: 'poloi', image: 'images/kilo/polo-meksiki.png' },
        { id: 109, name: 'خورشت قورمه سبزی', price: '۵۵,۱۰۰', category: 'khoresht', image: 'images/kilo/khoresht-ghormeh-sabzi.png' },
        { id: 110, name: 'خورشت قیمه', price: '۵۵,۱۰۰', category: 'khoresht', image: 'images/kilo/khoresht-gheymeh.png' },
        { id: 111, name: 'مسما بادمجان', price: '۵۶,۲۰۰', category: 'khorak', image: 'images/kilo/mosamma-bademjan.png' },
        { id: 112, name: 'عدس پلو', price: '۴۶,۵۵۰', category: 'poloi', image: 'images/kilo/adas-polo.png' },
        { id: 113, name: 'چلو ایرانی', price: '۲۶,۵۰۰', category: 'cheloi', image: 'images/kilo/chelo-irani.png' },
        { id: 114, name: 'چلو هندی', price: '۱۸,۷۵۰', category: 'cheloi', image: 'images/kilo/chelo-hendi.png' },
        { id: 115, name: 'هواری گوشت', price: '۵۸,۸۵۰', category: 'khorak', image: 'images/kilo/havari-gosht.png' },
        { id: 116, name: 'هواری میگو', price: '۸۰,۲۵۰', category: 'daryaei', image: 'images/kilo/Havari-Meygou.png' },
        { id: 117, name: 'هواری ماهی', price: '۶۲,۶۰۰', category: 'daryaei', image: 'images/kilo/havari-mahi.png' },
        { id: 118, name: 'قلیه ماهی', price: '۸۷,۲۰۰', category: 'daryaei', image: 'images/kilo/ghalyeh-mahi.png' },
        { id: 119, name: 'کتلت گوشت', price: '۶۵,۸۰۰', category: 'khorak', image: 'images/kilo/kotlet-gosht.png' },
        { id: 120, name: 'دلمه برگ مو', price: '۵۱,۹۰۰', category: 'khorak', image: 'images/kilo/dolmeh-barg-mo.png' },
        { id: 121, name: 'لازانیا', price: '۵۷,۲۵۰', category: 'melal', image: 'images/kilo/Lazania.png' },
        { id: 122, name: 'ماکارونی', price: '۵۰,۸۵۰', category: 'melal', image: 'images/kilo/makaroni.png' },
        { id: 123, name: 'کشک و بادمجان', price: '۳۵,۸۵۰', category: 'pishghaza', image: 'images/kilo/kashk-bademjan.png' },
        { id: 124, name: 'سوپ جو', price: '۳۱,۵۵۰', category: 'pishghaza', image: 'images/kilo/soup-jo.png' },
        { id: 125, name: 'سوپ دال عدس', price: '۳۱,۵۵۰', category: 'pishghaza', image: 'images/kilo/soup-dal-adas.png' },
        { id: 126, name: 'حمص', price: '۳۲,۶۵۰', category: 'pishghaza', image: 'images/kilo/hommos.png' },
        { id: 127, name: 'سالاد پاستا', price: '۴۰,۱۵۰', category: 'salad', image: 'images/kilo/Salad-pasta.png' },
        { id: 128, name: 'سالاد فتوش', price: '۴۰,۱۵۰', category: 'salad', image: 'images/kilo/Fatoosh.png' }
    ],
    portion: [
        { id: 201, name: 'چلو کباب برگ گوسفندی', price: '۷۵۰,۰۰۰', category: 'kababi', image: 'images/portion/chelo-kabab-barg-gosfandi.png' },
        { id: 202, name: 'چلو کباب کوبیده مخصوص', price: '۲۷۳,۰۰۰', category: 'kababi', image: 'images/portion/chelo-kabab-koobideh-makhsoos.png' },
        { id: 203, name: 'چلو جوجه کباب', price: '۲۵۱,۵۰۰', category: 'kababi', image: 'images/portion/chelo-joje-kabab.png' },
        { id: 204, name: 'چلو جوجه اسپایسی', price: '۲۵۱,۵۰۰', category: 'kababi', image: 'images/portion/chelo-joje-espaysi.png' },
        { id: 205, name: 'چلو کباب وزیری', price: '۳۹۱,۰۰۰', category: 'kababi', image: 'images/portion/chelo-kabab-vaziri.png' },
        { id: 206, name: 'پلو بندری', price: '۲۶۲,۰۰۰', category: 'poloi', image: 'images/portion/polo-bandari.png' },
        { id: 207, name: 'باقالی پلو با گوشت گوساله', price: '۵۶۷,۰۰۰', category: 'poloi', image: 'images/portion/Baghali-Polo-Ba-goosht.png' },
        { id: 208, name: 'باقالی پلو با مرغ', price: '۲۹۴,۵۰۰', category: 'poloi', image: 'images/portion/baghali-polo-morgh.png' },
        { id: 209, name: 'زرشک پلو با مرغ', price: '۲۴۶,۰۰۰', category: 'poloi', image: 'images/portion/zereshk-polo-morgh.png' },
        { id: 210, name: 'چلو مرغ آلو', price: '۲۴۶,۰۰۰', category: 'cheloi', image: 'images/portion/chelo-morgh-aloo.png' },
        { id: 211, name: 'چلو میگو کبابی', price: '۴۸۷,۰۰۰', category: 'daryaei', image: 'images/portion/chelo-meygo-kababi.png' },
        { id: 212, name: 'چلو میگو سوخاری', price: '۴۸۷,۰۰۰', category: 'daryaei', image: 'images/portion/chelo-meygo-sokhari.png' },
        { id: 213, name: 'چلو ماهی کباب', price: '۵۵۶,۵۰۰', category: 'daryaei', image: 'images/portion/chelo-mahi-kabab.png' },
        { id: 214, name: 'چلو ماهی سرخ شده', price: '۵۵۶,۵۰۰', category: 'daryaei', image: 'images/portion/chelo-mahi-sorkh-shodeh.png' },
        { id: 215, name: 'مندی مرغ عربی', price: '۲۸۳,۵۰۰', category: 'melal', image: 'images/portion/mandi-morgh-arabi.png' },
        { id: 216, name: 'ته چین مرغ', price: '۲۸۳,۵۰۰', category: 'poloi', image: 'images/portion/tahchin-morgh.png' },
        { id: 217, name: 'سیخ کوبیده', price: '۱۳۹,۰۰۰', category: 'kababi', image: 'images/portion/sikh-koobideh.jpg' },
        { id: 218, name: 'ساندویچ کباب کوبیده گوشت', price: '۲۲۵,۰۰۰', category: 'fingerfood', image: 'images/portion/sandwich-kabab-koobideh.png' },
        { id: 219, name: 'سالاد شیرازی', price: '۷۵,۰۰۰', category: 'salad', image: 'images/portion/salad-shirazi.png' },
        { id: 220, name: 'سالاد فصل', price: '۱۰۲,۰۰۰', category: 'salad', image: 'images/portion/salad-fasl.png' },
        { id: 221, name: 'سالاد سزار', price: '۱۷۱,۵۰۰', category: 'salad', image: 'images/portion/salad-caesar.png' },
        { id: 222, name: 'ماست و خیار', price: '۶۴,۵۰۰', category: 'pishghaza', image: 'images/portion/mast-khiar.png' }
    ]
};

// ==================== State ====================
const state = {
    type: 'portion', // or 'kilo'
    category: 'all',
    searchQuery: ''
};

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeroSlider();
    initTypeSelector();
    initCategoryFilter();
    initSearch();
    renderMenu();
});

// ==================== Hero Slider ====================
let currentSlide = 0;
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    document.querySelector('.slider-btn.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    document.querySelector('.slider-btn.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// ==================== Menu Rendering ====================
function initTypeSelector() {
    // Type Selector (Kilo / Portion)
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.type = btn.dataset.type;
            renderMenu();
        });
    });
}

function initCategoryFilter() {
    // Category Selector
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.category = btn.dataset.category;
            renderMenu();
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        renderMenu();
    });
}

function renderMenu() {
    const grid = document.getElementById('menuGrid');
    let items = menuData[state.type];

    // Filter by Category
    if (state.category !== 'all') {
        items = items.filter(item => item.category === state.category);
    }

    // Filter by Search
    if (state.searchQuery) {
        items = items.filter(item => item.name.includes(state.searchQuery));
    }

    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:50px">موردی یافت نشد</div>';
        return;
    }

    grid.innerHTML = items.map(item => `
        <div class="menu-card glass" onclick="openProductModal(${item.id}, '${state.type}')">
            <div class="card-img-container">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <span class="card-title">${item.name}</span>
                </div>
                <div class="card-price">${item.price} تومان</div>
                <div class="call-action">
                    <i class="fas fa-eye"></i> مشاهده جزئیات
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== Modal & Gallery Logic ====================
const modal = document.getElementById('productModal');
let modalSlideIdx = 0;

window.openProductModal = function(id, type) {
    const item = menuData[type].find(i => i.id === id);
    if (!item) return;

    // Populate Modal Info
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalPrice').textContent = item.price + ' تومان';
    document.getElementById('modalCategory').textContent = getCategoryName(item.category);

    // Simulate 3 images (Using same image for demo, normally would come from DB)
    const img1 = document.getElementById('modalImg1');
    const img2 = document.getElementById('modalImg2');
    const img3 = document.getElementById('modalImg3');

    // Using placeholder logic just to show different images for demo if possible, or same
    img1.src = item.image;
    img2.src = item.image; // In real app: item.images[1]
    img3.src = item.image; // In real app: item.images[2]

    // Reset Slider
    document.querySelectorAll('.product-slide').forEach(s => s.classList.remove('active'));
    document.querySelector('.product-slide').classList.add('active');
    modalSlideIdx = 0;

    modal.style.display = 'flex';
}

// Modal Controls
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal Internal Slider
document.querySelector('.p-slider-btn.next').addEventListener('click', () => {
    changeModalSlide(1);
});
document.querySelector('.p-slider-btn.prev').addEventListener('click', () => {
    changeModalSlide(-1);
});

function changeModalSlide(n) {
    const slides = document.querySelectorAll('.product-slide');
    slides[modalSlideIdx].classList.remove('active');
    modalSlideIdx = (modalSlideIdx + n + slides.length) % slides.length;
    slides[modalSlideIdx].classList.add('active');
}

function getCategoryName(cat) {
    const names = {
        cheloi: 'چلویی', 
        poloi: 'پلویی', 
        kababi: 'کبابی',
        daryaei: 'دریایی', 
        khorak: 'خوراک', 
        khoresht: 'خورشتی',
        melal: 'ملل',
        fingerfood: 'فینگرفود',
        salad: 'سالادها', 
        pishghaza: 'پیش غذا'
    };
    return names[cat] || cat;
}

// ==================== Theme Logic ====================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    document.body.setAttribute('data-theme', saved);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}
