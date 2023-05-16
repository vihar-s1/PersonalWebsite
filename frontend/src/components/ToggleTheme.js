import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeContext';

const ToggleTheme = () => {

    const {theme, updateTheme} = useContext(themeContext);

    return (
      	// <div className="dropdown opacity-75 position-fixed bottom-0 end-0 mb-3 me-3">
		// 	<button className="btn btn-primary py-250 dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
		// 		{
		// 			theme == "light" ?
		// 			<i className="bi bi-brightness-high-fill" /> :
		// 			<i className="bi bi-moon-stars-fill" />
		// 		}
		// 	</button>
		// 	<ul className="dropdown-menu dropdown-menu-end shadow">
		// 		<li className={`dropdown-item d-flex ${theme == "light" ? "active" : ""}`} 
		// 			onClick={() => { updateTheme("light"); }}
		// 			style={{cursor: 'pointer'}}
		// 		>
		// 			<i className="bi bi-brightness-high-fill me-2"/>light
		// 		</li>
		// 		<li className={`dropdown-item d-flex ${theme == "dark" ? "active" : ""}`} 
		// 			onClick={() => { updateTheme("dark"); }}
		// 			style={{cursor: 'pointer'}}
		// 		>
		// 			<i className="bi bi-moon-stars-fill me-2" />dark
		// 		</li>
		// 	</ul>
      	// </div>
		<div className="position-fixed bottom-0 end-0 m-3">
			{
				theme == "dark" ?
				<button className="btn btn-light opacity-50" onClick={() => { updateTheme("light") }}><i className="bi bi-brightness-high-fill"></i></button> : 
				<button className="btn btn-dark opacity-50" onClick={() => { updateTheme("dark") }}><i className="bi bi-moon-stars-fill"></i></button>
			}
		</div>
    )
}

export default ToggleTheme;
