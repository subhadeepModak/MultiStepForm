import { makeStyles, Paper } from '@material-ui/core';
import './App.css';
import Header from './Component/header'
import LinearWithValueLabel from './Component/LinearProgress'
import CircularStatic from './Component/CircularProgress'
import CustomizedSteppers from './Component/Form'
import { createContext ,useState} from 'react';

const makeContext=createContext();




const useStyles = makeStyles((theme) => ({
  
  rootPaper: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    position:'center',
    '& > *': {
      marginLeft:theme.spacing(37),
      margin: theme.spacing(1),
      width: theme.spacing(100),
      minHeight: theme.spacing(70),
    },
  },
}));






function App() {
  const classes=useStyles();
  const [Count, setCount] = useState( 0);
  const [CountExp, setCountExp] = useState(0);

  const [Data, setData] = useState( [{name:'',age:'',mobile:''}]);
 const [Edu, setEdu] = useState([ {school:'', degree:'', year:'', percentage:''} ]);
 const [Exp, setExp] = useState([ {company:'', desig:'', exp:''} ]); 
  const [Progressval, setProgressval] = useState(1);
  const [Color, setColor] = useState("secondary")

  return (


    <div className="App">


     <Header/>


     
     <div className={classes.rootPaper}>
                      
      <Paper elevation={4} >
     


      <makeContext.Provider value={{Data,setData,Progressval,setProgressval,Color,setColor,Edu,setEdu,Exp,setExp, Count,setCount,CountExp,setCountExp}}>
      <LinearWithValueLabel/>
      <CircularStatic/>
      <CustomizedSteppers />
      </makeContext.Provider>
      


      </Paper>            
     </div>
   
     </div>
  );
}

export default App;
export {makeContext} ;