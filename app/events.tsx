import { View, Text, Pressable , Button } from "react-native";
import React from "react";
import { useState } from "react";

const Events = () => {
  const [data, setData] = useState(0);
  return (
    <View>
      <Text>{data}</Text>
      <Pressable
        style={{ padding: 10, marginTop: 10, backgroundColor: "pink" }}
        onPress={() => setData((prev) => prev + 1)}
      >
        <Text>Click to Add</Text>
      </Pressable>
      <Button title="Decrement" onPress={() => setData((prev) => prev - 1)} />
    </View>
  );
};

export default Events;
