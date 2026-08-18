// 1_7_1 Splitting a list in two 
/*
  В этом примере показан список всех людей.

  Измените его, чтобы последовательно вывести два отдельных списка: Химики и Все остальные. Как и ранее, вы можете определить, является ли человек химиком, проверив, что person.profession === 'chemist'.
*/

import { people } from './data.js';
import { getImageUrl } from './utils.js';

export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}

export default function List() {
    const chemists = people.filter((p) => p.profession === 'chemist').map((p) => {
        return (
            <li key={p.id}>
                <img src={getImageUrl(p)} alt={p.name} />
                <p><b>{p.name}:</b> {p.profession} known for {p.accomplishment}</p>
            </li>
        );
    });

    const nonChemists = people.filter((p) => p.profession !== 'chemist').map((p) => {
        return (
            <li key={p.id}>
                <img src={getImageUrl(p)} alt={p.name} />
                <p><b>{p.name}:</b> {p.profession} known for {p.accomplishment}</p>
            </li>
        );
    });

    return (
        <article>
            <h1>Chemists</h1>
            <ul>{chemists}</ul>
            <h1>Others</h1>
            <ul>{nonChemists}</ul>
        </article>
    );
}
