
const InputFieldView = ({formik,data}) => {
//*data parametresinde bir obje şeklinde bileşenin verilerini alacağız.

const {label, name, type} =data

return (
        <div>
            <label>{label}</label>
            <input
                onBlur={formik.handleBlur}
                name={name}
                onChange={formik.handleChange}
                className={`form-control mt-2 ${
                    formik.touched[name] && formik.errors[name] && 'error'
                }`}
                type={type} />
                {formik.touched[name] && formik.errors[name] &&
                (<span>{formik.errors[name]}
                </span>)
            }

        </div>
    )
}

export default InputFieldView