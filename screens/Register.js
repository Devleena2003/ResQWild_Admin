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
import { signUpUser } from "../services/api.auth";
const Register = ({ navigation }) => {
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [show, setShow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [orgName, setorgName] = useState("");
  const [orgLocation, setorgLocation] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const register = async () => {
    try {
      const req = {
        orgName: orgName,
        orgLocation: orgLocation,
        phoneNumber: phoneNumber,

        email: email,
        password: password,
      };
      const res = await signUpUser(req);
      navigation.navigate("Home");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Organization Name</Text>
        <TextInput style={styles.input} onChangeText={setname} value={name} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Organization Location</Text>
        <TextInput
          style={styles.input}
          onChangeText={setlocation}
          value={location}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Organization Email</Text>
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
      <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Organization Contact Number</Text>
        <TextInput
          style={styles.input}
          onChangeText={setcontact}
          value={contact}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={register}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15 }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontSize: 15, color: "#1e5128", fontWeight: "bold" }}>
            Login
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
    fontSize: 25,
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

export default Register;
