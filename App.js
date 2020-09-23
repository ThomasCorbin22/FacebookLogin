/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.MainContainer}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text h1 style={styles.facebook}>facebook</Text>
            <View style={styles.sectionContainer}>
              <TextInput style={styles.input}
                placeholder='Mobile number or email address'
              />
              <TextInput style={styles.input}
                placeholder='Password'
              />
              <View style={styles.button}>
                <Button
                  title="Log in"
                  color="#4080ff"
                />
              </View>
              <Text style={styles.text}>-------------------------------------------- or --------------------------------------------</Text>
              <View style={styles.button}>
                <Button
                  title="Create New Account"
                  color="#00a400"
                />
              </View>
              <Text style={styles.text}>Forgotten password?</Text>
            </View>
            <View style={styles.languages}>
              <View style={styles.text}>
                <Text style={styles.center}>English (UK)</Text>
                <Text style={styles.center}>Bahasa Indonesia</Text>
                <Text style={styles.center}>Português (Brasil)</Text>
                <Text style={styles.center}>Deutsch</Text>
              </View>
              <View style={[styles.text, styles.flexCenter]}>
                <Text style={styles.center}>中文(香港)</Text>
                <Text style={styles.center}>Español</Text>
                <Text style={styles.center}>Français (France)</Text>
                <TouchableOpacity style={styles.buttonMore} >
                  <Text style={styles.center} >+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.text}>Facebook Inc</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  facebook: {
    color: Colors.white,
    backgroundColor: '#3b5998',
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 20
  },
  input: {
    backgroundColor: '#f5f6f7',
    paddingHorizontal: 12
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  button: {
    marginTop: 24,
  },
  body: {
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: 'center',
    marginTop: 12
  },
  languages: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonMore: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 20,
    borderRadius: 2
  },
  center: {
    textAlign: 'center'
  },
  flexCenter: {
    alignItems: 'center'
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    margin: 0
    }
});

export default App;