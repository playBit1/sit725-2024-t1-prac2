var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.get('/addTwoNumbers',(req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.status(200).send({
        'data' : num1 + num2,
        'message': 'Success',
        'StatusCode': 200,
    })
})

app.listen(port,()=>{
console.log("App listening to: http://localhost:"+port+"/addTwoNumbers")
});



