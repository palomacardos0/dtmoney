import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /** repeat(3 1fr) = 1fr 1fr 1fr */
  gap: 2rem;
  margin-top: -10rem;
}

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    strong{
      display: block; /**ppor padrão o storng vem display inline e nele não funciona o  argin */
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background{
      background: var(--green);
      color: #fff;
    }

  }

  @media(max-width: 803px){
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }


`