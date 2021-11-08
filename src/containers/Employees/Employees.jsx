import './Employees.scss'

import DataTables from 'datatables-plugin-react'
import 'assets/styles/datatables_overrided.scss'

import { dataTableLabels } from 'assets/data/data'

import moment from 'moment'
import HeaderTitle from 'components/HeaderTitle/HeaderTitle'
import { useEffect, useState } from 'react'

import { mockEmployees } from 'assets/data/mock_user'

function Employees() {
    const [employeesList, setEmployeesList] = useState([])
    const [key, setKey] = useState([])

    const clearLocalStorage = () => {
        localStorage.clear()
        setEmployeesList([])
        setKey(key + 1)
    }

    const populateLocalStorage = () => {
        localStorage.clear()
        localStorage.setItem('employees', JSON.stringify(mockEmployees))
        setEmployeesList(mockEmployees)
        setKey(key + 1)
    }

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
            <button className="btn-submit" onClick={clearLocalStorage}>
                Clear localStorage
            </button>
            <br />
            <button className="btn-submit" onClick={populateLocalStorage}>
                Populate localStorage
            </button>
        </>
    )
}

export default Employees
