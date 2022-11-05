const stateInitial = {
    products: [
        {   id: 1,  name: 'Producto 1',   price: 1000,   stock: 1 },
        {   id: 2,  name: 'Producto 2',   price: 2000,   stock: 1 },
        {   id: 3,  name: 'Producto 3',   price: 3000,   stock: 1 },
        {   id: 4,  name: 'Producto 4',   price: 4000,   stock: 1 },
    ],
    car: [],
}

const reducer = (state = stateInitial, action) => {
    switch (action.type) {
        case 'ADD_TO_CAR':
            const exist = state.car.find((x) => x.id === action.product.id);
            if (exist) {
                return {
                    ...state,
                    car: state.car.map((x) =>
                        x.id === action.product.id ? { ...exist, stock: exist.stock + 1 } : x
                    )
                }
            } else {
                return {
                    ...state,
                    car: [...state.car, { ...action.product, stock: 1 }]
                }
            }
        default:
            return state;
    }
}
export default reducer;