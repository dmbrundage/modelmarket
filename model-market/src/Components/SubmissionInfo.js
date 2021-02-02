import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
export default function InformationForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Model Details
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
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
                        label="Description"
                        multiline
                        rows={4}
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
        </React.Fragment>
    );
}