import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  .sessionPause{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
      color: #fff;
      font-size: 20px;
    }
  }

  .buttons-break{
    display: flex;
    align-items: center;
  }

  .sessionWork{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
      color: #fff;
      font-size: 20px;
    }
  }

  .buttons-work{
    display: flex;
    align-items: center;
  }
`;