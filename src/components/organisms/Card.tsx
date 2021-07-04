import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  children: any;
}

const CardContainer = styled.View`
  display: flex;
  padding: 20px;
  margin: 10px;
  margin-top: 20px;
  border: 2px solid #f1f7f7;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Card = (props: Props) => {
  const {children} = props;
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

const styles = StyleSheet.create({});
