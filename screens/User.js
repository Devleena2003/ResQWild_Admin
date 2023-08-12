import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Activities from "../assets/Activities";
import Activity from "../components/Activity";

const User = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [location, setLocation] = useState("New York");
  const [contactNo, setContactNo] = useState("123-456-7890");
  const [modalVisible, setModalVisible] = useState(false);
  const [fieldToUpdate, setFieldToUpdate] = useState("");

  const handleUpdate = (value) => {
    // switch (fieldToUpdate) {
    //   case "Email":
    //     setEmail(value);
    //     break;
    //   case "Password":
    //     setPassword(value);
    //     break;
    //   case "Location":
    //     setLocation(value);
    //     break;
    //   case "Contact No.":
    //     setContactNo(value);
    //     break;
    //   default:
    //     break;
    // }
    setModalVisible(false);
  };

  return (
    <View>
      <Image
        source={require("../assets/org.png")}
        resizeMode="contain"
        style={styles.profileIcon}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#1e5128",
          alignSelf: "center",
        }}
      >
        Org Name
      </Text>
      <View style={styles.fieldsRow}>
        <TouchableOpacity
          style={styles.fields}
          onPress={() => {
            setFieldToUpdate("Email");
            setModalVisible(true);
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Email</Text>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fields}
          onPress={() => {
            setFieldToUpdate("Location");
            setModalVisible(true);
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Location</Text>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldsRow}>
        <TouchableOpacity
          style={styles.fields}
          onPress={() => {
            setFieldToUpdate("Password");
            setModalVisible(true);
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Password</Text>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fields}
          onPress={() => {
            setFieldToUpdate("Contact No.");
            setModalVisible(true);
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Contact No.</Text>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#1e5128",
          alignSelf: "center",
          marginBottom: 20,
          marginTop: 35,
        }}
      >
        Activities
      </Text>
      {Activities.map((e) => {
        return <Activity data={e.data} time={e.time} key={e.id} />;
      })}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Edit {fieldToUpdate}</Text>
          <TextInput
            value={
              fieldToUpdate === "Email"
                ? email
                : fieldToUpdate === "Password"
                ? password
                : fieldToUpdate === "Location"
                ? location
                : contactNo
            }
            onChangeText={(value) => {
              switch (fieldToUpdate) {
                case "Email":
                  setEmail(value);
                  break;
                case "Password":
                  setPassword(value);
                  break;
                case "Location":
                  setLocation(value);
                  break;
                case "Contact No.":
                  setContactNo(value);
                  break;
                default:
                  break;
              }
            }}
            style={styles.modalTextInput}
          />
          <View style={{flexDirection : 'row', justifyContent : 'space-between', width : '55%', marginTop : 20}}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} color='#1e5128'/>
            <Button title="Update" onPress={() => handleUpdate()} color='#1e5128'/>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    height: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  fields: {
    backgroundColor: "#9ac991",
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
  },
  fieldsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    marginTop : '50%',
    backgroundColor: "#e5d9b6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTextInput : {
    borderWidth : 2,
    borderColor : '#1e5128',
    width : '100%',
    paddingHorizontal : 15,
    paddingVertical : 10,
    borderRadius : 20
  },
  modalHeader : {
    fontSize : 20,
    fontWeight : 'bold',
    marginBottom : 15
  }
});

export default User;
