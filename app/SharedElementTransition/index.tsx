import {
  Animated,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TripCard from './components/TripCard';

export interface TripType {
  id: number;
  name: string;
  daysLeft: number;
  image: ImageSourcePropType;
}

const data: TripType[] = [
  {
    id: 1,
    name: 'Krabi, Thailand',
    daysLeft: 9,
    image: require('./assets/thailand.jpg'),
  },
  {
    id: 2,
    name: 'Bucharest, Romania',
    daysLeft: 12,
    image: require('./assets/bucharest.jpg'),
  },
  {
    id: 3,
    name: 'Krabi, Thailand',
    daysLeft: 9,
    image: require('./assets/thailand.jpg'),
  },
  {
    id: 4,
    name: 'Bucharest, Romania',
    daysLeft: 12,
    image: require('./assets/bucharest.jpg'),
  },
];

const SharedElementTransition = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TRIPS</Text>
      <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((trip: TripType) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default SharedElementTransition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 18,
    marginLeft: 18,
  },
});
