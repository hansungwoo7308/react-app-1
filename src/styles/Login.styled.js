import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  height: 700px;
  /* padding: 20px; */
  border: 5px solid coral;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  /* background: rgba(0, 128, 0, 0.2); */
  /* background-color: #007700; */

  section {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* outline: 1px solid blue; */
    > p {
      /* border: 1px solid coral; */
      min-height: 30px;
    }

    * {
    }
  }

  // nothing
  * {
    /* outline: 1px solid; */
    /* background: rgb(0 100 0 / 0.1); */
  }

  // Container > section > children
  > * > :nth-child(n) {
    outline: 1px solid;
    /* padding: 10px; */

    /* > :nth-child(n) {
      border: 1px solid red;
    } */
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
    gap: 10px;
    /* flex-grow: 1; */
    > :nth-child(n) {
      width: 80%;
      /* border: 1px solid red; */
    }
  }

  .instructions {
    background-color: black;
    color: white;
    /* position: relative; */
  }

  .offscreen {
    /* position: absolute;
    left: -9999px; */
    display: none;
  }

  // span tag's state
  .hide {
    display: none;
  }

  .valid {
    color: green;
    margin-left: 10px;
  }

  .invalid {
    color: red;
    margin-left: 10px;
  }

  .errmsg {
    background-color: lightpink;
    color: firebrick;
  }
`;
