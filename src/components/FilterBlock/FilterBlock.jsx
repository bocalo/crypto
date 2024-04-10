import { useContext } from 'react';
import { CoinsContext } from '../context/coinsContext';
import { useFilterCoins } from '../helpers/hooks/useFilterCoins';
import './styles.css';

const FilterBlock = ({ setCoins }) => {
	const coinsContext = useContext(CoinsContext);
	const { coins } = coinsContext;

	const { setValue, value } = useFilterCoins(setCoins, coins);

	return (
		<div className="filter-block">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="input"
				type="text"
				placeholder="bitcoin"
			/>
		</div>
	);
};

export default FilterBlock;
