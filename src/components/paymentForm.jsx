import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"
import { useSelector } from "react-redux";


const CARD_OPTIONS={
    iconStyle: "solid",
    style:{
        base:{
            iconColor:"#c4f0ff",
            color:"#fff",
            fontWeight:500,
            fontFamily: "Roboto, Open Sans, Egoe UI, sans-serif",
            fontSize:"16px",
            fontSmoothing:"antialiased",
            ":-webkit-autofill": {color:"#fce883"},
            "::placeholder":{ color: "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm(){
    const state = useSelector((state) => state.handleCart);
    let subtotal = 0;
    let shipping = 30.0;
    state.map((item) => {
      return (subtotal += (item.price * item.qty));
    });
    const [success, setSuccess] = useState(false)
    const stripe= useStripe()
    const elements=useElements()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)

        })
    

    if (!error){
        try{
            const {id} =paymentMethod
            const response = await axios.post("http://localhost:8000/payment/",{
                amount: Math.round(subtotal + shipping),
                id
            } )
            
            if (response.data.success){
                console.log("Successful payment")
                setSuccess(true)
            }
            
        } catch(error){
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
    return(
        <>
        {!success?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement option ={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>PAY</button>
        </form>
        :
        <div>
            <h2>You just bought a sweet spatula</h2>
        </div>
        }
        </>
        
    )
}