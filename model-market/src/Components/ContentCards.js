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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(2)
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

}));

//hardcoded cards to populate content paper
const cards = [
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/wsi.jfif",
    desc: "Whole Slide Image",
    title: "HoVer-Net Nuclei Segmentation",
    tag: ['Computer Vision', 'PyTorch'],
    faces:[
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
      'https://i.pravatar.cc/300?img=4',
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
      'https://i.pravatar.cc/300?img=4',
    ]
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/ner.png",
    desc: "Clinical Pathology Notes",
    title: "Named Entity Recognition",
    faces:[
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2'
    ]
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/k-means2.jpg",
    desc: "Unsupervised Example",
    title: "KMeans Clustering",
    faces:[]
  },
  {
    img:
      "https://storage.googleapis.com/site-assets-aim/classifier.png",
    desc: "Binary Classifier",
    title: "Generic Machine Learning Classification",
    faces:[
      'https://i.pravatar.cc/300?img=4'
    ]
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
                  <ArrowUpwardSharpIcon/>
                </IconButton>
                <IconButton>
                  <ArrowDownwardSharpIcon/>
                </IconButton>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography>{card.desc}</Typography>
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
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>Performance Metrics:</Typography>
                  <Typography paragraph>Notes:</Typography>
                </CardContent>

              </Collapse>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    //</React.Fragment>
  )
}