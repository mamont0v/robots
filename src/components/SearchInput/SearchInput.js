import React from 'react'
import style from './SearchInput.module.css'

const SearchInput = ({searchChange}) => {
    return (
        <div>
            <input
                className={style.input}
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchInput