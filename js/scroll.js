const boxes = document.querySelectorAll('.lit--scroll');

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    boxes.forEach(b => io.observe(b));
} else {
    // Fallback for very old browsers
    const onScroll = () => {
        const trigger = (window.innerHeight / 5) * 4;
        boxes.forEach(box => {
            const top = box.getBoundingClientRect().top;
            if (top < trigger) box.classList.add('show');
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
}