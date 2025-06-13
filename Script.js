document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['<b><i>Web</i></b> <b><i>Developer.<i/></b>', '<b><i>Frontend</i></b> <b><i>Developer.<i/></b>'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
    });
});


  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

// Optional: Functions for buttons
function downloadResume() {
    const link = document.createElement('a');
    link.href = './Assets/SUBHRAJEET_PANDA.pdf';
    link.download = 'SUBHRAJEET_PANDA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function VisitGit() {
    // Update with your actual GitHub profile URL
    window.open('https://github.com/subhrajeetpanda28', '_blank');
}
