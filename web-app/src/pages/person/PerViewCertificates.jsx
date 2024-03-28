import TableTemplate from "../../components/TableTemplate";

const PerViewCertificates = () => {
  const title = "Certificates";
  const headers = ["No.", "Cert. Type", "School", "Honours", "Major"];
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

  return (
    <TableTemplate
      headers={headers}
      data={adminDetails}
      title={title}
    />
  );
};

export default PerViewCertificates;
