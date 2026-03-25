import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Statusicon from '../ui/statusicon';
import type { ReactNode } from 'react';
import Tablebutton from '../ui/tablebutton';


function createData(
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  status: ReactNode,
  action: ReactNode
) {
  return { id, firstname, lastname, email, phone , status , action };
}

const rows = [
  createData('1' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='Unverified' varient='red'/>, <Tablebutton link='/'/> ),
  createData('2' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='verified' varient='green'/>, <Tablebutton link='/'/>),
  createData('3' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='Unverified' varient='red'/>, <Tablebutton link='/'/>),
  createData('4' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='verified' varient='green'/>, <Tablebutton link='/'/>),
  createData('5' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='Unverified' varient='red'/>, <Tablebutton link='/'/>),
  createData('6' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='Unverified' varient='red'/>, <Tablebutton link='/'/>),
  createData('7' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='verified' varient='green'/>, <Tablebutton link='/'/>),
  createData('8' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='verified' varient='green'/>, <Tablebutton link='/'/>),
  createData('9' , 'Jonathan', 'Williams', 'jonathanwilliams@example.com', '+1 000 000 0000', <Statusicon title='Unverified' varient='red'/>, <Tablebutton link='/'/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id.</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
