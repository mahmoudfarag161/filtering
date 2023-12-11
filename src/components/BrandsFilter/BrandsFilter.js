import { FaChevronDown } from "react-icons/fa";

function BrandsFilter() {
    return (
        <article>
            <a href="#/" className="fw-bold text-dark py-3 d-block border-top" data-bs-toggle="collapse"
                data-bs-target="#collapse_aside_brands">
                <FaChevronDown className="icon-control" />
                Brands
            </a>
            <div className="collapse show" id="collapse_aside_brands">
                <div className="pb-3">

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> All </span>
                    </label>
                                            
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Panasonic </span>
                    </label>

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Toyota </span>
                    </label>

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Xiaomi </span>
                    </label>

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Apple </span>
                    </label>

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Samsung </span>
                    </label>

                    <a href="#/">See more <FaChevronDown size={"14px"} /> </a>
                </div>
            </div>
            {/* collapse */}
        </article>
    )
}
export default BrandsFilter;