import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setCurrency] = useState("Currency (£ Pound)")
    const handleCurrencyChange = (eventKey, event) => {
        setCurrency("Currency (" + event.target.innerText +")");
        dispatch({
            type: "CHG_CURRENCY",
            payload: eventKey
        })
    }

    return (
        <Dropdown className='custom-dropdown' onSelect={handleCurrencyChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCurrency}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹">₹ Rupee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Currency;