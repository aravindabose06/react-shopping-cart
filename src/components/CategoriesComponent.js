import React from 'react'

function CategoriesComponent({ categories, changeCategory }) {

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading ml-3"><h4>Categories</h4></div>
            <div className="list-group list-group-flush">
            <button onClick={() => changeCategory(null)} className="nav-link list-group-item list-group-action bg-light">All Categories</button>
                {
                    categories.map(category => (
                        <button key={category.id} onClick={() => changeCategory(category.id)} className="nav-link list-group-item list-group-action bg-light">{category.name}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesComponent
