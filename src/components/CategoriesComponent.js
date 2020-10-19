import React from 'react'
import { Spinner } from 'reactstrap';

function CategoriesComponent({ categoriesState, changeCategory }) {

    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading ml-3"><h4>Categories</h4></div>
            <div className="list-group list-group-flush">
                {
                    categoriesState.loading ? ( <Spinner className="loading-spinner" size="md" color="secondary" /> ) :
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
