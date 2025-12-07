import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleRegister = () => {
    if (!email || !password || !passwordRepeat) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== passwordRepeat) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }

    console.log("Kayıt başarılı:", { email, password });
    Alert.alert("Başarılı", "Kayıt başarılı!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomInput
        placeholder="Şifre Tekrar"
        value={passwordRepeat}
        onChangeText={setPasswordRepeat}
        secureTextEntry
      />

      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
});
