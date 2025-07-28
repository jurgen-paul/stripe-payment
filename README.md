# 💳 Stripe API Integration Guide

This README outlines how to set up and use the Stripe API for payment processing.

## 📦 Prerequisites

Before you begin, make sure you have the following:

- Node.js (v14+ recommended)
- npm or yarn
- Stripe account (https://stripe.com)
- [Stripe Dashboard](https://dashboard.stripe.com/) access to generate API keys

## 🛠️ Installation

Install the Stripe Node.js SDK:

```bash
npm install stripe

yarn add stripe

 API Key Setup
Create a .env file in the root of your project:
STRIPE_SECRET_KEY=sk_test_YourSecretKeyHere
STRIPE_PUBLISHABLE_KEY=pk_test_YourPublicKeyHere


Use dotenv to load these keys securely:
npm install dotenv


And in your app:
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


🚀 Basic Usage Example
Create a payment intent:
const paymentIntent = await stripe.paymentIntents.create({
  amount: 5000, // $50.00
  currency: 'usd',
  payment_method_types: ['card'],
});


🌍 Frontend Integration
Use Stripe.js on the frontend:
<script src="https://js.stripe.com/v3/"></script>


Example for a checkout form:
const stripe = Stripe('pk_test_YourPublicKeyHere');
const { error } = await stripe.redirectToCheckout({
  lineItems: [{ price: 'price_12345', quantity: 1 }],
  mode: 'payment',
  successUrl: 'https://your-site.com/success',
  cancelUrl: 'https://your-site.com/cancel',
});


🧪 Testing
Use test cards provided by Stripe (e.g. 4242 4242 4242 4242) in test mode. You’ll find these in your Stripe Dashboard under “Developers > Testing”.
📚 Resources
- Stripe Docs: https://stripe.com/docs
- Stripe API Reference: https://stripe.com/docs/api
- Stripe CLI: https://stripe.com/docs/cli





