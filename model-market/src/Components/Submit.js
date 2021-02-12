import React, { useState, setState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InformationForm from './SubmissionInfo';
import UploadModel from './ModelUpload';
import Review from './Review';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
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
            width: 1000,
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
        color: "#FFFEFE",
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


export default function Checkout() {

    async function uploadGCP(form) {
        const response = await fetch('http://localhost:5000/api/uploads', {
            method: 'POST',
            body: form
        })
        const responsejson = await response.json()
        return await responsejson
    }


    async function uploadHandler(event) {

        const uploadformData = new FormData();
        uploadformData.append('file', event.target.files[0]);
        const uploadResponse = await uploadGCP(uploadformData)
        setModelURL(prev => uploadResponse['data'])
        //setModelURL(prev => event.target.files[0])


    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const modelid = uuidv4()
    const model_archs = ["PyTorch", "Keras", "TensorFlow", "Other"]
    const classes = useStyles();
    //function to expand cards
    const [formdata, setFormData] = useState('')
    const [gcpurl, setModelURL] = useState('')
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [use, setUse] = useState('');
    const [factors, setFactors] = useState('');
    const [metrics, setMetrics] = useState('');
    const [data, setData] = useState('');
    const [github, setGithub] = useState('');
    const [modelarch, setModelarch] = useState({
        pytorch: false,
        tensorflow: false,
        keras: false,
        other: false,
    });
    const [task, setTask] = useState({
        cv: false,
        nlp: false,
    });
    const tags = []
    const handleModelChange = (event) => {
        console.log(event.target.name, event.target.checked)
        setModelarch({ ...modelarch, [event.target.name]: event.target.checked });
    };
    const handleTaskChange = (event) => {
        console.log(event.target.name, event.target.checked)
        setTask({ ...task, [event.target.name]: event.target.checked });
    };
    const { pytorch, tensorflow, keras, other } = modelarch;
    const { cv, nlp } = task;
    const handleSubmit = event => {
        console.log(gcpurl)
        if (cv === true) {
            tags.push("CV")
        } if (nlp === true) {
            tags.push("NLP")
        } if (pytorch === true) {
            tags.push("PyTorch")
        } if (keras === true) {
            tags.push("Keras")
        } if (tensorflow === true) {
            tags.push("TensorFlow")
        } if (other === true) {
            tags.push("Other")
        } else {

        }
        setTitle(event)
        setDetails(event)
        setUse(event)
        setFactors(event)
        setMetrics(event)
        setData(event)
        setGithub(event)
        event.preventDefault();
        console.log(title, details, use, factors, metrics, data, github, tags, gcpurl)

        fetch('http://localhost:5000/api/models', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tags: tags,
                resettags: ['reset'],
                img: '',
                title: title,
                cardDetails: {
                    modelDetails: details,
                    intendedUse: use,
                    factors: factors,
                    metrics: metrics,
                    trainEvalData: data
                },
                github: github,
                modelid: modelid,
                modelurl: gcpurl

            })
        })
    }
    return (

        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Model Details
      </Typography>
                    <form id="model-info-form" onSubmit={handleSubmit}>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setTitle(e.target.value)}
                                    required
                                    id="title"
                                    name="title"
                                    label="Submission Model Name"
                                    fullWidth

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setDetails(e.target.value)}
                                    id="outlined-multiline-static"
                                    label="Model Details"
                                    multiline
                                    rows={3}
                                    //defaultValue="Brief Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setUse(e.target.value)}
                                    id="outlined-multiline-static"
                                    label="Intended Use"
                                    multiline
                                    rows={3}
                                    //defaultValue="Brief Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setFactors(e.target.value)}
                                    id="outlined-multiline-static"
                                    label="Factors"
                                    multiline
                                    rows={3}
                                    //defaultValue="Brief Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setMetrics(e.target.value)}
                                    id="outlined-multiline-static"
                                    label="Metrics"
                                    multiline
                                    rows={3}
                                    //defaultValue="Brief Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onInput={e => setData(e.target.value)}
                                    id="outlined-multiline-static"
                                    label="Train-Evaluation Data"
                                    multiline
                                    rows={3}
                                    //defaultValue="Brief Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onInput={e => setGithub(e.target.value)}
                                    required
                                    id="github"
                                    name="github"
                                    label="GitHub Repo"
                                    fullWidth
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <Divider />
                                <Typography variant="h6" gutterBottom>
                                    Select Model to Upload
      </Typography>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={uploadHandler}
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span" className={classes.button} >
                                        Upload
  </Button>
                                </label>
                                <div></div>
                                <Typography variant="h6" gutterBottom>
                                    Model Architecture
      </Typography>
                                <Divider />
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox checked={pytorch} onChange={handleModelChange} color="secondary" name="pytorch" value="pytorch" />}
                                            label="PyTorch"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={keras} onChange={handleModelChange} color="secondary" name="keras" value="keras" />}
                                            label="Keras"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={tensorflow} onChange={handleModelChange} color="secondary" name="tensorflow" value="tensorflow" />}
                                            label="TensorFlow"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={other} onChange={handleModelChange} color="secondary" name="other" value="other" />}
                                            label="Other"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Task
      </Typography>
                                <Divider />
                                <FormControl component="fieldset">
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox checked={cv} onChange={handleTaskChange} color="secondary" name="cv" value="cv" />}
                                            label="Computer Vision"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={nlp} onChange={handleTaskChange} color="secondary" name="nlp" value="nlp" />}
                                            label="Natural Language Processing"
                                        /></FormGroup></FormControl>
                            </Grid>
                        </Grid>
                        <Divider />

                        <Button variant="outlined" color="secondary" type="submit" className={classes.button}>
                            Submit
      </Button>


                        <Divider />
                    </form>
                </React.Fragment>
                <Copyright />
            </Paper>
        </main>
    );
}