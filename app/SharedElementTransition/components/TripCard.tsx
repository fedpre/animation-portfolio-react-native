import { StyleSheet, Text, View, Image } from 'react-native';
import React, { FC, useCallback } from 'react';
import { TripType } from '..';
import Animated from 'react-native-reanimated';
import { Link, router } from 'expo-router';

type TripCardProps = {
  trip: TripType;
};

const TripCard: FC<TripCardProps> = ({ trip }) => {
  const { name, daysLeft, image } = trip;

  const handleOpenDetailScreen = useCallback(() => {
    router.push('/SharedElementTransition/SharedElementTransitionDetail');
  }, []);

  return (
    <Animated.View style={styles.card} onTouchEnd={handleOpenDetailScreen}>
      <Animated.Image
        source={image}
        sharedTransitionTag="backgroundImage"
        style={{
          flex: 1,
          borderRadius: 12,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.floatingView}>
        <Text style={styles.dayNumber}>{daysLeft}</Text>
        <Text style={styles.daysText}>days</Text>
      </View>
    </Animated.View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  card: {
    width: 230,
    height: 350,
    backgroundColor: 'teal',
    margin: 18,
    borderRadius: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    marginTop: 18,
    marginLeft: 18,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  floatingView: {
    position: 'absolute',
    bottom: 18,
    left: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 55,
    aspectRatio: 1,
    backgroundColor: 'salmon',
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  daysText: {
    fontSize: 10,
    fontWeight: '800',
    color: 'white',
  },
});
