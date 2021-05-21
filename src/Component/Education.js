import React, { useContext } from 'react'
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

function Education() {
  const {Data,setData}= useContext(makeContext);

    const classes = useStyles();
    return (
     <div className={classes.root} >
     
      <TextField id="outlined-basic" value={Data['school']} onChange={(e)=>setData({...Data,'school':e.target.value})} label="School" variant="outlined" />
      <TextField id="outlined-basic"  value={Data['degree']} onChange={(e)=>setData({...Data,'degree':e.target.value})} label="Degree" variant="outlined" />
      <TextField id="outlined-basic" value={Data['year']} onChange={(e)=>setData({...Data,'year':e.target.value})} label="Year" variant="outlined" />
      <TextField id="outlined-basic"  value={Data['percentage']} onChange={(e)=>setData({...Data,'percentage':e.target.value})} label="Percentage" variant="outlined" />
    </div>
    )
}

export default Education
