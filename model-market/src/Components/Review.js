import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const models = [
    { name: 'Submission Title', desc: 'Submission Details', price: "['PyTorch', 'Computer Vision']" },
    ,
];

const fileDetails = [
    { name: 'File Name', detail: 'Segmentation_Model' },
    { name: 'File Extension', detail: '.PT' },
    { name: 'File Size', detail: '1.3GB' },
    { name: 'Model Date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Submission Summary
      </Typography>
            <List disablePadding>
                {models.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
            </List>


            <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom className={classes.title}>
                    File Details
          </Typography>
                <Grid container>
                    {fileDetails.map((payment) => (
                        <React.Fragment key={payment.name}>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{payment.name}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{payment.detail}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>

        </React.Fragment>
    );
}