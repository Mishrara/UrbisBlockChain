if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

Router.configure({
    layoutTemplate: 'main'
});
contAddr = "0x592BCdc68bC2A5e186343Db3d38E59485CE58499"
contABIArr = [ { "constant": false, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getChargeAmtDet", "outputs": [ { "name": "contNum", "type": "int256", "value": "0" }, { "name": "chrgeAmt", "type": "uint256", "value": "0" }, { "name": "credAccAdd", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "complete", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getBal", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "numTrans", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getEXCHDetails", "outputs": [ { "name": "ExchRate", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" }, { "name": "ordrPartyDetails", "type": "bytes", "value": "0x" }, { "name": "complete", "type": "uint256", "value": "0" }, { "name": "transNum", "type": "uint256", "value": "0" }, { "name": "amount", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getNarrDetails", "outputs": [ { "name": "PosNarr", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" }, { "name": "ValDate", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "contNum", "type": "int256" }, { "name": "credAccAdd", "type": "address" } ], "name": "chargeReg", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getAccDetails", "outputs": [ { "name": "contNum", "type": "int256", "value": "0" }, { "name": "DebAcc", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "CredAcc", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "chrgAmt", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "contNum", "type": "int256" }, { "name": "DebAcc", "type": "address" }, { "name": "CredAcc", "type": "address" }, { "name": "chrgAmt", "type": "uint256" }, { "name": "PosNarr", "type": "bytes32" }, { "name": "ValDate", "type": "bytes32" }, { "name": "ExchRate", "type": "bytes32" }, { "name": "ordrPartyDetails", "type": "bytes" } ], "name": "transect", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Transections", "outputs": [ { "name": "contractNumber", "type": "int256", "value": "0" }, { "name": "amount", "type": "uint256", "value": "0" }, { "name": "chrgAmt", "type": "uint256", "value": "0" }, { "name": "eth_DebAccAddress", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "eth_CredAccAddress", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "PosNarr", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" }, { "name": "ValDate", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" }, { "name": "ExchRate", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" }, { "name": "ordrPartyDetails", "type": "bytes", "value": "0x" }, { "name": "completed", "type": "uint256", "value": "0" }, { "name": "tranNum", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "ChargeAmounts", "outputs": [ { "name": "contractNumber", "type": "int256", "value": "0" }, { "name": "chrgeAmt", "type": "uint256", "value": "0" }, { "name": "CredAccAddress", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "completed", "type": "uint256", "value": "0" }, { "name": "tranNum", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" } ]
myContract = web3.eth.contract(contABIArr).at(contAddr);

contExchAddr = "0xECfa5E55219a10Db4FC1742e3A8Ea46F0eCEBceE"
contExchABIArr = [ { "constant": false, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "transfer", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getBal", "outputs": [ { "name": "", "type": "uint256", "value": "200000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "numTrans", "outputs": [ { "name": "", "type": "uint256", "value": "1" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getEXCHDetails", "outputs": [ { "name": "ExchGrp", "type": "bytes32", "value": "0x5875875870000000000000000000000000000000000000000000000000000000" }, { "name": "ExchRate", "type": "bytes32", "value": "0x5875785870000000000000000000000000000000000000000000000000000000" }, { "name": "ordrPartyDetails", "type": "bytes32", "value": "0x5858758758000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getNarrDetails", "outputs": [ { "name": "DebPosNarr", "type": "bytes32", "value": "0x7676645600000000000000000000000000000000000000000000000000000000" }, { "name": "CredPosNarr", "type": "bytes32", "value": "0x5875858000000000000000000000000000000000000000000000000000000000" }, { "name": "DebValDate", "type": "bytes32", "value": "0x5875875800000000000000000000000000000000000000000000000000000000" }, { "name": "CredValDate", "type": "bytes32", "value": "0x5875875785000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tranNum", "type": "uint256" } ], "name": "getAccDetails", "outputs": [ { "name": "DebAcc", "type": "address", "value": "0xa07caac082cc6143132f2abaf8ba290ac51b8fc7" }, { "name": "CredAcc", "type": "address", "value": "0xa07caac082cc6143132f2abaf8ba290ac51b8fc7" }, { "name": "chrgAmt", "type": "uint256", "value": "3" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "DebAcc", "type": "address" }, { "name": "CredAcc", "type": "address" }, { "name": "chrgAmt", "type": "uint256" }, { "name": "DebPosNarr", "type": "bytes32" }, { "name": "CredPosNarr", "type": "bytes32" }, { "name": "DebValDate", "type": "bytes32" }, { "name": "CredValDate", "type": "bytes32" }, { "name": "ExchGrp", "type": "bytes32" }, { "name": "ExchRate", "type": "bytes32" }, { "name": "ordrPartyDetails", "type": "bytes32" } ], "name": "transect", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "Transections", "outputs": [ { "name": "amount", "type": "uint256", "value": "200000000000000000000" }, { "name": "chrgAmt", "type": "uint256", "value": "3" }, { "name": "eth_DebAccAddress", "type": "address", "value": "0xa07caac082cc6143132f2abaf8ba290ac51b8fc7" }, { "name": "eth_CredAccAddress", "type": "address", "value": "0xa07caac082cc6143132f2abaf8ba290ac51b8fc7" }, { "name": "DebPosNarr", "type": "bytes32", "value": "0x7676645600000000000000000000000000000000000000000000000000000000" }, { "name": "CredPosNarr", "type": "bytes32", "value": "0x5875858000000000000000000000000000000000000000000000000000000000" }, { "name": "DebValDate", "type": "bytes32", "value": "0x5875875800000000000000000000000000000000000000000000000000000000" }, { "name": "CredValDate", "type": "bytes32", "value": "0x5875875785000000000000000000000000000000000000000000000000000000" }, { "name": "ExchGrp", "type": "bytes32", "value": "0x5875875870000000000000000000000000000000000000000000000000000000" }, { "name": "ExchRate", "type": "bytes32", "value": "0x5875785870000000000000000000000000000000000000000000000000000000" }, { "name": "ordrPartyDetails", "type": "bytes32", "value": "0x5858758758000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" } ]
myExchContract = web3.eth.contract(contABIArr).at(contAddr);

myABI = [ { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "removeOwner", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_addr", "type": "address" } ], "name": "isOwner", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "m_numOwners", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "m_lastDay", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "resetSpentToday", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "m_spentToday", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "addOwner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "m_required", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_h", "type": "bytes32" } ], "name": "confirm", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_newLimit", "type": "uint256" } ], "name": "setDailyLimit", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_data", "type": "bytes" } ], "name": "execute", "outputs": [ { "name": "_r", "type": "bytes32" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_operation", "type": "bytes32" } ], "name": "revoke", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_newRequired", "type": "uint256" } ], "name": "changeRequirement", "outputs": [], "type": "function" }, { "constant": true, "inputs": [ { "name": "_operation", "type": "bytes32" }, { "name": "_owner", "type": "address" } ], "name": "hasConfirmed", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" } ], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" } ], "name": "changeOwner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "m_dailyLimit", "outputs": [ { "name": "", "type": "uint256" } ], "type": "function" }, { "inputs": [ { "name": "_owners", "type": "address[]" }, { "name": "_required", "type": "uint256" }, { "name": "_daylimit", "type": "uint256" } ], "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" } ], "name": "Confirmation", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" } ], "name": "Revoke", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "oldOwner", "type": "address" }, { "indexed": false, "name": "newOwner", "type": "address" } ], "name": "OwnerChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "newOwner", "type": "address" } ], "name": "OwnerAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "oldOwner", "type": "address" } ], "name": "OwnerRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "newRequirement", "type": "uint256" } ], "name": "RequirementChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "SingleTransact", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "owner", "type": "address" }, { "indexed": false, "name": "operation", "type": "bytes32" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "MultiTransact", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "operation", "type": "bytes32" }, { "indexed": false, "name": "initiator", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "data", "type": "bytes" } ], "name": "ConfirmationNeeded", "type": "event" } ]

var myAddress = "0x6A795CFC35f07c1E0f1FF372D14e5f8F0a15a3C9";
var myWallContract = web3.eth.contract(myABI);
var myInstance = myWallContract.at(myAddress);
toAddress = "0x6A795CFC35f07c1E0f1FF372D14e5f8F0a15a3C9";
requestAddress = "0xa07CaaC082Cc6143132f2abaf8Ba290Ac51b8fC7";
valueWithdrawn = web3.toWei(100, "ether");
amtGas = 400000;

TransectionsDetails = new Mongo.Collection('TransactionsDetNew');
TransectionDetails = new Mongo.Collection('TransactionNew');
ExchangeDetails = new Mongo.Collection('ExchangeDet');
AccountDetails = new Mongo.Collection('Accounts');
ChargeAmtDetails = new Mongo.Collection('Charges');


var selectedRowId;


//Routes-----
Router.route('/', function () {
  this.render('transection');
});

Router.route('/summary', function () {
  this.render('summary');
});

Router.route('/Exchange', function () {
  this.render('ExchRateDef');
});

Router.route('/Accounts', function () {
  this.render('AccountsDef');
});
Router.route('/Charges', function () {
  this.render('ChargeDef');
});

//-----------

ConvertTostring = function hex_to_ascii(str1)
	 {
		var hex  = str1.toString().substr(2);
		var pos = hex.indexOf("000",1);
		if (pos > 0 ) {	
			hex = hex.substr(0,pos+1);
		}
		var str = "";
		for (var n = 0; n < hex.length; n += 2) {
			if (hex.substr(n, 2) != "0") {
				str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
			}
				
			
		}
		return str;
	 }
ConvertToHex = function toHex(str) {
	var hex = '0x';
	for(var i=0;i<str.length;i++) {
		hex += str.charCodeAt(i).toString(16);
	}
	return hex;
}

getBalance = function getBal(address){
	var teth = web3.fromWei(web3.eth.getBalance(address), "ether");
	var tccy = AccountDetails.findOne({Address:address.toUpperCase().trim()}).CCY;
	if (tccy === 'ETHER') {
		return teth;
	}
	var texchRt = ExchangeDetails.findOne({CCYTo:tccy}).ExchRate;

	return (teth/texchRt);
}
