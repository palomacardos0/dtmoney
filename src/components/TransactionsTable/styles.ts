import styled from "styled-components";

export const Container = styled.div`
  margin-top:  4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      @media(max-width: 920px){
        padding: 0 2rem ;
      }
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--text-title);
      }

      &.deposit{
        color: var(--green)
      }

      &.withdraw{
        color: var(--red)
      }

      @media(max-width: 920px){
        padding: 0.5rem 2rem;

        :first-child{
          padding-top: 1rem ;
        }
        :last-child{
          position:absolute;
          bottom: 0;
          right: 0;
          
        }
      }
    }
  }

  thead{
    tr:nth-child(2){
      display: none;
    }
    @media(max-width: 920px){
      tr{
        :first-child{
          display: none;
        }
        :nth-child(2){
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }

    
  }
  tr{
    
    @media(max-width:920px){
    display: flex;
    flex-direction: column ;
    margin-bottom: 3rem ;
    
    position: relative ;
    margin-bottom: 1rem;
  }






`