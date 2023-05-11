import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext';

const ToggleTheme = () => {

    const {theme, toggleTheme} = useContext(themeContext);

    return (
        <div className='position-fixed bottom-0 end-0 m-3 float-start'>
            {
                theme == "dark" ?
                <button className='btn btn-light opacity-75 bi bi-brightness-high-fill shadow-lg' onClick={toggleTheme} /> :
                <button className="btn btn-dark opacity-75 bi bi-moon-stars-fill shadow-lg" onClick={toggleTheme} />
            }
        </div>
    )
}

export default ToggleTheme;
