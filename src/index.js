var soap = require('soap');

async function call(){
    var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
    const client = await soap.createClientAsync(url);
    // console.log(client);
   const args = {intA: 3, intB: 3};
    client.Add(args, async function(err, result) {
        if(err) return console.log(err);        
        console.log(result.AddResult);
    });

}
call();
