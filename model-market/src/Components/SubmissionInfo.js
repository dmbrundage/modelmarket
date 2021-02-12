import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';


export default function InformationForm(props) {
    const [title, setTitle] = useState('');
    const handleSubmit = event => {
        setTitle(event)
        event.preventDefault();
        console.log(title)
    }
    return (

        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Model Details
      </Typography>
            <form id="model-info-form" on={handleSubmit}>
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
                            required
                            id="github"
                            name="github"
                            label="GitHub Repo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="article" name="article" label="Journal or Article Link" fullWidth />
                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Model Architecture
      </Typography>
                        <Divider />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="modelType" value="PyTorch" />}
                            label="PyTorch"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="modelType" value="Keras" />}
                            label="Keras"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="modelType" value="TensorFlow" />}
                            label="TensorFlow"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="modelType" value="Other" />}
                            label="Other"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Task
      </Typography>
                        <Divider />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Computer Vision"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Natural Language Processing"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Unsupervised Learning"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Machine Learning"
                        />
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}