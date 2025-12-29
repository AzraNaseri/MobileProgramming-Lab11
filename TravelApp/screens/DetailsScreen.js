import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  const message =
    rating === 5 ? "⭐ Top pick! You're going to love it." : '✅ Great choice — enjoy your trip!';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.text}>Rating: {rating} / 5</Text>
      <Text style={styles.text}>{message}</Text>

      <View style={{ marginTop: 18, width: 180 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginTop: 6, textAlign: 'center' },
});
