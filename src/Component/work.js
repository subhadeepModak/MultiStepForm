import React, { useContext }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {makeContext }  from '../App'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Work() {
  const {Data,FinalData,setData,setFinalData}= useContext(makeContext);
  

    const classes = useStyles();
    return (
     <div className={classes.root} >
     
      <TextField id="outlined-basic" label="Company" variant="outlined" value={Data['company']} onChange={(e)=>setData({...Data,'company':e.target.value})} />
      <TextField id="outlined-basic" label="Designation" variant="outlined" value={Data['desig']} onChange={(e)=>setData({...Data,'desig':e.target.value})}/>
      <TextField id="outlined-basic" label="Year of Exp." variant="outlined" value={Data['exp']} onChange={(e)=>setData({...Data,'exp':e.target.value})} />
    </div>
    )
}

export default Work
