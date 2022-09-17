import classes from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Meal Ordering App</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img alt="A table full of food" src={img} />
			</div>
		</>
	);
};

export default Header;
