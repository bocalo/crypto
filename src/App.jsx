import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/pages/Main/Main';
import { getCoins } from './api/api';
import { CoinsContext } from './components/context/coinsContext';

function App() {
	const [balance, setBalance] = useState(60000);
	const [coins, setCoins] = useState([]);
	const [filteredCoins, setFilteredCoins] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getCoins();
			setCoins(data.coins);
			setFilteredCoins(data.coins);
		};
		fetchData();
	}, []);

	const addBalance = useCallback(() => {
		setBalance((prev) => prev + 1000);
	}, []);

	return (
		<>
			<CoinsContext.Provider value={{ coins, filteredCoins }}>
				<Header />
				<Main
					setCoins={setFilteredCoins}
					coins={coins}
					balance={balance}
					setBalance={addBalance}
					filteredCoins={filteredCoins}
				/>
			</CoinsContext.Provider>
		</>
	);
}

export default App;

//coinranking86a0f9fd1a29d14d6c5d1647eb334fa50dda485cb66f35ca;
