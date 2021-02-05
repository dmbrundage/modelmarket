import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Comments() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Submission Comments</Title>
            <Typography component="p" variant="h4">
                75
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 5 February, 2021
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                Your submissions have been Commented on this many times!
      </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View
        </Link>
            </div>
        </React.Fragment>
    );
}