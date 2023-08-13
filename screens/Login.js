import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setShow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const login = async () => {
    let req;
    try {
      req = {
        email: email,
        password: password,
      };
      const res = await loginUser(req);
      await SecureStore.setItemAsync("secure_token", res.data.token);
      const token = await SecureStore.getItemAsync("secure_token");
      console.log("token", token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Email</Text>
        <TextInput style={styles.input} onChangeText={setemail} value={email} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Password</Text>

        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={passwordVisible}
          onChangeText={(text) => setpassword(text)}
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => {
            setPasswordVisible(!passwordVisible);
            setShow(!show);
          }}
        >
          <MaterialCommunityIcons
            name={show === false ? "eye-outline" : "eye-off-outline"}
            size={20}
            color={"#0F6408"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#1e5128",
              alignSelf: "flex-end",
              marginTop: 5,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ fontSize: 15, color: "#1e5128", fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
    fontSize: 30,
    color: "#1e5128",
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    // paddingHorizontal : 30,
    alignSelf: "center",
    width: "80%",
    paddingBottom: 20,
  },
  input: {
    width: "100%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#1e5128",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  inputHeader: {
    fontSize: 20,
    color: "#1e5128",
    marginBottom: 10,
  },
  btn: {
    padding: 20,
    backgroundColor: "#1e5128",
    width: "50%",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 20,
  },
  btnText: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  btnEye: {
    position: "absolute",
    right: 25,
    top: 50,
  },
});

export default Login;
