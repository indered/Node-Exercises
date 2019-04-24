import styled from "styled-components";

let StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  text-align: center;
  box-sizing: border-box;
  padding: 2px;

  input[type="text"] {
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 60%;
    height: 30px;
    padding: 10px;
    outline: none;
    border-style: none;
  }
  & ul {
    width: 60%;

    padding: 10px;
  }
  li {
    list-style: none;
    color: black;
    padding: 10px;
    background: rgb(0, 0, 0, 0.2);
  }
  li:nth-child(odd) {
    background: white;
  }

  .data {
    position: absolute;
    top: 50px;
  }
`;
export { StyledSearchBar };
