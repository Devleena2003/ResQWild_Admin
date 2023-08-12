import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const Volunteers = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const VolunteerCard = (props) => {
    const { name, no } = props;
    return (
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.container}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#1e5128" }}
            >
              {name}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginRight: 10 }} selectable>
                {no}
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL(`tel:${no}`)}>
                <Ionicons
                  name="call"
                  size={24}
                  color="#1e5128"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(`sms:${no}`)}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={24}
                  color="#1e5128"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{name}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate("Reports")}
              >
                <Text style={styles.textStyle}>Assign</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  const Contacts = [
    {
      id: 1,
      name: "Volunteer 1",
      no: 1234567890,
    },
    {
      id: 2,
      name: "Volunteer 2",
      no: 1234567890,
    },
    {
      id: 3,
      name: "Volunteer 3",
      no: 1234567890,
    },
  ];
  return (
    <View>
      <FlatList
        data={Contacts}
        renderItem={({ item }) => <VolunteerCard name={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Volunteers;
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#1e5128",
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  btn: {
    padding: 15,
    backgroundColor: "#1e5128",
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  btnText: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  modalView: {
    margin: 20,
    marginTop: "40%",
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
  modalTextInput: {
    borderWidth: 2,
    borderColor: "#1e5128",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#1E5128",
  },
  buttonClose: {
    backgroundColor: "#1E5128",
  },
  textStyle: {
    color: "#E5D9B6",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
