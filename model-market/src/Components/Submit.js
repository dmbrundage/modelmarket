import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InformationForm from './SubmissionInfo';
import PaymentForm from './ModelUpload';
import Review from './Review';
import ContentContainer from './ContentCards.js'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
const cards = [
    {
        img:
            "https://storage.googleapis.com/site-assets-aim/wsi.jfif",
        desc: "Whole Slide Image",
        title: "HoVer-Net Nuclei Segmentation",
        tag: ['Computer Vision', 'PyTorch']
    },];

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://menagerie.com/">
                Menagerie
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),

    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#9342f5',
    },
    stepButton: {
        backgroundColor: '#9342f5',
    }, cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const steps = ['Model Details', 'Upload Model', 'Review your Submission'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <InformationForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    //function to expand cards
    const [expanded, setExpanded] = React.useState(false);
    const [fav, setFav] = React.useState(true);

    const handleExpandClick = i => {
        setExpanded(expanded === i ? -1 : i);
    };

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Submit to Menagerie
          </Typography>

                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your Submission.
                </Typography>

                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={cards[0].img}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {cards[0].title}
                                        </Typography>
                                        <Typography>{cards[0].desc}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton aria-label="GitHub">
                                            <GitHubIcon />
                                        </IconButton>
                                        <IconButton aria-label="Share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton aria-label="Download">
                                            <GetAppIcon />
                                        </IconButton>
                                        <IconButton
                                            className={clsx(classes.expand)}
                                            onClick={() => handleExpandClick(0)}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>Method:</Typography>
                                            <Typography paragraph>Performance Metrics:</Typography>
                                            <Typography paragraph>Notes:</Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Divider />
                                <Typography variant="subtitle1">
                                    Link to programatically download your model
                </Typography>
                                <Divider />
                                <Typography variant="subtitle1">
                                    https://link.to.model/menagerie/
                </Typography>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment >
    );
}