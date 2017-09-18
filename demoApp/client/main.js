import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
var selectedRowId;
Template.transection.events({
	"submit" : function(){
		//alert(event.target.ChargeAmt.id);
		var amount = parseInt(event.target.TranAmt.value) * parseInt(event.target.ExchRate.value);
		web3.personal.unlockAccount(event.target.DebAcc.value,"test");
		//web3.eth.sendTransaction({from: toAddress, to: "0xECfa5E55219a10Db4FC1742e3A8Ea46F0eCEBceE", value: web3.toWei(amount, "ether")});
		var PosNarr = ConvertToHex(event.target.PosNarr.value);
		var ValDate = ConvertToHex(event.target.ValDate.value);
		var ExchRate = ConvertToHex(event.target.ExchRate.value);
		var OrderingPartyDet = ConvertToHex(event.target.OrderingPartyName.value +","+event.target.OrderingPartyAdd.value+","+event.target.OrderingPartyPhone.value);
		var ContNum = 100000 + myContract.numTrans() + 1;

		//var address = ChargeAmtDetails.findOne({Name:});
		var test = myContract.transect(ContNum,event.target.DebAcc.value,event.target.CredAcc.value,parseInt(event.target.ChargeAmt.value),PosNarr,ValDate,ExchRate,OrderingPartyDet,{from: event.target.DebAcc.value, value: web3.toWei(amount, "ether"),gas:4000000});
		//alert(test);
		var chgAmountInGas = parseInt(event.target.ChargeAmt.value) * 1000000000000000000;
		chgAmountInGas-= 4400000;
		//alert(chgAmountInGas);
		myContract.chargeReg(ContNum,web3.eth.accounts[2],{from: event.target.DebAcc.value, value:chgAmountInGas,gas:400000});
	}
});
Template.transection.helpers({
	"accounts":function(){
		return AccountDetails.find();
	},
	"Charges":function(){
		return ChargeAmtDetails.find();
	},
	'getAccountName': function(addr) {
		//alert(addr);
		var temp = addr;
		try{
		 temp = AccountDetails.findOne({Address:addr.toUpperCase().trim()}).AccountName;
		}
		catch(e)
		{
			temp = addr;
		}
//		alert(temp);
		return temp;
	},
	"AccountSel":function(add)
	{
		//alert("add");
	},
	'blur #AccDeb':function(add){
		//alert("acc");
	}
});
Template.summary.helpers({
	"summaries" : function(){
		var transectCount = myContract.numTrans();
		//var num = Number("900000000000000000000")/1000000000000000000;
		for (i = 0; i< transectCount ; i++)
		{
			var data=myContract.getAccDetails(i);
			data.push(myContract.getNarrDetails(i));
			data.push(myContract.getEXCHDetails(i));
			data.push(myContract.getChargeAmtDet(i));
			var list = data.toString().split(',');
			TransectionsDetails.upsert("tx_"+i,{
				rowId:i,
				ContNum: list[0],
				DebitAccount: list[1],
				CreditAccount: list[2],
				ChargeAmt: list[3],
				PosNarr: ConvertTostring(list[4]).trim(),
				ValDate: ConvertTostring(list[5]).toString(),
				ExchRate: ConvertTostring(list[6]).toString(),
				OrderingPartyDet: ConvertTostring(list[7]).toString(),
				Completed : list[8],
				TranNum : list[9],
				Amount : (web3.fromWei(Number(list[10]),"ether")/parseInt(ConvertTostring(list[6]))),
				CredAccAddress:list[13],
				ChargeAmount:web3.fromWei(Number(list[12]),"ether")
			});
			//var test = ConvertTostring(list[3]);
		}
		return TransectionsDetails.find();
	},
	'getStatusColor': function(status) {

	    switch (status) {
	        case 0,"0" : {
	            return 'red';
	        }
	        break;
	        case 1,"1" : {
	            return 'green';
	        }
	        break;
	        default : {
	        	return 'black'
	        }
	    }
	},
	'getAccountName': function(addr) {
		var temp = AccountDetails.findOne({Address:'addr'}).AccountName;
		return temp;
	},

});
Template.summary.events({
"click [data-action='task/Transect']":function(){
	//alert(selectedRowId);
	if (selectedRowId <= -1) { 
		return;
	}
	var tempNum = selectedRowId;
	web3.personal.unlockAccount(web3.eth.accounts[0],"test");
	myContract.transfer(parseInt(tempNum),{from: web3.eth.accounts[0],gas:4000000});
	selectedRowId = -1;
}
});

Template.summaryTab.helpers({
	'getStatusColor': function(status) {

	    switch (status) {
	        case 0,"0" : {
	            return 'red';
	        }
	        break;
	        case 1,"1" : {
	            return 'green';
	        }
	        break;
	        default : {
	        	return 'black'
	        }
	    }
	},	
	'getStatus': function(status) {

	    switch (status) {
	        case 0,"0" : {
	            return '';
	        }
	        break;
	        case 1,"1" : {
	            return 'disabled';
	        }
	        break;
	        default : {
	        	return 'false'
	        }
	    }
	},
	'getAccountName': function(addr) {
		//alert(addr);
		var temp = addr;
		try{
		 temp = AccountDetails.findOne({Address:addr.toUpperCase().trim()}).AccountName;
		}
		catch(e)
		{
			temp = addr;
		}
//		alert(temp);
		return temp;
	},
});
Template.summaryTab.events({
  "click tr": function (event) {
	    selectedRowId = $(event.target.parentNode.parentNode)[0].id;//).data("mongoId");
	   //alert(selectedRowId);
  }
});
Template.ExchRateDef.helpers({

	"ExchRateSummary": function() {
		return ExchangeDetails.find();
	}
});
Template.ExchRateDef.events({
	"click [data-action='task/create']":function(){
		var ExchRate = parseInt(event.target.form.ExchangeRate.value);
		var CCYTo = event.target.form.CurrencyTo.value;
		if (ExchRate === ""||CCYTo=="") {
			alert("Not all field entered");
			return;
		}
		ExchangeDetails.insert({ExchRate:ExchRate,
			CCYTo:CCYTo
			});
	},
	"click [data-action='task/delete']": function()
	{
		//alert("delete called");
	}
});

Template.AccountsDef.helpers({
	"accountDet":function(){
		//alert(AccountDetails.find({Address:"0xa07caac082cc6143132f2abaf8ba290ac51b8fc7"}).AccountName);

		return AccountDetails.find();
	},
	"getBalance":function(Address){
		return getBalance(Address);
	}
});

Template.chargeRegTab.helpers({
"getAccountNameDet": function(addr) {
		var temp = AccountDetails.findOne({Address:addr.toUpperCase().trim()}).AccountName;
		return temp;
	}
});


Template.AccountsDef.events({
	'submit':function(){
		var Address = event.target.AccAddr.value.toUpperCase();
		var AccountName = event.target.AccName.value;
		var CCY =event.target.CCY.value;
		if (Address === ""||AccountName===""||CCY=="") {
			alert("Not all field entered");
			return;
		}
		AccountDetails.insert({Address:Address,
			AccountName:AccountName,
			CCY:CCY
			});
	}
});

//0X4250D950329717FB67EF5909D9805FA42E369FB6
//0X4250D950329717FB67EF5909D9805FA42E369FB6

Template.ChargeDef.helpers({
	"chargeDet":function(){
		//alert(AccountDetails.find({Address:"0xa07caac082cc6143132f2abaf8ba290ac51b8fc7"}).AccountName);

		return ChargeAmtDetails.find();
	},
	'getStatusColor': function(status) {

	    switch (status) {
	        case 0,"0" : {
	            return 'red';
	        }
	        break;
	        case 1,"1" : {
	            return 'green';
	        }
	        break;
	        default : {
	        	return 'black'
	        }
	    }
	}
});
Template.ChargeDef.events({
	'submit':function(){
		var name = event.target.Name.value.toUpperCase();
		var Description = event.target.Description.value;
		var Amount =event.target.Amount.value;
		var ToAccount = event.target.ToAccount.value;
		if (name === ""||Description===""||Amount=="") {
			alert("Not all field entered");
			return;
		}
		ChargeAmtDetails.insert({Name:name,
			Desc:Description,
			Amount:Amount,
			ToAccount:ToAccount
			});
	}
});
