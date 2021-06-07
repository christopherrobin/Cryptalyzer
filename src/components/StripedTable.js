import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

const StripedTable = ({dataToMap}) => {
    
  return (
    <TableContainer component={Card}>
      <Table aria-label="striped table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToMap.map((row, index) => (
            <TableRow key={row.key} style ={ index % 2? { background : '#fdffe0' } : { background : '#fff' }}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell><div className='truncate'>{row.value}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StripedTable;