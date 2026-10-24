// ==========================================
// 1. MOBILE MENU LOGIC
// ==========================================
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if(btn) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// ==========================================
// 2. SERVICES MODAL (POPUP) LOGIC
// ==========================================
const servicesData = {
    'social-media': { icon: '<i class="fas fa-share-nodes"></i>', title: 'Social Media Management', desc: "We build your brand's presence on platforms like Instagram and Facebook. From creating a content calendar to publishing professional posts, we handle it all so you can focus on your business.", features: ['Engaging Reels & Video Content', 'Professional Graphic Posts', 'Profile Optimization & Bio Setup', 'Hashtag Strategy & Growth'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20want%20details%20for%20Social%20Media%20Management.' },
    'website-dev': { icon: '<i class="fas fa-laptop-code"></i>', title: 'Website Development', desc: 'Your website is your digital shop. We create stunning, mobile-responsive, and fast-loading websites that convert your visitors into paying customers.', features: ['Premium Custom Design', 'E-commerce & Product Catalogs', 'Direct WhatsApp Integration', 'Mobile & SEO Friendly Structure'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20want%20to%20build%20a%20Website%20for%20my%20business.' },
    'graphic-design': { icon: '<i class="fas fa-pen-nib"></i>', title: 'Graphic Design & Branding', desc: 'First impression matters. We give your business a professional identity with eye-catching graphics, logos, and marketing materials that make you stand out.', features: ['Custom Logo Design', 'Promotional Banners & Posters', 'Complete Brand Identity Kit', 'Business Cards & Brochures'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20need%20Graphic%20Design%20and%20Branding%20services.' },
    'video-editing': { icon: '<i class="fas fa-video"></i>', title: 'Video Editing', desc: 'Videos are the most powerful way to connect with customers today. We edit high-quality promotional videos, reels, and product demos that grab attention instantly.', features: ['Instagram Reels & YouTube Shorts', 'Product Showcase Videos', 'Engaging Text Animations & Transitions', 'High-Quality Color Grading'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20want%20to%20know%20about%20your%20Video%20Editing%20service.' },
    'digital-ads': { icon: '<i class="fas fa-bullhorn"></i>', title: 'Digital Advertising (Paid Ads)', desc: 'Stop waiting for customers to find you. We run highly targeted and optimized ad campaigns on major platforms to bring hot leads and direct sales to your business.', features: ['Facebook & Instagram Ads', 'Google Search & Display Ads', 'Lead Generation Campaigns', 'Retargeting & ROI Tracking'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20want%20to%20run%20Ads%20for%20my%20business.' },
    'seo-services': { icon: '<i class="fas fa-chart-line"></i>', title: 'SEO Services', desc: 'Make sure your business shows up when people search for your services on Google. We optimize your online presence to rank higher and get organic traffic.', features: ['Keyword Research & Strategy', 'Google My Business (Local SEO)', 'On-Page & Off-Page Optimization', 'Website Performance Improvement'], wa: 'https://api.whatsapp.com/send?phone=919876543210&text=Hi,%20I%20need%20SEO%20Services%20to%20rank%20on%20Google.' }
};

const serviceModal = document.getElementById('service-modal');
const serviceContent = document.getElementById('modal-content');

function openServiceModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;
    
    document.getElementById('modal-icon').innerHTML = data.icon;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.className = "flex items-start";
        li.innerHTML = `<i class="fas fa-check text-yellow-500 mt-1 mr-2"></i> <span class="text-white">${feat}</span>`;
        featuresList.appendChild(li);
    });
    
    document.getElementById('modal-whatsapp').href = data.wa;
    
    serviceModal.classList.remove('hidden');
    serviceModal.classList.add('flex');
    setTimeout(() => {
        serviceModal.classList.remove('opacity-0');
        serviceContent.classList.remove('scale-95');
        serviceContent.classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    serviceModal.classList.add('opacity-0');
    serviceContent.classList.remove('scale-100');
    serviceContent.classList.add('scale-95');
    setTimeout(() => {
        serviceModal.classList.add('hidden');
        serviceModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }, 300);
}

// ==========================================
// 3. STARTUP OFFER & FLOATING REWARD LOGIC
// ==========================================
const offerModal = document.getElementById('offer-modal');
const offerContent = document.getElementById('offer-content');
const floatingReward = document.getElementById('floating-reward');

// Yahan Last Date Set Hai
const targetDate = new Date('November 30, 2026 23:59:59').getTime();

function openOfferModal() {
    // AGAR DATE NIKAL GAYI HAI TOH KABHI OPEN NAHI HOGA
    if (new Date().getTime() > targetDate) return;

    if (serviceModal && !serviceModal.classList.contains('hidden')) return;
    
    if (offerModal && offerContent) {
        offerModal.classList.remove('hidden');
        offerModal.classList.add('flex');
        
        setTimeout(() => {
            offerModal.classList.remove('opacity-0');
            offerContent.classList.remove('scale-95');
            offerContent.classList.add('scale-100');
        }, 10);
        
        document.body.style.overflow = 'hidden'; 
        if (floatingReward) floatingReward.classList.add('hidden');
    }
}

function closeOfferModal() {
    if (offerModal && offerContent) {
        offerModal.classList.add('opacity-0');
        offerContent.classList.remove('scale-100');
        offerContent.classList.add('scale-95');
        
        setTimeout(() => {
            offerModal.classList.add('hidden');
            offerModal.classList.remove('flex');
            document.body.style.overflow = 'auto'; 
            
            // Popup close karne par chhota box tabhi dikhega jab offer date bachi ho
            if (floatingReward && new Date().getTime() <= targetDate) {
                floatingReward.classList.remove('hidden');
            }
        }, 300);
    }
}

if (floatingReward) {
    floatingReward.addEventListener('click', openOfferModal);
}

window.addEventListener('load', () => {
    // 10 Second baad Popup TABHI khulega jab Date 30 Nov 2026 ke andar ho
    if (new Date().getTime() <= targetDate) {
        setTimeout(openOfferModal, 10000);
    } else {
        // Agar date chali gayi toh chhote wale reward box ko poori tarah hide kar do
        if (floatingReward) floatingReward.style.display = 'none';
    }
});


// ==========================================
// 4. SCROLL TO TOP BUTTON LOGIC
// ==========================================
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.remove("hidden");
        scrollToTopBtn.classList.add("flex");
    } else {
        scrollToTopBtn.classList.add("hidden");
        scrollToTopBtn.classList.remove("flex");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==========================================
// 5. LIVE COUNTDOWN TIMER LOGIC
// ==========================================
const timerElement = document.getElementById('offer-timer');

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // AGAR DATE NIKAL GAYI (Time 0 ho gaya)
    if (distance <= 0) {
        if (floatingReward) {
            floatingReward.style.display = 'none'; // Reward box hamesha ke liye hat jayega
        }
        return;
    }

    // Days, Hours, Minutes, Seconds nikalne ka formula
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    // Timer ko HTML me dikhana
    if (timerElement) {
        if (days > 0) {
            timerElement.innerText = `${days}d ${h}h ${m}m ${s}s`;
        } else {
            timerElement.innerText = `${h}h ${m}m ${s}s`; // Agar aakhiri din hai toh sirf ghante dikhega
        }
    }
}

// Har ek second baad time gitate raho
setInterval(updateTimer, 1000);
updateTimer();