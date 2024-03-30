import { createContext, useState } from 'react';

import Web3 from 'web3';
import GovernmentArtifact from '../../blockchain/build/contracts/Government.json'
// import SimpleGovernmentArtifact from '../../blockchain/build/contracts/SimpleGovernment.json'

const AuthContext = createContext({
	// user: null,
	// userRole: null,
	// login: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [selectedButton, setSelectedButton] = useState('select');

	// const users = [
	// 	{
	// 		name: 'Leonard Hofstadter',
	// 		role: 'broker',
	// 		color: '#87d068',
	// 	},
	// 	{
	// 		name: 'Sheldon Cooper',
	// 		role: 'bank',
	// 		color: '#8193E7',
	// 	},
	// 	{
	// 		name: 'Rajesh Koothrapali',
	// 		role: 'borrower',
	// 		color: '#8193E7',
	// 	},
	// ];

	// const [user, setUser] = useState(users[0]);

	// const login = (role) => {
	// 	if (role === 'broker') {
	// 		setUser(users[0]);
	// 	} else if (role === 'bank') {
	// 		setUser(users[1]);
	// 	} else if (role === 'borrower') {
	// 		setUser(users[2]);
	// 	}
	// };
	const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:8545');

	// Smart Contract Addresses
	const governmentAddress = GovernmentArtifact.networks[1688].address;
	// const simpleGovernmentAddress = SimpleGovernmentArtifact.networks[1688].address;

	const Government = new web3.eth.Contract(GovernmentArtifact.abi, governmentAddress);
	// const SimpleGovernment = new web3.eth.Contract(SimpleGovernmentArtifact.abi, simpleGovernmentAddress);

	const context = { selectedButton, setSelectedButton, web3, Government, governmentAddress };

	return (
		<AuthContext.Provider value={context}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;