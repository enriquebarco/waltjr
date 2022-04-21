import InputType from "../../models/InputType";
import "./Input.scss";

function Input({ label, name, type, onChange}: InputType)  {
    return (
        <div className="input">
            <label htmlFor={name} className="input__label">
                {label}
            </label>
            <input type={type} id={name} name={name} className="input__text"  onChange={onChange} />
        </div>
    );
}

export default Input;