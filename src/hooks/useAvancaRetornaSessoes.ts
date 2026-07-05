import { useEffect } from "react";

export default function useAvancaRetornaSessoes (selector = ".bloco") {
    useEffect(() => {
        const sections = document.querySelectorAll(selector);
        let currentSectionIndex = -1;
        let touchStart = 0;
        let touchDisparado = false;
        let touchAtual = 0;
        let diferenca = 0;


        function handleScrollKeyDown (e: any) {
            if (e.target.closest('.notApplyAvancaRetornaSessoesEvent')) return;
            if (["ArrowUp", "ArrowDown"].includes(e.key) === false && e.type !== "wheel") return;

            e.preventDefault();

            if (e.key === "ArrowDown" || e.type === "wheel" && e.deltaY > 0) {
                descer();
            }

            if (e.key === "ArrowUp" || e.type === "wheel" && e.deltaY < 0) {
                subir();
            }
        }


        function handleTouchStart(e: TouchEvent | any) {
            if (e.target.closest('.notApplyAvancaRetornaSessoesEvent')) return;

            touchStart = e.touches[0].clientY;
            touchDisparado = false;
        }

        function handleTouchMove(e: TouchEvent | any) {
            if (e.target.closest('.notApplyAvancaRetornaSessoesEvent')) return;
            
            if (!touchStart || touchDisparado) return;

            touchAtual = e.touches[0].clientY;
            diferenca = touchStart - touchAtual;
        }

        function handleTouchEnd(e: TouchEvent | any) {
            if (e.target.closest('.notApplyAvancaRetornaSessoesEvent')) return;
            
            /* Sensibilidade do avanço no touch */
            if (Math.abs(diferenca) > 40) {
                touchDisparado = true;

                if (diferenca < 0) {
                    subir();

                } else if (diferenca > 0) {
                    descer();
                }
            }

            touchStart = 0;
            diferenca = 0;
            touchDisparado = false;
        }


        function descer() {
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();

                if (rect.top >= 0 && rect.top < window.innerHeight) {
                    currentSectionIndex = i;
                    break;
                }
            }

            if (currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex + 1].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        function subir() {
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();

                if (rect.top >= -10 && rect.top <= window.innerHeight) {
                    currentSectionIndex = i;
                    break;
                }
            }

            if (currentSectionIndex > 0) {
                sections[currentSectionIndex - 1].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        document.addEventListener("keydown", handleScrollKeyDown);
        document.addEventListener("wheel", handleScrollKeyDown);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("keydown", handleScrollKeyDown);
            document.removeEventListener("wheel", handleScrollKeyDown);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };

    }, [selector]);
}