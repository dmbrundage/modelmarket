import React from 'react';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CardActionArea from "@material-ui/core/CardActionArea";
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  modelCardDetails: {
    fontWeight: "fontWeightBold"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  cardGrid: {
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
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },
  tags: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing.unit
    }
  },

}));

//hardcoded cards to populate content paper
const cards = [
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/face-algorithm.png",
    desc: "Smiling Detection in Images",
    title: "Smiling Detection in Images",
    tags: ['CV', 'PyTorch'],
    faces: [
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
    ],
    cardDetails: {
      modelDetails: `Developed by researchers at Google and University of Toronto, 2018 v1.
      Convolutional Neural Network. Pretrained for face recognition and then fine-tuned with cross-entropy loss for binary smiling classification.`,
      intendedUse: `• Intended to be used for fun applications, such as creating cartoon smiles on real
      images; augmentative applications, such as providing details for people who are
      blind; or assisting applications such as automatically finding smiling photos.
      • Particularly intended for younger audiences.
      • Not suitable for emotion detection or determining affect; smiles were annotated
      based on physical appearance, and not underlying emotions.`,
      factors: `• Based on known problems with computer vision face technology, potential relevant factors include groups for gender, age, race, and Fitzpatrick skin type;
      hardware factors of camera type and lens type; and environmental factors of
      lighting and humidity.
      • Evaluation factors are gender and age group, as annotated in the publicly available
      dataset CelebA [36]. Further possible factors not currently available in a public
      smiling dataset. Gender and age determined by third-party annotators based
      on visual presentation, following a set of examples of male/female gender and
      young/old age`,
      metrics: `• Evaluation metrics include False Positive Rate and False Negative Rate to
      measure disproportionate model performance errors across subgroups. False
      Discovery Rate and False Omission Rate, which measure the fraction of negative (not smiling) and positive (smiling) predictions that are incorrectly predicted
      to be positive and negative, respectively, are also reported. [48]
      • Together, these four metrics provide values for different errors that can be calculated from the confusion matrix for binary classification systems.
      • These also correspond to metrics in recent definitions of “fairness” in machine
      learning (cf. [6, 26]), where parity across subgroups for different metrics correspond to different fairness criteria.
      • 95% confidence intervals calculated with bootstrap resampling.
      • All metrics reported at the .5 decision threshold`,
      trainEvalData: `Training Data
      • CelebA [36], training data split.
      Evaluation Data
      • CelebA [36], test data split.
      • Chosen as a basic proof-of-concept.`,
      considerations: "",
    },

  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/wsi.jfif",
    desc: "Whole Slide Image",
    title: "HoVer-Net Nuclei Segmentation",
    tag: ['CV', 'TensorFlow'],
    faces: [
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
      'https://i.pravatar.cc/300?img=4',
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
      'https://i.pravatar.cc/300?img=4',
    ],
    cardDetails: {
      modelDetails: "",
      intendedUse: "",
      factors: "",
      metrics: "",
      trainEvalData: "",
      considerations: "",
    },
    tags: ['CV', 'PyTorch'],
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/ner.png",
    desc: "Clinical Pathology Notes",
    title: "Named Entity Recognition",
    faces: [
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2'
    ],
    cardDetails: {
      modelDetails: "",
      intendedUse: "",
      factors: "",
      metrics: "",
      trainEvalData: "",
      considerations: "",
    },
    tags: ['NLP', 'Keras'],
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/k-means2.jpg",
    desc: "Unsupervised Example",
    title: "KMeans Clustering",
    faces: [],
    cardDetails: {
      modelDetails: "",
      intendedUse: "",
      factors: "",
      metrics: "",
      trainEvalData: "",
      considerations: "",
    },
    tags: ['ML', 'Other'],
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/classifier.png",
    desc: "Binary Classifier",
    title: "Generic Machine Learning Classification",
    faces: [
      'https://i.pravatar.cc/300?img=4'
    ],
    cardDetails: {
      modelDetails: "",
      intendedUse: "",
      factors: "",
      metrics: "",
      trainEvalData: "",
      considerations: "",
    },
    tags: ['ML', 'PyTorch'],
  }
];

export default function ContentContainer() {
  const classes = useStyles();
  //function to expand cards
  const [expanded, setExpanded] = React.useState(false);
  const [fav, setFav] = React.useState(true);

  const handleExpandClick = i => {
    setExpanded(expanded === i ? -1 : i);
  };
  const handleFavoriteClick = i => {
    console.log(i)
    setFav(fav === i ? -1 : i);
  };
  return (
    //<React.Fragment>
    //<CssBaseline />
    <Container className={classes.cardGrid} maxWidth="lg">
      {/* creating container grid for cards */}

      <Grid container spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
        {cards.map((card, index) => (
          <Grid item key md={4}>
            <Card className={classes.card}>
              <CardActionArea href="/discuss">
                <CardMedia
                  className={classes.cardMedia}
                  image={card.img}
                  title="Image title"
                /></CardActionArea>

              <CardContent className={classes.cardContent}>
                <IconButton className={clsx(classes.favoriteIcon)}
                  onClick={() => handleFavoriteClick(index)}
                  aria-label="Favorite"
                  color={fav ? "primary" : "secondary"}>
                  <ArrowUpwardSharpIcon />
                </IconButton>
                <IconButton>
                  <ArrowDownwardSharpIcon />
                </IconButton>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                {card['tags'].map(tag => (
                  <div>
                    <Badge className={classes.tags} badgeContent={tag} color="secondary">
                    </Badge></div>))}
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
                <IconButton className={clsx(classes.favoriteIcon)}
                  onClick={() => handleFavoriteClick(index)}
                  aria-label="Favorite"
                  color={fav ? "primary" : "secondary"}>
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand)}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <AvatarGroup max={5} spacing='small'>
                  {card['faces'].map(face => (
                    <Avatar className={classes.avatar} key={face} src={face} style={{ height: '30px', width: '30px' }} />
                  ))}</AvatarGroup>
              </CardActions>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph><b>Model Details: </b>{card.cardDetails.modelDetails}</Typography>
                  <Typography paragraph><b>Intended Use: </b>{card.cardDetails.intendedUse}</Typography>
                  <Typography paragraph><b>Factors: </b>{card.cardDetails.factors}</Typography>
                  <Typography paragraph><b>Metrics: </b>{card.cardDetails.metrics}</Typography>
                  <Typography paragraph><b>Training and Evaluation Data: </b>{card.cardDetails.trainEvalData}</Typography>
                  <Typography paragraph><b>Considerations: </b></Typography>
                </CardContent>

              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container >
    //</React.Fragment>
  )
}