/*eslint linebreak-style: ["error", "windows"]*/
// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textstyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textstyle}>{props.headerText}</Text>
  </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textstyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the App
export { Header };
