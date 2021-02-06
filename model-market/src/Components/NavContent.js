import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';

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

//start of sidebar drawer code

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const updateShared = i => {
      props.updateShared(i);
     
  }
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
              <ListItem button key={text} onClick={() => updateShared(text)}>
                <ListItemIcon> {iconDict[index]} </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['PyTorch', 'Keras', 'TensorFlow', 'Other'].map((text, index) => (
              <ListItem button key={text}  onClick={() => updateShared(text)}>
                <ListItemIcon>{<MemoryIcon/>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
    
  );
}

//TODOs fix expanding of cards to only active card
//API to pull data from bucket to populate cards
//Seperate cards and grid into content file