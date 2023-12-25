import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [hoveredBox, setHoveredBox] = useState(null);

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
    <TouchableHighlight
      style={[styles.box, item.id === hoveredBox && styles.hoveredBox]}
      onPress={() => navigateToScreen(item.screen)}
      onHideUnderlay={() => setHoveredBox(null)}
      onShowUnderlay={() => setHoveredBox(item.id)}
    >
      <>
        <Image source={item.image} style={styles.boxImage} />
        <Text style={styles.boxText}>{item.name}</Text>
        <Text style={styles.Description}>{item.description}</Text>
      </>
    </TouchableHighlight>
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  box: {
    width: '45%',
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor:'#BDB5D5',
  },
  hoveredBox: {
    backgroundColor: '#D3D3D3', 
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
});

export default HomeScreen;
