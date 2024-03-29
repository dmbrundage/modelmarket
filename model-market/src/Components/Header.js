import { AppBar, Toolbar, Typography, makeStyles, Button, Link } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import React from "react";
import { Link as RLink, Redirect } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#9342f5",
    paddingRight: "79px",
    paddingLeft: "25px",

  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  logo: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 800,
    color: "#FFFEFE",
    textAlign: "left",
    textDecoration: 'none'
  },
  menuButton: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: "#FFFEFE",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
  {
    label: "Submit",
    href: "/Submit",
  },
  {
    label: "Models",
    href: "/Models",
  },
  {
    label: "My Profile",
    href: "/Profile",
  },
  {
    label: "Log In",
    href: "/Login",
  },
];

export default function Header() {

  const RouteChange = (linkPath) => {
    let history = useHistory();
    history.push(linkPath);
  }
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (<Toolbar className={toolbar}>
      {aiMenagerieLogo}
      <div>{searchBar}</div>
      <div>{getMenuButtons()}</div>
    </Toolbar>
    );
  };

  //TODO Make searchbar actually search?
  const searchBar = (
    <SearchBar onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}

    />)
  const aiMenagerieLogo = (
    <React.Fragment>
      <Typography variant="h6" component="h1" className={logo}
      ><RLink to="/" className={logo}>

          Menagerie
      </RLink>
      </Typography></React.Fragment>
  );
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <RLink to={href} className={logo}>
          <Button variant="outlined" key={label}
            color="inherit"
            //to={href}
            //component= {RouterL}
            className={menuButton}

          >
            {label}

          </Button></RLink>

      );
    });
  };
  return (
    <header>
      <AppBar position="fixed" className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
