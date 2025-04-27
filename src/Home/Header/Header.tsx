import React, {FC, useEffect} from 'react';
import './Header.less';
interface HeaderProps {
    title: string;
}


const Header: FC<HeaderProps> = ({title}) => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const gradientText = document.querySelector('.title') as HTMLElement | null;
            if (!gradientText) {
                console.error('.title does not exists')
                return
            }
            const rect = gradientText.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const angle = Math.round( Math.atan2(mouseX - centerX, mouseY - centerY) * (180 / Math.PI) + 90);

            // Récupérer le style actuel du gradient
            const currentStyle = window.getComputedStyle(gradientText);
            const currentBackground = currentStyle.backgroundImage;

            // Extraire les couleurs du gradient
            const pattern = /rgb\([0-9]+, [0-9]+, [0-9]+\)/g
            const gradientMatch = [...currentBackground.matchAll(pattern)];
            // const gradientMatch = [...currentBackground.matchAll(new RegExp(pattern.source, pattern.flags))];
            const colors = gradientMatch.map(v => v[0]);
            const newGradient = `linear-gradient(${angle}deg, ${colors.join(', ')})`;
            // gradientText.style.background =  newGradient ;
            gradientText.style.backgroundImage = "-webkit-" + newGradient;
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className="Header">
            <h1 className="title text-center">
                {title}
            </h1>
        </div>
    );
};


export default Header;
