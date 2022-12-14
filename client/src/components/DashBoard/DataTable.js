import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  repo1: number,
  spacebar: string,
  repo2: number,
  
) {
  return { name, repo1, spacebar,repo2 };
}

const rows = [
  createData('Stars', 63566," ", 186274),
  createData('Commits', 241821," ", 138402),
  createData('Issues', 28930," ", 36049),
  
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
            <Table  sx={{ minWidth: 330 }}  aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell align="center">Pytorch</TableCell>
                  <TableCell align="center">vs</TableCell>
                  <TableCell align="center">Tensorflow</TableCell>
                  {/* <TableCell><DeleteIcon /></TableCell> */}
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.repo1}</TableCell>
                    <TableCell align="center">{row.spacebar}</TableCell>
                    <TableCell align="center">{row.repo2}</TableCell>
                    
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>Language</TableCell>
                  <TableCell align="center">C++</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell align="center">C++</TableCell>
                  
                </TableRow>
              </TableBody>
            </Table>
    </TableContainer>
  );
}
