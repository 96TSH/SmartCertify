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
  const headers = ["No.", "Name", "ID", "Status"];

  const fetchData = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      const data = await Company.methods.getAllCandicators().call({
        from: companyAddress,
        gas: 100000,
        gasPrice: web3.utils.toWei("50", "gwei"),
      });
      console.log(data);
      if (data && data.length > 0) {
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
