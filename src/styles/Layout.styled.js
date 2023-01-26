import styled from "styled-components";

export const Style = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #333;

  /* border: 5px solid; */

  /* 
  <section>
      <div className="content">
        <h1>Home</h1>
      </div>
  </section>
  */

  > section {
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border: 5px solid coral;

    .content {
      padding: 30px;
      border: 1px dashed;

      .links {
        margin: 20px 0 20px 0;
      }

      a {
        display: block;
      }
    }
  }
`;
