// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View, Pressable } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
        },
        styles.wrapperCustom,
      ]}>
      {({ pressed }) => (
        <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
      )}
    </Pressable>
    <View style={styles.logBox}>
      <Text testID="pressable_press_console">{title}</Text>
    </View>
  </View>
);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Easy',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Medium',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hard',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Saved'
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>MPSC Sarathi</Text>
      </View>
      <View>
        <Text style={styles.header}>icon Bookmarks</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
      />
      <View>
        <Text style={styles.header}>icon Categpries</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
  },
});
