export default function avancaRetornaSessoes () {
    document.addEventListener('keydown', function(e) {
        if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
        }

        const sections = document.querySelectorAll('.bloco');
        let currentSectionIndex = -1;

        if (e.key === 'ArrowDown') {
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();

                if (rect.top >= 0 && rect.top < window.innerHeight) {
                    currentSectionIndex = i;
                    break;
                }
            }

            if (currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex + 1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

        } else if (e.key === 'ArrowUp') {
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();

                if (rect.top >= -10 && rect.top <= window.innerHeight) {
                    currentSectionIndex = i;
                    break;
                }
            }

            if (currentSectionIndex > 0) {
                sections[currentSectionIndex - 1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}