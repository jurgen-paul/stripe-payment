# stripe-payment 
https://api.stripe.com
pip install stripe
import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"
import stripe
charge = stripe.Charge.retrieve(
  "ch_3Ln3e92eZvKYlo2C0eUfv7bi",
  api_key="sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"
)
charge.capture() # Uses the same API Key.
import stripe
charge = stripe.Charge.retrieve(
  "ch_3Lmjoz2eZvKYlo2C1rBER4Dk",
  stripe_account="acct_1032D82eZvKYlo2C"
)
charge.capture() # Uses the same account.
try:
  # Use Stripe's library to make requests...
  pass
except stripe.error.CardError as e:
  # Since it's a decline, stripe.error.CardError will be caught

  print('Status is: %s' % e.http_status)
  print('Code is: %s' % e.code)
  # param is '' in this case
  print('Param is: %s' % e.param)
  print('Message is: %s' % e.user_message)
except stripe.error.RateLimitError as e:
  # Too many requests made to the API too quickly
  pass
except stripe.error.InvalidRequestError as e:
  # Invalid parameters were supplied to Stripe's API
  pass
except stripe.error.AuthenticationError as e:
  # Authentication with Stripe's API failed
  # (maybe you changed API keys recently)
  pass
except stripe.error.APIConnectionError as e:
  # Network communication with Stripe failed
  pass
except stripe.error.StripeError as e:
  # Display a very generic error to the user, and maybe send
  # yourself an email
  pass
except Exception as e:
  # Something else happened, completely unrelated to Stripe
  pass
  import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"

stripe.Charge.retrieve(
  'ch_3Ln0cK2eZvKYlo2C1QmvaARY',
  expand=['customer', 'invoice.subscription']
)
import stripe
stripe.api_key = 'sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1'

customer = stripe.Customer.create(
  description='My First Test Customer',
  idempotency_key='KG5LxwFBepaKHyUD',
)
import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"

stripe.Customer.create(metadata={"order_id": "6735"}) 
import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"

customers = stripe.Customer.list(limit=3)
for customer in customers.auto_paging_iter():
  # Do something with customer
  import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"

customer = stripe.Customer.create()
print(customer.last_response.request_id)
import stripe
stripe.api_key = "sk_test_51N8QO3JE2alzfsnTP44zF0HwoB7frH0tOnLta5XnBZrf2bn4tpm2g4qnBTsp62bOd4zFAT4isFcZm5EP7cqweAGc004jE41XY1"
stripe.api_version = "2024-06-20"
