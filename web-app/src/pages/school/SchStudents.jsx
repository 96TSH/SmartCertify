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
  const headers = ["No.", "ID No.", "Name"];

  const fetchData = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let data = await School.methods.getAllStudent().call({
        from: accounts[0],
        gas: 1000000,
        gasPrice: web3.utils.toWei("50", "gwei"),
      });
      console.log(data);
      if (data && data.length > 0) {
        data = data.map(item => {
          const keys = Object.keys(item);
          const lastTwoKeys = keys.slice(-1);
          const newItem = {};
          if (item.id) {
            newItem.id = item.id.toString().slice(0, -1);
          }
          lastTwoKeys.forEach(key => {
            newItem[key] = item[key];
          });
          return newItem;
        });
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
