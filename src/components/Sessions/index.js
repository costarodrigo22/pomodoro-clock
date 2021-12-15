import React from 'react';
import {Container} from './styles';
import ButtonSmall from '../ButtonSmall';

export default function Sessions(props){

  return(
    <Container>
      <div className="sessionPause">
        <p>Descanço</p>
        <div className="buttons-break">
          <ButtonSmall onClick={props.incrementPause}> + </ButtonSmall>
          <p>{props.lengthPause/60}</p>
          <ButtonSmall onClick={props.decrementPause}> - </ButtonSmall>
        </div>
      </div>

      <div className="sessionWork">
        <p>Trabalho</p>
        <div className="buttons-work">
          <ButtonSmall onClick={props.incrementWork}> + </ButtonSmall>
          <p>{props.lengthWork/60}</p>
          <ButtonSmall onClick={props.decrementWork}> - </ButtonSmall>
        </div>
      </div>

    </Container>
  );
}