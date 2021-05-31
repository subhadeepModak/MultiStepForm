import React, { useContext} from 'react'
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
      width: '20ch',
    },
  },
}));

function Education() {

  const {Edu ,setEdu,Count,setCount}= useContext(makeContext);
 

const classes = useStyles();

const handleAdd=()=>{
  setCount(Count+1);
  setEdu([...Edu,{
    school:'',
    degree:'',
    year:'',
    percentage:''  
    }])

   
}
 const handleDel=(index)=>{
   const values=[...Edu];
   values.splice(index,1);
   setEdu(values);
   setCount(Count-1); 
 } 
 const handleChangeInput=(index,e)=>{
 const values=[...Edu];
 values[index][e.target.name]=[e.target.value];
 setEdu(values);
 }

return (
      <>
{Edu.map((InputField,index)=>(
<div className={classes.root} key={index}>
     
     <TextField id="outlined-basic" name="school" value={InputField.school} onChange={(e)=>handleChangeInput(index,e)} label="School" variant="outlined" />
     <TextField id="outlined-basic"  name="degree"  value={InputField.degree} onChange={(e)=>handleChangeInput(index,e)} label="Degree" variant="outlined" />
     <TextField id="outlined-basic" name="year"  value={InputField.year} onChange={(e)=>handleChangeInput(index,e)} label="Year" variant="outlined" />
     <TextField id="outlined-basic" name="percentage"  value={InputField.percentage} onChange={(e)=>handleChangeInput(index,e)} label="Percentage" variant="outlined" />
     
   
   <IconButton onClick={()=>handleAdd()}>
   <AddCircleIcon  color="primary" />
 </IconButton>

 {Count ? 
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

export default Education
