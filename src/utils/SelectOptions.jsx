import { components } from 'react-select'
import range from 'lodash/range'
import { getYear } from 'date-fns'

export const CustomOption = ({ children, ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps
    const newProps = { ...props, innerProps: rest }
    return (
        <components.Option {...newProps} className="custom-option">
            {children}
        </components.Option>
    )
}

export const years = range(1950, getYear(new Date()) + 1, 1)

export const months = [
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
