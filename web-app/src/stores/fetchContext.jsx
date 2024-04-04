import { createContext, useState } from "react";

const FetchContext = createContext({});

export const FetchContextProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState("select");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [personAddress, setPersonAddress] = useState("");

  const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");

  // Smart Contract Addresses
  const governmentAddress = GovernmentArtifact.networks[1688].address;
  const governmentAbi = GovernmentArtifact.abi;
  const Government = new web3.eth.Contract(governmentAbi, governmentAddress);

  // const schoolAddress = SchoolArtifact.networks[1688].address;
  const schoolAbi = SchoolArtifact.abi;
  const School = new web3.eth.Contract(schoolAbi, schoolAddress);

  // const companyAddress = CompanyArtifact.networks[1688].address;
  const companyAbi = CompanyArtifact.abi;
  const Company = new web3.eth.Contract(companyAbi, companyAddress);

  // const personAddress = PersonArtifact.networks[1688].address;
  const personAbi = PersonArtifact.abi;
  console.log(personAddress);
  console.log(personAbi);
  const Person = new web3.eth.Contract(personAbi, personAddress);

  const context = {
    selectedButton,
    setSelectedButton,
    web3,
    Government,
    governmentAddress,
    School,
    schoolAddress,
    setSchoolAddress,
    Company,
    companyAddress,
    setCompanyAddress,
    Person,
    personAddress,
    setPersonAddress,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
