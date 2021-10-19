import './NewEmployee.scss'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { getMonth, getYear } from 'date-fns'
import format from 'date-fns/format'

import Select, { createFilter } from 'react-select'
import { useState } from 'react'

import { statesUSA, departments } from 'assets/data/data'
import { CustomOption, years, months } from 'utils/DatePickerOptions'

function NewEmployee() {
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        birthdate: new Date(),
        startDate: new Date(),
        street: '',
        city: '',
        state: statesUSA[0].label,
        zipCode: '',
        department: departments[0].label
    })

    const formSubmit = (e) => {
        e.preventDefault()
    }

    // Handle change classic form input
    const handleChange = (e) => {
        setNewEmployee((state) => ({
            ...state,
            [e.target.id]: e.target.value
        }))
    }

    const createDatePicker = (inputName) => {
        console.log(newEmployee)
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
                dateFormat="MM/dd/yyyyy"
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
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={newEmployee.firstName}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="lastName" className="form-label">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={newEmployee.lastName}
                                onChange={handleChange}
                                className="form-input"
                            />
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
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={newEmployee.street}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="city" className="form-label">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={newEmployee.city}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <Select
                                filterOption={createFilter({ ignoreAccents: false })}
                                options={statesUSA}
                                components={{ Option: CustomOption }}
                                classNamePrefix="custom-select"
                                className={'custom-select'}
                                onChange={(e) => {
                                    setNewEmployee((state) => ({
                                        ...state,
                                        state: e.label
                                    }))
                                }}
                                value={{ label: newEmployee.state }}
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="zip" className="form-label">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={newEmployee.zipCode}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-100">
                            <label htmlFor="state" className="form-label department-label">
                                Department
                            </label>
                            <Select
                                filterOption={createFilter({ ignoreAccents: false })}
                                options={departments}
                                components={{ Option: CustomOption }}
                                classNamePrefix="custom-select"
                                className={'custom-select'}
                                onChange={(e) => {
                                    console.log(e)
                                    setNewEmployee((state) => ({
                                        ...state,
                                        department: e.label
                                    }))
                                }}
                                value={{ label: newEmployee.department }}
                            />
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
