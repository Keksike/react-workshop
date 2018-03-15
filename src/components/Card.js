import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 5px 6px #ccc;

  padding: 40px;
  max-width: 600px;
  background: white;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  color: #9C27B0;
`;

const Image = styled.img`
  max-width: 100%;
`;

export default class Card extends React.Component {
  render() {
    return (
      <CardWrapper>
        <Title>{this.props.title}</Title>
        <Image src={this.props.imageUrl}/>
      </CardWrapper>
    )
  }
};
