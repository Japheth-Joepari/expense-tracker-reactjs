import Chart from '../chart/Chart'

export default function ExpensesChart({expenses}) {
    const ChartDataPoints = [
        {label: 'Jan',  value : 0},
        {label: 'Feb',  value : 0},
        {label: 'Mar',  value : 0},
        {label: 'Apr',  value : 0},
        {label: 'May',  value : 0},
        {label: 'Jun',  value : 0},
        {label: 'Jul',  value : 0},
        {label: 'Aug',  value : 0},
        {label: 'Sep',  value : 0},
        {label: 'Oct',  value : 0},
        {label: 'Nov',  value : 0},
        {label: 'Dec',  value : 0},
    ]

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        ChartDataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints={ChartDataPoints}/>
}