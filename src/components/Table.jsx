import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  const rows = [
    createData('REF-001','Frozen yoghurt', 6.0, 24, '12/11/2022'),
    createData('REF-002','Ice cream sandwich', 9.0, 37,'12/11/2022'),
    createData('REF-003','Eclair', 16.0, 24, '12/11/2022'),
    createData('REF-004','Cupcake', 3.7, 67, '12/11/2022'),
    createData('REF-005','Gingerbread', 16.0, 49, '12/11/2022'),
  ];
  
  export default function BasicTable(props) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          {props.columns.map((col,i) => (
            <TableRow>
              <TableCell align="right">{col[i]}</TableCell>
            </TableRow>
          ))}
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
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  