import styled from "styled-components";

const Main = styled.div`
  position: relative;
  margin: 20px 0;
  label {
    position: absolute;
    top: 30%;
    left: 5px;
    transform: translateY(-35%);
    font-size: 14px;
    color: #000;
    padding: 0 5px;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  input {
    width: 320px;
    height: 40px;
    font-size: 16px;
    color: #000;
    padding: 0 10px;
    background: transparent;
    border: 1.2px solid #000;
    outline: none;
    border-radius: 5px;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: 0;
    font-size: 12px;
    background-color: #fff;
  }

  .message-error {
    color: red;
    font-size: 12px;
    text-align: left;
  }
`;
export default Main;
