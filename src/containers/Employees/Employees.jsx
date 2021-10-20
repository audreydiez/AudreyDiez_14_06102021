import './Employees.scss'

import DataTables from 'datatables-plugin-react'
import 'assets/styles/datatables.scss'

import moment from 'moment'

const labels = [
    { text: 'First Name', value: 'firstName' },
    { text: 'Last Name', value: 'lastName' },
    { text: 'Start Date', value: 'startDate' },
    { text: 'Department', value: 'department' },
    { text: 'Date of Birth', value: 'birthdate' },
    { text: 'Street', value: 'street' },
    { text: 'City', value: 'city' },
    { text: 'State', value: 'state' },
    { text: 'Zip Code', value: 'zipCode' }
]

function Employees() {
    let employeesData = JSON.parse(localStorage.getItem('employees')) || []

    employeesData = employeesData.map((employee) => ({
        ...employee,
        startDate: moment(employee.startDate).format('MM/DD/yyyy'),
        birthdate: moment(employee.birthdate).format('MM/DD/yyyy')
    }))

    return (
        <main className="main">
            Employees
            <DataTables labels={labels} data={employeesData} />
        </main>
    )
}

export default Employees
