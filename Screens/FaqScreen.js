import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const FAQScreen = () => {
  const faqData = [
    {
      question: "How can I schedule a pickup?",
      answer:
        'You can schedule a pickup by navigating to the "Schedule Pickup" section in the app and choosing your preferred date and time.',
    },
    {
      question: "How long does the laundry process take?",
      answer:
        "The duration of the laundry process depends on the type of service you choose. We provide estimated processing times for each service in the app. You can also track the progress in the 'Order History' section.",
    },
    {
      question: "How do I track the status of my order?",
      answer:
        'You can track the status of your order in the "Order History" section of the app. We provide real-time updates on the processing of your laundry.',
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards and digital wallets. You can securely pay for your services through the app.",
    },
    {
      question: "How do I track the status of my order?",
      answer:
        'You can track the status of your order in the "Order History" section of the app. We provide real-time updates on the processing of your laundry.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ImageBackground
      source={require("../assets/back.jpg")}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>FAQ / Help Center</Text>

        {faqData.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => toggleAnswer(index)}
          >
            <View
              style={[
                styles.faqItem,
                expandedIndex === index && styles.faqItemExpanded,
              ]}
            >
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{item.question}</Text>
                <Icon
                  name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                  size={14}
                  color="#770737"
                />
              </View>
              {expandedIndex === index && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background to enhance readability
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff", // White text color
  },
  faqItem: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  faqItemExpanded: {
    backgroundColor: "#E6E6FA", // Light background when expanded
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#770737", // color for the question
  },
  answer: {
    fontSize: 16,
    color: "#333",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default FAQScreen;
