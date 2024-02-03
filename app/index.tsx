import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { projectsData } from '../data/ProjectsData';
import ProjectsCard from '../components/ProjectsCard';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { SlideInLeft } from 'react-native-reanimated';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#111' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Animation Projects</Text>
        <Animated.FlatList
          data={projectsData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <ProjectsCard index={index} project={item} />
          )}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 12 }} />}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#111',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    marginVertical: 16,
  },
});
