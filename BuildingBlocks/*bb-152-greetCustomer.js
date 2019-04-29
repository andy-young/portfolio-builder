
var customerData = {
	'Joe': { visits: 1 }, 'Carol': { visits: 2 }, 'Howard': { visits: 3 }, 'Carrie': { visits: 4 }
};
function greetCustomer(firstName) {
	if (!customerData[firstName]) return `Welcome! Is this your first time?`;

	if (customerData[firstName].visits === 1) {
		return `Welcome back, ${firstName}! We're glad you liked us the first time.`;
	}

	if (customerData[firstName].visits > 1) {
		return `Welcome back, ${firstName}! So glad to see you again!`;
	}
	return `Welcome! Is this your first time?`;
}

// greetCustomer('Carol');
// greetCustomer('Joe');
// greetCustomer('Howard');
// greetCustomer('Carrie');
// greetCustomer('Andy');