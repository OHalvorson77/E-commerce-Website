import React from 'react' 
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe} from "@stripe/stripe-js"
import PaymentForm from "./paymentForm.jsx"

const PUBLIC_KEY = "pk_test_51Nv36tEcibrMWRS9NSpjLEDaKWMCO52DBMZSDbnUCgIco3Xeb4IbrnfRVbrq9bm06Pw7RBo1zDtLaM7JjfqiXmEi00z5NOr4F9"

const stripeTestPromise =loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
