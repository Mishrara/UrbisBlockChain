import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // ode to run on server at startup
  
	TransectionDetails = new Mongo.Collection('TransactionNew');
	ExchangeDetails = new Mongo.Collection('ExchangeDet');
	AccountDetails = new Mongo.Collection('Accounts');
	TransectionsDetails = new Mongo.Collection('TransactionsDetNew');
	ChargeAmtDetails = new Mongo.Collection('Charges');
	TransectionsDetails.remove({});
	TransectionDetails.remove({});
});
var selectedRowId;
//new PersistentMinimongo(TransectionDetails);
