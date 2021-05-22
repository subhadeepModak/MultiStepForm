import React, { useContext }  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {makeContext }  from '../App'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Work() {
 
  
  const {Exp ,setExp,CountExp,setCountExp}= useContext(makeContext);
 
    const classes = useStyles();

    
const handleAdd=()=>{
  setCountExp(CountExp+1);
  setExp([...Exp,{
    company:'',
    desig:'',
    exp:''
    }])

   
}
 const handleDel=(index)=>{
   const values=[...Exp];
   values.splice(index,1);
   setExp(values);
   setCountExp(CountExp-1); 
 } 
 const handleChangeInput=(index,e)=>{
 const values=[...Exp];
 values[index][e.target.name]=[e.target.value];
 setExp(values);
 }
    return (
      <>
{Exp.map((InputField,index)=>(
<div className={classes.root} key={index}>
     
     <TextField id="outlined-basic" name="company" value={InputField.company} onChange={(e)=>handleChangeInput(index,e)} label="Company" variant="outlined" />
     <TextField id="outlined-basic"  name="desig"  value={InputField.desig} onChange={(e)=>handleChangeInput(index,e)} label="Designation" variant="outlined" />
     <TextField id="outlined-basic" name="exp"  value={InputField.exp} onChange={(e)=>handleChangeInput(index,e)} label="Experience" variant="outlined" />
   
     
   
   <IconButton onClick={()=>handleAdd()}>
   <AddCircleIcon  color="primary" />
 </IconButton>

 {CountExp ? 
  (
  
  <IconButton onClick={()=>handleDel(index)}>
    <HighlightOffIcon color="secondary"/>
  </IconButton>
  
  ):null}
 
</div>

))}
     

  </>
    )
}

export default Work
