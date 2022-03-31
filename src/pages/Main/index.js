import React from 'react';
import { SafeAreaView } from 'react-native';

import ButtonCart from '../../../src/components/ButtonCart'; 
import Header from '../../../src/components/Header';
import Product from '../../../src/components/Product';

export default function Main() {
 return (
    <SafeAreaView>
        <Header title="Consoles"/>
        <Product 
        name="Xbox Series X"
        description="Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit."
        price="R$ 4.0000,00"
        />
        <ButtonCart/>
    </SafeAreaView>
  );
}