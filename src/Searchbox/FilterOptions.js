import React from 'react'
import "./SearchBox.css"
export default class FilterOptions extends React.Component {
        render() {
            return ( 
            <div className="FilterOptionsContainer">
                <fieldset className="FilterOptions">
                    <legend className="legend">Filter Options</legend>
                    <label htmlFor="printOptions">Print Type: </label>
                    <select className="filter" name="printOptions">
                        <option value="BOOK">Book</option>
                    </select> 
                    <label htmlFor="bookOptions"> Book Type: </label>
                    <select className="filter" name="bookOptions">
                        <option value="volumes">Volumes</option>
                    </select>
                </fieldset>
            </div>)
            }
        }