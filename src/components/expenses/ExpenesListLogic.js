import ExpenseItem from "./ExpenseItems";
import './ExpenesListLogic.css'

export default function ExpenesListLogic({filteredItem}) {
    if (filteredItem.length === 0 ) {
       return <h2 className='expensesList__fallback'>No expenses found</h2>
    }

    return (
        <ul className="expensesList">
            {
            filteredItem.map
                ((item, index) => {
                return (
                  <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                  />
                )
              })}
        </ul>
    )}