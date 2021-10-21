import './NewEmployee.scss'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { getMonth, getYear } from 'date-fns'

import Select, { createFilter } from 'react-select'
import { useState } from 'react'

import { statesUSA, departments } from 'assets/data/data'
import { CustomOption, years, months } from 'utils/DatePickerOptions'

const initialStateEmployee = {
    firstName: '',
    lastName: '',
    birthdate: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: statesUSA[0].label,
    zipCode: '',
    department: departments[0].label
}

function NewEmployee() {
    const [newEmployee, setNewEmployee] = useState(initialStateEmployee)

    const formSubmit = (e) => {
        e.preventDefault()
        let employees = JSON.parse(localStorage.getItem('employees')) || []
        employees.push(newEmployee)
        localStorage.setItem('employees', JSON.stringify(employees))
        setNewEmployee(initialStateEmployee)
        console.log(newEmployee)
    }

    const createDatePicker = (inputName) => {
        return (
            <DatePicker
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                }) => (
                    <div
                        style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {'<'}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}>
                            {years.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                            }>
                            {months.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {'>'}
                        </button>
                    </div>
                )}
                selected={newEmployee[inputName]}
                onChange={(date) => {
                    setNewEmployee((state) => ({
                        ...state,
                        [inputName]: date
                    }))
                }}
                dateFormat="MM/dd/yyyy"
            />
        )
    }

    const createInput = (inputType, inputName) => {
        return (
            <input
                type={inputType}
                id={inputName}
                name={inputName}
                value={newEmployee[inputName]}
                onChange={(e) => {
                    setNewEmployee((state) => ({
                        ...state,
                        [e.target.id]: e.target.value
                    }))
                }}
                className="form-input"
            />
        )
    }

    const createSelect = (options, inputName) => {
        return (
            <Select
                filterOption={createFilter({ ignoreAccents: false })}
                options={options}
                components={{ Option: CustomOption }}
                classNamePrefix="custom-select"
                className={'custom-select'}
                onChange={(e) => {
                    setNewEmployee((state) => ({
                        ...state,
                        [inputName]: e.label
                    }))
                }}
                value={{ label: newEmployee[inputName] }}
            />
        )
    }

    return (
        <div className="new-employee">
            <HeaderTitle title="New Employee" />
            <main className="main-new-employee">
                <form action="" className="form-classic" onSubmit={formSubmit}>
                    <div className="row">
                        <div className="row-50">
                            <label htmlFor="firstName" className="form-label">
                                First name
                            </label>
                            {createInput('text', 'firstName')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="lastName" className="form-label">
                                Last name
                            </label>
                            {createInput('text', 'lastName')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="birthdate" className="form-label">
                                Birthdate
                            </label>
                            {createDatePicker('birthdate')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="start-date" className="form-label">
                                Start date
                            </label>
                            {createDatePicker('startDate')}
                        </div>
                    </div>
                    <div className="row border-style">
                        <div className="row-50">
                            <label htmlFor="street" className="form-label">
                                Street
                            </label>
                            {createInput('text', 'street')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            {createInput('text', 'city')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            {createSelect(statesUSA, 'state')}
                        </div>
                        <div className="row-50">
                            <label htmlFor="zip" className="form-label">
                                Zip Code
                            </label>
                            {createInput('text', 'zipCode')}
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-100">
                            <label htmlFor="state" className="form-label department-label">
                                Department
                            </label>
                            {createSelect(departments, 'department')}
                        </div>
                    </div>

                    <button className="btn-submit" type="submit">
                        Save
                    </button>
                </form>
            </main>
        </div>
    )
}

export default NewEmployee
