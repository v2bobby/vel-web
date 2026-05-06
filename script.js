// Veritas Layer - Premium Landing Page JavaScript
// All interactive functionality

// Tailwind already loaded via CDN in index.html
function initializeTailwind() {
    // Any dynamic Tailwind config if needed in future
    console.log('%c[Veritas Layer] Tailwind initialized', 'color:#64748b; font-size:9px');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    
    menu.classList.toggle('hidden');
    
    // Optional: prevent body scroll when menu open
    if (!menu.classList.contains('hidden')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Waitlist modal functions
function showWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    if (!modal) return;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Focus first input after animation
    setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
    }, 350);
}

function hideWaitlistModal() {
    const modal = document.getElementById('waitlistModal');
    if (!modal) return;
    
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Form submission handler
function submitWaitlist(e) {
    e.preventDefault();
    
    const form = document.getElementById('waitlistForm');
    if (!form) return;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn ? submitBtn.innerHTML : '';
    
    if (submitBtn) {
        submitBtn.innerHTML = `
            <span class="flex items-center justify-center gap-x-2">
                <i class="fa-solid fa-spinner fa-spin"></i>
                <span>Submitting...</span>
            </span>
        `;
        submitBtn.disabled = true;
    }
    
    // Simulate backend processing
    setTimeout(() => {
        if (form) {
            form.innerHTML = `
                <div class="text-center py-8">
                    <div class="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                        <i class="fa-solid fa-check text-emerald-400 text-4xl"></i>
                    </div>
                    <h4 class="font-semibold text-2xl tracking-tight">You're on the list.</h4>
                    <p class="text-white/60 mt-3 text-sm max-w-[280px] mx-auto">Thank you. We'll personally review your application and reach out within 48 hours with next steps.</p>
                    
                    <div class="mt-8">
                        <button onclick="hideWaitlistModal()" 
                                class="text-sm px-8 py-3.5 border border-white/20 hover:bg-white/5 active:bg-white/10 rounded-2xl transition-all">
                            Close window
                        </button>
                    </div>
                    
                    <div class="text-[10px] text-white/40 mt-8 tracking-wider">— Naallah Mustopha, Founder</div>
                </div>
            `;
        }
    }, 1250);
}

// Close modal on Escape key
function setupKeyboardControls() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('waitlistModal');
            if (modal && !modal.classList.contains('hidden')) {
                hideWaitlistModal();
            }
            
            // Also close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }
    });
}

// Smooth scroll for all anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = '';
                }
                
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
}

// Optional: Add subtle scroll-based nav highlight (future enhancement)
function setupNavHighlight() {
    // Can be expanded later if needed
}

// Initialize everything when DOM is ready
function init() {
    initializeTailwind();
    setupKeyboardControls();
    setupSmoothScroll();
    setupNavHighlight();
    
    // Easter egg / branding in console
    console.log('%c[Veritas Layer] Premium landing page ready — mobile buttons optimized ✓', 'color:#00D4FF; font-size:10px; font-weight:500');
}

// Boot the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}