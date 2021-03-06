import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles({
  bar: {
    width: 250,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const icon = [<EmojiPeopleIcon/>, <SportsEsportsIcon/>, <FilterHdrIcon/>, <FolderSpecialIcon/>, <AddCircleOutlineIcon/>]
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Let\'s Meet!!', 'Poster', 'Good Memory' , 'Personal Space', 'Other'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left',].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" color="inherit" aria-label="icon" onClick={toggleDrawer(anchor, true)}>
            <ListIcon />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <AppBar position="static" style={{ background: '#ff9800' }} className={classes.bar}>Hi</AppBar>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}