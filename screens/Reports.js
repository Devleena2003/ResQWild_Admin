import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { getAllReport } from "../services/api.reports";
const ReportCard = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const res = await getAllReport();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: 25, color: "#1e5128", fontWeight: "bold" }}
        ></Text>
        <Text style={{ fontSize: 15, color: "#1e5128" }}></Text>
      </View>
      <Text style={{ fontSize: 17 }}>Reported by </Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.btnText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            borderColor: "#1e5128",
            width: "50%",
            borderWidth: 2,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.navigate("Volunteers");
          }}
        >
          <Text
            style={{
              color: "#1e5128",
              alignSelf: "center",
              fontSize: 15,

              fontWeight: "bold",
            }}
          >
            Assign
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={async () => {
          Alert.alert("Modal has been closed.");
          await setModalVisible(!modalVisible);
          await handleReport();
        }}
      >
        <View style={styles.modalView}>
          <Text>title</Text>
          <Text style={{ fontSize: 17 }}>des</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

// const Reports = () => {
//   return (
//     <View>
//       <FlatList
//         data={ReportsData}
//         renderItem={({ item }) => (
//           <ReportCard
//             title={item.title}
//             time={item.time}
//             user={item.user}
//             desc={item.desc}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

export default ReportCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5d9b6",
    padding: 20,
    width: "90%",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
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
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  modalView: {
    width: "95%",
    backgroundColor: "#9ac991",
    borderRadius: 20,
    padding: 20,
    alignSelf: "center",
    marginTop: "50%",
  },
});
