const initialState = [];

const FilterSearch = (state=initialState, action) => {
    switch(action.type){
        case 'Filter':
            return action.value
        default: return state    
    }
}

export default FilterSearch;