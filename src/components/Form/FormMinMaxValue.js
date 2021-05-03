import React, { useState, useEffect } from 'react'
import useForm from "./useForm";
import validateInfo from "../validation/validateInfo"
import Pagination from '../Pagination/Pagination';


function FormMinMaxValue() {
   
    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo)
    return (
        <form onSubmit={handleSubmit} className="form-row">
            <div className="form-group col-md-6">
                <label>Min</label>
                <input
                    className="form-control"
                    placeholder="$0"
                    type="number"
                    name="minvalue"
                    id="minvalue"
                    value={values.minvalue}
                    onChange={handleChange}
                />
                {errors.minvalue && <b>{errors.minvalue}</b>}
            </div>

            <div className="form-group text-right col-md-6">
                <label>Max</label>
                <input
                    className="form-control"
                    placeholder="$1,0000"
                    type="number"
                    name="maxvalue"
                    id="maxvalue"
                    value={values.maxvalue}
                    onChange={handleChange}

                />
                 {errors.maxvalue && <b>{errors.maxvalue}</b>}
            </div>
            <button type="sumbit" className="btn btn-block btn-primary">Apply</button>
        </form>
    )
}

export default FormMinMaxValue
