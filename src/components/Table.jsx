import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ref, nom, modele_taille, entree,sortie,date, stock_restant) {
    return { ref, nom, modele_taille, entree,sortie,date, stock_restant }
  }
  
  const rows = [
    createData('REF-001','Frozen yoghurt','M', 6.0, 24, '12/11/2022', 10),
    createData('REF-002','Ice cream ','M', 9.0, 37,'12/11/2022', 10),
    createData('REF-003','Eclair','M', 16.0, 24, '12/11/2022', 10),
    createData('REF-004','Cupcake','M', 3.7, 67, '12/11/2022', 10),
    createData('REF-005','Gingerbread','M', 16.0, 49, '12/11/2022', 10),
  ];
  
  export default function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Reference</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Nom</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Modele/Taille</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Entrée</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Sortie</TableCell>
              <TableCell align="center" sx={{fontWeight: 'bold'}}>Date</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>Stock restant</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ref}
                style={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell  align="right">{row.ref}</TableCell>
                <TableCell  align="right">{row.nom}</TableCell>
                <TableCell align="center">{row.modele_taille}</TableCell>
                <TableCell align="right">{row.entree}</TableCell>
                <TableCell align="right">{row.sortie}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="center">{row.stock_restant}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  