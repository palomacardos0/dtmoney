import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);

`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center ;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color:  #fff;
    background: var(--blue-light);
    border:0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: 0.2s;

    &:hover{
      filter: brightness(0.9)
    }

    @media(max-width: 420px){
      max-width: 130px;
      font-size: 0.75rem;
      padding: 0 1rem ;
    }
  }

  img{
    @media(max-width: 420px){
      width: 135px;
    }
    
  }
  
`