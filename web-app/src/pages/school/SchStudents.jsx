import TableTemplate from "../../components/TableTemplate";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../stores/authContext";

const SchStudents = () => {
  const { web3, School, schoolAddress } = useContext(AuthContext);
  const [students, setStudents] = useState([
    {
      id: 123,
      name: "Name 1",
    },
  ]);

  const title = "Admission";
  const headers = ["No.", "ID No.", "Name", "Status"];

  const fetchData = async () => {
    try {
      // const accounts = await window.ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // console.log(accounts);
      const data = await School.methods.getAllStudent().call({
        from: schoolAddress,
        gas: 100000,
        gasPrice: web3.utils.toWei("50", "gwei"),
      });
      console.log(data);
      if (data && data.length > 0) {
        setStudents(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actions = ["create", "graduate"];

  return (
    <TableTemplate
      headers={headers}
      data={students}
      title={title}
      actions={actions}
    />
  );
};

export default SchStudents;
