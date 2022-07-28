import React from 'react';
import { Link } from "react-router-dom";

class Filter extends React.Component {
    render () {
        return (
            <div className="filter_container">
                <section className="filter_box">
                    <section className="priceFilter">
                        <label>
                            <input type="checkbox" />
                            Price: High - Low
                        </label>
                        <label>
                            <input type="checkbox" />
                            Price: Low - High
                        </label>
                    </section>
                    <section className="colorFilter">
                        <label>
                            <input type="checkbox" />
                            Black
                        </label>
                        <label>
                            <input type="checkbox" />
                            Grey
                        </label>
                        <label>
                            <input type="checkbox" />
                            Green
                        </label>
                    </section>
                    <section className="stockFilter">
                        <label>
                            <input type="checkbox" />
                            Latest
                        </label>
                        <label>
                            <input type="checkbox" />
                            Oldest
                        </label>
                    </section>
                    
                    <button className="btn_filter">Update</button>
                </section>
            </div>
        );
    }
}
export default Filter;