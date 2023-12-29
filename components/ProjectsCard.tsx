import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useCallback } from 'react';
import { Project } from '../model/Project';
import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/build/Ionicons';

type Props = {
  project: Project;
};

const ProjectsCard: FC<Props> = ({ project }) => {
  const { title, date, detailView } = project;

  return (
    <Link href={`/${detailView}`} asChild>
      <Pressable>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </View>
      </Pressable>
    </Link>
  );
};

export default ProjectsCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
    marginTop: 4,
  },
});
