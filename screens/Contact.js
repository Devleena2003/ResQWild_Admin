import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import Contacts from '../assets/Contacts'
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const ContactCard = (props) => {
  const { name, no } = props;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight : 'bold', color : '#1e5128' }}>{name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 16, marginRight: 10 }} selectable>{no}</Text>
        <TouchableOpacity onPress={()=>Linking.openURL(`tel:${no}`)}>
          <Ionicons name="call" size={24} color="#1e5128" style={{marginRight : 10}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL(`sms:${no}`)}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#1e5128" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newVolunteerName, setNewVolunteerName] = useState("");
  const [newVolunteerContact, setNewVolunteerContact] = useState("");

  const handleAddVolunteer = () => {
    // login to update in both server side and client side
    setModalVisible(false);
  };

  return (
    <View>
      <FlatList
        data={Contacts}
        renderItem={({ item }) => <ContactCard name={item.name} no={item.no} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnText}>Add Volunteer</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Add Volunteer</Text>
          <TextInput
            placeholder="Name"
            value={newVolunteerName}
            onChangeText={setNewVolunteerName}
            style={styles.modalTextInput}
          />
          <TextInput
            placeholder="Contact No."
            value={newVolunteerContact}
            onChangeText={setNewVolunteerContact}
            keyboardType="phone-pad"
            style={styles.modalTextInput}
          />
          <View style={styles.modalButtonRow}>
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="#1e5128"
            />
            <Button
              title="Add"
              onPress={handleAddVolunteer}
              color="#1e5128"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    marginTop: '40%',
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
    borderColor: '#1e5128',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    marginTop: 20,
  },
});

export default Contact;
