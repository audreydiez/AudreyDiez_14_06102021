import './Employees.scss'

import DataTables from 'datatables-plugin-react'
import 'assets/styles/datatables.scss'

import { dataTableLabels } from 'assets/data/data'

import moment from 'moment'

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
            <DataTables labels={dataTableLabels} data={employeesData} />
        </main>
    )
}

export default Employees
