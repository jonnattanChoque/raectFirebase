import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ShopCar = (props) => {
    const {car} = props

    return (
        <div>
            <h3>Carrito de compras</h3>
            {car.length === 0 ? (
                <p>No hay elementos en el carrito</p>
            ) : (
                car.map(product => (
                    <Producto key={product.id}>
                        <Nombre>{product.name}</Nombre>
                        Cantidad : {product.stock}
                    </Producto>
                ))
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        car: state.car,
    }
}

export default connect(mapStateToProps)(ShopCar);

const Producto =  styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebeef3;
    font-size: 14px;
`;

const Nombre = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;