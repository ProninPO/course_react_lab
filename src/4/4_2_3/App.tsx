// 4_2_3 Scrolling an image carouse
/*
  Эта карусель изображений имеет кнопку "Next", которая переключает активное изображение. Заставьте галерею прокручиваться горизонтально до активного изображения по щелчку. Для этого нужно вызвать scrollIntoView() на DOM-узле активного изображения:
  
  node.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
*/
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catRef = useRef(null);

  function handleClickNext() {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    catRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  return (
    <>
      <nav>
        <button onClick={handleClickNext}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? catRef : null}>
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

type PlaceType = {
  id: number;
  imageUrl: string;
}

const catList: PlaceType[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: `cat${i}.jpg`
  });
}

