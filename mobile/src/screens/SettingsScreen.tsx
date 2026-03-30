import { StyleSheet, Text, View } from 'react-native';

import { API_BASE_URL } from '../services/apiClient';
import { APP_NAME } from '../utils/constants';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Application</Text>
        <Text style={styles.value}>{APP_NAME}</Text>
        <Text style={styles.label}>API Base URL</Text>
        <Text style={styles.value}>{API_BASE_URL}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  value: { fontSize: 16, color: '#111827' },
});
