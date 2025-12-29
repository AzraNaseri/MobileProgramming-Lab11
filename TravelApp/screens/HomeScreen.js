import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Guide</Text>

      <View style={styles.btn}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Go to Istanbul"
          onPress={() => navigation.navigate('Details', { place: 'Istanbul', rating: 5 })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  btn: { width: 220, marginVertical: 8 },
});
