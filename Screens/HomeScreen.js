import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const boxesData = [
    {
      id: '1',
      name: 'Explore Services',
      image: require('../assets/services.jpg'),
      screen: 'ServicesScreen',
      description: 'Convenient laundry services for everyday clothes.',
    },
    {
      id: '2',
      name: 'Help Center',
      image: require('../assets/faqs.webp'),
      screen: 'FAQScreen',
      description: 'Get answers to FAQs about our services.',
    },
    {
      id: '3',
      name: 'Give Feedback',
      image: require('../assets/feedback_icon.png'),
      screen: 'FeedbackScreen',
      description: 'Share your thoughts with us.',
    },
    {
      id: '4',
      name: 'Your Profile',
      image: require('../assets/profile_icon.png'),
      screen: 'ProfileScreen',
      description: 'Manage your profile and view order history.',
    },
  ];
  

  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  const renderBox = ({ item }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigateToScreen(item.screen)}
    >
      <Image source={item.image} style={styles.boxImage} />
      <Text style={styles.boxText}>{item.name}</Text>
      <Text style={styles.Description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.boxContainer}>
      <Image source={require("../assets/back.jpg")} style={styles.coverImage} />
      <Text style={styles.welcomeText}>Welcome to Our Laundry</Text>
      {boxesData.map((item) => renderBox({ item }))}
    </View>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  boxContainer: {
    width: "100%",
  },
  Description: {
    fontSize: 16,
    color: "#333",
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow boxes to wrap to the next line
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },

  box: {
    width: '45%', // Adjust the width as needed based on your design
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  boxImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  boxText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#953553",
  },

  container: {
    flex: 1,
    padding: 16,
  },

  Description: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
