import Card from '../../Card/Card';
import CoinsList from '../../CoinsList/CoinsList';
import FilterBlock from '../../FilterBlock/FilterBlock';
import styles from './styles.module.css';
/* eslint-disable react/prop-types */

const Main = ({ balance, setBalance, coins, setCoins }) => {
	console.log(balance);
	return (
		<main className={styles.main}>
			<Card balance={balance} setBalance={setBalance} />
			<FilterBlock setCoins={setCoins} />

			{coins.length > 0 ? <CoinsList /> : <div>Loading</div>}
		</main>
	);
};

export default Main;
