import { useEffect } from "react";

export default function useAvancaRetornaSessoes (selector = ".bloco") {
    useEffect(() => {
        function handleScrollKeyDown (e: any) {
            if (["ArrowUp", "ArrowDown"].includes(e.key) === false && e.type !== "wheel") return;

            e.preventDefault();

            const sections = document.querySelectorAll(selector);
            let currentSectionIndex = -1;

            if (e.key === "ArrowDown" || e.type === "wheel" && e.deltaY > 0) {
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

            if (e.key === "ArrowUp" || e.type === "wheel" && e.deltaY < 0) {
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
        }

        document.addEventListener("keydown", handleScrollKeyDown);
        document.addEventListener("wheel", handleScrollKeyDown, { passive: false });

        return () => {
            document.removeEventListener("keydown", handleScrollKeyDown);
            document.removeEventListener("wheel", handleScrollKeyDown);
        };

    }, [selector]);
}