import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1> Your Meals </h1>
        <HeaderCartButton open={props.open} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='Lots of meal on a table' />
      </div>
    </>
  );
};

export default Header;
