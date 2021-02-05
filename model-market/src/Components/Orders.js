import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '5 Feb, 2021', 'HoVer-Net Nuclei Segmentation', 'Computer Vision', 'PyTorch', 53),
    createData(1, '10 Oct, 2020', 'Pathology Note NER', 'Natural Language Processing', 'TensorFlow', 17),
    createData(2, '16 Mar, 2019', 'Spatial Organization of Tumor-Infiltrating Lymphocytes', 'Computer Vision', 'PyTorch', 12),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Submissions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Model Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Architecture</TableCell>
                        <TableCell align="right">Total Downloads</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more submissions
        </Link>
            </div>
        </React.Fragment>
    );
}