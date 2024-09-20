import React from 'react';
import {Text, View, StyleSheet ,useColorScheme, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const LotsOfGreetings = () => {
  

  return (
    <SafeAreaView>
      <View style={[styles.center, {top: 50}]}>
      <Text>  Thulasi</Text>
    </View>
    </SafeAreaView>
    
  );
};

export default LotsOfGreetings;