document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.05)'; // Scale effect
        });

        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)'; // Reset scale
        });
    });
});
