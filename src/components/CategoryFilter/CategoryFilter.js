import { FaChevronDown } from "react-icons/fa";
import "./CategoryFilter.css";
import { useState } from "react";

function CategoryFilter ({ categories, onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(value);
        onCategoryChange(value);
    };
    return (
        <article>
            <a href="#/" className="fw-bold text-dark py-3 d-block border-top" data-bs-toggle="collapse"
                data-bs-target="#collapse_aside1">
                <FaChevronDown className="icon-control" />
                Related category
            </a>
            <div className="collapse show" id="collapse_aside1">
                <div className="pb-3">
                    <ul className="list-menu mb-0">
                        <li><button className="btn ms-0 ps-0">All </button></li>
                        {
                            categories.map((cat) => {
                                return (<li key={cat}><button className="btn ms-0 ps-0" value={cat} onClick={handleCategoryChange} >{cat}</button></li>)
                            })
                        }
                        
                        
                    </ul>
                    <a href="#/">See more <FaChevronDown size={"14px"} /> </a>
                </div>
            </div>
            {/* collapse */}
        </article>
    )
}
export default CategoryFilter;