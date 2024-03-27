import TableTemplate from "../components/TableTemplate";

const Certificates = () => {
  const title = "Certificates";
  const headers = ["No.", "Cert. Type", "School", "Honor", "Major"];
  const certDetails = [
    {
      cert: "Certificate 1",
      school: "school1",
      honor: "honor1",
      major: "major1",
    },
    {
      cert: "Certificate 2",
      school: "school2",
      honor: "honor2",
      major: "major2",
    },
    {
      cert: "Certificate 3",
      school: "school3",
      honor: "honor3",
      major: "major3",
    },
    {
      cert: "Certificate 4",
      school: "school4",
      honor: "honor4",
      major: "major4",
    },
    {
      cert: "Certificate 5",
      school: "school5",
      honor: "honor5",
      major: "major5",
    },
  ];
  const actions = ["create"];

  return <TableTemplate headers={headers} data={certDetails} title={title} actions={actions}/>;
};

export default Certificates;
