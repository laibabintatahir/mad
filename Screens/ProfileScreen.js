import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const UserProfileScreen = ({ navigation }) => {
  // Dummy data for previous orders
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(() => {
    // Fetch user's previous orders from your backend or storage
    // For demonstration, using static data here

    const dummyOrders = [
      {
        id: "1",
        service: "Wash and Fold",
        date: "2023-01-10",
        total: "$10.00",
      },
      { id: "2", service: "Dry Cleaning", date: "2023-01-15", total: "$10.00" },
    ];

    setPreviousOrders(dummyOrders);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderService}>{item.service}</Text>
      <Text style={styles.orderDate}>Date: {item.date}</Text>
      <Text style={styles.orderTotal}>Total: {item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/back.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>User Profile</Text>
        {/* name , email from firebase */}

        <Text style={styles.userInfo}>Alice Sun</Text>
        <Text style={styles.userInfo}>alicesun@gmail.com</Text>

        <Text style={styles.ordersTitle}>Previous Orders</Text>
        <FlatList
          data={previousOrders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start", // Align content at the top
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 8,
    color: "#953553",
  },
  ordersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
    color: "black",
  },
  orderItem: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  orderService: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#953553",
  },
  orderDate: {
    fontSize: 16,
    color: "#333",
  },
  orderTotal: {
    fontSize: 16,
    color: "#333",
  },
});

export default UserProfileScreen;
