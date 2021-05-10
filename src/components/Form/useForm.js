import { useState } from 'react'
//import validateInfo from '../validation/validateInfo'

function useForm(validateInfo, objectOfValues) {
    const [values, setValues] = useState(objectOfValues)
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
        setErrors(validateInfo(values))
    }
    return { handleChange, values, handleSubmit, errors }
}

export default useForm;
