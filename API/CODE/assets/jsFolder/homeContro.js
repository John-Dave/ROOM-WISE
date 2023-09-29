var ShowAllEntryEditRowID = 0;
var ResponseData_ = null;
var MinusPartnerData_ = [];
var PlusPartnerData_ = [];
var USERR = null;
var myTimer;
var DashShuldr;
var shudlr;
var ActiveInactveFlag=true;

function PageMask(flag) {

    if (flag && !(Ext.getCmp('Homeviewport').isMasked())){ 
       Ext.getCmp('Homeviewport').mask();
	}
    else{
	if(Ext.getCmp('Homeviewport').isMasked())	
		Ext.getCmp('Homeviewport').unmask();
	}
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
	//url: "api/AddPartnr/TEST",
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
        //$("#StatusDiv").css("background-color", divvColor);
        //$('#StatusDiv p b').text(msgText);
        //$("#StatusDiv").show();

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
        //$("#StatusDiv").css("background-color", divvColor);
        //$('#StatusDiv p b').text(msgText);
        //$("#StatusDiv").show();
		Ext.getCmp('StatusDiv').getEl().update('<div id="status"  style="height:40px;background:'+divvColor+'; color:#fff;" align="center"><div style="padding-top: 8px; align:center;">' + msgText + '</div></div>');
    }
}


//LoadIndropdown
function LoadAllData() {
    $.ajax({
        url: "api/AddPartnr/GetAllPartners",
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            
        },
        success: function (response) {
			ResponseData_=null;
            ResponseData_ = response.responseData[0];
			if(ResponseData_.showAllEntry.length>0 && ResponseData_.showAllEntry!=undefined)
			ShoowAllEntryFun(ResponseData_.showAllEntry);
           Ext.getStore('dashboardDataStore').loadRawData(ResponseData_.dashboardData);
        }

    });

}

function SetUserNameFromCookies() {
    var cuki = document.cookie;
	
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
        location.reload();
        window.location.replace("LoginPage.html");

    }
}

// Render Data Stores
function RenderStores()
{
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
                        //BindDropDownShareInPaidby(store.data.items);
                    }
                    else {
                        //$("#PaidBy_checkbox").remove();
                        //$('#SharedIn_checkbox').remove();
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
                       DashBoardCHARTLoadDATA(store.data.items);
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
                        AoountHistoryCHARTLoadDATA(store.data.items);
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
					    title: 'Notice - Board',
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
        url: "api/AddPartnr/ShowEntriesHistoryByID?ID=" + IDD,
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
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
    var response = reponseData;
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
    var dataa = '{"ID":' + idds + ',"flag":' + _isCHECKED + '}';
    $.ajax({
        url: "api/AddPartnr/SetActiveInactive",
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        dataType: "json",
        data: dataa,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus('Update Status Failed', 'Error');
            location.reload();
        },
        success: function (response) {
            PageMask(false);
            ShowHideStatus("Update Status Successfully", 'OK');
            location.reload();
            //$('#ActiveInactionPartner').focus();
        }
    });
}


       // Active / In-Active 
function ActiveInactivePartner(){
	
	Ext.onReady(function () {
	Ext.ComponentQuery.query('#ActInactivePartnerContenr')[0].removeAll(true);
	var itemss=Ext.create('Ext.container.Container', {
			layout:'fit',
			flex:1,
			margin:'10 10 10 10',
            items: [
    Ext.create('Ext.form.Panel', {
	margin:'10 10 10 10',
	bodyPadding: 10,
    title: 'Active / In-Active Partners',
	layout: 'hbox',
	autoScroll: true,
	flex:1,
    items: [
        {
            xtype: 'fieldcontainer',
            defaultType: 'checkboxfield',
			id:'checkboxfieldHold',
			margin:'10 10 10 10',
			flex:0.5,
			layout: 'vbox',
			labelWidth: 75,
			labelHeight: 75,
			defaults: {
				layout: '100%'
			},
			autoScroll : true,
			fieldDefaults: {
				msgTarget: 'under',
				labelAlign: 'top'
			},
            
        },
		{
            xtype: 'fieldcontainer',
            defaultType: 'checkboxfield',
			id:'checkboxfieldHold2',
			margin:'10 10 10 10',
			layout: 'vbox',
			flex:0.5,
			labelWidth: 75,
			labelHeight: 75,
			defaults: {
				layout: '100%'
			},
			autoScroll : true,
			fieldDefaults: {
				msgTarget: 'under',
				labelAlign: 'top'
			},
            
        }
    ]
    //renderTo: 'ActiveInactionPartnerdiv'
  })
]
	});
	
	var ActiveInactive=Ext.ComponentQuery.query('#ActInactivePartnerContenr')[0];
	ActiveInactive.add(itemss);
	});
	Ext.getStore('responseDATAStore').loadRawData(ResponseData_.data);
}

// Bind DropDown SHareIN and Paidby
function BindDropDownShareInPaidby(DATAresponse) {
    var optionHTMLPaidBy = "";
    var optionHTMLSharedIN = "";
    var ActiveInactiveHTML = "";
	var Containers = Ext.ComponentQuery.query('#checkboxfieldHold')[0];
	var Containers2 = Ext.ComponentQuery.query('#checkboxfieldHold2')[0];
	Containers.removeAll();
	Containers2.removeAll();
    for (var zx = 0; zx < DATAresponse.length; zx++) {

        //if (DATAresponse[zx].data.isActive === "true") {
        //    optionHTMLPaidBy += '<div id="' + DATAresponse[zx].data.partnerID + '__diiv' + '">' + '<input type="checkbox" onclick="PaidByChkClick(this)" id="' + DATAresponse[zx].data.partnerID + '__ChkPaidby' + '"' + ' value="' + DATAresponse[zx].data.fname + '_' + DATAresponse[zx].data.lname + '" /><b>' + DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname + '</b>&nbsp;<input  style="display:none;" type="number" pattern="[0-9]*" id="PaidAmount__' + DATAresponse[zx].data.partnerID + '" placeholder="Enter Amount*"></div>';
        //    optionHTMLSharedIN += '<div id="' + DATAresponse[zx].data.partnerID + '__diivShared' + '">' + '<input type="checkbox" id="' + DATAresponse[zx].data.partnerID + '__ChkSharedIn' + '"' + ' value="' + DATAresponse[zx].data.fname + '_' + DATAresponse[zx].data.lname + '__Share' + '" /><b>' + DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname + '</b></div>';
        //}
        if (USERR.CukiArr.length > 0) {
            var adminFlag = USERR.accountType;
            if (adminFlag === 'Admin' || adminFlag === 'Super') {
				
				 if (DATAresponse[zx].data.accounttype !== 'Admin' && DATAresponse[zx].data.accounttype !== 'Super') {
					 var checkbox = new Ext.form.Checkbox({
						 fieldLabel:DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname,
						 id:DATAresponse[zx].data.id,
						 checked:getBoolean(DATAresponse[zx].data.isActive),
						 name: "topping",
						 inputValue: "1",
						 width:90,
						 height:90,
						 padding:'10 10 10 10',
						 margin:'10 10 10 10',
						 cls: 'checkBox',
						 listeners: {
							change: function(comp, eOpts) {
								ActiveInActivePartnerAPI(comp.id,"'"+comp.getValue()+"'");
							}
						}
						
					});
					if(zx%2===0)
                        Containers.add(checkbox);
					else
						Containers2.add(checkbox);
                }
            }
        }

    }

    //$("#PaidBy_checkbox").html(optionHTMLPaidBy);
    //$('#SharedIn_checkbox').html(optionHTMLSharedIN);
	
}




//Logout
function LogoutUser() {
    document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    localStorage.setItem('xAuth', '');
    localStorage.removeItem('xAuth');
    try {
        $.ajax({
            url: "api/AddPartnr/Logout",
            type: 'GET',
            beforeSend: function (request) {
                request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
            },
            contentType: "application/json; charset=utf-8",
            error: function (response) {
                location.reload();
               
            },
            success: function (response) {
                USERR = new CurrentUser('');
                location.reload();

            }

        });
    }
    catch (e) { location.reload(); }

}


// DashBoard Charts
function DashBoardCHARTLoadDATA(DATA_) {
    var dashBoardChartData_ = '';
	
    try {
        for (var qww = 0; qww < DATA_.length; qww++) {
            dashBoardChartData_ += '{"name": "' + DATA_[qww].data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' + DATA_[qww].data.spendAmount_ + ',"consumed": ' + DATA_[qww].data.consumeAmount_ + '},'

        }
        var jSONN = dashBoardChartData_ + '==';
        //makeCharts("light", "#FFFFFF", '[' + jSONN.replace(',==', '') + ']');
        // dashBoardChartData_
		Ext.getStore('dashboardDataChartStore').loadRawData( Ext.decode('[' + jSONN.replace(',==', '') + ']'));
    }
    catch (e) { console.log('DashBoardCHARTLoadDATA', e); }
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
	var Containers = Ext.ComponentQuery.query('#dashboardContenr')[0];
	Containers.removeAll(true);
	 //Dashboard Tickets
        var TCon=Ext.create('Ext.form.FieldSet', {
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
    var response = DashBoardData;
    var Containers = Ext.ComponentQuery.query('#DashBoardTicketscontainer')[0];
    Containers.removeAll();
	var Containers2 = Ext.ComponentQuery.query('#DashBoardTicketscontainer2')[0];
    Containers2.removeAll();
    for (var zx = 0; zx < response.length; zx++) {
        var Background = '#A9A9A9';
        if (response[zx].data.totalAmountStatus_.startsWith('-'))
            Background = '#00008B';

        var c = Ext.create('Ext.container.Container', {
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



// All-Accounts Charts
function AoountHistoryCHARTLoadDATA(DATA_) {
    var dashBoardChartData_ = '';
    try {
        for (var qww = 0; qww < DATA_.length; qww++) {
            dashBoardChartData_ += '{"name": "' + DATA_[qww].data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' + DATA_[qww].data.spendAmount_ + ',"consumed": ' + DATA_[qww].data.consumeAmount_ + '},'

        }
        var jSONN = dashBoardChartData_ + '==';
		Ext.getStore('allAccountssChartStore').loadRawData( Ext.decode('[' + jSONN.replace(',==', '') + ']'));
       // makeAccountHistoryCharts("dark", "#FFFFFF", '[' + jSONN.replace(',==', '') + ']');	
    }
    catch (e) { console.log('AoountHistoryCHARTLoadDATA', e); }
}
function AllAccountsChartts()
{
	Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox']);
var Containers = Ext.ComponentQuery.query('#AllAccountstab')[0];
Containers.removeAll(true);
Ext.onReady(function() {
	Ext.getStore('GetAllAccountHistoryStore').loadRawData(ResponseData_.getGetAllAccountHistory);
    var chart = Ext.create('Ext.chart.CartesianChart', {
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
  }); 
  
  

}


//Bind Settlement Dashboard
function BindSettlementDashboard(SettlementDashBoardData) {
    var response = SettlementDashBoardData;
    var dashboardtableHTML = '';
	var settlementContenr = Ext.ComponentQuery.query('#settlementContenr')[0];
	settlementContenr.removeAll();
	var leftt=Ext.create('Ext.container.Container', {
					flex: 0.3,
					id: 'mysettlementDASHBOARDContainerleft',
					style: '{background-color:black;}',
					layout: {
						type: 'vbox',
						align: 'middle'
					}
			});
	settlementContenr.add(leftt);
	var rightt=Ext.create('Ext.container.Container', {
					flex: 0.3,
					id: 'mysettlementDASHBOARDContainerright',
					style: '{background-color:black;}',
					layout: {
						type: 'vbox',
						align: 'middle'
					}
			});
	settlementContenr.add(rightt);
	
		var Containersleft = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainerleft')[0];
		Containersleft.removeAll();
	var Containersright = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainerright')[0];
		Containersright.removeAll();
	var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
        if(destroyContainer!==undefined){
            destroyContainer.destroy();
			//$('#settlementInfo').hide();
        }
    for (var zx = 0; zx < response.length; zx++) {
		
		var BakGround='#7FFF00';
		if (response[zx].data.amountStatus_.startsWith('-'))
			BakGround='#F0E68C';
		var c = Ext.create('Ext.container.Container', {
            style: "{border: 4px solid #C3C3C3;border-radius: 10px 10px 10px 10px;}",
            id: 'ContainerS_' + response[zx].data.id_,
            margin: '5',
			flex:1,
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
								ShowSettlementInfoFun(comp.id.replace('ContainerS_',''));
								PageMask(false);
				            }, this);
				        }
				        },
            items: [{
                xtype: 'container',
				flex:1,
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
				    text: response[zx].data.partnername_.split(' ')[0] ,
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
		
        if(zx%2===0)
        Containersleft.add(c);
		else
		Containersright.add(c);
		
    }
    
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
			}
	}
}catch(e){console.log('ShowSettlementInfoFun',e);}

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
	bodyPadding: 10,
	header: false,
    title: 'Add - Item',
	layout: 'hbox',
	id:'FormPanelHold',
	height:400,
	autoScroll: true,
	flex:1,
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
					height:150,
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
												Ext.getCmp('CalculateAmount').setValue(''+EnterAmountInitialValue);	
										},
										blur: function() {
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
					items:[		Ext.create('Ext.form.CheckboxGroup', {
					fieldLabel: 'Share - In',
					height:150,
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
						id:'addItembtn',
						handler: function(comp,eOpts) {
						AddItem();
						PageMask(true);
						LoadAllData();
						Ext.getCmp('FormPanelHold').reset();
						Ext.getCmp('HOMEtabpanel').setActiveTab(3);
						PageMask(false);
						}
					}),Ext.create('Ext.Button', {
						text: 'C A N C E L',
						hidden:true,
						id:'cancelItembtn',
						handler: function(comp,eOpts) {
						Ext.getCmp('FormPanelHold').reset();
						ShowAllEntryEditRowID = 0;
						Ext.getCmp('cancelItembtn').hide();
						Ext.getCmp('addItembtn').setText('A D D');
						Ext.getCmp('HOMEtabpanel').setActiveTab(3);
						}
					})]
				}
				]
            
        }
    ]
    
  })
]
	});
	
	var ActiveInactive=Ext.ComponentQuery.query('#AdditemContenr')[0];
	ActiveInactive.add(itemss);
	});
	
}


function BindActivePartners(flag)
{
	var Arr=[];
	var partnerr=Ext.getStore('responseDATAStore').data.items;
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
									var ereg = /^([0-9][0-9]{0,2}|1000)$/;
									var testResult = ereg.test(value);
									return (testResult) ? true : 'Please Enter Valid Amount 0 - 1000.'
								}
							}]
				}
				Arr.push(container);
								
			}
		}
		else if(flag==='shareIn'){
			if(partnerr[zx].data.isActive==='true'){
				var container1={
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
		PageMask(true);
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
				PageMask(false);
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
				PageMask(false);
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
				PageMask(false);
                ShowHideStatus('Please Enter Value', 'Warning');
                return;
            }
            var postDta = '';
            var temp_ShowAllEntryEditRowID = ShowAllEntryEditRowID;
            if (ShowAllEntryEditRowID > 0) {
                ShowAllEntryEditRowID = 0;
                postDta = '{"id_":' + temp_ShowAllEntryEditRowID + ',"partnerId_":"' + ItemInsertBy + '","partnerName_":"' + PartnerNameStr + '","dateOFInsert_":"","dateOfSpend_":"' + EntryDate + '","itemName_":"' + ItemName + '","paidby_":"' + Paidbystr + '","sharedIn_":"' + SharedInstr + '","totalAmountSpend_":"' + PaidbyAmountStr + '","shareAmount_":"test","pairToken_":"testToken","issettled_":"test","groupname_":"test"}';

            }
            else
                postDta = '{"id_":0,"partnerId_":"' + ItemInsertBy + '","partnerName_":"' + PartnerNameStr + '","dateOFInsert_":"","dateOfSpend_":"' + EntryDate + '","itemName_":"' + ItemName + '","paidby_":"' + Paidbystr + '","sharedIn_":"' + SharedInstr + '","totalAmountSpend_":"' + PaidbyAmountStr + '","shareAmount_":"test","pairToken_":"testToken","issettled_":"test","groupname_":"test"}';
			PageMask(false);
            PostADDitem(postDta);
			
        }
        else {
			PageMask(false);
            ShowHideStatus('Please Login First', 'Warning');
        }
    }
    catch (e) {
		PageMask(false);
        ShowHideStatus(e.message.toString(), 'Error');
    }
}



function PostADDitem(dataa) {
    PageMask(true);

    //alert(postdataa);
    $.ajax({
        url: "api/AddPartnr/AddItem",
        type: 'POST',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        dataType: "json",
        data: dataa,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            var AddItemBtnText = Ext.getCmp('addItembtn').getText();
            if (AddItemBtnText === 'U P D A T E')
                Ext.getCmp('addItembtn').setText('A D D');
            ShowHideStatus('Add-Item Failed', 'Error');
			ShowAllEntryEditRowID = 0;
			Ext.getCmp('HOMEtabpanel').setActiveTab(3);
        },
        success: function (response) {
			PageMask(false);
            var AddItemBtnText = Ext.getCmp('addItembtn').getText();
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
        
        var ID = response.data.id_;
        if (ID > 0) {
            var PaidByID = response.data.paidby_;
            Ext.getCmp('addItemData').setValue(response.data.dateOfSpend_.split(' ')[0]);
			Ext.getCmp('itemNameField').setValue(response.data.itemName_);
            Ext.getCmp('CalculateAmount').setValue(response.data.totalAmountSpend_);
            var ItemInsertBy = USERR.partnerID;
			Ext.getCmp('PBcb_'+PaidByID).setValue(true);
            Ext.getCmp('PBtxt_'+PaidByID).setValue(response.data.totalAmountSpend_);
            var ShareINp = response.data.sharedIn_;
            if (ShareINp !== '' && ShareINp.indexOf(",") >= 0) {
                var ShareINpArray = ShareINp.split(","); 
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
