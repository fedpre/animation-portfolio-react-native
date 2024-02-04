import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { projectsData } from '../data/ProjectsData';
import ProjectsCard from '../components/ProjectsCard';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import { getRandomColor } from './utils/colors';

export default function Home() {
  const { width, height } = useWindowDimensions();
  const leftColor = useSharedValue('red');
  const rightColor = useSharedValue('blue');

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, [leftColor, rightColor]);

  return (
    <>
      <StatusBar />
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas>
      <View
        style={{
          position: 'absolute',
          top: 80,
          left: 20,
          width: '90%',
          flex: 1,
        }}
      >
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
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          leftColor.value = withTiming(getRandomColor());
          rightColor.value = withTiming(getRandomColor());
        }}
      >
        <FontAwesome name="random" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    padding: 24,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    marginVertical: 16,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 52,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: '#111',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
