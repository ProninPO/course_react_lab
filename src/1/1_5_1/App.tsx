// 1_5_1 Extract a component
/* 
  Компонент Gallery содержит очень похожую разметку для двух профилей. Извлеките из него компонент Profile, чтобы уменьшить дублирование кода. Для этого нужно будет определить props для компонента Profile.
*/

import { getImageUrl } from "./util";

type ProfileProps = {
  personName: string,
  imageId: string,
  imageSize: number,
  profession: string,
  awards: string[],
  discovered: string
}

function Profile({personName, imageId, imageSize, profession, awards, discovered}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{personName}</h2>
      <img className="avatar" src={getImageUrl(imageId)} alt={personName} width={imageSize} height={imageSize} />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b> ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>{discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        personName="Maria Skłodowska-Curie"
        imageId="Maria"
        imageSize={70}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered='polonium (chemical element)'
      />
      <Profile
        personName="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        imageSize={70}
        profession="geochemist"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        discovered='a method for measuring carbon dioxide in seawater'
      />
    </div>
  );
}
