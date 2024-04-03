import { createContext, useState } from "react";

import Web3 from "web3";
import GovernmentArtifact from "../../blockchain/build/contracts/Government.json";
import CompanyArtifact from "../../blockchain/build/contracts/Company.json";
import PersonArtifact from "../../blockchain/build/contracts/Person.json";
import SchoolArtifact from "../../blockchain/build/contracts/School.json";

const AuthContext = createContext({
  // user: null,
  // userRole: null,
  // login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState("select");

  const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");

  // Smart Contract Addresses
  const governmentAddress = GovernmentArtifact.networks[1688].address;
  const companyAddress = CompanyArtifact.networks[1688].address;
  const personAddress = PersonArtifact.networks[1688].address;
  const schoolAddress = SchoolArtifact.networks[1688].address;

  const Government = new web3.eth.Contract(
    GovernmentArtifact.abi,
    governmentAddress
  );
  const Company = new web3.eth.Contract(CompanyArtifact.abi, companyAddress);
  const Person = new web3.eth.Contract(PersonArtifact.abi, personAddress);
  const School = new web3.eth.Contract(SchoolArtifact.abi, schoolAddress);

  const context = {
    selectedButton,
    setSelectedButton,
    web3,
    Government,
    Company,
    companyAddress,
    Person,
    personAddress,
	School,
	schoolAddress,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
