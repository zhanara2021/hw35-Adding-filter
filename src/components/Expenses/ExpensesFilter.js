import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter =(props)=>{

    const selectChangeHandler =(event) =>{
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter-control">
                <label>Filter by year</label>
                <select onChange={selectChangeHandler} value={props.selected}>
                    <option value = "2024">2024</option>
                    <option value = "2023">2023</option>
                    <option value = "2022">2022</option>
                    <option value = "2021">2021</option>
                </select>
            </div>
        </div>
    )
}
export default ExpensesFilter;