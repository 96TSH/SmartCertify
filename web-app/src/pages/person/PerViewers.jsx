import TableTemplate from "../../components/TableTemplate";

const PerViewers = () => {
  const title = "Viewers";
  const headers = ["No.", "ID No.", "Name"];
  const adminDetails = [
    {
      id: 123,
      name: "James",
    },
    {
      id: 124,
      name: "John",
    },
    {
      id: 125,
      name: "Jane",
    },
  ];
  const actions = ["create", "delete"]

  return (
    <TableTemplate
      headers={headers}
      data={adminDetails}
      title={title}
      actions={actions}
    />
  );
};

export default PerViewers;
