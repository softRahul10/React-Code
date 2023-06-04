import titleStyles from './Title.module.css';

function Title(props) {
      return (
            <header className={titleStyles.header}>
                  <h1>{props.value}</h1>
            </header>
      );
}

export default Title;