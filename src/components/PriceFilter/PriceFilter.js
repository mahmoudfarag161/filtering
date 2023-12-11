import { FaChevronDown } from "react-icons/fa";
import "./PriceFilter.css";
import { useState } from "react";

function PriceFilter({ onPriceChange }) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const handlePriceChange = () => {
        onPriceChange({ minPrice, maxPrice })
    }
    return (
        <article>
            <a href="#/" className="fw-bold text-dark py-3 d-block border-top" data-bs-toggle="collapse"
                data-bs-target="#collapse_aside2">
                <FaChevronDown className="icon-control" />
                Price range
            </a>
            <div className="collapse show" id="collapse_aside2">
                <div className="pb-3">
                    <input type="range" className="form-range" min="0" max="100" />
                    <div className="row mb-2 g-2">
                        <div className="col-6">
                            <label htmlFor="min" className="form-label">Min</label>
                            <input className="form-control" id="min" placeholder="$0" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        </div>
                        {/* col end */}

                        <div className="col-6">
                            <label htmlFor="max" className="form-label">Max</label>
                            <input className="form-control" id="max" placeholder="$9999" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                        </div>
                        {/* col end */}
                    </div>
                    {/* row end */}
                    <button className="btn btn-light text-primary w-100" type="button" onClick={handlePriceChange} >Apply</button>
                </div>
            </div>
            {/* collapse */}
        </article>
    )
}
export default PriceFilter;