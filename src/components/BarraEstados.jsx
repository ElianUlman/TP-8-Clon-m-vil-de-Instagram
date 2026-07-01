import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import Estado from './Estado';


export default function BarraEstados(props) {
  console.log("props:", props);
  console.log("userList:", props.userList);
  console.log("isArray:", Array.isArray(props.userList));

  if (!Array.isArray(props.userList)) {
    return <Text>Not an array</Text>;
  }

  return (
    <>
      {props.userList.map((element) => (
        <Estado key={element.id} user={element} />
      ))}
    </>
  );
}