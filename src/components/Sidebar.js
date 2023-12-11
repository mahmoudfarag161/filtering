import "./Sidebar.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import RatingsFilter from "./RatingsFilter/RatingsFilter";
import FeaturesFilter from "./FeaturesFilter/FeaturesFilter";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import BrandsFilter from "./BrandsFilter/BrandsFilter";
import { useEffect, useState } from "react";


function Sidebar() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const handleCategoryChange = (selectedCategory) => {
        const filtered = products.filter((product) => product.category === selectedCategory);
        setFilteredProducts(filtered);
    };

    const handlePriceChange = ({ minPrice, maxPrice }) => {
        const filtered = products.filter((product) => {
            const productPrice = parseFloat(product.price);
            const min = minPrice === '' || isNaN(minPrice) ? Number.MIN_SAFE_INTEGER : parseFloat(minPrice);
            const max = maxPrice === '' || isNaN(maxPrice) ? Number.MAX_SAFE_INTEGER : parseFloat(maxPrice);

            return productPrice >= min && productPrice <= max;
        });
        setFilteredProducts(filtered);
    };
    const handleRateChange = (selectedRates) => {
        const filtered = products.filter(product => selectedRates.includes(product.rate));
        setFilteredProducts(filtered);
    };

    const apiUrl = "https://fakestoreapi.com/products";
    const getAllProducts = () => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }
    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }
    
    useEffect(() => {
        getAllProducts();
        getCategories();
    }, [])

    return (
    <>
        <section className="">
            <div className="container">
                <div className="row">
                    <aside className="col-xl-2 col-lg-3 sidebar">
                        <button className="btn btn-outline-secondary mb-3 w-100 d-lg-none" data-bs-toggle="collapse"
                            data-bs-target="#aside_filter">Show filter</button>

                        {/* Card for sidebar filter */}
                        <div id="aside_filter" className="collapse d-lg-block mb-5">
                            <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />
                            
                            <BrandsFilter />

                            <FeaturesFilter />
                            
                            <PriceFilter onPriceChange={handlePriceChange} />
                            
                            <RatingsFilter onRateChange={handleRateChange} />
                        </div>
                        {/* card */}

                        {/* Card for sidebar filter */}
                    </aside> 
                    {/* col */}
                </div>
            </div>
        </section>
    </>
    )
}
export default Sidebar;