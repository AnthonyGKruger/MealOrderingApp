import classes from "./Header.module.css";
import img from "../../assets/meals.jpg";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Meal Ordering App</h1>
				<button>Cart</button>
			</header>
			<div>
				<img
					alt="A table full of food"
					className={classes["main-image"]}
					src={img}
				/>
			</div>
		</>
	);
};

export default Header;
