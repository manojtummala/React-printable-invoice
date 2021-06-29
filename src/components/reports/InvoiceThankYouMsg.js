import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
        
    },
    reportTitle:{
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    reportstatement:{
        fontSize: 10,
        textAlign: 'center',
        // textTransform: 'lowercase',
    }
  });


  const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        {/* <Text style={styles.reportTitle}>Thank you for your business</Text> */}
        <Text style={styles.reportstatement}>This is just a sample invoice genertaed with random jason data.</Text>
    </View>
  );
  
  export default InvoiceThankYouMsg