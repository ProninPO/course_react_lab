// 3_1_1 Add and remove a CSS class
/*
    Сделайте так, чтобы щелчок на картинке удалял CSS-класс background--active из внешнего <div>, но добавлял класс picture--active к <img>. Повторный щелчок по фону восстановит исходные CSS-классы.

    Визуально вы должны увидеть, что щелчок на изображении удаляет фиолетовый фон и выделяет границу изображения. Щелчок за пределами изображения выделяет фон, но убирает выделение границы изображения.
*/

import { useState } from "react";

export default function Picture() {
    const [pictureActive, setPictureActive] = useState(false);
    let bgClass: string = 'background';
    let picClass: string = 'picture';
    
    if (pictureActive)
        picClass += ' picture--active';
    else
        bgClass += ' background--active';

    function handlePictureClick(e: any) {
        e.stopPropagation();
        setPictureActive(true);
    }

    function handleBackgroundClick() {
        setPictureActive(false);
    }

    return (
        <div className={bgClass} onClick={handleBackgroundClick}>
            <img
                className={picClass}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="/5qwVYb1.jpg"
                onClick={handlePictureClick}
            />
        </div>
    );
}
