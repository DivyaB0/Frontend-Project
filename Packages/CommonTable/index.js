import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import styles from './styles.module.css';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';

const columns = [
    { field: 'loanNo', headerName: 'Loan No.', width: 120 },
    { field: 'loanType', headerName: 'Loan Type', width: 150 },
    { field: 'borrower', headerName: 'Borrower', width: 180 },
    { field: 'borrowerAddress', headerName: 'Borrower Address', width: 250 },
    { field: 'coBorrower', headerName: 'Co-Borrower 1 Name', width: 180 },
    { field: 'coBorrowerAddress', headerName: 'Co-Borrower 1 Address', width: 250 },
    { field: 'currentDPD', headerName: 'Current DPD', width: 120, type: 'number' },
    { field: 'sanctionAmount', headerName: 'Sanction Amount', width: 180 },
    { field: 'region', headerName: 'Region', width: 120 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

const paginationModel = { page: 0, pageSize: 10 };

const CommonTable = () => {
    const rows = [
        {
          id: 1, loanNo: 'L28U3247', loanType: 'Home Loan', borrower: 'Vedika Sachar', 
          borrowerAddress: '83 Yogi Ganj, Kadapa-058720', coBorrower: 'Divit Vora', 
          coBorrowerAddress: '24/543, Acharya Path Ongole-052360', currentDPD: 91, 
          sanctionAmount: '₹ 1,934,068', region: 'West', status: 'Approved'
        },
        {
          id: 2, loanNo: 'L28U3243', loanType: 'Car Loan', borrower: 'Hrishita Agrawal', 
          borrowerAddress: '86/622, Deo Path, Berhampore 841186', coBorrower: 'Mahika Tak', 
          coBorrowerAddress: '58 Tela Road, Sultan Pur Majra 919878', currentDPD: 100, 
          sanctionAmount: '₹ 1,842,143', region: 'North', status: 'Under Process'
        },
        {
          id: 3, loanNo: 'L28U3250', loanType: 'Car Loan', borrower: 'Priyansh Soman', 
          borrowerAddress: 'H.No. 152 Andra Street Amritsar-417152', coBorrower: 'Zaina Dara', 
          coBorrowerAddress: 'H.No. 42, Srivastava Marg, Junagadh-191124', currentDPD: 100, 
          sanctionAmount: '₹ 4,537,889', region: 'East', status: 'Terminated'
        },
        {
          id: 4, loanNo: 'L28U3248', loanType: 'Home Loan', borrower: 'Priyansh Chanda', 
          borrowerAddress: '24, Ray Chowk Quntakal 809332', coBorrower: 'Zain Ghosh', 
          coBorrowerAddress: 'H.No. 59, Dugar Street Kolhapur-543900', currentDPD: 100, 
          sanctionAmount: '₹ 2,681,712', region: 'West', status: 'Approved'
        },
        {
          id: 5, loanNo: 'L28U3260', loanType: 'Home Loan', borrower: 'Hrishita Sen', 
          borrowerAddress: '94/36 Barad, Hubli-Dharwad-408790', coBorrower: 'Shray Kala', 
          coBorrowerAddress: '63/66, Bhardwaj Street Bokaro 662204', currentDPD: 100, 
          sanctionAmount: '₹ 4,456,808', region: 'West', status: 'Rejected'
        },
        {
            id: 1, loanNo: 'L28U3247', loanType: 'Home Loan', borrower: 'Vedika Sachar', 
            borrowerAddress: '83 Yogi Ganj, Kadapa-058720', coBorrower: 'Divit Vora', 
            coBorrowerAddress: '24/543, Acharya Path Ongole-052360', currentDPD: 91, 
            sanctionAmount: '₹ 1,934,068', region: 'West', status: 'Approved'
          },
          {
            id: 2, loanNo: 'L28U3243', loanType: 'Car Loan', borrower: 'Hrishita Agrawal', 
            borrowerAddress: '86/622, Deo Path, Berhampore 841186', coBorrower: 'Mahika Tak', 
            coBorrowerAddress: '58 Tela Road, Sultan Pur Majra 919878', currentDPD: 100, 
            sanctionAmount: '₹ 1,842,143', region: 'North', status: 'Under Process'
          },
          {
            id: 3, loanNo: 'L28U3250', loanType: 'Car Loan', borrower: 'Priyansh Soman', 
            borrowerAddress: 'H.No. 152 Andra Street Amritsar-417152', coBorrower: 'Zaina Dara', 
            coBorrowerAddress: 'H.No. 42, Srivastava Marg, Junagadh-191124', currentDPD: 100, 
            sanctionAmount: '₹ 4,537,889', region: 'East', status: 'Terminated'
          },
          {
            id: 4, loanNo: 'L28U3248', loanType: 'Home Loan', borrower: 'Priyansh Chanda', 
            borrowerAddress: '24, Ray Chowk Quntakal 809332', coBorrower: 'Zain Ghosh', 
            coBorrowerAddress: 'H.No. 59, Dugar Street Kolhapur-543900', currentDPD: 100, 
            sanctionAmount: '₹ 2,681,712', region: 'West', status: 'Approved'
          },
          {
            id: 5, loanNo: 'L28U3260', loanType: 'Home Loan', borrower: 'Hrishita Sen', 
            borrowerAddress: '94/36 Barad, Hubli-Dharwad-408790', coBorrower: 'Shray Kala', 
            coBorrowerAddress: '63/66, Bhardwaj Street Bokaro 662204', currentDPD: 100, 
            sanctionAmount: '₹ 4,456,808', region: 'West', status: 'Rejected'
          },
      ];

  return (
    <div className={styles.container}>
        <div className={styles.search_container}>
    <div>
    <TextField 
  id="outlined-basic" 
  label="Search Loan Number" 
  variant="outlined" 
  style={{ width: '350px', height: '20px' }} 
/>
    </div>
    <div>
   

<Button variant="contained" startIcon={<FilterListIcon />}>
  More Filters
</Button>
    </div>
        </div>
    <Paper sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
            border: 0,
            '& .MuiDataGrid-virtualScroller': { overflow: 'hidden' }, // Hides scrollbars
            '& .MuiDataGrid-main': { height: '100%' },
          }}
      />
    </Paper>
    </div>
  );
};

export default CommonTable;
