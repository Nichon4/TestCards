import React from 'react'
import styled from 'styled-components'

const wideWidth = (number) => ( window.innerWidth - number*60 - 60 );

const CardBody = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: ${ props => props.number*60 + "px"};
  box-shadow: 0 0 5px;
  background-color: white;
  width: ${ props => props.type === "wide" ? wideWidth(props.number) : "400" }px;
  max-width: 960px;
  height: calc(100vh - 40px);
  margin: 20px 30px;
  vertical-align: middle;
  text-align: center;
`;

const CardNumber = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;
  width: 40px;
  border: 5px solid black;
  border-radius: 40px;
`;

const CardText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  margin: auto auto;
`;


const StyledCard = ({onClick, number, type}) => {

  return (
    <CardBody
      onClick={onClick}
      type={type}
      number={number} >
      <CardNumber/>
      <CardText>{ number + 1 }</CardText>
    </CardBody>
  );
};

export default StyledCard;