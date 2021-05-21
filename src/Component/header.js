
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  rootPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    position:'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(55),
      height: theme.spacing(60),
    },
  },
}));






function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                   
                    <Typography variant="h6" className={classes.title}>
                      Multi Step Form with Progress Bar
                    </Typography>
                   
                    </Toolbar>
                </AppBar>

                 
                     


    </div>
        </div>
    )
}

export default Header;
