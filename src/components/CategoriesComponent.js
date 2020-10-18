import React from 'react'

function CategoriesComponent({ categoriesState, changeCategory }) {

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading ml-3"><h4>Categories</h4></div>
            <div className="list-group list-group-flush">
                {
                    categoriesState.loading ? ( <div>Loading...</div> ) :
                            categoriesState.error ? ( <div>Error Occured :(</div> ) : 
                            (
                                <>
                                    <button onClick={() => changeCategory(null)} className="nav-link list-group-item list-group-action bg-light">All Categories</button>
                                    {
                                        categoriesState.categories.map(category => (
                                            <button key={category.id} onClick={() => changeCategory(category.id)} className="nav-link list-group-item list-group-action bg-light">{category.name}</button>
                                        ))
                                    }
                                </>
                            )
                }
            </div>
        </div>
    )
}

export default CategoriesComponent
