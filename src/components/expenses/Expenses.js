import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpenesListLogic from './ExpenesListLogic';
import ExpensesChart from './ExpensesChart';

export default function Expenses({items}) {
  const currentDate = new Date()
  const [filteredYear, setFilteredYear] = useState(currentDate.getFullYear())

  //accessing child props
  const filterChangeHaldler = selectedYear => {
    setFilteredYear(selectedYear)
    console.log(filteredYear);
  }

  // filtering items by their date
  const filteredItem = items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })


  return (
    <div className='expense'>
      <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} 
        onChangeFilter={filterChangeHaldler}/>

        <ExpensesChart expenses={filteredItem}/>
        {/* Displaying the filtered content */}
        {/* { filterCheck } */}
        <ExpenesListLogic filteredItem={filteredItem}/>
      </Card>
    </div>
  );
}