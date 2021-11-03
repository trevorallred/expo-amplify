import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

// Amplify.configure(amplifyConfig);

export default function AppWrapper() {
  const [error, setError] = useState("");
  async function handleLogin() {
    setError("");
    Auth.signIn("", "")
      .then((result) => {
        setError(JSON.stringify(result));
      })
      .catch((error) => {
        setError(JSON.stringify(error));
      });
  }

  return (
    <View style={{ top: 100, padding: 10 }}>
      <Button title="Sign In" onPress={handleLogin}>
        Sign In
      </Button>
      <Text>{error}</Text>
    </View>
  );
}
