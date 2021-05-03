import React, { useState } from 'react'

function Slider({ products, setsearchResult, setFlag, setPageNumber }) {

    const [sliderValue, setSliderValue] = useState(101);
    const changeSlider = (e) => {
        console.log(e.target.value)
        setSliderValue(e.target.value)
        const productList = products.filter(prod => prod.price <= e.target.value)
        setsearchResult(productList)
        setFlag(true)
        setPageNumber(0);
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Price range</h5>
                <input
                    type="range"
                    className="custom-range"
                    min="0"
                    max="1000"
                    name=""
                    value={sliderValue}
                    onChange={changeSlider} />
                <div>${sliderValue}</div>
            </div>
        </div>
    )
}

export default Slider
