import React, { useContext ,useState} from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import Work from "./work";
import Personal from "./PersonalDeatils";
import Education from "./Education";
import { makeContext } from "../App";
import DisplayData from "./DisplayData";
import Icon from "@material-ui/core/Icon";
var user = {};
var educat={};
var expe={};

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}
QontoStepIcon.propTypes = { active: PropTypes.bool, completed: PropTypes.bool };
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: <AccountCircleIcon />,
    2: <SchoolIcon />,
    3: <WorkOutlineIcon />,
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Personal Details", "Education", "Profession"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personal />;
    case 1:
      return <Education />;
    case 2:
      return <Work />;
    default:
      return "Unknown step";
  }
}
export default function CustomizedSteppers() {
  
  const { Data, Progressval, setProgressval, setColor,Edu,Exp } =
    useContext(makeContext);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [Validate, setValidate] = React.useState(false);
  const [NameError, setNameError] = useState(false);
  const [AgeError, setAgeError] = useState(false);
  const [MobileError, setMobileError] = useState(false);
  





  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setProgressval(Progressval + 33);
      if (Progressval > 33) setColor("primary");
      if (Progressval > 66) setColor("secondary");
      if (Progressval > 99) setColor("primary");
    
   
  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgressval(Progressval - 33);
    if (Progressval > 33) setColor("primary");
    if (Progressval > 66) setColor("secondary");
    if (Progressval > 99) setColor("primary");
  };


  const handleReset = () => {
    setActiveStep(0);
    setProgressval(1);
    setColor("secondary");
  };
  const saveData = () => {

    
    localStorage.setItem("user", JSON.stringify(Data));
    localStorage.setItem("educations", JSON.stringify(Edu));
    localStorage.setItem("Exp", JSON.stringify(Exp));
    user = JSON.parse(localStorage.getItem("user"));
    educat = JSON.parse(localStorage.getItem("educations"));
    expe = JSON.parse(localStorage.getItem("Exp"));
   
    handleNext();
  };


  //=======Validation========//

const FormValidate=()=>{
  if(!Data['name']||!Data['age']||!Data['mobile']){
   
    alert("Please fill all the data");
  }
  else if(!Data['name'].match(/^[a-zA-Z' ']+$/)){
     setNameError(true); 
     alert("Please fill data by Proper format!!");
    
         
 }
 else if(!Data['age'].match(/^[0-9]+$/)){
   setAgeError(true);
   alert("Please fill data by Proper format!!");  
          
}
else if(!Data['mobile'].match(/^[6-9]\d{9}$/)){
    setMobileError(true);
    alert("Please fill data by Proper format!!");
    setValidate(false);
         
}
else{
  alert("Success!!");
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  setProgressval(Progressval + 33);
  if (Progressval > 33) setColor("primary");
  if (Progressval > 66) setColor("secondary");
  if (Progressval > 99) setColor("primary");
}


}


  return (
    <div className={classes.root}>
      <form autoComplete='off'>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Local Storage Data
              </Typography>
              <DisplayData data={user} edu={educat} exp={expe}/>
              <Button
                onClick={handleReset}
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                Update
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                  variant="outlined"
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    // type="submit"
                    variant="contained"
                    color="primary"
                    onClick={saveData}
                    className={classes.button}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    // type="submit"
                    variant="contained"
                    color="primary"
                    onClick={FormValidate}
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
