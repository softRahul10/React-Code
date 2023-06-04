import './Card.css';
function Card(props) {
      const styleClass = props.className + " card";
      return (
            <div className={styleClass}>{props.children}</div>
      );
}

export default Card;