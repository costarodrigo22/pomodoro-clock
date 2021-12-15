import {useContext} from 'react';
import {Container} from './styles.js';
import {ModeContext} from '../../App';

export default function ButtonGreat(props){
  const context = useContext(ModeContext);

  return (
    <Container 
      onClick={props.onClick}
      style={{
        color: context.mode === 'session' ? '#f84b4d' : '#6666FF',
      }}
    >
        {props.children}
    </Container>
  );
}