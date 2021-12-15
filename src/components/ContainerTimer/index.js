import {Container} from './styles.js';
import ButtonGreat from '../ButtonGreat';

export default function ContainerTimer(props){
  const min = Math.floor(props.length / 1000 / 60);
  const sec = Math.floor((props.length / 1000) % 60);

  return(
    <Container>
      <h1>{min.toString().length === 1 ? "0" + min : min}:{sec.toString().length === 1 ? "0" + sec : sec}</h1>
      
      <div className="buttons">
        <ButtonGreat onClick={props.tuggle}>{props.activate ? "Pause" : "Iniciar"}</ButtonGreat>
        <ButtonGreat mode={props.mode} onClick={props.reset}>Reset</ButtonGreat>

      </div>
    </Container>
  );
}