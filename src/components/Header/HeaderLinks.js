/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="architecture"
          title="Architectural Portfolio"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/architectural-portfolio"
            color="transparent"
            className={classes.navLink}> Architecture
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="SophieKnits_"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
           
             <Link to="/profile-page" className={classes.dropdownLink}>
              Gallery
            </Link>,
            <Link to="/knitting-tools" className={classes.dropdownLink}>
              Knitting Tools
            </Link>
          ]}
          />
           
      </ListItem>

      <ListItem className={classes.listItem}>
       
      </ListItem>
      <ListItem className={classes.listItem}>
       
        <Tooltip
          id="instagram-twitter"
          title="Twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            href="https://https://twitter.com/sophiegw"
            target="_blank"
            color="transparent"
            className={classes.navLink}
>
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button> 
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.instagram.com/sophieknits_/"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="www.linkedin.com/in/sophieworsnop"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>


    </List>
  );
}
