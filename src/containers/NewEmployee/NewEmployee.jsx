import './NewEmployee.scss'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

import Select from 'react-select'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
function NewEmployee() {
    return (
        <div className="new-employee">
            <HeaderTitle title="New Employee" />
            <main className="main-new-employee">
                <form action="" className="form-classic">
                    <div className="row">
                        <div className="row-50">
                            <label htmlFor="f-name" className="form-label">
                                First name
                            </label>
                            <input
                                type="text"
                                id="f-name"
                                name="f-name"
                                placeholder="Test"
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="l-name" className="form-label">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="l-name"
                                name="l-name"
                                placeholder="Test"
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="birthdate" className="form-label">
                                Birthdate
                            </label>
                            <input
                                type="text"
                                id="birthdate"
                                name="birthdate"
                                placeholder="dd/mm/yyyy"
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="start-date" className="form-label">
                                Start date
                            </label>
                            <input
                                type="text"
                                id="start-date"
                                name="start-date"
                                placeholder="dd/mm/yyyy"
                                className="form-input"
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
                                placeholder="Street"
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
                                placeholder="City"
                                className="form-input"
                            />
                        </div>
                        <div className="row-50">
                            <label htmlFor="state" className="form-label">
                                State
                            </label>
                            <Select options={options} />
                        </div>
                        <div className="row-50">
                            <label htmlFor="zip" className="form-label">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                placeholder="Zip"
                                className="form-input"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-100">
                            <label htmlFor="state" className="form-label">
                                Department
                            </label>
                            <Select options={options} />
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
