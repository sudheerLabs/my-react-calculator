const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

/*
export const evaluateExpression = (operand1, operand2, operator) =>
    fetch(`${api}/operations/add`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({operand1, operand2})
    }).then(res => {
       
        return res.json();
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });

*/

export const doAddition = (operand1, operand2) =>
    fetch(`${api}/operations/doAddition`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({operand1, operand2})
    }).then(res => {
       
        return res.json();
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });

export const doSubtraction = (operand1, operand2) =>
    fetch(`${api}/operations/doSubtraction`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({operand1, operand2})
    }).then(res => {
       
        return res.json();
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });

export const doMultiplication = (operand1, operand2) =>
    fetch(`${api}/operations/doMultiplication`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({operand1, operand2})
    }).then(res => {
       
        return res.json();
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });

export const doDivision = (operand1, operand2) =>
    fetch(`${api}/operations/doDivision`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({operand1, operand2})
    }).then(res => {
       
        return res.json();
    })
    .catch(error => {
        console.log("This is error");
        return error;
    });
