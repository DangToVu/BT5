import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng expo để import icon

const HomeScreen = () => (
  <ImageBackground source={require('./assets/home-bg.jpg')} style={styles.background}>
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  </ImageBackground>
);

const ScanScreen = ({ navigation }) => (
  <ImageBackground source={require('./assets/scan-bg.jpg')} style={styles.background}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <View style={styles.container}>
      <Text>Scan Screen</Text>
    </View>
  </ImageBackground>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
    name="Home" 
    component={HomeScreen} 
    options={{ 
      headerTitle: 'Home Page' }} />
  </Stack.Navigator>
);

const ScanStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Scan" 
      component={ScanScreen} 
      options={{
        headerTitle: 'Scan Page',
      }}
    />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    zIndex: 1, // Đảm bảo nút luôn hiển thị phía trên các thành phần khác
  },
});

export default App;
