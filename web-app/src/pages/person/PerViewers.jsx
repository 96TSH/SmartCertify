//import TableTemplate from "../../components/TableTemplate";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function PerViewers() {
  const [publicView, setPublicView] = React.useState(false); // State to manage the state

  const handlePublic = (event) => {
    setPublicView(event.target.publicView); // Update the state when the switch state changes
    // additional actions based on the new state here
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch publicView={publicView} onChange={handlePublic} />} // Add onChange event and pass the handlePublic function
        label="Public"
      />
    </FormGroup>
  );
}


// const PerViewers = () => {
//   const title = "Viewers";
//   const headers = ["No.", "ID No.", "Name"];
//   const adminDetails = [
//     {
//       id: 123,
//       name: "James",
//     },
//     {
//       id: 124,
//       name: "John",
//     },
//     {
//       id: 125,
//       name: "Jane",
//     },
//   ];
//   const actions = ["create", "delete"]

//   return (
//     <TableTemplate
//       headers={headers}
//       data={adminDetails}
//       title={title}
//       actions={actions}
//     />
//   );
// };

//export default PerViewers;
