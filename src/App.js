import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table/Table';
import FlexTable from './components/flexTable/FlexTable';

const tableData = [[1, 22, 333], [44, 88, 99], [4, 5, 89], [4, 6, 3]];
const header = ['first', 'second', 'third'];

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h2>Компонент &laquo;Таблица&raquo;</h2>
        </div>
         <Table
             data={tableData}
             header={header}
         />
          <FlexTable data={tableData}/>
      </div>
    );
  }
}

export default App;
