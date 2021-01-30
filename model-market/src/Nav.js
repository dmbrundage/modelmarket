import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import MemoryIcon from '@material-ui/icons/Memory';
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

const drawerWidth = 250;
//theme fo classes
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex:800,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));
//this is a dictionary to populate the icons for the sidebar
var iconDict = {
    0: <ImageIcon/>,
    1: <DescriptionIcon/>,
    2: <BubbleChartIcon/>,
    3: <ShowChartIcon/>
  };
  //hardcoded cards to populate content paper
  const cards = [
    {
      img:
        "https://storage.googleapis.com/site-assets-aim/wsi.jfif",
      desc: "Whole Slide Image",
      title: "HoverNet Nuclei Segmentation"
    },
    {
      img:
        "https://storage.googleapis.com/site-assets-aim/ner.png",
      desc: "Clinical Pathology Notes",
      title: "Named Entity Recognition"
    },
    {
      img:
        "https://storage.googleapis.com/site-assets-aim/k-means2.jpg",
      desc: "Unsupervised Example",
      title: "KMeans Clustering"
    },
    {
      img:
        "https://storage.googleapis.com/site-assets-aim/classifier.png",
      desc: "Binary Classifier",
      title: "Generic Machine Learning Classification"
    }
  ];
//start of sidebar drawer code
export default function ClippedDrawer() {
  const classes = useStyles();
  //function to expand cards
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = i => {
    setExpanded(expanded === i ? -1 : i);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Computer Vision', 'Natural Language Processing', 'Unsupervised Learning', 'Machine Learning'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon> {iconDict[index]} </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['PyTorch', 'Keras', 'Tensorflow', 'Other'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{<MemoryIcon/>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
  
      <Container className={classes.cardGrid} maxWidth="md">
          {/* creating container grid for cards */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
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
                    <IconButton aria-label="Favorite">
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
                  </CardActions>
                  <Collapse in={expanded === index}  timeout="auto" unmountOnExit>
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
    </div>
  );
}

//TODOs fix expanding of cards to only active card
//API to pull data from bucket to populate cards
//Seperate cards and grid into content file