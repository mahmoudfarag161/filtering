import { FaChevronDown } from "react-icons/fa";

function FeaturesFilter() {
    return (
        <article>
            <a href="#/" className="fw-bold text-dark py-3 d-block border-top" data-bs-toggle="collapse"
                data-bs-target="#collapse_aside_feature">
                <FaChevronDown className="icon-control" />
                Features
            </a>
            <div className="collapse show" id="collapse_aside_feature">
                <div className="pb-3">
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> All </span>
                    </label>
                    {/* form-check end */}
                                            
                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Metallic frame </span>
                    </label>
                    {/* form-check end */}

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" checked />
                        <span className="form-check-label"> Super Amoled </span>
                    </label>
                    {/* form-check end */}

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" checked />
                        <span className="form-check-label"> Battery included </span>
                    </label>
                    {/* form-check end */}

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Large screen </span>
                    </label>
                    {/* form-check end */}

                    <label className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" />
                        <span className="form-check-label"> Extra memory </span>
                    </label>
                    {/* form-check end */}

                    <a href="#/">See more <FaChevronDown size={"14px"} />  </a>
                </div>
            </div>
            {/* collapse */}
        </article>
    )
}
export default FeaturesFilter;