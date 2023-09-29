var ShowAllEntryEditRowID = 0;
var ResponseData_ = null;
var MinusPartnerData_ = [];
var PlusPartnerData_ = [];
var USERR = null;
var myTimer;
var DashShuldr;
var shudlr;
var ActiveInactveFlag = true;
//var BASE_URL = window.location.origin;
//var HOST_URL='http://35.196.135.2';
function hardReload(){
    if( !window.fetch)return document.location.reload( true);
    var els = document.getElementsByTagName( "*");
    for( var i = 0; i < els.length; i++){
        var src = "";
        if( els[i].tagName == "A")continue;
        if( !src && els[i].src)src = els[i].getAttribute( "src");
        if( !src && els[i].href)src = els[i].getAttribute( "href");
        if( !src)continue;
	if(src.includes('ext-all.js'))continue;
        fetch( src, { cache: "reload"});
    }
    return document.location.reload( true);
};

function PageMask(flag) {

    if (flag && !(Ext.getCmp('Homeviewport').isMasked())){ 
       Ext.getCmp('Homeviewport').mask();
	}
    else{
	if(Ext.getCmp('Homeviewport').isMasked())	
		Ext.getCmp('Homeviewport').unmask();
	}
}
function getPartnerSettle_Status(partnerID)
{
	if(ResponseData_.dashboardData !== undefined && ResponseData_.dashboardData !==null)
	{
		if(ResponseData_.dashboardData.filter(function(value,index){return value.partnerName_.toLowerCase().indexOf(partnerID.toLowerCase()) > -1 && value.totalAmountStatus_ ==='0.00';}).length > 0)
		{
			if(Ext.getStore('settlementTicketsStore').data.items.length < 1)
				return true;
			else
				return false;
		}
		else
		  return false;
	}
	else
	  return false;
}
function getBoolean(value){
   switch(value){
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
            return true;
        default: 
            return false;
    }
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
function getBeforeAfterDAte(Flagg)
{
	var curdate = formatDate((new Date()));
    var tdate = curdate;
    if(Flagg==='B'){
		    var today = new Date(tdate);
    today.setDate(today.getDate() - 7);
    var currentDatemin = formatDate(today);
    return currentDatemin;
		}
	else{
		 var todaymax = new Date(tdate);
    todaymax.setDate(todaymax.getDate() + 7);
    var currentDatemax = formatDate(todaymax);
    return currentDatemax;
			}
}

function GetTodayDate() {
    //current date
    var curdate = formatDate((new Date()));
    var tdate = curdate;
    
    //min date
    var today = new Date(tdate);
    today.setDate(today.getDate() - 7);
    var currentDatemin = formatDate(today);
   // $('#EntryDate').attr("min", currentDatemin);
    var todaymax = new Date(tdate);
    todaymax.setDate(todaymax.getDate() + 7);
    var currentDatemax = formatDate(todaymax);
    //$('#EntryDate').attr("max", currentDatemax);
    //max date

}

//Set Date in Edit Record
function SetDate(yyyymmdd) {
    //current date
    var curdate = formatDate((new Date(yyyymmdd)));
    var tdate = curdate;
    $('#EntryDate').attr("value", tdate);
    //min date
    var today = new Date(tdate);
    today.setDate(today.getDate() - 7);
    var currentDatemin = formatDate(today);
    $('#EntryDate').attr("min", currentDatemin);
    var todaymax = new Date(tdate);
    todaymax.setDate(todaymax.getDate() + 7);
    var currentDatemax = formatDate(todaymax);
    $('#EntryDate').attr("max", currentDatemax);
    //max date

}
function TaskManager(shudelrFlag)
{
	if(shudelrFlag){
	 shudlr=setInterval(function(){
		SetYourIP();
	},1000);
	}
	else if(shudlr!==null && shudlr!==undefined){
		clearInterval(shudlr);
	}
}
//Your IP Address
function SetYourIP() {
    //url: "api/AddPartnr/GetIp",
    $.ajax({
        url: "https://api.ipify.org/?format=json",
        type: 'GET',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        error: function (response) {
			Ext.ComponentQuery.query('#onOff_Img')[0].setSrc('assets/images/off.png');
			//$('#Develop').text('');
        },
        success: function (response) {
			Ext.ComponentQuery.query('#onOff_Img')[0].setSrc('assets/images/on.png');
            //$('#Develop').text('Your IP-Address ' + response.ip);
        }
    });
}
function DashBoardTaskManager(shudelrFlag)
{
	if(shudelrFlag){
	 DashShuldr=setInterval(function(){
		
		if(ResponseData_!==null && ResponseData_!==undefined){
			DashBoardChartts();
			PageMask(false);
			Ext.getCmp('moreDetailsbtn').enable();
			clearInterval(DashShuldr);
		}
	},1000);
	}
	else if(DashShuldr!==null && DashShuldr!==undefined){
		clearInterval(DashShuldr);
	}
}
//Status show
function ShowHideStatus(msgText, divvColor) {
    if (divvColor === 'OK') {//OK
        divvColor = '#08CB43';
    }
    else if (divvColor === 'Warning') {
        divvColor = '#F3EF0C';
    }
    else if (divvColor === 'Error') {
        divvColor = 'red';
    }
    if (!($("#status").is(":visible"))) {
		Ext.getCmp('StatusDiv').getEl().update('<div id="status"  style="height:40px;background:'+divvColor+'; color:#fff;" align="center"><div style="padding-top: 8px; align:center;">' + msgText + '</div></div>');
    }
    myTimer = setTimeout(function () {
        showdiv(msgText, divvColor);
    }, 2000);

}
function showdiv(msgText, divvColor) {

    if ($("#status").is(":visible")) {
        $("#status").remove();
        clearTimeout(myTimer);
    }
    else {
		Ext.getCmp('StatusDiv').getEl().update('<div id="status"  style="height:40px;background:'+divvColor+'; color:#fff;" align="center"><div style="padding-top: 8px; align:center;">' + msgText + '</div></div>');
    }
}


//LoadIndropdown
function LoadAllData() {
    $.ajax({
        url: HOST_URL+"/api/AddPartnr/GetAllPartners",
        type: 'GET',
        beforeSend: function (request) {
			if(localStorage.getItem('xAuth').length>150 && localStorage.getItem('xAuth') !== null && localStorage.getItem('xAuth') !== 'null' )
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
            else{
				document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
				localStorage.setItem('xAuth', '');
				localStorage.removeItem('xAuth');
				window.location.replace("signin.html");
			}
            
        },
        xhrFields: { withCredentials: true },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            
        },
        success: function (response) {
			ResponseData_=null;
            ResponseData_ = response.responseData[0];
			if(ResponseData_.showAllEntry.length>0 && ResponseData_.showAllEntry!=undefined)
			ShoowAllEntryFun(ResponseData_.showAllEntry);
			Ext.getStore('dashboardDataStore').loadRawData(ResponseData_.dashboardData);
			Ext.getStore('responseDATAStore').loadRawData(ResponseData_.data);
        }

    });

}

function SetUserNameFromCookies() {
	if(window.location.protocol.includes('https:'))
		HOST_URL=HOST_URL.replace('http:','https:')
    var cuki = decodeURIComponent(document.cookie);
    if (cuki !== '' && cuki.indexOf("_!_") >= 0) {
        USERR = new CurrentUser(cuki);
        var adminFlag = USERR.accountType;
		RenderStores();
        if (adminFlag === 'Admin' || adminFlag === 'Super') {
            ActiveInactveFlag=false;
        }
		LoadAllData();
		TaskManager(true);
    }
    else {
		TaskManager(false);
        USERR = new CurrentUser('');
		document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
		localStorage.setItem('xAuth', '');
		localStorage.removeItem('xAuth');
        window.location.replace("signin.html");

    }
}

// Render Data Stores
function RenderStores()
{
	//
	//exporttoCSVComboStore
	Ext.create('Ext.data.Store', {
     storeId: 'exporttoCSVComboStore',
     fields: ['dateofSettleUp', 'token']
    });
	 Ext.create('Ext.data.Store', {
            storeId: 'noticboardStore',
            fields: ['id', 'message', 'groupName', 'insertdate']
        });
		
		
	Ext.create('Ext.data.Store', {
        storeId: 'showAllEntriesStore',
        fields: ['sno_', 'id_', 'partnerId_', 'partnerName_', 'dateOFInsert_', 'dateOfSpend_', 'itemName_', 'paidby_', 'sharedIn_', 'totalAmountSpend_', 'shareAmount_', 'pairToken_', 'issettled_', 'groupname_']
    });
    Ext.create('Ext.data.Store', {
        storeId: 'showAllEntriesStoreReal',
        fields: ['id_', 'partnerId_', 'partnerName_', 'dateOFInsert_', 'dateOfSpend_', 'itemName_', 'paidby_', 'sharedIn_', 'totalAmountSpend_', 'shareAmount_', 'pairToken_', 'issettled_', 'groupname_']
    });
	
	        Ext.create('Ext.data.Store', {
            storeId: 'responseDATAStore',
            fields: ['id', 'fname', 'mobile', 'isActive', 'lname', 'email', 'accounttype', 'partnerID', 'ppassword', 'dateofjoin', 'roomname'],
            listeners: {
                datachanged: function (store, eOpts) {
                    if (store.data.items.length > 0 && store.data.items !== null && store.data.items !== undefined) {
                       
                    }
                    else {
                        //Ext.ComponentQuery.query('#checkboxfieldHold')[0].removeAll(true);
                    }
                }
            }
        });
	        Ext.create('Ext.data.Store', {
            storeId: 'dashboardDataStore',
            fields: ['partnerName_', 'spendAmount_', 'consumeAmount_', 'totalAmountStatus_'],
            listeners: {
                datachanged: function (store, eOpts) {
                   if (store.data.items.length > 0 && store.data.items !== null && store.data.items !== undefined) {
                       	var dashBoardChartData_ =store.data.items.map(function(value,index){return Ext.decode('{"name": "' + value.data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' +value.data.spendAmount_ + ',"consumed": ' + value.data.consumeAmount_ + '}');});
						Ext.getStore('dashboardDataChartStore').loadRawData( dashBoardChartData_);
                       //LoadDashboardFun(store.data.items);
                   }
                   else {
                       var Containers = Ext.ComponentQuery.query('#DashBoardTicketscontainer')[0];
                       Containers.removeAll();
                      
                   }
                }
            }
        });	

			Ext.create('Ext.data.Store', {
            storeId: 'dashboardDataChartStore',
            fields: ['name', 'spend', 'consumed',],
            listeners: {
                datachanged: function (store, eOpts) {
                   
                }
            }
        });
			Ext.create('Ext.data.Store', {
            storeId: 'allAccountssChartStore',
            fields: ['name', 'spend', 'consumed',],
            listeners: {
                datachanged: function (store, eOpts) {
                   
                }
            }
        });
		 Ext.create('Ext.data.Store', {
            storeId: 'GetAllAccountHistoryStore',
            fields: ['partnerName_', 'spendAmount_', 'consumeAmount_', 'totalAmountStatus_'],
            listeners: {
                datachanged: function (store, eOpts) {
                    if (store.data.items.length > 0 && store.data.items !== null && store.data.items !== undefined) {
						var dashBoardChartData_ =store.data.items.map(function(value,index){return Ext.decode('{"name": "' + value.data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' + value.data.spendAmount_ + ',"consumed": ' + value.data.consumeAmount_ + '}');});
						Ext.getStore('allAccountssChartStore').loadRawData( dashBoardChartData_);
                    }
                    else {
                        
                    }
                }
            }
        });
		
		//SettlementsTickets
		     Ext.create('Ext.data.Store', {
            storeId: 'settlementTicketsStore',
            fields: ['id_', 'partnerId_', 'partnername_', 'spend_', 'consumed_', 'settlementID_', 'dateofSettlement_', 'groupName_', 'settlementBy_', 'amountStatus_', 'settlementStatus_', 'currentamountStatus_', 'unquieToken_', 'paymentHistory_'],
            hasMany: {
                fields: ['id_', 'groupname_', 'ref_id_', 'to_paypartnerid_', 'to_paypartnername_', 'to_paycurrentamount_', 'amount_', 'paydate_', 'from_paypartnerid_', 'from_paypartnername_', 'from_paycurrentamount_', 'unquieToken_', 'minusPartnerID_'],
                name: 'paymentHistory_'
            },
            listeners: {
                datachanged: function (store, eOpts) {
                    if (store.data.items.length > 0 && store.data.items !== null && store.data.items !== undefined) {
                        BindSettlementDashboard(store.data.items);
                    }
                    else {
                        var Containers = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainer')[0];
                        if (Containers!==undefined)
							Containers.removeAll();
                    }
                }
            }
        });
}



//Notice Board
function NoticeBoard()
{
	Ext.ComponentQuery.query('#NoticeBoardtab')[0].removeAll(true);
	var itemss=Ext.create('Ext.container.Container', {
            //layout: {
            //    type: 'hbox',
            //    align: 'center'
            //},
			layout:'fit',
			margin:'10 10 10 10',
            items: [
					Ext.create('Ext.grid.Panel', {
					    title: 'Logs ',
					    header: false,
					    store: Ext.data.StoreManager.lookup('noticboardStore'),
					    columns: [
                            { text: 'Id', dataIndex: 'id', flex: 5 / 100 },
                            { text: 'Message', dataIndex: 'message', flex: 95 / 100, cellWrap: true, menuDisabled: true, sortable: false },
					    ],
					    height: 300,
					})
            ]
        });
		
		var NoticeBoardtab = Ext.ComponentQuery.query('#NoticeBoardtab')[0];
		NoticeBoardtab.add(itemss);
		Ext.getStore('noticboardStore').loadRawData(ResponseData_.logs);
		 var settlementBTN = {
	        xtype: 'container',
	        id: 'settlementBTN2',
	        margin: '10 10 10 10',
	        height: 80, width: 80,
	        style: '{background:#87CEEB;border: none;border-radius: 5px 5px 5px 5px;}',
	        layout: {
	            type: 'hbox'
	        },
	        items: [{
	            xtype: 'image',
	            margin: '5 5 5 5',
	            height: 80, width: 80,
	            id: 'Img_Settlement',
	            src: 'assets/images/monthlypayments.png',
	            autoEl: {
	                tag: 'a'
	            },
	            listeners: {
	                render: function (comp, eOpts) {
	                    comp.mon(comp.el, 'click', function () {
	                        SettlementBtnClick();
	                    }, this);
	                }
	            }
	        }]
	    }
	    NoticeBoardtab.add(settlementBTN);

}


// Show All Entries	AllEntriestab
function ShowAllEntries()
{
	Ext.ComponentQuery.query('#AllEntriestab')[0].removeAll(true);
	var itemss=Ext.create('Ext.container.Container', {
            //layout: {
            //    type: 'hbox',
            //    align: 'stretch'
            //},
			layout:'fit',
			margin:'10 10 10 10',
            items: [
        Ext.create('Ext.grid.Panel', {
            title: 'Show Entries',
            header: false,
            id: 'showAllEntriesGrid',
            viewConfig: {
                getRowClass: function () {
                    return 'x-wes';
                }
            },
            store: Ext.data.StoreManager.lookup('showAllEntriesStore'),
            columns: [
                { text: 'Id', dataIndex: 'sno_', flex: 3 / 100, cellWrap: true, height: 50 },
                { text: 'Date', dataIndex: 'dateOfSpend_', flex: 28 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false },
                { text: 'Item', dataIndex: 'itemName_', flex: 40 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false },
                {
                    text: 'Paid', dataIndex: 'partnerName_', flex: 35 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false,
                    renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                        return value.split(' ')[0] + ' ' + value.split(' ')[1] + '<p style="color:green;font-size: 10px;">' + value.split(' ')[2] + value.split(' ')[3];
                    }
                },
                { text: 'ShareIn', dataIndex: 'sharedIn_', flex: 60 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false },
                {
                    text: '/Rs', dataIndex: 'shareAmount_', flex: 25 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false,
                    renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                        return '<p style="color:green;font-size: 10px;">Rs ' + value;
                    }
                },
            ],
            height: 450,
            listeners: {
                cellclick: function (view, cell, cellIndex, record, row, rowIndex, e) {

                    if (cellIndex === 0) {
                        if (rowIndex !== null && rowIndex !== undefined) {
                            var DataID_ = Ext.getStore('showAllEntriesStore').getAt(rowIndex).data.id_;
                            ShowEditHistory(DataID_);
                        }

                    }

                },
                itemdblclick: function (dataview, record, item, index, e) {
                    if (e.position.colIdx !== 0 && index !== null && index !== undefined) {
                        var DataIDs__ = Ext.getStore('showAllEntriesStore').getAt(index).data.id_;
						PageMask(true);
                        EditAllEntriesRow1(Ext.getStore('showAllEntriesStoreReal').getAt(index));
						PageMask(false);
                    }
                }
            },
            //renderTo: 'ShowAllEntriesDIV'
        })
            ]
        });
		
		var AllEntriestab = Ext.ComponentQuery.query('#AllEntriestab')[0];
		AllEntriestab.add(itemss);
		ShoowAllEntryFun(ResponseData_.showAllEntry);
}

//Show Edit History
function ShowEditHistory(ids) {
    PageMask(true);
    var IDD = ids;//parseInt($(ids).attr('id').split('_')[1]);
    $.ajax({
        url: HOST_URL+"/api/AddPartnr/ShowEntriesHistoryByID?ID=" + IDD,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        xhrFields: { withCredentials: true },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus(response.message, 'Error');
        },
        success: function (response) {
            PageMask(false);
            var dashboardtableHTML = '<table id="ShowAllEntriesHistory" border="1" role="grid" cellspacing="0" style="width:100%;"><thead><tr>';
            dashboardtableHTML += '<th><h5 align="center">Date</h5>&nbsp;</th><th><h5 align="center">ITEM</h5>&nbsp;</th><th><h5 align="center">PAID-BY</h5>&nbsp;</th>';
            dashboardtableHTML += '<th><h5 align="center">SHARE-IN</h5>&nbsp;</th><th><h5 align="center">Rs/HEAD</h5>&nbsp;</th><th><h5 align="center">Edit-By</h5>&nbsp;</th></tr></thead><tbody>';

            ShowHideStatus(response.message, 'OK');
            var checky = 0;
            for (var zx = 0; zx < response.data.length; zx++) {
                var shrInCount = 0;
                var sharestring = '';
                var shrInArr = [];
                if ((response.data[zx].sharedIn_.indexOf(",") >= 0)) {
                    shrInCount = response.data[zx].sharedIn_.split(',').length;
                    shrInArr = response.data[zx].sharedIn_.split(',');
                }
                for (var qw = 0; qw < shrInCount; qw++) {
                    var tempHoldHtml = shrInArr[qw].split('__')[1] + ', ';
                    sharestring += tempHoldHtml;
                }
                checky++;
                if (checky == 1) {
                    if (shrInCount !== 0)
                        dashboardtableHTML += '<tr style="color:cornflowerblue;" id="' + 'ShowAllEntriesHistoryRow_' + zx + '"><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + sharestring + '</td><td align="center" style="color:green;">Rs ' + response.data[zx].shareAmount_ + '</td><td align="center" style="color:green;">' + response.data[zx].updateBy_ + '</td></tr>';
                    else
                        dashboardtableHTML += '<tr style="color:cornflowerblue;" id="' + 'ShowAllEntriesHistoryRow_' + zx + '"><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].sharedIn_ + '</td><td align="center" style="color:green;">Rs' + response.data[zx].shareAmount_ + '</td><td align="center" style="color:green;">' + response.data[zx].updateBy_ + '</td></tr>';
                }
                else {
                    if (shrInCount !== 0)
                        dashboardtableHTML += '<tr id="' + 'ShowAllEntriesHistoryRow_' + zx + '"><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + sharestring + '</td><td align="center" style="color:green;">Rs ' + response.data[zx].shareAmount_ + '</td><td align="center" style="color:green;">' + response.data[zx].updateBy_ + '</td></tr>';
                    else
                        dashboardtableHTML += '<tr id="' + 'ShowAllEntriesHistoryRow_' + zx + '"><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].sharedIn_ + '</td><td align="center" style="color:green;">Rs' + response.data[zx].shareAmount_ + '</td><td align="center" style="color:green;">' + response.data[zx].updateBy_ + '</td></tr>';
                }

            }
            dashboardtableHTML += '</tbody></table>';
           Ext.ComponentQuery.query('#AllEntriestab')[0].removeAll(true);
			Ext.ComponentQuery.query('#AllEntriestab')[0].setHtml(dashboardtableHTML);
        }

    });

}


function ShoowAllEntryFun(reponseData) {
    let response = reponseData;
     var CustomJsonArray = [];
    for (var zx = 0; zx < response.length; zx++) {
        var shrInCount = 0;
        var sharestring = '';
        var shrInArr = [];
        if ((response[zx].sharedIn_.indexOf(",") >= 0)) {
            shrInCount = response[zx].sharedIn_.split(',').length;
            shrInArr = response[zx].sharedIn_.split(',');
        }
        for (var qw = 0; qw < shrInCount; qw++) {
            var tempHoldHtml = shrInArr[qw].split('__')[1] + ', ';
            sharestring += tempHoldHtml;
        }
        sharestring += '==';
        var TEMPsharestring = sharestring.replace(', ==', '').replace('==', '');
        var JsonObj = '';
        if (shrInCount !== 0) {
            JsonObj = '{"sno_": ' + (parseInt(zx) + 1) + ',"id_": ' + response[zx].id_ + ',"partnerId_": "' + response[zx].partnerId_ + '","partnerName_": "' + response[zx].partnerName_ + ' Rs ' + response[zx].totalAmountSpend_ + '</p>' + '","dateOFInsert_": "' + response[zx].dateOFInsert_ + '","dateOfSpend_": "' + response[zx].dateOfSpend_.split(' ')[0] + '","itemName_": "' + response[zx].itemName_ + '","paidby_": "' + response[zx].paidby_ + '","sharedIn_": "' + TEMPsharestring + '","totalAmountSpend_": "' + response[zx].totalAmountSpend_ + '","shareAmount_": "' + response[zx].shareAmount_ + '","pairToken_": "' + response[zx].pairToken_ + '","issettled_": "' + response[zx].issettled_ + '","groupname_": "' + response[zx].groupname_ + '"}';
        }
        else {
            JsonObj = '{"sno_": ' + (parseInt(zx) + 1) + ',"id_": ' + response[zx].id_ + ',"partnerId_": "' + response[zx].partnerId_ + '","partnerName_": "' + response[zx].partnerName_ + ' Rs ' + response[zx].totalAmountSpend_ + '</p>' + '","dateOFInsert_": "' + response[zx].dateOFInsert_ + '","dateOfSpend_": "' + response[zx].dateOfSpend_.split(' ')[0] + '","itemName_": "' + response[zx].itemName_ + '","paidby_": "' + response[zx].paidby_ + '","sharedIn_": "' + response[zx].sharedIn_.split('__')[1] + '","totalAmountSpend_": "' + response[zx].totalAmountSpend_ + '","shareAmount_": "' + response[zx].shareAmount_ + '","pairToken_": "' + response[zx].pairToken_ + '","issettled_": "' + response[zx].issettled_ + '","groupname_": "' + response[zx].groupname_ + '"}';
        }
        CustomJsonArray.push(Ext.decode(JsonObj));
    }
    Ext.getStore('showAllEntriesStore').loadData(CustomJsonArray);
    Ext.getStore('showAllEntriesStoreReal').loadData(response);
}







// Active Inactive Partner
function ActiveInActivePartnerAPI(idds,_isCHECKED) {
   
    PageMask(true);
    var dataa = '{"ID":' + parseInt(idds.trim()) + ',"flag":' + _isCHECKED + '}';
    $.ajax({
        url: HOST_URL+"/api/AddPartnr/SetActiveInactive",
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        xhrFields: { withCredentials: true },
        crossDomain: true,
        dataType: "json",
        data: dataa,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus('Update Status Failed', 'Error');
            
        },
        success: function (response) {
            ResponseData_ = null;
            ResponseData_ = response.responseData[0];
            ActiveInactiveBIND();
            PageMask(false);
            ShowHideStatus("Update Status Successfully", 'OK');
        }
    });
    
}


       // Active / In-Active 
function ActiveInactivePartner(){
	
	Ext.onReady(function () {
	    Ext.ComponentQuery.query('#ActInactivePartnertab')[0].removeAll(true);
	var itemss=Ext.create('Ext.container.Container', {
	        layout: {
	        type: 'hbox',
	        align: 'stretch'
	        },
			margin:'10 10 10 10',
            items: [
    Ext.create('Ext.form.Panel', {
	margin:'10 10 10 10',
	bodyPadding: 10,
	hidden: ActiveInactveFlag,
    title: 'On / OFF',
    layout: 'hbox',
    id:'containerACTive',
    height: 220,
    width: '40%',
	autoScroll: true,
    items: [
     {
      xtype: 'fieldcontainer',
      defaultType: 'checkboxfield',
      id:'checkboxfieldHold',
	  margin:'10 10 10 10',
	  layout: 'vbox',
	  labelWidth: 120,
	  labelHeight: 90,
	  defaults: {
	  	layout: '100%'
	  },
	  //autoScroll : true,
	  fieldDefaults: {
	 	msgTarget: 'under',
	 	labelAlign: 'top'
	  }
     }
    ]
  }),
   {
      xtype: 'fieldset',
      flex: 2,
      hidden: true,
      id: 'downloadedAppsContainer',
      itemId: 'downloadedAppsContainer',
      margin: '10 0 5 0',
      minHeight: 150,
      resizable: false,
      collapsible: true,
      title: '<b>Switch Group</b>',
      layout: {
          type: 'vbox'
          //align: 'stretch'
      },
      items: [
          {
			xtype: 'fieldcontainer',
			layout: 'vbox',
			items:[
				{
					xtype: 'textfield',
					fieldLabel: 'Search by Mobile',
					emptyText: 'MOBILE*',
					allowBlank: false,
					component: {
						type: 'tel'
					},
					minLength: 10,
					maxLength: 10,
					placeHolder: 'Mobile*',
					validator: function (value) {
						var ereg = /^[0]?[789]\d{9}$/;
						var testResult = ereg.test(value);
						if(testResult)
							Ext.getCmp('searchAdminbtn').setDisabled(false);
						return (testResult) ? true : 'Wrong Mobile Number Format.'
					},
					labelAlign:'top',
					labelStyle: 'font-weight:bold;width:120px',
					width:100,
					id: 'searchAdmintxt'
				},
				{
					xtype: 'button',
					text: 'Search',
					disabled: true,
					id: 'searchAdminbtn',
					listeners: {
						click: function () {
							searchAdmin(Ext.getCmp('searchAdmintxt').getValue());
						}
					}
				}
			]
		  },
		  {
		  	xtype: 'label',
		  	//style: '{font-size:13px;color:white;text-decoration: underline;}',
		  	hidden: true,
		  	id: 'lbl_search1',
		  	margin: '7 7 5 7'
		  },
		  {
		  	xtype: 'label',
		  	//style: '{color:white;font-size:10px;}',
		  	hidden: true,
		  	id: 'lbl_search2',
		  	margin: '2 7 2 7'
		  },
		  {
		  	xtype: 'button',
		  	text: 'Join',
		  	hidden: true,
		  	width: 50,
		  	id: 'joinAdminbtn',
		  	margin: '2 7 2 7',
		  	listeners: {
		  		click: function () {
		  			 if(getPartnerSettle_Status(USERR.partnerID)){
						
						ShowHideStatus('Your Request is sended ', 'OK');
					 }
					 else{
					 	ShowHideStatus('Cant update any info until you settled accounts ! ', 'Warning');
					 }
		  		}
		  	}
		  }
      ]
	}
]
});
var ActiveInactive = Ext.ComponentQuery.query('#ActInactivePartnertab')[0];
ActiveInactive.add(itemss);
});
ActiveInactiveBIND();
}

function searchAdmin(mobileNumber)
{
	    $.ajax({
        url: HOST_URL+"/api/AddPartnr/searchAdmin/"+mobileNumber,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        xhrFields: { withCredentials: true },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            ShowHideStatus('Update Status Failed', 'Error');           
        },
        success: function (response) {
			
			if(response.length ===1 && response[0].adminName !== undefined){
				Ext.getCmp('joinAdminbtn').setHidden(false);
				Ext.getCmp('lbl_search1').setHidden(false);
				Ext.getCmp('lbl_search2').setHidden(false);
				Ext.getCmp('lbl_search1').setText(response[0].adminName);
				Ext.getCmp('lbl_search2').setText(response[0].mobile);
			}
			else{
				Ext.getCmp('joinAdminbtn').setHidden(true);
				Ext.getCmp('lbl_search1').setHidden(true);
				Ext.getCmp('lbl_search2').setHidden(true);
				ShowHideStatus('User Not Found !', 'Warning'); 
			}
        }
    });
}




// Bind DropDown SHareIN and Paidby
function ActiveInactiveBIND() {
    Ext.getStore('responseDATAStore').loadRawData(ResponseData_.data);
    var DATAresponse = Ext.getStore('responseDATAStore').data.items;
    var Containers = Ext.ComponentQuery.query('#checkboxfieldHold')[0];
    Containers.removeAll(); 
    for (var zx = 0; zx < DATAresponse.length; zx++) {
        if (USERR.CukiArr.length > 0) {
            var adminFlag = USERR.accountType;
            if (adminFlag === 'Admin' || adminFlag === 'Super') {
				 if (DATAresponse[zx].data.accounttype !== 'Admin' && DATAresponse[zx].data.accounttype !== 'Super') {
					 var checkbox = new Ext.form.Checkbox({
						 fieldLabel:'Name : '+DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname + '</br> Mobile : ' + DATAresponse[zx].data.mobile,
						 id: '' + DATAresponse[zx].data.id,
						 checked:getBoolean(DATAresponse[zx].data.isActive),
						 name: "topping",
						 inputValue: "1",
						 width:80,
						 height:80,
						 padding:'5 5 20 5',
						 margin:'5 5 30 5',
						 cls: 'checkBox',
						 listeners: {
						     change: function (comp, eOpts) {
						         ActiveInActivePartnerAPI(comp.id, "'" + comp.getValue() + "'")
							}
						}
						
					 })
                     Containers.add(checkbox);
                }
            }
        }
    }
	//Bind Grid  aLLPartnersSTORE
	var itemss=Ext.create('Ext.grid.Panel', {
            title: 'All Partners',
            header: false,
			margin:'10 10 10 10',
			bodyPadding: 10,
			autoScroll: true,
            id: 'showAllPartnersGrid',
            viewConfig: {
                getRowClass: function () {
                    return 'x-wes';
                }
            },
            store: Ext.data.StoreManager.lookup('responseDATAStore'),
            columns: [
                {
                    text: 'Name', dataIndex: 'fname', flex: 35 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false,
                    renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                        return value+' '+DATAresponse[rowIndex].data.lname;
                    }
                },
				{ text: 'Mobile', dataIndex: 'mobile', flex: 35 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false },
                { text: 'Email', dataIndex: 'email', flex: 35 / 100, cellWrap: true, height: 50, menuDisabled: true, sortable: false }
            ],
            height: 200,
            listeners: {
                itemdblclick: function (dataview, record, item, index, e) {
					if (USERR.CukiArr.length > 0) {
					var adminFlag = USERR.accountType;
					if (Ext.getStore('responseDATAStore').getAt(index).data.partnerID === USERR.partnerID || adminFlag === 'Admin' || adminFlag === 'Super') {
							EditUserInfo(Ext.getStore('responseDATAStore').getAt(index).data);
						}
					else
					ShowHideStatus("You Can Update Only Your Info !", 'Warning');
					}
                }
            }
        });
	var ActiveInactive = Ext.ComponentQuery.query('#ActInactivePartnertab')[0];
	ActiveInactive.add(itemss);
  
}




//Logout
function LogoutUser() {
    document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    localStorage.setItem('xAuth', '');
    localStorage.removeItem('xAuth');
    try {
        $.ajax({
            url: HOST_URL+"/api/AddPartnr/Logout",
            type: 'GET',
            beforeSend: function (request) {
                request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
            },
			xhrFields: { withCredentials: true },
			crossDomain: true,
            contentType: "application/json; charset=utf-8",
            error: function (response) {
                window.location.replace("signin.html");
               
            },
            success: function (response) {
                USERR = new CurrentUser('');
                window.location.replace("signin.html");

            }

        });
    }
    catch (e) { location.reload(); }

}


function DashBoardChartts()
{
	Ext.require('Ext.chart.*');
	Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox']);
	var Containers = Ext.ComponentQuery.query('#dashboardContenr')[0];
	Containers.removeAll(true);
	Ext.onReady(function() {
	Ext.getStore('dashboardDataStore').loadRawData(ResponseData_.dashboardData);
    var chart = Ext.create('Ext.chart.CartesianChart', {
               width: '100%',
               height: 400,
			   insetPadding: 40,
               innerPadding: 15,
               flipXY: true,
               layout: 'auto',
              
               store: Ext.data.StoreManager.lookup('dashboardDataChartStore'),  
               //set legend configuration
               legend: {
                  docked: 'bottom'
               },

               //define the x and y-axis configuration.
               axes: [{
                  type: 'numeric',
                  position: 'bottom',
                  grid: true,
                  minimum: 0
               }, {
                  type: 'category',
                  position: 'left'
               }],

               //define the actual bar series.
               series: [{
                  type: 'bar',
                  xField: 'name',
                  yField: ['spend', 'consumed'],
                  axis: 'left',
				  label: {
                    display: 'insideEnd',
                    field: ['spend', 'consumed'],
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true
					}
               }]
            });

	
	Containers.add(chart);
	var containee={
					xtype: 'container',
					id:'dashboardContenr',
					style: '{background-color: red;}',
					layout:'fit'
				}
	//Containers.add(containee);
				
  }); 

}

function DticketsDetail()
{
	let Containers = Ext.ComponentQuery.query('#dashboardContenr')[0];
	Containers.removeAll(true);
	 //Dashboard Tickets
        let TCon=Ext.create('Ext.form.FieldSet', {
            style: "{border: none;}",
            width: '100%',
            height: 390,
			autoScroll: true,
            items: [{
                xtype: 'panel',
                flex: 1,
                title: 'Dashboard - Tickets',
                id: 'dockerpanel_',
                collapseFirst: false,
                collapsed: false,
                collapsible: true,
                style: '{border: 4px solid #C3C3C3;border-radius: 5px 5px 5px 5px;}',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                },
                items: [{
                    xtype: 'container',
                    flex: 0.5,
                    id: 'DashBoardTicketscontainer',
                    margin: '10 0 10 0',
                    style: '{background:black;border: none;}',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                    }
                },{
                    xtype: 'container',
                    flex: 0.5,
                    id: 'DashBoardTicketscontainer2',
                    margin: '10 0 10 0',
                    style: '{background:black;border: none;}',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                    }
                }]
            }]
        });
	Containers.add(TCon);
}


//LoadDashboard ready function
function LoadDashboardFun(DashBoardData) {
    let response = DashBoardData;
    let Containers = Ext.ComponentQuery.query('#DashBoardTicketscontainer')[0];
    Containers.removeAll();
	let Containers2 = Ext.ComponentQuery.query('#DashBoardTicketscontainer2')[0];
    Containers2.removeAll();
    for (var zx = 0; zx < response.length; zx++) {
        let Background = '#A9A9A9';
        if (response[zx].data.totalAmountStatus_.startsWith('-'))
            Background = '#00008B';

        let c = Ext.create('Ext.container.Container', {
            style: "{border: 4px solid #C3C3C3;border-radius: 50px 50px 50px 50px;}",
            id: 'Container_' + zx,
            margin: '5',
			flex:1,
            style: {
                background: Background
            },
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'start',
            },
            items: [
                {
                    xtype: 'container',
					flex:0.3,
                    layout: {
                        type: 'vbox',
                        align: 'left',
                        pack: 'start',
                    },
                    items: [{
                        xtype: 'image',
                        maxWidth: 50,
                        width: 50,
                        height: 50,
                        margin: '5 5 5 5',
                        id: 'Img_' + zx,
                        src: 'assets/images/profilepics/' + response[zx].data.partnerName_.split('__')[0] + '.png'
                    }]
                },
            {
                xtype: 'container',
				flex:0.7,
				margin: '7 7 7 7',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'start',
                },
                items: [
				{
				    xtype: 'label',
				    forId: 'myFieldId_' + zx,
				    style: '{font-size:13px;color:white;text-decoration: underline;}',
				    text: response[zx].data.partnerName_.split('__')[1],
				    margin: '7 7 5 7'
				},
				{
				    xtype: 'label',
				    forId: 'myFieldId_' + zx,
				    style: '{color:white;font-size:10px;}',
				    text: 'Spend : ' + response[zx].data.spendAmount_,
				    margin: '2 7 2 7'
				},
				{
				    xtype: 'label',
				    forId: 'myFieldId_' + zx,
				    style: '{color:white;font-size:10px;}',
				    text: 'Consumed : ' + response[zx].data.consumeAmount_,
				    margin: '2 7 2 7'
				},
				{
				    xtype: 'label',
				    forId: 'myFieldId_' + zx,
				    style: '{font-size:13px;color:white;}',
				    text: 'Status Rs.: ' + response[zx].data.totalAmountStatus_,
				    margin: '2 7 2 7'
				}]
            }]
        });
		if(zx%2===0)
        Containers.add(c);
		else
		Containers2.add(c);


    }
}


function AllAccountsChartts()
{
	Ext.require('Ext.chart.*');
	Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox']);
	let Containers = Ext.ComponentQuery.query('#AllAccountstab')[0];
	Containers.removeAll(true);
	Ext.onReady(function() {
	Ext.getStore('GetAllAccountHistoryStore').loadRawData(ResponseData_.getGetAllAccountHistory);
    let chart = Ext.create('Ext.chart.CartesianChart', {
               //renderTo: document.body,	
            //fields: ['name', 'spend', 'consumed',],
               width: '100%',
               height: 400,
			   insetPadding: 40,
               innerPadding: 15,
               flipXY: true,
                layout: 'auto',
               store: Ext.data.StoreManager.lookup('allAccountssChartStore'),  
               //set legend configuration
               legend: {
                  docked: 'bottom'
               },

               //define the x and y-axis configuration.
               axes: [{
                  type: 'numeric',
                  position: 'bottom',
                  grid: true,
                  minimum: 0
               }, {
                  type: 'category',
                  position: 'left'
               }],

               //define the actual bar series.
               series: [{
                  type: 'bar',
                  xField: 'name',
                  yField: ['spend', 'consumed'],
                  axis: 'left',
				  label: {
                    display: 'insideEnd',
                    field: ['spend', 'consumed'],
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true
					}
               }]
            });

	
	Containers.add(chart);
	//ExportToCSVbtn
	var ExportToCSVbtn={
              xtype: 'container',
              layout: {
                  type: 'vbox',
                  align: 'center'
              },
              items: [
					{
						xtype: 'container',
						minHeight: 10
					},
					{
					xtype:'button',
					text: 'Export Accounts To CSV',
					listeners: {
						click: function(comp, eOpts) {
							PageMask(true);
								CreateExportToCSVView('0');
							PageMask(false);
						}}
					}
				]
			}
	Containers.add(ExportToCSVbtn);
  }); 

}


function SettlementBtnClick() {
    Ext.onReady(function () {
        Ext.Msg.show({
            title: 'Confirmation',
            msg: '<br />Do you want to settle account ?',
            buttons: Ext.Msg.OKCANCEL,
            maxWidth: 350,
            closable: false,
            icon: Ext.MessageBox.QUESTION,
            fn: function (btn) {
                if (btn == "cancel") { // Cancel
                } else if (btn == "ok") { // Ok
                    PageMask(true);
                    $.ajax({
                        url: HOST_URL+"/api/AddPartnr/Settlement",
                        type: 'GET',
                        beforeSend: function (request) {
                            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
                        },
						xhrFields: { withCredentials: true },
						crossDomain: true,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        error: function (response) {
                            PageMask(false);
                            ShowHideStatus(response.message, 'Error');
                        },
                        success: function (response) {
                            if (response.message === 'Please Settled Your Previous Settlement') {
                                PageMask(false);
                                ShowHideStatus(response.message, 'Warning');
                            }
                            else {
                                if (response.message === 'Settlement successfully') {
                                    location.reload();
                                    PageMask(false);
                                    ShowHideStatus(response.message, 'OK');
                                }
                                else {
                                    PageMask(false);
                                    ShowHideStatus(response.message, 'Error');
                                }
                            }

                        }
                    });
                }
            },
            closeable: false
        });
    });

}

//Bind Settlement Dashboard
function BindSettlementDashboard(SettlementDashBoardData) {
    var response = SettlementDashBoardData;
    var dashboardtableHTML = '';
	var settlementContenr = Ext.ComponentQuery.query('#settlementContenr')[0];
	settlementContenr.removeAll();
	if (response.length == 0 || response.length == null || response==undefined) {
	    var settlementBTN = {
	        xtype: 'container',
	        id: 'settlementBTN2',
	        margin: '10 10 10 10',
	        height: 80, width: 80,
	        style: '{background:#87CEEB;border: none;border-radius: 5px 5px 5px 5px;}',
	        layout: {
	            type: 'hbox',
	            align: 'middle',
	            pack: 'center'
	        },
	        items: [{
	            xtype: 'image',
	            margin: '5 5 5 5',
	            height: 80, width: 80,
	            id: 'Img_Settlement',
	            src: 'assets/images/monthlypayments.png',
	            autoEl: {
	                tag: 'a'
	            },
	            listeners: {
	                render: function (comp, eOpts) {
	                    comp.mon(comp.el, 'click', function () {
	                        SettlementBtnClick();
	                    }, this);
	                }
	            }
	        }]
	    }
	    settlementContenr.add(settlementBTN);
	}
	else {
	    var leftt = Ext.create('Ext.container.Container', {
	        flex: 0.3,
	        id: 'mysettlementDASHBOARDContainerleft',
	        style: '{background-color:black;}',
	        layout: {
	            type: 'vbox',
	            align: 'middle'
	        }
	    });
	    settlementContenr.add(leftt);
	    var rightt = Ext.create('Ext.container.Container', {
	        flex: 0.3,
	        id: 'mysettlementDASHBOARDContainerright',
	        style: '{background-color:black;}',
	        layout: {
	            type: 'vbox',
	            align: 'middle'
	        }
	    });
	    settlementContenr.add(rightt);

	    let Containersleft = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainerleft')[0];
	    Containersleft.removeAll();
	    let Containersright = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainerright')[0];
	    Containersright.removeAll();
	    let destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
	    if (destroyContainer !== undefined) {
	        destroyContainer.destroy();
	        //$('#settlementInfo').hide();
	    }

	    for (var zx = 0; zx < response.length; zx++) {

	        let BakGround = '#7FFF00';
	        if (response[zx].data.amountStatus_.startsWith('-'))
	            BakGround = '#F0E68C';
	        let c = Ext.create('Ext.container.Container', {
	            style: "{border: 4px solid #C3C3C3;border-radius: 10px 10px 10px 10px;}",
	            id: 'ContainerS_' + response[zx].data.id_,
	            margin: '5',
	            flex: 1,
	            style: {
	                background: BakGround
	            },
	            layout: {
	                type: 'hbox',
	                align: 'stretch',
	                pack: 'start',
	            },
	            autoEl: {
	                tag: 'a'
	            },
	            listeners: {
	                render: function (comp, eOpts) {
	                    comp.mon(comp.el, 'dblclick', function () {
	                        PageMask(true);
	                        ShowSettlementInfoFun(comp.id.replace('ContainerS_', ''));
	                        PageMask(false);
	                    }, this);
	                }
	            },
	            items: [{
	                xtype: 'container',
	                flex: 1,
	                style: "{border-radius: 5px 5px 5px 5px;}",
	                margin: '4 4 4 4',
	                layout: {
	                    type: 'vbox',
	                    align: 'stretch',
	                    pack: 'start',
	                },
	                items: [
                    {
                        xtype: 'label',
                        forId: 'S5myFieldId_' + zx,
                        style: '{font-size:12px;color:white;}',
                        text: response[zx].data.dateofSettlement_.split(' ')[0],
                        margin: '7 7 5 7'
                    },
                    {
                        xtype: 'label',
                        forId: 'S1myFieldId_' + zx,
                        style: '{font-size:14px;color:white;text-decoration: underline;}',
                        text: response[zx].data.partnername_.split(' ')[0],
                        margin: '7 7 5 7'
                    },
                    {
                        xtype: 'label',
                        forId: 'S2myFieldId_' + zx,
                        style: '{color:white;font-size:12px;}',
                        text: 'Spend : ' + response[zx].data.spend_,
                        margin: '2 7 2 7'
                    },
                    {
                        xtype: 'label',
                        forId: 'S3myFieldId_' + zx,
                        style: '{color:white;font-size:12px;}',
                        text: 'Consume: ' + response[zx].data.consumed_,
                        margin: '2 7 2 7'
                    },
                    {
                        xtype: 'label',
                        forId: 'S4myFieldId_' + zx,
                        style: '{font-size:12px;color:white;}',
                        text: 'Status Rs.: ' + response[zx].data.amountStatus_,
                        margin: '2 7 2 7'
                    },
                    {
                        xtype: 'label',
                        forId: 'S6myFieldId_' + zx,
                        style: '{font-size:13px;color:white;}',
                        text: 'Current Amount: ' + response[zx].data.currentamountStatus_,
                        margin: '2 7 2 7'
                    }]
	            }]
	        });

	        if (zx % 2 === 0)
	            Containersleft.add(c);
	        else
	            Containersright.add(c);

	    }
	}
	settlementContenr.add({
	    xtype: 'container',
	    layout: {
	        type: 'hbox'
	    },
	    height: 20
	});
}



// ShowSettlementInfoFun(idss_)
function ShowSettlementInfoFun(idss_)
{
	try{
		var Containerssettle = Ext.ComponentQuery.query('#settlementContenr')[0];
		Containerssettle.removeAll();
	var idd = idss_;
	if (ResponseData_.settlementTickets !== '' && ResponseData_.settlementTickets !== undefined && ResponseData_.settlementTickets !== null) {
		var PartnerData_ = ResponseData_.settlementTickets.filter(function (el) {
			if (el.id_ === parseInt(idd)) {
            PartnerData_ = el;
			return el;}
			else{ return null;}
        });
		PlusPartnerData_ = []; MinusPartnerData_ = [];
            for (var dss = 0; dss < ResponseData_.settlementTickets.length; dss++) {
                if (ResponseData_.settlementTickets[dss].amountStatus_.indexOf("-") >= 0) {
                    MinusPartnerData_.push(ResponseData_.settlementTickets[dss]);
                }
                else {
                    PlusPartnerData_.push(ResponseData_.settlementTickets[dss]);
                }
            }

	 if (PartnerData_ !== null) {
		 			var Flag1=false;
		if (!(PartnerData_[0].currentamountStatus_.indexOf("-") >= 0) && (PartnerData_[0].currentamountStatus_ !== '0' || PartnerData_[0].settlementStatus_ !== '1')) {
			Flag1=true;
		}			
					Ext.onReady(function () {
					var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
                        if(destroyContainer!==undefined){
                            destroyContainer.destroy();
                        }
					var f=Ext.create('Ext.form.Panel', {
					margin:'10 10 10 10',
					bodyPadding: 10,
					autoScroll: true,
					header: false,
					//maxHeight:500,
					overflowY: 'scroll',
					id:'moreInfoContainer',
					title: 'Settlement - Payment',
					layout: 'vbox',
					items: [
						{
							xtype: 'fieldcontainer',
							id:'SettlementfieldHold',
							overflowY: 'scroll',
							maxHeight:400,
							margin:'5 5 5 5',
							layout: 'vbox',
							defaults: {
								layout: '100%'
							},
							//autoScroll : true,
							 items: [{
									xtype: 'displayfield',
									fieldLabel: 'NAME',
									labelWidth:200,
									name: PartnerData_[0].partnername_,
									value: PartnerData_[0].partnername_
								}, {
									xtype: 'displayfield',
									fieldLabel: 'SPEND',
									labelWidth:200,
									name:PartnerData_[0].spend_,
									value:PartnerData_[0].spend_
								},{
									xtype: 'displayfield',
									fieldLabel: 'CONSUMED',
									labelWidth:200,
									name: PartnerData_[0].consumed_,
									value:PartnerData_[0].consumed_
								},{
									xtype: 'displayfield',
									fieldLabel: 'AMOUNT-STATUS',
									labelWidth:200,
									name: PartnerData_[0].amountStatus_,
									value:PartnerData_[0].amountStatus_
								},{
									xtype: 'displayfield',
									fieldLabel: 'CURRENT AMOUNT-STATUS',
									labelWidth:200,
									name: PartnerData_[0].currentamountStatus_,
									value:PartnerData_[0].currentamountStatus_
								}],
							
						}
					]
					//renderTo: 'settlementInfoDiv'
					});
					Containerssettle.add(f);
					});
					//
					if(Flag1&& MinusPartnerData_!==null && MinusPartnerData_!==undefined){
					for (var za = 0; za < MinusPartnerData_.length; za++) {
                        if (MinusPartnerData_[za].currentamountStatus_ !== '0'){
                            var radiosBtns ={
											xtype: 'container',
											layout: 'vbox',
											width:200,
											items: [
												{ 
													xtype: 'radio',
													id:'radio_'+MinusPartnerData_[za].id_ ,
													boxLabel: MinusPartnerData_[za].partnername_ + ' Has to Pay Rs. ' + MinusPartnerData_[za].currentamountStatus_.replace("-", ""), 
													name: 'communication', 
													inputValue: MinusPartnerData_[za].partnername_,
													 listeners: {
															change: function(comp, eOpts) {
																if(comp.getValue()){
																Ext.ComponentQuery.query('#'+comp.id.replace('radio_','txt_'))[0].setValue('');
																Ext.ComponentQuery.query('#'+comp.id.replace('radio_','txt_'))[0].enable();
																}
																else{
																Ext.ComponentQuery.query('#'+comp.id.replace('radio_','txt_'))[0].disable();
																Ext.ComponentQuery.query('#'+comp.id.replace('radio_','txt_'))[0].setValue('');
																	}
															}
														}
												},
												{
													xtype: 'splitter'
												},                            
												{
													xtype: 'numberfield',
													name: 'option3detail',
													minValue: 1,
													id:'txt_'+MinusPartnerData_[za].id_,
													disabled: true
												}
											]
										}
									var destroyContainer2 = Ext.ComponentQuery.query('#SettlementfieldHold')[0];
									destroyContainer2.add(radiosBtns);
								}
						}
						
						
					}
					
					//Payment History
						if (PartnerData_[0].paymentHistory_ !== null && PartnerData_[0].paymentHistory_ !== undefined && PartnerData_[0].paymentHistory_.length >= 0) {
							paymentHistoryText='';
							var TextAreaHeight=0;
                        for (var qw = 0; qw < PartnerData_[0].paymentHistory_.length; qw++) {
							++TextAreaHeight;
                            if (PartnerData_[0].amountStatus_.indexOf("-") >= 0)
                                paymentHistoryText += 'ID -> ' + (qw + 1) + '	:' + PartnerData_[0].paymentHistory_[qw].from_paypartnername_ + '    Has Paid Rs. ' + PartnerData_[0].paymentHistory_[qw].amount_ + '   TO  ' + PartnerData_[0].paymentHistory_[qw].to_paypartnername_ + '> >  Date  ' + PartnerData_[0].paymentHistory_[qw].paydate_ + '\n\n';
                            else
                                paymentHistoryText += 'ID -> ' + (qw + 1) + '	:' + PartnerData_[0].paymentHistory_[qw].to_paypartnername_ + '   Borrow Rs. ' + PartnerData_[0].paymentHistory_[qw].amount_ + '   From  ' + PartnerData_[0].paymentHistory_[qw].from_paypartnername_ + '> >  Date  ' + PartnerData_[0].paymentHistory_[qw].paydate_ + '\n\n'
							}
							
						var paymentHistory={
											xtype: 'textarea',
											value: paymentHistoryText,
											grow: false,
											width: 300,
											height: 150,
											//fieldLabel: 'Payment - History',
											readOnly: true,
											anchor: '100%'
											
											}
								var destroyContainer2 = Ext.ComponentQuery.query('#SettlementfieldHold')[0];
									destroyContainer2.add(paymentHistory);
                        
						}
						
						
					var destroyContainer2 = Ext.ComponentQuery.query('#SettlementfieldHold')[0];
						if(!(PartnerData_[0].currentamountStatus_ !== '0' && PartnerData_[0].currentamountStatus_.indexOf("-") >= 0)  && USERR.partnerID === PartnerData_[0].partnerId_ && PartnerData_[0].settlementStatus_ === '0'){
							var btns={
								xtype: 'container',
								layout: 'hbox',
								width:200,
								items: [{
								xtype:'button',
								text: 'Paid',
								id:'PaidBtn_'+idd,
								listeners: {
									click: function(comp, eOpts) {
										var AllRadioBtns=Ext.ComponentQuery.query('[name=communication]');
										var MinusPartnerData_ = AllRadioBtns.filter(function (el) {
													if (el.checked === true) {
													return el.id;}
													else{ return null;}
												});
										var PlusPartnerID=comp.id.replace('PaidBtn_','');
										if(MinusPartnerData_.length===1 && PlusPartnerID!==undefined ){
										var MinusPartnerID=MinusPartnerData_[0].id.replace('radio_','');
										var AmountPaid= $('#txt_'+MinusPartnerID+'-inputEl').val().trim();
										var reg = new RegExp('^\\d+$');
											if(reg.test(AmountPaid) && PlusPartnerID!==undefined && !(AmountPaid.indexOf(".") >= 0) && !(AmountPaid.indexOf("-") >= 0) && AmountPaid!==0 && AmountPaid!=="0" && AmountPaid!==undefined &&MinusPartnerID!==undefined){
												
												SettlementPaidBtnClick(MinusPartnerID,PlusPartnerID,AmountPaid);
											}
											else{
												ShowHideStatus('Please Check Entries !', 'Warning');
											}
										}
										else
										{
											ShowHideStatus('Please enter amount !', 'Warning');
										}
										
										
									}}
							},
							{
								xtype:'button',
								text: 'Cancel',
								listeners: {
									click: function(comp, eOpts) {
									var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
                                    if(destroyContainer!==undefined){
                                        destroyContainer.destroy();
                                    }
										   Ext.getStore('settlementTicketsStore').loadRawData(ResponseData_.settlementTickets);
									}}
							}]
						  }
						  destroyContainer2.add(btns);
						}
						else{
							var btns={
								xtype: 'container',
								layout: 'hbox',
								width:200,
								items: [{
								xtype:'button',
								text: 'Cancel',
								listeners: {
									click: function(comp, eOpts) {
									var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
                                    if(destroyContainer!==undefined){
                                        destroyContainer.destroy();
										
										}
										Ext.getStore('settlementTicketsStore').loadRawData(ResponseData_.settlementTickets);
									}}
							}]
						  }
						  destroyContainer2.add(btns);
						}
						destroyContainer2.add({
						    xtype: 'container',
						    layout: {
						        type: 'hbox'
						    },
						    height: 30
						});
			}
	}
}catch(e){console.log('ShowSettlementInfoFun',e);}

}


function SettlementPaidBtnClick(_MinusPartnerID, _PlusPartnerID, _AmountPaid) {
    PageMask(true);
    let iddssDIV = _PlusPartnerID;
    let iddss = _MinusPartnerID;
    if (iddss !== '' && iddss !== undefined && iddssDIV !== '' && iddssDIV !== undefined && MinusPartnerData_.length > 0 && PlusPartnerData_.length > 0) {
        let SettlementMinusPaidMember = MinusPartnerData_.filter(function (el) {
            return el.id_ == parseInt(iddss);
        });
        let SettlementPlusPaidMember = PlusPartnerData_.filter(function (el) {
            return el.id_ == parseInt(iddssDIV);
        });

        let PaidAmountRs = _AmountPaid;
        if (!(PaidAmountRs.indexOf(".") >= 0) && !(PaidAmountRs.indexOf("-") >= 0) && SettlementMinusPaidMember.length === 1 && SettlementPlusPaidMember.length === 1 && PaidAmountRs !== '' && PaidAmountRs !== undefined && parseInt(PaidAmountRs) !== 0) {
            try {
                let PaidRs = parseInt(PaidAmountRs);
                let AmountStatusRs = parseInt(SettlementMinusPaidMember[0].currentamountStatus_.replace('-', ''));
                let temp = SettlementPlusPaidMember[0].currentamountStatus_;
                if (PaidRs <= AmountStatusRs && PaidRs <= temp) {
                    PageMask(false);
                    let PaymentDATA = '{"Plus_ID":' + SettlementPlusPaidMember[0].id_ + ',"Minus_ID":' + SettlementMinusPaidMember[0].id_ + ',"Amount":' + PaidRs + '}';
                    SettlementPAYMENTapi(PaymentDATA);
                }
                else {
                    PageMask(false);
                    ShowHideStatus('Trying To Take Access Amount Which Not Possible ! Please Enter Valid Amount !', 'Warning');
                }
            }
            catch (e) {
                PageMask(false);
                ShowHideStatus('Please Enter Valid Amount', 'Warning');
                console.log('Amount', e);
            }
        }
        else {
            PageMask(false);
            ShowHideStatus('Please Enter Amount', 'Warning');
        }
    }
    else {
        PageMask(false);
        ShowHideStatus('Please Select Partner For Payment', 'Warning');
    }
}

function SettlementPAYMENTapi(poostData) {
    PageMask(true);
    $.ajax({
        url: HOST_URL+"/api/AddPartnr/SettlementPaymentAPI",
        type: 'POST',
        dataType: "json",
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
		xhrFields: { withCredentials: true },
        crossDomain: true,
        data: poostData,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus(response.message, 'Error');
        },
        success: function (response) {
            PageMask(false);
            ResponseData_=response.responseData[0]
            if (response.status) {
                ShowHideStatus(response.message, 'OK');
            }
            else {
                ShowHideStatus(response.message, 'Warning');
            }
            //Ext.getCmp('HOMEtabpanel').setActiveTab(1);
            Ext.getStore('settlementTicketsStore').loadRawData(ResponseData_.settlementTickets);
        }
    });
}



      // Add-Item
function AddItemRender(){
	
	Ext.onReady(function () {
	Ext.ComponentQuery.query('#AdditemContenr')[0].removeAll(true);
	Ext.getStore('responseDATAStore').loadRawData(ResponseData_.data);
	var itemss=Ext.create('Ext.container.Container', {
			layout:'fit',
			flex:1,
			margin:'10 10 10 10',
            items: [
    Ext.create('Ext.form.Panel', {
	margin:'10 10 10 10',
	//bodyPadding: 10,
	header: false,
    title: 'Add - Item',
	//layout: 'hbox',
				layout: {
            type: 'hbox',
            align: 'center'
            //pack: 'start',
			},
	id:'FormPanelHold',
	height:420,
	autoScroll: true,
	//flex:1,
    items: [
        {
            xtype: 'fieldcontainer',
            //defaultType: 'checkboxfield',
			id:'FormContainerHold',
			margin:'10 10 10 10',
			flex:1,
			layout: {
					type: 'vbox',
					align: 'middle',
					pack:'center'
				},
			labelWidth: 75,
			labelHeight: 75,
			defaults: {
				layout: '100%'
			},
			fieldDefaults: {
				msgTarget: 'under',
				labelAlign: 'top'
			},
			items:[{
					xtype: 'container',
					layout: {
					type: 'hbox',
					align: 'middle',
					pack:'center'
					},
					items:[{
							xtype: 'datefield',
							fieldLabel: 'DATE',
							labelWidth:150,
							editable:false,
							width: 100,
							minValue: getBeforeAfterDAte('B'),
							maxValue:getBeforeAfterDAte('A'),
							margin:'10 10 10 10',
							name: 'entryDate',
							id:'addItemData',
							dateFormat: 'Y-m-d',
							value: new Date()
						},{
							xtype: 'textfield',
							name: 'itemName',
							id:'itemNameField',
							labelWidth:150,
							margin:'10 10 10 10',
							regex:/^[a-zA-Z\s]*$/,
							validator: function(value) {
									var ereg = /^[a-zA-Z\s]*$/;
									var testResult = ereg.test(value);
									return (testResult) ? true : 'Please Enter Valid Item Name.'
								},
							fieldLabel: 'Item - Name',
							emptyText: 'Enter Item Name*',
							allowBlank: false
						}
					]
				},{
					xtype: 'container',
					layout: {
						type: 'vbox',
						align: 'middle',
						pack:'start'
					},
					width: '100%',
					margin:'10 10 10 10',
					style: 'border: 1px solid green' ,
					items:[		Ext.create('Ext.form.CheckboxGroup', {
					fieldLabel: 'Paid - By',
					height:200,
					autoScroll:true,
					id: 'PaidBycheckboxgroup',
					columns: 1,
					items: BindActivePartners('paidBy')
							})]
				},{
					xtype: 'container',
					layout: {
						type: 'vbox',
						align: 'middle',
						pack:'start'
					},
					width: '100%',
					margin:'10 10 10 10',
					items:[{
								xtype: 'textfield',
								margin:'10 10 10 10',
								emptyText: 'Calculate Amount*',
								regex:/^([0-9][0-9]{0,2}|1000)$/,
								id:'CalculateAmount',
								validator: function(value) {
									var ereg = /^([0-9][0-9]{0,2}|1000)$/;
									var testResult = ereg.test(value);
									return (testResult) ? true : 'Please Enter Valid Amount 0 - 1000.'
								},
								listeners: {
										focus: function() {
											let EnterAmountInitialValue = '0';
											var checkedArr=Ext.getCmp('PaidBycheckboxgroup').query('[checked="true"]');
											checkedArr.filter(function (ob,i) {
												var amnt=Ext.getCmp(ob.id.replace('PBcb_','PBtxt_')).getValue().trim();
														if(amnt!=='' && amnt!==undefined){
															EnterAmountInitialValue = (parseInt(EnterAmountInitialValue) + parseInt(amnt)); 
														}
														else{
															ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
															EnterAmountInitialValue = '0';
														}
													});
												Ext.getCmp('CalculateAmount').setValue(''+EnterAmountInitialValue);	
										},
										blur: function() {
												let EnterAmountInitialValue = '0';
											var checkedArr=Ext.getCmp('PaidBycheckboxgroup').query('[checked="true"]');
											checkedArr.filter(function (ob,i) {
												let amnt=Ext.getCmp(ob.id.replace('PBcb_','PBtxt_')).getValue().trim();
														if(amnt!=='' && amnt!==undefined){
															EnterAmountInitialValue = (parseInt(EnterAmountInitialValue) + parseInt(amnt)); 
														}
														else{
															ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
															EnterAmountInitialValue = '0';
														}
													});
												Ext.getCmp('CalculateAmount').setValue(''+EnterAmountInitialValue);	
										}
									}
							}]
				},{
					xtype: 'container',
					layout: {
						type: 'vbox',
						align: 'middle',
						pack:'start'
					},
					width: '100%',
					margin:'10 10 10 10',
					style: 'border: 1px solid green' ,
					items: [{
					    xtype: 'container',
					    layout: {
					        type: 'hbox',
					        align: 'middle',
					        pack: 'center'
					    },
					    items: [
                        {
                            xtype: 'button',
                            text: 'Select All',
                            handler: function () {
                                var checkedAr = Ext.getCmp('ShareIncheckboxgroup').query('[checked="false"]');
                                if (checkedAr.length > 0 && checkedAr !== undefined) {
                                    checkedAr.filter(function (ob, i) {
                                        Ext.getCmp(ob.id).setValue(true);
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Deselect All',
                            handler: function () {
                                let checkedA = Ext.getCmp('ShareIncheckboxgroup').query('[checked="true"]');
                                if (checkedA.length > 0 && checkedA !== undefined) {
                                    checkedA.filter(function (ob, i) {
                                        Ext.getCmp(ob.id).setValue(false);
                                    });
                                }
                            }
                        }]
					},	Ext.create('Ext.form.CheckboxGroup', {
					fieldLabel: 'Share - In',
					height:200,
					autoScroll:true,
					id: 'ShareIncheckboxgroup',
					columns: 1,
					items: BindActivePartners('shareIn')
							})]
				},{
					xtype: 'container',
					layout: {
						type: 'hbox',
						align: 'middle',
						pack:'center'
					},
					width: '100%',
					margin:'10 10 10 10',
					items:[Ext.create('Ext.Button', {
						text: 'A D D',
						disabled:false,
						id: 'addItembtn',
						icon: 'assets/images/Add_Ons.png',
						handler: function(comp,eOpts) {
						AddItem();
						//PageMask(true);
						//LoadAllData();
						Ext.getCmp('FormPanelHold').reset();
						Ext.getCmp('HOMEtabpanel').setActiveTab(3);
						//PageMask(false);
						}
					}),Ext.create('Ext.Button', {
						text: 'C A N C E L',
						hidden: true,
						icon: 'assets/images/cross.png',
						id:'cancelItembtn',
						handler: function(comp,eOpts) {
						Ext.getCmp('FormPanelHold').reset();
						ShowAllEntryEditRowID = 0;
						Ext.getCmp('cancelItembtn').hide();
						Ext.getCmp('addItembtn').setText('A D D');
						Ext.getCmp('HOMEtabpanel').setActiveTab(3);
						}
					})]
				}, {
				    xtype: 'container',
				    layout: {
				        type: 'hbox',
				        align: 'middle',
				        pack: 'center'
				    },
				    height: 100,
				    width: '100%'
				}
				]
            
        }
    ]
    
  })
]
	});
	
	Ext.ComponentQuery.query('#AdditemContenr')[0].add(itemss);;

	});
	
}


function BindActivePartners(flag)
{
	let Arr=[];
	let partnerr=Ext.getStore('responseDATAStore').data.items;
	for (var zx = 0; zx < partnerr.length; zx++) {
		if(flag==='paidBy'){
			if(partnerr[zx].data.isActive==='true'){
				var container={
						xtype: 'container',
						layout: {
							type: 'hbox',
							align: 'middle',
							pack:'center'
						},
						items:[{
								xtype: 'checkboxfield',
								boxLabel: partnerr[zx].data.fname+' '+partnerr[zx].data.lname,
								name:  'PB_ChkBx',
								inputValue: 'true',
								uncheckedValue: 'false',
						    //formBind: false,
								//cls: 'checkBox',
								id:'PBcb_'+partnerr[zx].data.partnerID,
								handler: function(comp,eOpts) {
									if(comp.getValue()){
											Ext.getCmp(comp.id.replace('PBcb_','PBtxt_')).setVisible(true);
											Ext.getCmp(comp.id.replace('PBcb_','PBtxt_')).setValue('');
										}
										else 
										{
											Ext.getCmp(comp.id.replace('PBcb_','PBtxt_')).setValue('');
											Ext.getCmp(comp.id.replace('PBcb_','PBtxt_')).setVisible(false);
										}
									}
							},{
								xtype: 'textfield',
								width: 60,
								id:'PBtxt_'+partnerr[zx].data.partnerID,
								hidden:true,
								regex:/^([0-9][0-9]{0,2}|1000)$/,
								margin:'10 10 10 10',
								emptyText: 'Rs.*',
								validator: function(value) {
									let ereg = /^([0-9][0-9]{0,2}|1000)$/;
									let testResult = ereg.test(value);
									return (testResult) ? true : 'Please Enter Valid Amount 0 - 1000.'
								}
							}]
				}
				Arr.push(container);
								
			}
		}
		else if(flag==='shareIn'){
			if(partnerr[zx].data.isActive==='true'){
				let container1={
						xtype: 'container',
						layout: {
							type: 'hbox',
							align: 'middle',
							pack:'center'
						},
						items:[{
								xtype: 'checkboxfield',
								boxLabel: partnerr[zx].data.fname+' '+partnerr[zx].data.lname,
								name:  partnerr[zx].data.fname+' '+partnerr[zx].data.lname,
								inputValue: 'true',
								uncheckedValue: 'false',
								formBind: false,
								id:'SIcb_'+partnerr[zx].data.partnerID,
							}]
				}
				Arr.push(container1);
				
			}
		}
	}
	return Arr;
}


function AddItem() {
	
    try {
		//PageMask(true);
        if (USERR.CukiArr.length > 0) {
            var InsertByName = USERR.userName;
            var EntryDate = formatDate((new Date(Ext.getCmp('addItemData').getRawValue())));
            var ItemName = Ext.getCmp('itemNameField').getValue();
            var Itemamount = Ext.getCmp('CalculateAmount').getValue();
            var ItemInsertBy = USERR.partnerID;
            var Paidbystr = '';
            var SharedInstr = '';
            var PaidbyAmountStr = '';
            var PartnerNameStr = '';
            //NEw Section
			var PbyID=[];
			var PbyNAME=[];
			var PbyAMOUNT=[];
            var checkedArr=Ext.getCmp('PaidBycheckboxgroup').query('[checked="true"]');
            if(checkedArr.length>0 && checkedArr!==undefined){
					checkedArr.filter(function (ob,i) {
							var amnt=Ext.getCmp(ob.id.replace('PBcb_','PBtxt_')).getValue().trim();
							if(amnt!=='0' && amnt!=='' && amnt!==undefined){
								PbyID.push(ob.id.replace('PBcb_',''));
								PbyNAME.push(ob.boxLabel);
								PbyAMOUNT.push(amnt);
							}
							else{
								ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
								
							}
						});
						
			}
			else{
				ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
				
			}
			Paidbystr=PbyID.join(',');
			PaidbyAmountStr=PbyAMOUNT.join(',');
			PartnerNameStr=PbyNAME.join(',');
			if(checkedArr.length!==PbyAMOUNT.length || checkedArr===undefined || checkedArr.length===0)
			{
				//PageMask(false);
				ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
				return;
			}
			//SHARE-In
			var SiID=[];
			var SiNAME=[];
			var ID_NAME_combo=[];
			var checkedArr2=Ext.getCmp('ShareIncheckboxgroup').query('[checked="true"]');
            if(checkedArr2.length>0 && checkedArr2!==undefined){
					checkedArr2.filter(function (ob,i) {
								SiID.push(ob.id.replace('SIcb_',''));
								SiNAME.push(ob.boxLabel);
								ID_NAME_combo.push(ob.id.replace('SIcb_','')+'__'+ob.boxLabel);
						});		
			}
			else{
				ShowHideStatus('Please Select Share - In Partners','Error');
				
			}
			SharedInstr=ID_NAME_combo.join(',');
            if(SiID.length!==checkedArr2.length || checkedArr2.length===0)
			{
				//PageMask(false);
				ShowHideStatus('Please Select Share - In Partners','Error');
				return;
			}
            
			
			var EnterAmountInitialValue = '0';
				var checkedArr=Ext.getCmp('PaidBycheckboxgroup').query('[checked="true"]');
				checkedArr.filter(function (ob,i) {
					var amnt=Ext.getCmp(ob.id.replace('PBcb_','PBtxt_')).getValue().trim();
							if(amnt!=='' && amnt!==undefined){
								EnterAmountInitialValue = (parseInt(EnterAmountInitialValue) + parseInt(amnt)); 
							}
							else{
								ShowHideStatus('Please Enter Amount in Paid-By TextField','Error');
								EnterAmountInitialValue = '0';
							}
						});
					//Ext.getCmp('CalculateAmount').setValue(''+EnterAmountInitialValue);	
            //
			if (EnterAmountInitialValue!=Ext.getCmp('CalculateAmount').getValue() || Itemamount.indexOf(".") >= 0 || Itemamount.indexOf("-") >= 0 || Itemamount === '0' || EntryDate === '' || ItemName.indexOf("'") >= 0 || ItemName === '' || Itemamount === '' ) {
				//PageMask(false);
                ShowHideStatus('Please Enter Value', 'Warning');
                return;
            }
            var postDta = '';
            var temp_ShowAllEntryEditRowID = ShowAllEntryEditRowID;
            if (ShowAllEntryEditRowID > 0) {
                ShowAllEntryEditRowID = 0;
                postDta = '{"id_":' + temp_ShowAllEntryEditRowID + ',"partnerId_":"' + ItemInsertBy + '","partnerName_":"' + PartnerNameStr + '","dateOFInsert_":"' + EntryDate + '","dateOfSpend_":"' + EntryDate + '","itemName_":"' + ItemName + '","paidby_":"' + Paidbystr + '","sharedIn_":"' + SharedInstr + '","totalAmountSpend_":"' + PaidbyAmountStr + '","shareAmount_":"test","pairToken_":"testToken","issettled_":"test","groupname_":"test"}';

            }
            else
                postDta = '{"id_":0,"partnerId_":"' + ItemInsertBy + '","partnerName_":"' + PartnerNameStr + '","dateOFInsert_":"","dateOfSpend_":"' + EntryDate + '","itemName_":"' + ItemName + '","paidby_":"' + Paidbystr + '","sharedIn_":"' + SharedInstr + '","totalAmountSpend_":"' + PaidbyAmountStr + '","shareAmount_":"test","pairToken_":"testToken","issettled_":"test","groupname_":"test"}';
			//PageMask(false);
            PostADDitem(postDta);
			
        }
        else {
			//PageMask(false);
            ShowHideStatus('Please Login First', 'Warning');
        }
    }
    catch (e) {
		//PageMask(false);
        ShowHideStatus(e.message.toString(), 'Error');
    }
}



function PostADDitem(dataa) {
    PageMask(true);

    //alert(postdataa);
    $.ajax({
        url: HOST_URL+"/api/AddPartnr/AddItem",
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
		xhrFields: { withCredentials: true },
        crossDomain: true,
        dataType: "json",
        data: dataa,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            let AddItemBtnText = Ext.getCmp('addItembtn').getText();
            if (AddItemBtnText === 'U P D A T E')
                Ext.getCmp('addItembtn').setText('A D D');
            ShowHideStatus('Add-Item Failed', 'Error');
			ShowAllEntryEditRowID = 0;
			Ext.getCmp('HOMEtabpanel').setActiveTab(3);
        },
        success: function (response) {
            PageMask(false);
            ResponseData_ = null;
            ResponseData_ = response.responseData[0];
            if (ResponseData_.showAllEntry.length > 0 && ResponseData_.showAllEntry != undefined)
                ShoowAllEntryFun(ResponseData_.showAllEntry);
            Ext.getStore('dashboardDataStore').loadRawData(ResponseData_.dashboardData);
            Ext.getStore('responseDATAStore').loadRawData(ResponseData_.data);
            let AddItemBtnText = Ext.getCmp('addItembtn').getText();
            if (AddItemBtnText === 'U P D A T E')
                Ext.getCmp('addItembtn').setText('A D D');
            ShowHideStatus(response.message, 'OK');
			//Ext.getCmp('HOMEtabpanel').setActiveTab(3);
        }
    });
}

//EditAllEntriesRow DATA From Store
function EditAllEntriesRow1(response) {
    Ext.getCmp('HOMEtabpanel').setActiveTab(2);
    try {
        
        let ID = response.data.id_;
        if (ID > 0) {
            let PaidByID = response.data.paidby_;
            Ext.getCmp('addItemData').setValue(response.data.dateOfSpend_.split(' ')[0]);
			Ext.getCmp('itemNameField').setValue(response.data.itemName_);
            Ext.getCmp('CalculateAmount').setValue(response.data.totalAmountSpend_);
            let ItemInsertBy = USERR.partnerID;
			Ext.getCmp('PBcb_'+PaidByID).setValue(true);
            Ext.getCmp('PBtxt_'+PaidByID).setValue(response.data.totalAmountSpend_);
            let ShareINp = response.data.sharedIn_;
            if (ShareINp !== '' && ShareINp.indexOf(",") >= 0) {
                let ShareINpArray = ShareINp.split(","); 
                for (var ss = 0; ss < ShareINpArray.length; ss++) {
					Ext.getCmp('SIcb_'+ShareINpArray[ss].split("__")[0]).setValue(true);
                }
            }
            else {
				Ext.getCmp('SIcb_'+PaidByID).setValue(true);
            }
            Ext.getCmp('cancelItembtn').show();
			Ext.getCmp('addItembtn').setText('U P D A T E');
            //jQuery('#homeLI').css('opacity', '1.00');
            ShowAllEntryEditRowID = ID;
        }
    }
    catch (e) { console.log('EditAllEntriesRow', e); }
}


function EditUserInfo(_Selectiondata){
	let disFlag=true;
	if(USERR.accountType ==='Admin')
		disFlag=false;
    let SignUpF = {
        xtype: 'form',
        margin: '5 5 5 5',
        bodyPadding: 10,
	    //layout: 'vbox',
	    //flex:0.3,
        layout: {
            type: 'vbox',
            align: 'center'
            //pack: 'start',
        },
		id:'containerUpdateUserInfo',
		//height: '80%',
		//width: '80%',
        id: 'EditUserForm',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            emptyText: 'Enter EMAIL*',
            margin: '10 10 10 10',
            fieldLabel: 'Email',
            vtype: 'email',
            value: _Selectiondata.email,
            allowBlank: false,
            regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            placeHolder: 'Enter Email*',
            validator: function (value) {
                var ereg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                var testResult = ereg.test(value);
                return (testResult) ? true : 'Wrong Email Format.'
            }
        }, {
            xtype: 'textfield',
            name: 'mobilee',
            value: _Selectiondata.mobile,
            emptyText: 'Enter MOBILE NUMBER*',
            margin: '10 10 10 10',
            fieldLabel: 'Mobile',
            allowBlank: false,
            component: {
                type: 'tel'
            },
            minLength: 10,
            maxLength: 10,
            placeHolder: 'Mobile Number*',
            validator: function (value) {
                var ereg = /^[0]?[789]\d{9}$/;
                var testResult = ereg.test(value);
                return (testResult) ? true : 'Wrong Mobile Number Format.'
            }
        }, 
		Ext.create('Ext.form.field.ComboBox', { 
				id: 'usertypeCombo',
				name: 'accounttype',
				margin: '10 10 10 10',
				allowBlank: false,
				disabled:disFlag,
				fieldLabel: 'User Type',
				store: ['Normal', 'Admin'], 
				value: _Selectiondata.accounttype 
			}),
        {
            xtype: 'textfield',
            name: 'password1',
            emptyText: 'Enter Password*',
            margin: '10 10 10 10',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            minLength: 6,
            maxLength: 6,
            value: 'xxxxxx',
            placeHolder: 'Password*'
        }, 
        {
            xtype: 'textfield',
            name: 'password2',
            margin: '10 10 10 10',
            inputType: 'password',
            emptyText: 'Enter Confirm Password*',
            fieldLabel: 'Confirm Password',
            allowBlank: false,
            minLength: 6,
            maxLength: 6,
            value: 'xxxxxx',
            placeHolder: 'Confirm Password*',
            validator: function (value) {
                let password1 = this.previousSibling('[name=password1]');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
        }, 
        {
            xtype: 'displayfield',
            margin: '10 10 10 10',
            hideEmptyLabel: false
            //value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'U P D A T E',
            formBind: true,
            autoWidth: true,
            autoHeight: true,
            icon: 'assets/images/signup.png',
            listeners: {
                click: function () {
                    let form = this.up('form').getForm();
                    if (form.isValid()) {
                        var out = [];
                        Ext.Object.each(form.getValues(), function (key, value) {
                            out.push(value);
                        });
                        if(getPartnerSettle_Status(_Selectiondata.partnerID)){
                        UPDATE_USERinfo(out,_Selectiondata);
                        ActiveInactivePartner();
						}
						else{
							ShowHideStatus('Cant update any info until you settled accounts ! ', 'Warning');
						}
                    }
                    else {
                        ShowHideStatus('Please Check Form Entries', 'Error');
                    }
                }
            }
        },{
            text: 'C A N C E L',
            formBind: true,
            autoWidth: true,
            autoHeight: true,
            icon: 'assets/images/cross.png',
            id:'cancelUserinfobtn',
            listeners: {
                click: function () {
					ActiveInactivePartner();
                }
            }
        }
        ]
    }	
    
    Ext.ComponentQuery.query('#ActInactivePartnertab')[0].removeAll(true);
	let itemss=Ext.create('Ext.container.Container', {
			id:'containerUpdateUserInfo',
			autoScroll: true,
			margin:'10 10 10 10',
			layout: {
                  type: 'vbox',
                  align: 'center'
            },
            items: [SignUpF]});
            Ext.ComponentQuery.query('#ActInactivePartnertab')[0].add(itemss);
	
}
function UPDATE_USERinfo(formOBJarr,usrDATA) {
    PageMask(true);
    let Email = formOBJarr[0].trim();
    let Mobile = formOBJarr[1].trim();
    let accountTyp = formOBJarr[2].trim();
    let Password = formOBJarr[3].trim();
    let CPassword = formOBJarr[4].trim();
    let FName='';
    let LName='';
    
    let accountType=Ext.getCmp('usertypeCombo').getValue();
    if(USERR.accountType !=='Admin' && accountTyp==='Admin')
    {
		PageMask(false);
        ShowHideStatus('Only Admin user can update ACCOUNT-TYPE', 'Error');
        return;
	}
    if (usrDATA === undefined &&  accountType === undefined && accountType === null)
    {
        PageMask(false);
        ShowHideStatus('Unable to update', 'Error');
        return;
    }
    if (!(Mobile.indexOf(".") >= 0) && Mobile !== '' && Mobile.length === 10) {
    }
    else {
        PageMask(false);
        ShowHideStatus('Please Check Mobile Number', 'Error');
        return;
    }console.log(Email+'   '+Mobile+'   '+Password+'   '+CPassword);
    if ( Email !== '' && Mobile.length === 10 && Password.length === 6 && Password === CPassword) {
        var postdataa = '';
        
        postdataa = '{"Id":'+usrDATA.id+',"fname":"' + FName + '","mobile":"' + Mobile + '","isActive":"","lname":"' + LName + '","email":"' + Email + '","accounttype":"'+usrDATA.accounttype+'","partnerID":"'+usrDATA.partnerID+'","ppassword":"' + Password + '","dateofjoin":"","roomname":""}';
    }
    else {
        PageMask(false);
        ShowHideStatus('Please Check form entries', 'Error');
        return;
    }

      
        $.ajax({
            url: HOST_URL+"/api/AddPartnr/SignUp",
            type: 'POST',
            beforeSend: function (request) {
                request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
            },
            dataType: "json",
            data: postdataa,
            contentType: "application/json; charset=utf-8",
            error: function (response) {
                PageMask(false);
                ShowHideStatus('Update Failed', 'Error');
            },
            success: function (response) {
                PageMask(false);
                if (response.status)
                    ShowHideStatus(response.message, 'OK');
                else
                    ShowHideStatus(response.message, 'Error');
            }
        });
    }

//http://skirtlesden.com/articles/extjs-comboboxes-part-1

//Create ExportTo CSV View
function getSettlementsToExport(token_)
{
	    $.ajax({
        url: HOST_URL+"/api/AddPartnr/getAllSettlements/"+token_,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        xhrFields: { withCredentials: true },
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            ShowHideStatus('Update Status Failed', 'Error');           
        },
        success: function (response) {
				//console.log('response',response);
				if(response.MESSAGE === undefined && token_==='0'){
					let arrTemp=[Ext.decode('{dateofSettleUp: "Last Settlement to Till Now", token: "0", id: "extModel25-0"}')];
					let arrTemp2=arrTemp.concat(response.Sheetdata);
					Ext.getStore('exporttoCSVComboStore').loadRawData(arrTemp2);
					Ext.getCmp('settleupCombo').setValue(Ext.getStore('exporttoCSVComboStore').data.getAt(0));
					Ext.getCmp('CvsExportbtn').setDisabled(false);
				}
				else if(response.MESSAGE === undefined && token_!=='0'){
					JsonToCSV(token_,response);
				}
				else
				ShowHideStatus(response.MESSAGE, 'Error'); 
        }
    });
}
function CreateExportToCSVView(token_)
{
	let Containers = Ext.ComponentQuery.query('#AllAccountstab')[0];
	Containers.removeAll(true);
	getSettlementsToExport('0');
	let ExportToCSVCombo={
              xtype: 'container',
              layout: {
                  type: 'vbox',
                  align: 'center'
              },
              items: [
				{
					xtype: 'fieldset',
					flex: 2,
					id: 'downloadedCSVContainer',
					itemId: 'downloadedCSVContainer',
					margin: '10 0 5 0',
					//minHeight: 150,
					resizable: false,
					collapsible: true,
					title: '<b>Download CSV</b>',
					layout: {
						type: 'vbox',
						align: 'center'
					},
					items: [
						{
							xtype: 'container',
							minHeight: 50
						},
						{
							xtype: 'combobox',
							flex: 1,
							id: 'settleupCombo',
							itemId: 'settleupCombo',
							height:60,
							minHeight:60,
							maxHeight:60,
							fieldLabel: 'Download Settlements Data in .CSV File',
							labelAlign: 'top',
							fieldStyle: 'background-color: #DDEAF2',
							editable: false,
							emptyText: 'Select Settlement',
							matchFieldWidth: false,
							autoSelect: false,
							displayField: 'dateofSettleUp',
							queryCaching: false,
							queryMode: 'local',
							store: Ext.data.StoreManager.lookup('exporttoCSVComboStore'),
							valueField: 'token',
							allowBlank: false,
						},
						{
							xtype: 'container',
							minHeight: 35
						},
						{
						xtype:'button',
						text: 'EXPORT',
						disabled: true,
						id: 'CvsExportbtn',
						listeners: {
							click: function(comp, eOpts) {
								if(Ext.getCmp('settleupCombo').getValue() !== null && Ext.getCmp('settleupCombo').getValue() !== undefined)
								{
									if(Ext.getCmp('settleupCombo').getValue() ==='0' && ResponseData_.showAllEntry.length >0)
									JsonToCSV('0','Data_');
									else if(Ext.getCmp('settleupCombo').getValue() !=='0' && Ext.getCmp('settleupCombo').getValue().length >10)
										getSettlementsToExport(Ext.getCmp('settleupCombo').getValue());
									else
										ShowHideStatus('You have no records to Export !', 'Warning');
								}
								else
									ShowHideStatus('Please select value', 'Warning'); 
							}}
						},
						{
							xtype: 'container',
							minHeight: 15
						},
						{
						xtype:'button',
						text: 'Back To Charts',
						listeners: {
							click: function(comp, eOpts) {
								AllAccountsChartts();
							}}
						},
						{
							xtype: 'container',
							minHeight: 50
						}
						]
				}]//
			}
	Containers.add(ExportToCSVCombo);
}

function JsonToCSV(tokenID,Data_)
{
	let rows=[];
	let Data_Arr=[];
	let BalanceData=[];
	if(tokenID==='0')
	Data_Arr=ResponseData_.showAllEntry;
	else
	Data_Arr=Data_.Sheetdata;
	Data_Arr.map(function(value,index){
		if(index===0)
		rows.push(Ext.decode('["ID","SPEND DATE","PARTNER NAME","ITEM","AMOUNT Rs.","SHARED IN","PER/AMOUNT Rs."]'));
		rows.push( Ext.decode("["+(index+1)+",'"+value.dateOfSpend_.replace(' 00:00:00','')+"','"+value.partnerName_+"','"+value.itemName_+"','"+value.totalAmountSpend_+"','"+filterShareInNames(value.sharedIn_)+"','"+value.shareAmount_+"']"));
	});
	if(Data_.BalanceSheet !==undefined && Data_.BalanceSheet !== null){
	BalanceData=Data_.BalanceSheet;
	BalanceData.map(function(value,index){
		let blank_='';
		if(index===0){
		rows.push(Ext.decode('["","","","","","",""]'));
		rows.push(Ext.decode('["","","","","","",""]'));
		rows.push(Ext.decode('["","","","","","",""]'));
		rows.push(Ext.decode('["","","","","","",""]'));
		rows.push(Ext.decode('["NAME","SPEND","CONSUMED","BALANCE","","",""]'));
		}
		rows.push( Ext.decode("['"+value.partnerName+"','"+value.spended+"','"+value.consumed+"','"+value.balance+"','"+blank_+"','"+blank_+"','"+blank_+"']"));
	});
	}
	//console.log('JSON',rows);
	let csvContent = "data:text/csv;charset=utf-8,";
	rows.forEach(function(rowArray){
	let row = rowArray.join(",");
	csvContent += row + "\r\n";
	}); let encodedUri = encodeURI(csvContent);
	let link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", Ext.getCmp('settleupCombo').getSelection().data.dateofSettleUp.replace(' ','').replace(' - ','')+'.csv');
	document.body.appendChild(link); // Required for FF
	link.click();
	document.body.removeChild(link);
}
function filterShareInNames(SHAREinStr)
{
	if(SHAREinStr.indexOf(",") >= 0)
	{
		let arr=SHAREinStr.split(',');
		return arr.map(function(value,index){return value.substring((value.indexOf("__")+2),SHAREinStr.length);}).join('  ');
	}
	else
		return SHAREinStr.substring((SHAREinStr.indexOf("__")+2),SHAREinStr.length);
}

