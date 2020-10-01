import React, { useState, useEffect } from 'react';

const Searchbar = ({ handleInputChange, placeholder }) => {

    return (
        <input onChange={handleInputChange} type='search' placeholder={placeholder} />
    )
}
export default Searchbar