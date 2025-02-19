import { Text, View, TextInput, Button, Pressable } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to react-native</Text>
      <TextInput value="Akshita" placeholder="Enter your name" />
      <Pressable>
        <Text>Create Group</Text>
      </Pressable>
      <Button
        title="Click button"
        onPress={() => console.log("Group created")}
      />
    </View>
  );
}
