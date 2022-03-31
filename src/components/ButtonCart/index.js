import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

export default function ButtonCart() {
 return (
    <View style={styles.cartArea}>
        <Button
        title="Adicionar ao carrinho"
        color="#007AFF"
        accessibilityLabel="Adicionar ao carrinho"
        />
    </View>
  );
}