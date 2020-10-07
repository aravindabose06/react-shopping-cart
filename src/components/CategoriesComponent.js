import React from 'react'

function CategoriesComponent({ categories }) {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading ml-3"><h4>Categories</h4></div>
            <div className="list-group list-group-flush">
                {
                    categories.map(category => (
                        <a key={category.id} href="/" className="list-group-item list-group-action bg-light">{category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoriesComponent
