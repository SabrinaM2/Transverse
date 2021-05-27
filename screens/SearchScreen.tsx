import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Product from '../components/Product';
import { FontAwesome } from '@expo/vector-icons';
import { createProduct } from '../src/graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import style from '../navigation/style';

export default function SearchScreen() {

    const [condition, setCondition] = useState({affichage: false});
    const [searchInput, setInput] = useState('');
    const [productInfo, setProductInfo] = useState({
        image: "",
        name: "",
        brand: "", 
        allergens: "",
    });

    const handleSend = () => {
        setCondition({affichage: true});
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${searchInput}.json`)
        .then ((response) => response.json())
        .then ((responseJson) => {
            setProductInfo({
                image: responseJson.product.image_front_url,
                name: responseJson.product.generic_name_fr,
                brand: responseJson.product.brands, 
                allergens: responseJson.product.allergens_from_ingredients,
            })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    const display = () => {
        return condition.affichage===true;
    }

    const presenceTrace = () => {
        if(productInfo.allergens === "")
            return false;
        else
            return true;
    }

    return (
        <View style={styles.Container}>
            <View style={styles.searchbar}>
                <Searchbar
                    placeholder="Tapez le code barre..."
                    onChangeText={(input) => setInput(input)}
                    value={searchInput}
                    onIconPress={handleSend}
                />
            </View>
        
            
                
            
            <View style={styles.result}>
                {display() && <Product 
                    image={productInfo.image} 
                    name={productInfo.name} 
                    brand={productInfo.brand} 
                    allergens={productInfo.allergens}
                    trace={presenceTrace()}
                />}
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    message: {
        marginBottom: 12,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },

    searchbar:{
        marginTop: 30,
        marginBottom: 30, 
        width: '100%'
    },

    result: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: 34
    },

})