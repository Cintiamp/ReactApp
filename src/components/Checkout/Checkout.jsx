import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import { useContext, useState } from "react";


function Checkout() {

    const [buyer, setBuyer] = useState({
        firstname: "",
        lastname: "",
        age: ""
    })

    const navigate = useNavigate()
    const { cart, getTotalPriceInCart } = useContext(cartContext)

    async function handleCheckout(evt) {
        evt.preventDefault()
        const orderData = {
            items: cart,
            buyer: { name: 'Cintia', email: 'cinti@mail.com', phone: '1141114444' },
            date: new Date(),
            total: getTotalPriceInCart()
        }
        try {
            const idOrder = await createOrder(orderData)
            document.write(`Gracias por tu compra, tu número de orden es ${idOrder}`)
            navigate(`/order-confirmation/${idOrder}`)
        } catch (error) {
            document.write(`No se pudo realizar la compra ${error.message}`)
        }
    }


    function onInputChange(evt) {
        const value = evt.target.value
        const field = evt.target.name
        const newState = {...buyer}
        newState[field] = value
        setBuyer(newState)
    }

    function resetForm(e) {
        e.preventDefault()
        setBuyer({
            firstname: "",
            lastname: "",
            age: "",
        })
    }

    return (
        <form>
            <h2>Completa tus datos para finalizar la compra</h2>

            <div>
                <label htmlFor="lastname">Nombre</label>
                <input value={buyer.firstname} name="firstname" type="text" onChange={onInputChange} />
            </div>

            <div>
                <label htmlFor="lastname">Aepellido</label>
                <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange} />
            </div>

            <div>
                <label>Edad</label>
                <input value={buyer.age} name="age" type="number" onChange={onInputChange} />
            </div>

            <button
            disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
            onClick={handleCheckout}
            >
                Confirmar compra
            </button>
            <button onClick={resetForm}>Cancelar</button>

        </form>
    )
}

export default Checkout




