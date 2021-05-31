import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {makeContext }  from '../App'


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));


function Personal() {
  const {Data,setData}= useContext(makeContext);  
  const classes = useStyles();
  return (
    <>
    

    <div className={classes.root} >
      <TextField id="outlined-basic"  value={Data['name']} onChange={(e)=>setData({...Data,'name':e.target.value})} label="Name" variant="outlined" />
      <TextField id="outlined-basic"  value={Data['age']} onChange={(e)=>setData({...Data,'age':e.target.value})}  label="Age" variant="outlined" />
      <TextField id="outlined-basic"  value={Data['mobile']} onChange={(e)=>setData({...Data,'mobile':e.target.value})} label="Mobile" variant="outlined" />
    </div>
    </>
  );
}

export default Personal;
