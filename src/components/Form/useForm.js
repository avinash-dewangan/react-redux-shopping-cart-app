import { useState, useEffect } from 'react'
import validateInfo from '../validation/validateInfo'

function useForm(validateInfo) {
    const [values, setValues] = useState({
        minvalue: '',
        maxvalue: ''
    })
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
        setErrors(validateInfo(values))
    }
    return {handleChange, values, handleSubmit, errors}
}

export default useForm;
