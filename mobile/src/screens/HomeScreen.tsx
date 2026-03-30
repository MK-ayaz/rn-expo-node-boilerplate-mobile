import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTasks } from '../hooks/useTasks';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { data, isLoading, isError, refetch } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks</Text>
      {isLoading ? (
        <Text>Loading tasks...</Text>
      ) : isError ? (
        <Text>Failed to load tasks. Try again.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(task) => task.id}
          renderItem={({ item }) => (
            <Text style={styles.taskItem}>{item.title}</Text>
          )}
          refreshing={false}
          onRefresh={refetch}
          style={styles.list}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
  list: { marginBottom: 24 },
  taskItem: { fontSize: 18, marginVertical: 8 },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});
