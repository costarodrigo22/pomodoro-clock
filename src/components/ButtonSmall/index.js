import {useContext} from 'react';
import {Container} from './styles';
import {ModeContext} from '../../App';

export default function ButtonSmall(props){
  const context = useContext(ModeContext);

  return(
    <Container 
      onClick={props.onClick}
      style={{
        color: context.mode === 'session' ? '#f84b4d' : '#6666FF'
      }}
      >
      {props.children}
    </Container>
  );
}