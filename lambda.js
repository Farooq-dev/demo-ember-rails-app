exports.handler = (event, context, callback) => {
    const https = require('https');
    const client = https.request({
        headers: {
            'Auth-Token': 'kygnegeigyumafhtyioawjzausewgrsjmjgutyxuelvttcnegc',
            'Content-Type': 'application/json'
        },
        host: 'hbupworktest.herokuapp.com',
        path: '/api/v1/gadgets.json',
        method: 'POST',
        port: 443
    }, (response) => {
        // if response needed
    })
    client.end(JSON.stringify({email: event.email, name: event.name,
      message: event.message, upwork_name: event.upwork_name }))
}