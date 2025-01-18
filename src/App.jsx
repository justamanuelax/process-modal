import { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

const messages = [
  "Learn React ⚛️ ",
  "Apply For Jobs 💼",
  "Invest Your  New Income 🤑"
]
export default function App() {
    return(
      <div>
        <Steps/>
        {/* Each state is independant of each other. */}
        <Steps/>
        {/* Each state is independant of each other. */}
      </div>
    )

}



function Steps() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  // The state is component specific and isolated.
  // UI is a function of state.
  // State is a declarative in React.
  // Practical Guidelines : 
  /*
  "remember" over time the component should keep track of :
  When you want the component to be dynamic.
  put it in the eventhandler function 
  imagine its view as a reflection of state changing over time. 
  No re-renders no state needed.


  */
  function handlePrevious(){
   if(step > 1) setStep(step - 1);
  }
  function handleNext(){
   
    if(step < 3) setStep(step + 1);

    // If you want to add a step by the current value
  // if(step < 3){
  //   setStep((s) => s + 1);
  //   setStep((s) => s + 1);
  // }

  


}

return(
  <>
  <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
  <div>
{isOpen && (<div className="steps">
    <div className="numbers">
    <div className={`${step >= 1 ? 'active' : ''}`}>
      1
    </div>
    <div className={`${step >= 2 ? 'active' : ''}`}>
      2
        </div>
        <div className={`${step >= 3 ? 'active' : ''}`}>
          3
        </div>
    </div>
    <div className="messages">
        <StepMessage>
          <p>
        {`Step : ${step} ${messages[step - 1]}`}
          </p>
          </StepMessage>   
        
    </div>
    <div className="buttons">
        <Button bgColor="purple" textColor="white" onClick={handlePrevious}><span>👈</span> Previous</Button>
        <Button bgColor="purple" textColor="white" onClick={handleNext} >Next <span>👉</span></Button>
    </div>
    </div>)
}  
    </div>
    </>
  )
}

function Button({bgColor, textColor, onClick, children}){
  Button.propTypes ={
    emoji: PropTypes.string,
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.array
  }
  return(
    <div className="buttons">

    <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick} >
    {children}
    </button>
    </div>
  )
}

function StepMessage({ children}){
    StepMessage.propTypes = {
      children: PropTypes.object
    } 
  return(
    <div className="messages">
      {children}
    </div>
   )
}

// The proptype of children is an array.


// React is Declarative
