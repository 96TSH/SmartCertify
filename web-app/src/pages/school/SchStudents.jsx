import TableTemplate from "../../components/TableTemplate";

const ComFinalCandidate = () => {
  const title = "Admission";
  const headers = ["No.", "ID No.", "Name", "Degree", "Faculty", "Major", "View"];
  const adminDetails = [
    {
      id: 123,
      name: "Name 1",
      degree: "Degree 1",
      faculty: "Faculty 1",
      major: "Major 1",
    },
    {
      id: 456,
      name: "Name 2",
      degree: "Degree 2",
      faculty: "Faculty 2",
      major: "Major 2",
    },
    {
      id: 789,
      name: "Name 3",
      degree: "Degree 3",
      faculty: "Faculty 3",
      major: "Major 3",
    }
  ];
  const actions = ["create", "graduate"];

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
