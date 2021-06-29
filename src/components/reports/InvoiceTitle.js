import React , { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    Container:{
        flexDirection: 'row',
        marginTop: 6,
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
  });


  const InvoiceTitle = ({title}) => (
      <Fragment>
        <View style={styles.titleContainer}>
            <Text style={styles.reportTitle}>Electronic Store</Text>
        </View>
        <View style={styles.Container}>
            <Text style={styles.reportTitle}>{title}</Text>
        </View>
      </Fragment>
  );
  
  export default InvoiceTitle