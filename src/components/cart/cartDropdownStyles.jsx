import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button'

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ::-webkit-scrollbar{
      display: none;
    }
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-width: none;

`

export const EmptyMessage = styled.div`
    font-size: 18px;
    margin: 50px auto;
`

export const CheckoutButton = styled(CustomButton)`
    margin-top: auto;
`