import TableTemplate from "../../components/TableTemplate";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../stores/authContext";

const PerViewCertificates = () => {
  const { web3, Person, personAddress } = useContext(AuthContext);
  const [certificates, setCertificates] = useState([]);

  const title = "Certificates";
  const headers = ["No.", "School", "Cert. Type", "Honours", "Major"];

  const fetchData = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      let data = await Person.methods.getAllCertificates().call({
        from: accounts[0],
        gas: 100000,
        gasPrice: web3.utils.toWei("50", "gwei"),
      });
      console.log(data);
      if (data && data.length > 0) {
        data = data.map(item => {
          const keys = Object.keys(item);
          const lastTwoKeys = keys.slice(-4);
          const newItem = {};
          if (item.id) {
            newItem.id = item.id;
          }
          lastTwoKeys.forEach(key => {
            newItem[key] = item[key];
          });
          return newItem;
        });
        setCertificates(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const adminDetails = [
    {
      cert: "Diploma",
      school: "NUS",
      honours: "Merit",
      major: "Computer Science",
    },
    {
      cert: "Degree",
      school: "NTU",
      honours: "Distinction",
      major: "Business",
    },
    {
      cert: "Masters",
      school: "SMU",
      honours: "Pass",
      major: "Finance",
    },
  ];

  return <TableTemplate headers={headers} data={certificates} title={title} />;
};

export default PerViewCertificates;
