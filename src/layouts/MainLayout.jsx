import React from "react";
import { View, StyleSheet } from "react-native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <Heading />
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });
  
  export default MainLayout;