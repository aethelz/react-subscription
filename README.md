## React - Cloud Storage Subscription

### Description

This is my solution to a take-home assignment done in 4 days in spare time.<br />
It features a finished React + TypeScript app with basic Redux setup and Bulma styling.<br />
Paycard is based on [Interactive React Paycard](https://github.com/jasminmif/react-interactive-paycard) project.

### Task

The subscription order process has 3 steps:

1. Select subscription parameters:

   * Duration: 3/6/12 Months (default: 12)
   * Amount of gigabytes in a cloud: 5/10/50 (default: 5)
   * Upfront payment: yes/no (default: no)

2. Payment data:
   * Credit card number
   * Credit card expiration date
   * Credit card security code

3. Confirmation
   * Summary of the selected subscription including total price and price per GB.
   * Email of the user
   * Terms and conditions agreement checkbox
   * Confirmation button

### Requirements

* If the user selects upfront payment, the total price should be reduced by 10%
* Upfront payment does not change anything on the UI and flow but only adds the discount.
* Current selected subscription and final price should be shown on every step
* Subscription prices should be retrieved from https://cloud-storage-prices-moberries.herokuapp.com/prices
* All parameters should be required
* It should be possible to change steps by clicking on the Next or Back button.
* Every step needs to be completed in order to see the next one.
* Confirm button click handler should send data to the API endpoint https://httpbin.org/post
