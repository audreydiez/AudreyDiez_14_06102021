import './NewEmployee.scss'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { getMonth, getYear } from 'date-fns'
import range from 'lodash/range'

import Select, { createFilter } from 'react-select'
import { useState } from 'react'
import { components } from 'react-select'

import { statesUSA, departments } from 'assets/data/data'

function NewEmployee() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const [startDate, setStartDate] = useState(new Date())
    const years = range(1990, getYear(new Date()) + 1, 1)
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const CustomOption = ({ children, ...props }) => {
        // eslint-disable-next-line no-unused-vars
        const { onMouseMove, onMouseOver, ...rest } = props.innerProps
        const newProps = { ...props, innerProps: rest }
        return (
            <components.Option {...newProps} className="custom-option">
                {children}
            </components.Option>
        )
    }

    const [newEmployee, setNewEmployee] = useState({
        firstName: 'q',
        lastName: '',
        birthdate: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: departments[0].label
    })

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setNewEmployee((state) => ({
            ...state,
            [e.target.id]: e.target.value
        }))
    }
    const handleChangeSelect = (e) => {
        setNewEmployee((state) => ({
            ...state,
            department: e.value
        }))
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
                                        <button
                                            onClick={decreaseMonth}
                                            disabled={prevMonthButtonDisabled}>
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

                                        <button
                                            onClick={increaseMonth}
                                            disabled={nextMonthButtonDisabled}>
                                            {'>'}
                                        </button>
                                    </div>
                                )}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="start-date" className="form-label">
                                Start date
                            </label>
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
                                        <button
                                            onClick={decreaseMonth}
                                            disabled={prevMonthButtonDisabled}>
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

                                        <button
                                            onClick={increaseMonth}
                                            disabled={nextMonthButtonDisabled}>
                                            {'>'}
                                        </button>
                                    </div>
                                )}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
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
                                options={options}
                                components={{ Option: CustomOption }}
                                classNamePrefix="custom-select"
                                className={'custom-select'}
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
                                onChange={handleChangeSelect}
                                value={{ label: newEmployee.department }}
                            />
                        </div>
                    </div>

                    <button className="btn-submit" type="submit">
                        Save
                    </button>
                    <div>{newEmployee.department}</div>
                </form>
            </main>
        </div>
    )
}

export default NewEmployee
