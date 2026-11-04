import { useEffect, useState } from 'react';

const BLUE_SECTION_IDS = ['story', 'agnostic', 'contact'];

export function useOnBlueSection(sampleY = 48): boolean {
    const [onBlue, setOnBlue] = useState(false);

    useEffect(() => {
        let rafId = 0;

        const check = () => {
            rafId = 0;
            const isBlue = BLUE_SECTION_IDS.some((id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= sampleY && rect.bottom > sampleY;
            });
            setOnBlue((prev) => (prev !== isBlue ? isBlue : prev));
        };

        const onScrollOrResize = () => {
            if (!rafId) {
                rafId = window.requestAnimationFrame(check);
            }
        };

        check();
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize, { passive: true });

        return () => {
            if (rafId) window.cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
    }, [sampleY]);

    return onBlue;
}
