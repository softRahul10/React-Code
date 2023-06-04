import styles from './Card.module.css';
export default function Card(props) {
      return <section className={styles.container}> {props.children} </section>;
}