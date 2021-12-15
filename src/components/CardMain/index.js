import React, {useState, useEffect, useContext} from 'react';

import {Container} from './styles.js';
import ContainerTimer from '../ContainerTimer';
import Sessions from '../Sessions';

import {ModeContext} from '../../App';

export default function CardMain(){
  const context = useContext(ModeContext);
  
  const [breakLength, setBreakLength] = useState(5*60);
  const [sessionLength, setSessionLength] = useState(25*60);
  const [timeLeft, setTimeLeft] = useState(0);  //Indica quanto tempo falta para acabar o modo indicado
  const [isActive, setIsActive] = useState(false); //Indica se o relógio está funcionando ou não
  const [timeSpent, setTimeSpent] = useState(0); //Indica quanto tempo passou desde o clik em 'iniciar'

  useEffect(() => {
    let interval = null;

    if(isActive && context.mode === 'session'){
      setTimeLeft(sessionLength * 1000 - timeSpent);
      interval = setInterval(() => {
        setTimeSpent((timeSpent) => timeSpent + 1000);
      }, 1000);  
    }

    if(timeSpent === sessionLength * 1000){
     setTimeSpent(0);
     context.setMode('break');
    }

    return () => clearInterval(interval);
  }, [isActive, sessionLength, timeLeft, timeSpent, breakLength, context]);

  useEffect(() => {
    if(isActive && context.mode === 'break' ){
      setTimeLeft(breakLength * 1000 - timeSpent);
      const intervalBreak = setInterval(() => {
        setTimeSpent((timeSpent) => timeSpent + 1000);
      }, 1000);	

      if(timeSpent === breakLength * 1000){
        setTimeSpent(0);
        context.setMode('session');
       }
 
      return () => clearInterval(intervalBreak);
    }
  }, [breakLength, timeSpent, context, isActive]);

  function resetTimer(){
    setTimeLeft(0);
    setTimeSpent(0);
    setIsActive(false);
    context.setMode('break');
  }

  function tuggleIsActive(){
    context.setMode((mode) => (mode === 'session' ? 'break' : 'session'));
    setIsActive((isActive) => (isActive === true ? false : true));
    //setTimeSpent(0);
  }

  function decrementBreakLength(){
    const decrementedBreakLength = breakLength - 60 > 60 ? breakLength - 60 : 60;
    setBreakLength(decrementedBreakLength);
  };

  function incrementBreakLength(){
    const incrementedBreakLength = breakLength + 60 <= 60 * 60 ? breakLength + 60 : 60 * 60;
    setBreakLength(incrementedBreakLength);
  };

  function decrementSessionLength(){
    const decrementedSessionLength = sessionLength - 60 > 60 ? sessionLength - 60 : 60;
    setSessionLength(decrementedSessionLength);
  };

  function incrementSessionLength(){
    const incrementedSessionLength = sessionLength + 60 <= 60 * 60 ? sessionLength + 60 : 60 * 60;
    setSessionLength(incrementedSessionLength);
  };


  return(
    <Container 
      style={{
        background: context.mode === 'session' ? '#f26d68' : '#9999FF',
        transition: '0.9s'
        }}>
      <ContainerTimer 
      length = {timeLeft}
      tuggle = {tuggleIsActive}
      mode = {context.mode} 
      reset = {resetTimer}
      activate = {isActive}
      />
      <Sessions 
        lengthPause = {breakLength}
        incrementPause = {incrementBreakLength}
        decrementPause = {decrementBreakLength}

        lengthWork = {sessionLength}
        incrementWork = {incrementSessionLength}
        decrementWork = {decrementSessionLength}
      />
    </Container>
  );
}