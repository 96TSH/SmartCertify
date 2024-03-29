import TableTemplate from "../../components/TableTemplate";

const ComFinalCandidate = () => {
  const title = "Final Candidate";
  const headers = ["No.", "Name", "Email", "Status"];
  const adminDetails = [
    {
      name: "Name 1",
      email: "name1@gmail.com",
    },
    {
      name: "Name 2",
      email: "name2@gmail.com",
    },
    {
      name: "Name 3",
      email: "name3@gmail.com",
    },
    {
      name: "Name 4",
      email: "name4@gmail.com",
    },
    {
      name: "Name 5",
      email: "name5@gmail.com",
    },
  ];
  const actions = ["create", "delete", "verify"];

  return (
    <TableTemplate
      headers={headers}
      data={adminDetails}
      title={title}
      actions={actions}
    />
  );
};

export default ComFinalCandidate;
