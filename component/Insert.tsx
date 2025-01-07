import { View, Text } from "react-native";
import React from "react";
interface name {
  name: string;
}
const Insert: React.FC<name> = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
      <View><Text>Akshita Thakur</Text></View>
    </View>
  );
};

export default Insert;
