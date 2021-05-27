import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export default function Product({image, name, brand, allergens, trace}) {
    
    const presence = () => {
        return trace;
    }

    return (
        <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{brand}</Text>
                <Image style={{width: 150, height: 150}} 
                    source={{
                        uri: `${image}` 
                      }}
                    resizeMode="center"
                />

                {!presence() && <Text>Ce produit ne contient pas d'allergènes.</Text>}
                {presence() && <Text>Attention, ce produit contient les allergènes suivants:</Text>}

                <Text>{allergens}</Text>
        </View>
    )
}

