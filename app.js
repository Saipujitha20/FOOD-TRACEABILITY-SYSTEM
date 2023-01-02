const express = require('express')
const bodyParser = require('body-parser')
const Web3 = require('web3');
const res = require('express/lib/response');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// console.log(web3.providers);

const web3 = new Web3("HTTP://127.0.0.1:7545");
// const web3 = new Web3("https://ropsten.infura.io/v3/37ce477e00c14a8390548738542dd9aa");
web3.eth.getAccounts(function(err,accounts){
    console.log(accounts)
})

var account = "0xe52B0Ab30F5d7F31D4337c57f83e5Abca876A0f5"

// hidestream
var pkey = "771055cd2d0b1e57a75a20dd3b973a090c46ed171f336796c3eec06369e49ec6"

var abi =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_customerid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_customername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_customerlocation",
				"type": "string"
			}
		],
		"name": "setcustomer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_customerreceiveddate",
				"type": "string"
			}
		],
		"name": "setcustomerdetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_distributorid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_distributorname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_distributorlocation",
				"type": "string"
			}
		],
		"name": "setdistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_distributorreceiveddate",
				"type": "string"
			}
		],
		"name": "setdistributordetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_factoryid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_factoryname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_factorylocation",
				"type": "string"
			}
		],
		"name": "setfactory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			}
		],
		"name": "setfactorydetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_farmerid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_farmername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_farmerlocation",
				"type": "string"
			}
		],
		"name": "setfarmer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_item",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_typeofitem",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_produceddate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_expirydate",
				"type": "string"
			}
		],
		"name": "setfarmerdetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_retailerid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailername",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailerlocation",
				"type": "string"
			}
		],
		"name": "setretailer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_retailerreceiveddate",
				"type": "string"
			}
		],
		"name": "setretailerdetail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_customerid",
				"type": "string"
			}
		],
		"name": "getcustomer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_distributorid",
				"type": "string"
			}
		],
		"name": "getdistributor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_factoryid",
				"type": "string"
			}
		],
		"name": "getfactory",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_farmerid",
				"type": "string"
			}
		],
		"name": "getfarmer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productid",
				"type": "string"
			}
		],
		"name": "getproductdetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_retailerid",
				"type": "string"
			}
		],
		"name": "getretailer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var contractAddress = "0xEf64080D702eA4e14b14bd8E2996ec01C0338514";

var myContract = new web3.eth.Contract(abi,contractAddress);

console.log(myContract.methods);

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/main.html' );
});
app.get('/public/signup.html',function (req,res){
	res.sendFile(__dirname + '/public/signup.html' );
});


app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/farmerregisterform.html' );
});
app.get('/public/farmerregisterform.html',function (req,res){
	res.sendFile(__dirname + '/public/farmerregisterform.html' );
});
app.get('/public/main.html',function (req,res){
	res.sendFile(__dirname + '/public/main.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/factoryregisterform.html' );
});
app.get('/public/factoryregisterform.html',function (req,res){
	res.sendFile(__dirname + '/public/factoryregisterform.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/distributorregisterform.html' );
});
app.get('/public/distributorregisterform.html',function (req,res){
	res.sendFile(__dirname + '/public/distributorregisterform.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/retailerregisterform.html' );
});
app.get('/public/retailerregisterform.html',function (req,res){
	res.sendFile(__dirname + '/public/retailerregisterform.html' );
});



app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/customerregisterform.html' );
});
app.get('/public/customerregisterform.html',function (req,res){
	res.sendFile(__dirname + '/public/customerregisterform.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/farmerproductdetails.html' );
});
app.get('/public/farmerproductdetails.html',function (req,res){
	res.sendFile(__dirname + '/public/farmerproductdetails.html' );
});

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/factoryproductdetails.html' );
});
app.get('/public/factoryproductdetails.html',function (req,res){
	res.sendFile(__dirname + '/public/factoryproductdetails.html' );
}); 


app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/distributorproductdetails.html' );
});
app.get('/public/distributorproductdetails.html',function (req,res){
	res.sendFile(__dirname + '/public/distributorproductdetails.html' );
}); 

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/retailerproductdetails.html' );
});
app.get('/public/retailerproductdetails.html',function (req,res){
	res.sendFile(__dirname + '/public/retailerproductdetails.html' );
}); 

app.get('/', function (req, res) {
    console.log(__dirname);

res.sendFile(__dirname + '/public/customerproductdetails.html' );
});
app.get('/public/customerproductdetails.html',function (req,res){
	res.sendFile(__dirname + '/public/customerproductdetails.html' );
}); 






app.post('/enrollfarmer',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setfarmer(req.body.farmerid,req.body.farmername,req.body.farmerlocation).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})

app.post('/enrollfactory',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setfactory(req.body.factoryid,req.body.factoryname,req.body.factorylocation).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};


	web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
}) 
 
app.post('/enrolldistributor',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setdistributor(req.body.distributorid,req.body.distributorname,req.body.distributorlocation).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})

app.post('/enrollretailer',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setretailer(req.body.retailerid,req.body.retailername,req.body.retailerlocation).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.post('/enrollcustomer',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setcustomer(req.body.customerid,req.body.customername,req.body.customerlocation).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})



app.post('/enrollfarmerproduct',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setfarmerdetail(req.body.productid,req.body.item,req.body.typeofitem,req.body.produceddate,req.body.expirydate).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})


app.post('/enrollfactoryproduct',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setfactorydetail(req.body.productid).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})

app.post('/enrolldistributorproduct',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setdistributordetail(req.body.productid,req.body.distributorreceiveddate).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})

app.post('/enrollretailerproduct',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setretailerdetail(req.body.productid,req.body.retailerreceiveddate).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})

app.post('/enrollcustomerproduct',function(req,res){

    console.log(req.body);
    console.log('inside post') ;
	var encodedData = myContract.methods.setcustomerdetail(req.body.productid,req.body.customerreceiveddate).encodeABI();
	console.log(encodedData);

	var transactionObject = {
		gas : "470000",
		data : encodedData,
		from : account,
		to : contractAddress
	};
 
    web3.eth.accounts.signTransaction(transactionObject,pkey,function(error,trans){
		console.log(trans);
		web3.eth.sendSignedTransaction(trans.rawTransaction)
		.on("receipt",function(result){
			console.log(result);
			res.send(result);
		})
	})
})




app.get('/getfarmerinfo',function (req,res){
	console.log("farmerid query:",req.query);
    myContract.methods.getfarmer(req.query.farmerid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("FarmerID:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"FarmerName:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"FarmerLocation:"+"&nbsp"+"&nbsp"+result[2]);
});

});

app.get('/getfactoryinfo',function (req,res){
	console.log("factoryid query:",req.query);
    myContract.methods.getfactory(req.query.factoryid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("FactoryID:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"FactoryName:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"FactoryLocation:"+"&nbsp"+"&nbsp"+result[2]);
});

});

app.get('/getdistributorinfo',function (req,res){
	console.log("distributorid query:",req.query);
    myContract.methods.getdistributor(req.query.distributorid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("DistributorID:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"DistributorName:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"DistributorLocation:"+"&nbsp"+"&nbsp"+result[2]);
});

});

app.get('/getretailerinfo',function (req,res){
	console.log("retailerid query:",req.query);
    myContract.methods.getretailer(req.query.retailerid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("RetailerID:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"RetailerName:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"RetailerLocation:"+result[2]);
});

});

app.get('/getcustomerinfo',function (req,res){
	console.log("customerid query:",req.query);
    myContract.methods.getcustomer(req.query.customerid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("CustomerID:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"CustomerName:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"CustomerLocation:"+"&nbsp"+"&nbsp"+result[2]);
});

});

app.get('/getproductinfo',function (req,res){
	console.log("productid query:",req.query);
    myContract.methods.getproductdetails(req.query.productid).call({from:account})
.then(function(result){
    console.log(result);
    res.send("Item:"+"&nbsp"+"&nbsp"+result[0]+"</br>"+"Typeofitem:"+"&nbsp"+"&nbsp"+result[1]+"</br>"+"Produceddate:"+"&nbsp"+"&nbsp"+result[2]+"</br>"+"Expirydate:"+"&nbsp"+"&nbsp"+result[3]+"</br>"+"Distributorreceiveddate:"+"&nbsp"+"&nbsp"+result[4]+"</br>"+"Retailerreceiveddate:"+"&nbsp"+"&nbsp"+result[5]+"</br>"+"Customerreceiveddate:"+"&nbsp"+"&nbsp"+result[6]);
});

});





app.listen(5000,() => {
	console.log("I am listinig at post 5000 !");
})