document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = question.querySelector('.arrow');

        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // Close all answers
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    i.querySelector('.faq-answer').style.maxHeight = null;
                    i.querySelector('.faq-answer').style.padding = '0 15px';
                }
            });

            // Toggle the current answer
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isExpanded);

            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Set max-height to content height
                answer.style.padding = '15px'; // Restore padding when expanded
                if (arrow) {
                    arrow.style.transform = 'rotate(135deg)';
                }
            } else {
                answer.style.maxHeight = null;
                answer.style.padding = '0 15px';
                if (arrow) {
                    arrow.style.transform = 'rotate(-45deg)';
                }
            }
        });
    });
});
