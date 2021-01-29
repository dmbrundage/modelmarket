import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#9342f5",
    paddingRight: "79px",
    paddingLeft: "25px",
  },
  logo: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 800,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const headersData = [
    {
      label: "Data",
      href: "/data",
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
      label: "Log Out",
      href: "/logout",
    },
  ];

export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles();

  const displayDesktop = () => {
    return (<Toolbar className={toolbar}>
        {aiMenagerieLogo}
        <div>{getMenuButtons()}</div>
    </Toolbar>
    );
  };

  const aiMenagerieLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      AI_Menagerie
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
