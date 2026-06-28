import { useEffect } from "react";

export default function useAvancaRetornaSessoes (selector = ".bloco") {
    useEffect(() => {
        const sections = document.querySelectorAll(selector);
        let currentSectionIndex = -1;
        let touchStart = 0;
        let touchDisparado = false;


        function handleScrollKeyDown (e: any) {
            if (["ArrowUp", "ArrowDown"].includes(e.key) === false && e.type !== "wheel") return;

            e.preventDefault();

            if (e.key === "ArrowDown" || e.type === "wheel" && e.deltaY > 0) {
                descer();
            }

            if (e.key === "ArrowUp" || e.type === "wheel" && e.deltaY < 0) {
                subir();
            }
        }


        function handleTouchStart(e: TouchEvent) {
            touchStart = e.touches[0].clientY;
            touchDisparado = false;
        }

        function handleTouchMove(e: TouchEvent) {
            if (!touchStart || touchDisparado) return;

            const touchAtual = e.touches[0].clientY;
            const diferenca = touchStart - touchAtual;

            if (Math.abs(diferenca) > 30) {
                e.preventDefault();
                touchDisparado = true;

                if (diferenca < 0) {
                    subir();

                } else if (diferenca > 0) {
                    descer();
                }
            }
        }

        function handleTouchEnd(e: TouchEvent) {
            touchStart = 0;
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
        document.addEventListener("wheel", handleScrollKeyDown, { passive: false });
        document.addEventListener("touchstart", handleTouchStart, { passive: false });
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            document.removeEventListener("keydown", handleScrollKeyDown);
            document.removeEventListener("wheel", handleScrollKeyDown);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };

    }, [selector]);
}