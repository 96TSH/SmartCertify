import TableTemplate from "../../components/TableTemplate";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../stores/authContext";

const ComFinalCandidate = () => {
  const { Company, web3, companyAddress } = useContext(AuthContext);
  const [candidates, setCandidates] = useState([
    {
      name: "no data",
      id: 12345,
    },
  ]);

  const title = "Final Candidate";
  const headers = ["No.", "ID", "Nationality", "NRIC", "Passport", "Name", "Address", "Status"];

  const fetchData = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      let data = await Company.methods.getAllCandidates().call({
        from: companyAddress,
        gas: 100000,
        gasPrice: web3.utils.toWei("50", "gwei"),
      });
      console.log(data);
      if (data && data.length > 0) {
        data = data.map(item => {
          const keys = Object.keys(item);
          const lastTwoKeys = keys.slice(-6);
          const newItem = {};
          if (item.id) {
            newItem.id = item.id;
          }
          lastTwoKeys.forEach(key => {
            newItem[key] = item[key];
          });
          return newItem;
        });
        setCandidates(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actions = ["create", "delete", "verify"];

  return (
    <TableTemplate
      headers={headers}
      data={candidates}
      title={title}
      actions={actions}
    />
  );
};

export default ComFinalCandidate;
