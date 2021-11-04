import './Employees.scss'

import DataTables from 'datatables-plugin-react'
import 'assets/styles/datatables_overrided.scss'

import { dataTableLabels, departments, statesUSA } from 'assets/data/data'

import moment from 'moment'
import HeaderTitle from 'components/HeaderTitle/HeaderTitle'
import { useEffect, useState } from 'react'

function Employees() {
    const [employeesList, setEmployeesList] = useState([])
    const [key, setKey] = useState([])

    useEffect(() => {
        let employees = JSON.parse(localStorage.getItem('employees')) || []

        employees = employees.map((employee) => ({
            ...employee,
            startDate: moment(employee.startDate).format('MM/DD/yyyy'),
            birthdate: moment(employee.birthdate).format('MM/DD/yyyy')
        }))

        setEmployeesList(employees)

        setKey(key + 1)
    }, [])

    return (
        <>
            <HeaderTitle title={'Employees'} />
            <DataTables labels={dataTableLabels} data={employeesList} key={key} />
        </>
    )
}

export default Employees
