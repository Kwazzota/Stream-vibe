import './Checkbox.scss'
import classNames from 'classnames'
import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector";

const Checkbox = (props) => {
    const {
        className,
        id = getAttrNameFromSelector(props.label),
        label,
        isRequired,
    } = props

    return (
        <label
            className={classNames(className, 'checkbox')}
            htmlFor={id}
        >
            <input
                type="checkbox"
                className="checkbox__input"
                id={id}
                required={isRequired}
            />
            <span className="checkbox__label">
                {label}
            </span>
        </label>
    )
}

export default Checkbox