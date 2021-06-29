import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'
import invoiceData from './data/invoice-data'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer width="1730" height="1000" className="app" >
                <Invoice invoice={invoiceData}/>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default App;