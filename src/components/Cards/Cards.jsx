import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.cartas}>
      {characters.map(({id, name, species, gender, image}) => 
      <Card
      key={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
      onClose={() => props.onClose(id)}
        />
      )}
   </div>;
}
