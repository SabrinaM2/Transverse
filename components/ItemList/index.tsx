import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

interface ItemListProps {
  list: {
    id: String,
    title: String,
    createdAt: String,
  }
}

const ItemList = ({ list }: ItemListProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="list-alt" size={24} color="black" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.title}>{list.title}</Text>
        <Text style={styles.time}>{list.createdAt}</Text>
      </View>
    </View>
  )
}

export default ItemList;
