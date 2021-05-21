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
      marginLeft:theme.spacing(50),
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(60),
    },
  },
}));






function App() {
  const classes=useStyles();

  const [Data, setData] = useState([]);
  const [FinalData, setFinalData] = useState([]);
  const [Progressval, setProgressval] = useState(1);
  const [Color, setColor] = useState("secondary")
  return (


    <div className="App">


     <Header/>


     
     <div className={classes.rootPaper}>
                      
      <Paper elevation={4} >
     


      <makeContext.Provider value={{Data,setData,FinalData,setFinalData,Progressval,setProgressval,Color,setColor}}>
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