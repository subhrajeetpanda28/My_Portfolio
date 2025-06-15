// Typed.js Initialization
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: [
            '<b><i>Web</i></b> <b><i>Developer.</i></b>',
            '<b><i>Frontend</i></b> <b><i>Developer.</i></b>'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
    });
});

// Mobile Navbar Link Scroll with Smooth Offset
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        // Prevent default anchor jump
        e.preventDefault();

        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            bsCollapse.hide();

            // Scroll after collapse finishes
            navbarCollapse.addEventListener('hidden.bs.collapse', function handler() {
                navbarCollapse.removeEventListener('hidden.bs.collapse', handler);
                if (target) {
                    const yOffset = -80; // header offset
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            });
        } else {
            // Desktop smooth scroll
            if (target) {
                const yOffset = -80;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    });
});

// Download Resume Function
function downloadResume() {
    const link = document.createElement('a');
    link.href = './Assets/SUBHRAJEET_PANDA.pdf';
    link.download = 'SUBHRAJEET_PANDA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Visit GitHub Profile
function VisitGit() {
    window.open('https://github.com/subhrajeetpanda28', '_blank');
}

// Back to Top Button Visibility Toggle
window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
