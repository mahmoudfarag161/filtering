import { FaChevronDown, FaStar } from "react-icons/fa";
import './RatingsFilter.css'
import { useState } from "react";

function RatingsFilter({ onRateChange }) {
    const [selectedRates, setSelectedRates] = useState([]);

    const handleRateChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedRates([...selectedRates, value]);
        } else {
            setSelectedRates(selectedRates.filter(rate => rate !== value));
        }

        onRateChange(selectedRates);
    };
    return (
        <article className="filter-group">
            <a href="#/" className="fw-bold text-dark list-unstyled py-3 d-block border-top" data-bs-toggle="collapse"
                data-bs-target="#collapse_aside4">
                <FaChevronDown className="icon-control" /> Ratings
            </a>
            <div className="collapse show" id="collapse_aside4">
                <div className="pb-3">
                    {[5, 4, 3, 2].map((rate) => (
                            <label key={rate} className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" value={rate} checked={selectedRates.includes(`${rate}`)}
                                    onChange={handleRateChange} />
                                <span className="form-check-label">
                                    <ul className="rating-stars">
                                        <li className="stars-active" style={{width: `${rate * 20}%`.toString()}}>
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />    
                                        </li>
                                        <li> 
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />
                                            <FaStar className="i" />    
                                        </li>
                                    </ul>
                                </span>
                            </label>
                        
                    )) }
                </div>
            </div>
            {/* collapse */}
        </article>
    )
}
export default RatingsFilter;