import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique',
        fontWeight: 'bold',
        // textDecorationLine: 'underline', 
    },
  });


  const BillTo = ({invoice}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>Company: {invoice.company}</Text>
        <Text>Address:   {invoice.address}</Text>
        <Text>Phone:      {invoice.phone}</Text>
        <Text>Email:        {invoice.email}</Text>
    </View>
  );
  
  export default BillTo