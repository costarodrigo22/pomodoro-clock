import {useContext} from 'react';
import {Container} from './styles';
import CardMain from '../CardMain';
import {ModeContext} from '../../App';

export default function Page(){
  const context = useContext(ModeContext);

  return(
    <Container style={{
      background: context.mode === 'session' ? '#f84b4d' : '#6666FF',
      transition:  '0.7s'
      }}>
      <CardMain />
    </Container>
  );
}