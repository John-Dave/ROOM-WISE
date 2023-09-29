var ShowAllEntryEditRowID = 0;
var ResponseData_ = null;
var MinusPartnerData_ = [];
var PlusPartnerData_ = [];
var USERR = null;
var shudlr;

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
function GetTodayDate() {
    //current date
    var curdate = formatDate((new Date()));
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
	},1500);
	}
	else if(shudlr!==null && shudlr!==undefined){
		clearInterval(shudlr);
	}
}


//LoadIndropdown
function LoadIndropdown() {
    PageMask(true);
    $.ajax({
        url: "api/AddPartnr/GetAllPartners",
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus('Load DropDown Failed', 'Error');
            window.location.replace("LoginPage.html");
        },
        success: function (response) {
			 $('#addItemForm').trigger("reset");
            ResponseData_ = response.responseData[0];
            ShowHideStatus(response.message, 'OK');
            Ext.getStore('responseDATAStore').loadRawData(response.responseData[0].data);
            Ext.getStore('dashboardDataStore').loadRawData(response.responseData[0].dashboardData);
            Ext.getStore('GetAllAccountHistoryStore').loadRawData(response.responseData[0].getGetAllAccountHistory);
            Ext.getStore('noticboardStore').loadRawData(response.responseData[0].logs);
            ShoowAllEntryFun(response.responseData[0].showAllEntry);
            Ext.getStore('settlementTicketsStore').loadRawData(response.responseData[0].settlementTickets);
            PageMask(false);
        }

    });



}



function PopClose() {
    $('#popupDiv').hide();
    window.location.hash = '';
    window.location.hash = '#Alldata';
}

function ExtjsMsgBoxx() {
    Ext.onReady(function () {
        var ExtMsgBOX = Ext.ComponentQuery.query('#ExtMsgBOX')[0];
        if (ExtMsgBOX !== undefined) {
            ExtMsgBOX.destroy();
        }
        Ext.MessageBox.show({
            title: "",
            id: 'ExtMsgBOX',
            msg: '<center><h5><b>Please wait...</b></h5></center>',
            width: 100,
            modal: true,
            height: 50,
            align: 'center',
            closable: false
        });
    });
}

function FDisabled() {
    $("*").attr("disabled", "disabled");
}
function PageMask(flag) {

    if (flag) {
        $("#MaskDiv").show();
        $('#navBAR').hide();
        //Ext.Msg.show();
    }
    else {
        $("#MaskDiv").hide();
        $('#navBAR').show();
        // Ext.Msg.hide();

    }
}
var myTimer;
function ShowHideStatus1(msgText, divvColor) {
    if (divvColor === 'OK') {//OK
        divvColor = '#08CB43';
    }
    else if (divvColor === 'Warning') {
        divvColor = '#F3EF0C';
    }
    else if (divvColor === 'Error') {
        divvColor = 'red';
    }
    if (!($("#StatusDiv").is(":visible"))) {
        $("#StatusDiv").css("background-color", divvColor);
        $('#StatusDiv p b').text(msgText);
        $("#StatusDiv").show();

    }
    myTimer = setTimeout(function () {
        showdiv1(msgText, divvColor);
    }, 2000);

}
function showdiv1(msgText, divvColor) {

    if ($("#StatusDiv").is(":visible")) {
        $("#StatusDiv").hide();
        clearTimeout(myTimer);
    }
    else {
        $("#StatusDiv").css("background-color", divvColor);
        $('#StatusDiv p b').text(msgText);
        $("#StatusDiv").show();

    }
}

function ActiveInActivePartner(idds,_isCHECKED) {
   
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
            $('#ActiveInactionPartner').focus();
        }
    });
}

//on paidby checkbox click
function PaidByChkClick(check) {
    var chkidd = $(check).attr('id');

    var tempPaidbyId = '#PaidAmount__' + chkidd.split('__')[0];
    if ($(check).is(':checked')) {
        // PaidAmount__7_IIU
        $(tempPaidbyId).show();

    }
    if (!($(check).is(':checked'))) {
        $(tempPaidbyId).val('')
        $(tempPaidbyId).hide();

    }
}

function ItemAmountFocus(inputItemamount) {

    var selecteditems = [];
    var EnterAmountInitialValue = '0.00';
    $("#PaidBy_checkbox").find("input:checked").each(function (i, ob) {
        var ter = '#PaidAmount__' + $(ob).attr('id').split("__")[0];
        var tempNameid = '#' + $(ob).attr('id').split("__")[0] + '__diiv';
        var tempName = $(tempNameid).text().trim();
        var temval = $(ter).val();
        EnterAmountInitialValue = (parseFloat(EnterAmountInitialValue) + parseFloat(temval));

    });
    $(inputItemamount).val(EnterAmountInitialValue);
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
			$('#Develop').text('');
        },
        success: function (response) {
			Ext.ComponentQuery.query('#onOff_Img')[0].setSrc('assets/images/on.png');
            $('#Develop').text('Your IP-Address ' + response.ip);
        }
    });
}


//Login
function Login() {
    try {
        var cuki = document.cookie;
        if (cuki !== '' && cuki.indexOf("_!_") >= 0) {
            document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        }
        PageMask(true);
        var UserIDorMobile = $('#UserIDorMobile').val();
        var EnterPassword = $('#EnterPassword').val();

        if (EnterPassword.length === 6 && UserIDorMobile !== '') {
            var postdataa = '{"UserIdORMobile":"' + UserIDorMobile + '","Password":"' + EnterPassword + '"}';

            $.ajax({
                url: "api/AddPartnr/Login",
                type: 'POST',
                beforeSend: function (request) {
                    request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
                },
                dataType: "json",
                data: postdataa,
                contentType: "application/json; charset=utf-8",
                error: function (response) {
                    PageMask(false);
                    // ShowHideStatus('Login Failed', 'Error');
                    $('#ShowLoginmessage p').text(response.message);
                },
                success: function (response, textStatus, xhr) {
                    localStorage.setItem('xAuth', xhr.getAllResponseHeaders().split('\n')[5].replace('x-token-auth: ', ''));
					PageMask(false);
                    location.reload();
                    window.location.replace("index.html");

                    
                    // $('#showname').text('Welcome ' + response.data[0].fname + ' ' + response.data[0].lname);
                    //ShowHideStatus(response.message, 'OK');

                    //$('#ShowLoginUserName p').text(response.fname);

                }
            });
        }
        else {
            PageMask(false);
            $('#ShowLoginmessage p').text('Please Check User NameORMobile / Password');
            //ShowHideStatus("Please Check User NameORMobile / Password", 'Warning');
        }
    } catch (e) { console.log(e); }

}

function SetUserNameFromCookie() {
    var cuki = document.cookie;
    if (cuki !== '' && cuki.indexOf("_!_") >= 0) {
        USERR = new CurrentUser(cuki);
        $('#showname span').text(USERR.userName);
        var adminFlag = USERR.accountType;
        if (adminFlag === 'Admin' || adminFlag === 'Super') {
            if (USERR.accountType === 'Super') {
                $('#AdminnDiv').show();
                $('#NormallDiv').show();
            }
        }
        GetTodayDate();
        ExtjsshowAllEntriesGrid();
        LoadIndropdown();
		TaskManager(true);
    }
    else {
		TaskManager(false);
        USERR = new CurrentUser('');
        location.reload();
        window.location.replace("LoginPage.html");

    }
}


//Bind Settlement Dashboard
function BindSettlementDashboard(SettlementDashBoardData) {
    var response = SettlementDashBoardData;
    var dashboardtableHTML = '';
		var Containers = Ext.ComponentQuery.query('#mysettlementDASHBOARDContainer')[0];
		Containers.removeAll();
	var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
        if(destroyContainer!==undefined){
            destroyContainer.destroy();
			$('#settlementInfo').hide();
        }
    for (var zx = 0; zx < response.length; zx++) {
		
		var BakGround='#7FFF00';
		if (response[zx].data.amountStatus_.startsWith('-'))
			BakGround='#F0E68C';
		var c = Ext.create('Ext.container.Container', {
            style: "{border: 4px solid #C3C3C3;border-radius: 50px 50px 50px 50px;}",
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
								ShowSettlementInfoFun(comp.id.replace('ContainerS_',''));
				            }, this);
				        }
				        },
            items: [{
                xtype: 'container',
				flex:1,
				style: "{border-radius: 50px 50px 50px 50px;}",
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
				    style: '{font-size:9px;color:white;}',
				    text: response[zx].data.dateofSettlement_.split(' ')[0],
				    margin: '7 7 5 7'
				},
				{
				    xtype: 'label',
				    forId: 'S1myFieldId_' + zx,
				    style: '{font-size:13px;color:white;text-decoration: underline;}',
				    text: response[zx].data.partnername_.split(' ')[0] ,
				    margin: '7 7 5 7'
				},
				{
				    xtype: 'label',
				    forId: 'S2myFieldId_' + zx,
				    style: '{color:white;font-size:10px;}',
				    text: 'Spend : ' + response[zx].data.spend_,
				    margin: '2 7 2 7'
				},
				{
				    xtype: 'label',
				    forId: 'S3myFieldId_' + zx,
				    style: '{color:white;font-size:10px;}',
				    text: 'Consume: ' + response[zx].data.consumed_,
				    margin: '2 7 2 7'
				},
				{
				    xtype: 'label',
				    forId: 'S4myFieldId_' + zx,
				    style: '{font-size:10px;color:white;}',
				    text: 'Status Rs.: ' + response[zx].data.amountStatus_,
				    margin: '2 7 2 7'
				},
				{
				    xtype: 'label',
				    forId: 'S6myFieldId_' + zx,
				    style: '{font-size:12px;color:white;}',
				    text: 'Current Amount: ' + response[zx].data.currentamountStatus_,
				    margin: '2 7 2 7'
				}]
            }]
        });
		
        Containers.add(c);
		
    }
    
}

// ShowSettlementInfoFun(idss_)
function ShowSettlementInfoFun(idss_)
{
	try{
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
					$('#settlementInfo').show();
					window.location.hash = '';
					window.location.hash = '#settlementInfo';
					Ext.onReady(function () {
						var destroyContainer = Ext.ComponentQuery.query('#moreInfoContainer')[0];
                                    if(destroyContainer!==undefined){
                                        destroyContainer.destroy();
                                    }
					Ext.create('Ext.form.Panel', {
					margin:'10 10 10 10',
					bodyPadding: 10,
					id:'moreInfoContainer',
					title: 'Settlement - Payment',
					layout: 'vbox',
					items: [
						{
							xtype: 'fieldcontainer',
							id:'SettlementfieldHold',
							margin:'5 5 5 5',
							layout: 'vbox',
							defaults: {
								layout: '100%'
							},
							autoScroll : true,
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
					],
					renderTo: 'settlementInfoDiv'
					});
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
											height: 200,
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
												//alert('MinusID'+MinusPartnerID+'PlusID'+' '+PlusPartnerID+' '+'Amount'+AmountPaid);
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
										    window.location.hash = '';
											window.location.hash = '#mysettlementDASHBOARD';
											$('#settlementInfo').hide();
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
										$('#settlementInfo').hide();
										}
										window.location.hash = '';
										window.location.hash = '#mysettlementDASHBOARD';
									}}
							}]
						  }
						  destroyContainer2.add(btns);
						}
			}
	}
}catch(e){console.log('ShowSettlementInfoFun',e);}

}

function SettlementCancelBtnClick() {
    $('#settlementInfo').hide();
    window.location.hash = '';
    window.location.hash = '#settlementDASHBOARD';
}

function MinusRadioBtnCllick(ElementRadio) {
    var iddss = $(ElementRadio).attr('id').split('_')[0];
    $("#SettlementRadioUL :input[type='number']").val('');
    $("#SettlementRadioUL :input[type='number']").attr("disabled", "disabled");
    $('#' + iddss + '_SettlementRadioTextField').removeAttr("disabled");//.attr("disabled", "disabled");

}

//Select Account Type
function accountType(inpt) {
    //$('#SignUp').find('input[type=radio]:checked').removeAttr('checked');
    //$('#'+$(inpt).attr('id')).attr('checked',true);
}
function SettlementPaidBtnClick(_MinusPartnerID,_PlusPartnerID,_AmountPaid) {
    PageMask(true);
    var iddssDIV = _PlusPartnerID;
    var iddss = _MinusPartnerID;
    if (iddss !== '' && iddss !== undefined && iddssDIV !== '' && iddssDIV !== undefined && MinusPartnerData_.length > 0 && PlusPartnerData_.length > 0) {
        var SettlementMinusPaidMember = MinusPartnerData_.filter(function (el) {
            return el.id_ == parseInt(iddss);
        });
        var SettlementPlusPaidMember = PlusPartnerData_.filter(function (el) {
            return el.id_ == parseInt(iddssDIV);
        });

        var PaidAmountRs = _AmountPaid;
        if (!(PaidAmountRs.indexOf(".") >= 0) && !(PaidAmountRs.indexOf("-") >= 0) && SettlementMinusPaidMember.length === 1 && SettlementPlusPaidMember.length === 1 && PaidAmountRs !== '' && PaidAmountRs !== undefined && parseInt(PaidAmountRs) !== 0) {
            try {
                var PaidRs = parseInt(PaidAmountRs);
                var AmountStatusRs = parseInt(SettlementMinusPaidMember[0].currentamountStatus_.replace('-', ''));
                var temp = SettlementPlusPaidMember[0].currentamountStatus_;
                if (PaidRs <= AmountStatusRs && PaidRs <= temp) {
                    PageMask(false);
                    var PaymentDATA = '{"Plus_ID":' + SettlementPlusPaidMember[0].id_ + ',"Minus_ID":' + SettlementMinusPaidMember[0].id_ + ',"Amount":' + PaidRs + '}';
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
        url: "api/AddPartnr/SettlementPaymentAPI",
        type: 'POST',
        dataType: "json",
        beforeSend: function (request) {
            request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
        },
        data: poostData,
        contentType: "application/json; charset=utf-8",
        error: function (response) {
            PageMask(false);
            ShowHideStatus(response.message, 'Error');
        },
        success: function (response) {
            PageMask(false);
            if (response.status) {
                ResponseData_ = response;
				LoadIndropdown();
				//Ext.getStore('settlementTicketsStore').loadRawData(response.settlementTickets);
                window.location.hash = '';
                window.location.hash = '#settlementDASHBOARD';
                ShowHideStatus(response.message, 'OK');
                $('#settlementInfo').hide();
                //location.reload();
            }

        }
    });
}

//CheckUncheckAllShareIn
function CheckAllShareIn() {
    $('#SharedIn_checkbox').find('input[type=checkbox]').prop('checked', true)
}

function UncheckAllShareIn() {
    $('#SharedIn_checkbox').find('input[type=checkbox]:checked').removeAttr('checked');
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

function LoadDashboard() {
    PageMask(true);
    $.ajax({
        url: "api/AddPartnr/GetDashboard",
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
            var dashboardtableHTML = '';
            ShowHideStatus(response.message, 'OK');
            for (var zx = 0; zx < response.data.length; zx++) {
                if (response.data[zx].totalAmountStatus_.startsWith('-'))
                    dashboardtableHTML += '<tr><td style="color:lavenderblush;">' + response.data[zx].partnerName_.split('__')[1] + '</td><td style="color:lavenderblush;">' + response.data[zx].spendAmount_ + '</td><td style="color:lavenderblush;">' + response.data[zx].consumeAmount_ + '</td><td style="color:#FFFF00;">' + response.data[zx].totalAmountStatus_ + '</td></tr>';
                else
                    dashboardtableHTML += '<tr><td style="color:lavenderblush;">' + response.data[zx].partnerName_.split('__')[1] + '</td><td style="color:lavenderblush;">' + response.data[zx].spendAmount_ + '</td><td style="color:lavenderblush;">' + response.data[zx].consumeAmount_ + '</td><td style="color:green;" >' + response.data[zx].totalAmountStatus_ + '</td></tr>';
            }
            $("#ShowPartnerJson table tbody").html(dashboardtableHTML);


        }

    });

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

        if (DATAresponse[zx].data.isActive === "true") {
            optionHTMLPaidBy += '<div id="' + DATAresponse[zx].data.partnerID + '__diiv' + '">' + '<input type="checkbox" onclick="PaidByChkClick(this)" id="' + DATAresponse[zx].data.partnerID + '__ChkPaidby' + '"' + ' value="' + DATAresponse[zx].data.fname + '_' + DATAresponse[zx].data.lname + '" /><b>' + DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname + '</b>&nbsp;<input  style="display:none;" type="number" pattern="[0-9]*" id="PaidAmount__' + DATAresponse[zx].data.partnerID + '" placeholder="Enter Amount*"></div>';
            optionHTMLSharedIN += '<div id="' + DATAresponse[zx].data.partnerID + '__diivShared' + '">' + '<input type="checkbox" id="' + DATAresponse[zx].data.partnerID + '__ChkSharedIn' + '"' + ' value="' + DATAresponse[zx].data.fname + '_' + DATAresponse[zx].data.lname + '__Share' + '" /><b>' + DATAresponse[zx].data.fname + ' ' + DATAresponse[zx].data.lname + '</b></div>';
        }
        if (USERR.CukiArr.length > 0) {
            var adminFlag = USERR.accountType;
            if (adminFlag === 'Admin' || adminFlag === 'Super') {
				$('#ActiveInactionPartner').show();
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
								ActiveInActivePartner(comp.id,"'"+comp.getValue()+"'");
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

    $("#PaidBy_checkbox").html(optionHTMLPaidBy);
    $('#SharedIn_checkbox').html(optionHTMLSharedIN);
	
}

//DASHBOARD CHARt
function DashBoardCHARTLoadDATA(DATA_) {
    var dashBoardChartData_ = '';
    try {
        for (var qww = 0; qww < DATA_.length; qww++) {
            dashBoardChartData_ += '{"name": "' + DATA_[qww].data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' + DATA_[qww].data.spendAmount_ + ',"consumed": ' + DATA_[qww].data.consumeAmount_ + '},'

        }
        var jSONN = dashBoardChartData_ + '==';
        makeCharts("light", "#FFFFFF", '[' + jSONN.replace(',==', '') + ']');
        // dashBoardChartData_
    }
    catch (e) { console.log('DashBoardCHARTLoadDATA', e); }
}

//Account History Chart
function AoountHistoryCHARTLoadDATA(DATA_) {
    var dashBoardChartData_ = '';
    try {
        for (var qww = 0; qww < DATA_.length; qww++) {
            dashBoardChartData_ += '{"name": "' + DATA_[qww].data.partnerName_.split('__')[1].split(' ')[0] + '","spend": ' + DATA_[qww].data.spendAmount_ + ',"consumed": ' + DATA_[qww].data.consumeAmount_ + '},'

        }
        var jSONN = dashBoardChartData_ + '==';
        makeAccountHistoryCharts("dark", "#FFFFFF", '[' + jSONN.replace(',==', '') + ']');
    }
    catch (e) { console.log('AoountHistoryCHARTLoadDATA', e); makeAccountHistoryCharts("dark", "#FFFFFF", '[]'); }
}


//ADD-Item


function AddItem() {
	
    try {
		PageMask(true);
        if (USERR.CukiArr.length > 0) {
            var InsertByName = USERR.userName;
            var EntryDate = $('#EntryDate').val();
            var ItemName = $('#itemname').val();
            var Itemamount = $('#itemamount').val();
            var ItemInsertBy = USERR.partnerID;
            var selecteditems = [];
            var Paidbystr = '';
            var SharedInstr = '';
            var PaidbyAmountStr = '';
            var PartnerNameStr = '';
            $("#PaidBy_checkbox").find("input:checked").each(function (i, ob) {
                var ter = '#PaidAmount__' + $(ob).attr('id').split("__")[0];
                var tempNameid = '#' + $(ob).attr('id').split("__")[0] + '__diiv';
                var tempName = $(tempNameid).text().trim();
                var temval = $(ter).val();
                if (temval === '0' || temval === '' || temval.indexOf("-") >= 0 || temval.indexOf(".") >= 0) {
					PageMask(false);
                    ShowHideStatus('Please Check CheckedBox TextBox Value', 'Warning');
                    return;
                }
                var tempHold4 = tempName + ',';
                PartnerNameStr += tempHold4;
                var tempHold3 = ($(ter).val().trim() + ',');
                PaidbyAmountStr += tempHold3;
                var tempHold2 = ($(ob).attr('id').replace('__ChkPaidby', '') + ',');
                Paidbystr += tempHold2;
                selecteditems.push($(ob).attr('id'));

            });
            var t1 = '';
            var t2 = ''; var t3 = ''; var t4 = '';
            if (PartnerNameStr !== '' && PartnerNameStr.endsWith(',')) {
                t1 = PartnerNameStr.substring(0, PartnerNameStr.lastIndexOf(','));
                PartnerNameStr = t1;
            }
            if (PaidbyAmountStr !== '' && PaidbyAmountStr.endsWith(',')) {
                t2 = PaidbyAmountStr.substring(0, PaidbyAmountStr.lastIndexOf(','));
                PaidbyAmountStr = t2;
            }
            if (Paidbystr !== '' && Paidbystr.endsWith(',')) {
                t3 = Paidbystr.substring(0, Paidbystr.lastIndexOf(','));
                Paidbystr = t3;
            }
            var selecteditemsShared = [];
            $("#SharedIn_checkbox").find("input:checked").each(function (i, ob) {
                selecteditemsShared.push($(ob).attr('id'));
                var tempSharedNameid = '#' + $(ob).attr('id').split("__")[0] + '__diivShared';
                var tempShareName = $(tempSharedNameid).text()
                var tempHold1 = ($(ob).attr('id').replace('__ChkSharedIn', '') + '__' + tempShareName.trim() + ',');
                SharedInstr += tempHold1;

            });
            if (SharedInstr !== '' && SharedInstr.endsWith(',')) {
                t4 = SharedInstr.substring(0, SharedInstr.lastIndexOf(','));
                SharedInstr = t4;
            }
            if (Itemamount.indexOf(".") >= 0 || Itemamount.indexOf("-") >= 0 || Itemamount === '0' || EntryDate === '' || ItemName.indexOf("'") >= 0 || ItemName === '' || Itemamount === '' || selecteditems.length === 0 || selecteditemsShared.length === 0 || selecteditemsShared === null) {
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
            var AddItemBtnText = $('#btnAdditem').text();
            if (AddItemBtnText === 'UPDATE-ITEM')
                $('#btnAdditem').text('ADD');
            ShowHideStatus('Add-Item Failed', 'Error');
        },
        success: function (response) {
            location.reload();
            PageMask(false);
            ShowHideStatus(response.message, 'OK');
        }
    });
}





//Logout
function Logout() {
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
                PageMask(false);
                location.reload();
                ShowHideStatus('Logout Failed', 'Error');
            },
            success: function (response) {
                USERR = new CurrentUser('');
                location.reload();
                ShowHideStatus(response.message, 'OK');
                // $("#ShowPartnerJson ul").text(response.message);

            }

        });
    }
    catch (e) { location.reload(); }

}

//EditAllEntriesRow DATA From Store
function EditAllEntriesRow1(response) {
    window.location.hash = '#AddItem';
    try {
        
        var ID = response.data.id_;
        if (ID > 0) {
            var PaidByID = response.data.paidby_;
            SetDate(response.data.dateOfSpend_.split(' ')[0]);
            $('#itemname').val(response.data.itemName_);
            $('#itemamount').val(response.data.totalAmountSpend_);
            $('#' + PaidByID + '__ChkPaidby').attr('checked', 'checked');
            $('#PaidAmount__' + PaidByID + '').show();
            $('#PaidAmount__' + PaidByID + '').val(response.data.totalAmountSpend_);
            $('#PaidAmount__' + PaidByID + '').focus();
            var ShareINp = response.data.sharedIn_;
            if (ShareINp !== '' && ShareINp.indexOf(",") >= 0) {
                var ShareINpArray = ShareINp.split(","); 
                for (var ss = 0; ss < ShareINpArray.length; ss++) {
                    $('#' + ShareINpArray[ss].split("__")[0] + '__ChkSharedIn').attr('checked', 'checked');
                }
            }
            else {
                $('#' + ShareINp.split("__")[0] + '__ChkSharedIn').attr('checked', 'checked');
            }
            $('#btnAddItemCancel').show();
            //jQuery('#homeLI').css('opacity', '1.00');
            ShowAllEntryEditRowID = ID;
            $('#btnAdditem').text('UPDATE-ITEM');
        }
    }
    catch (e) { console.log('EditAllEntriesRow', e); }
}
function EditAllEntriesRow(editRow) {
    window.location.hash = '#AddItem';
    var ID = editRow;//parseInt($(editRow).attr('id').split('_')[2]);

    if (ID > 0) {
        PageMask(true);
        $.ajax({
            url: "api/AddPartnr/ShowEntriesByID?ID=" + ID,
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
                ShowHideStatus(response.message, 'OK');
                var PaidByID = response.data[0].paidby_;
                SetDate(response.data[0].dateOfSpend_.split(' ')[0]);
                $('#itemname').val(response.data[0].itemName_);
                $('#itemamount').val(response.data[0].totalAmountSpend_);
                $('#' + PaidByID + '__ChkPaidby').attr('checked', 'checked');
                $('#PaidAmount__' + PaidByID + '').show();
                $('#PaidAmount__' + PaidByID + '').val(response.data[0].totalAmountSpend_);
                $('#PaidAmount__' + PaidByID + '').focus();
                var ShareINp = response.data[0].sharedIn_;
                if (ShareINp !== '' && ShareINp.indexOf(",") >= 0) {
                    var ShareINpArray = ShareINp.split(",");
                    for (var ss = 0; ss < ShareINpArray.length; ss++) {
                        $('#' + ShareINpArray[ss].split("__")[0] + '__ChkSharedIn').attr('checked', 'checked');
                    }
                }
                else {
                    $('#' + ShareINp.split("__")[0] + '__ChkSharedIn').attr('checked', 'checked');
                }
                $('#btnAddItemCancel').show();
                //jQuery('#homeLI').css('opacity', '1.00');
                ShowAllEntryEditRowID = ID;
                $('#btnAdditem').text('UPDATE-ITEM');
            }

        });
    }

}

//btnAddItemCancel
function AddItemCancel() {
    ShowAllEntryEditRowID = 0;
    window.location.hash = '#Alldata';
    $('#btnAddItemCancel').hide();
    location.reload();
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
            $("#ShowAllEntriesInfoDiv").html(dashboardtableHTML);
            $('#popupDiv').show();

        }

    });

}


//Show All Entries

function ShoowAllEntryFun(reponseData) {
    var response = reponseData;
    var dashboardtableHTML = '';
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
        if (shrInCount !== 0)
            dashboardtableHTML += '<tr id="' + 'ShowAllEntriesRow_' + zx + '"><td align="center"  style="font-size: 10px;"><a href="#Alldata" id="' + 'anchorSno_' + response[zx].id_ + '" onclick="ShowEditHistory(this)">' + (parseInt(zx) + 1) + '</a></td><td align="center" style="font-size: 10px;">' + response[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + TEMPsharestring + '</td><td align="center" style="color:green;">Rs ' + response[zx].shareAmount_ + '</td><td align="center"><input type="button"  id="' + 'EditShowAllEntriesBtn_' + zx + '_' + response[zx].id_ + '" onclick="EditAllEntriesRow(this)" style="background: url(../assets/images/EditBtnPNG.png) no-repeat center;width: 15px;"/></td></tr>';
        else
            dashboardtableHTML += '<tr id="' + 'ShowAllEntriesRow_' + zx + '"><td align="center"  style="font-size: 10px;"><a href="#Alldata" id="' + 'anchorSno_' + response[zx].id_ + '" onclick="ShowEditHistory(this)">' + (parseInt(zx) + 1) + '</a></td><td align="center" style="font-size: 10px;">' + response[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + response[zx].sharedIn_.split('__')[1] + '</td><td align="center" style="color:green;">Rs' + response[zx].shareAmount_ + '</td><td align="center"><input type="button"  id="' + 'EditShowAllEntriesBtn_' + zx + '_' + response[zx].id_ + '"  onclick="EditAllEntriesRow(this)" style="background: url(../assets/images/EditBtnPNG.png) no-repeat center;width: 15px;"/></td></tr>';

        var JsonObj = '';
        if (shrInCount !== 0) {
            JsonObj = '{"sno_": ' + (parseInt(zx) + 1) + ',"id_": ' + response[zx].id_ + ',"partnerId_": "' + response[zx].partnerId_ + '","partnerName_": "' + response[zx].partnerName_ + ' Rs ' + response[zx].totalAmountSpend_ + '</p>' + '","dateOFInsert_": "' + response[zx].dateOFInsert_ + '","dateOfSpend_": "' + response[zx].dateOfSpend_.split(' ')[0] + '","itemName_": "' + response[zx].itemName_ + '","paidby_": "' + response[zx].paidby_ + '","sharedIn_": "' + TEMPsharestring + '","totalAmountSpend_": "' + response[zx].totalAmountSpend_ + '","shareAmount_": "' + response[zx].shareAmount_ + '","pairToken_": "' + response[zx].pairToken_ + '","issettled_": "' + response[zx].issettled_ + '","groupname_": "' + response[zx].groupname_ + '"}';
        }
        else {
            JsonObj = '{"sno_": ' + (parseInt(zx) + 1) + ',"id_": ' + response[zx].id_ + ',"partnerId_": "' + response[zx].partnerId_ + '","partnerName_": "' + response[zx].partnerName_ + ' Rs ' + response[zx].totalAmountSpend_ + '</p>' + '","dateOFInsert_": "' + response[zx].dateOFInsert_ + '","dateOfSpend_": "' + response[zx].dateOfSpend_.split(' ')[0] + '","itemName_": "' + response[zx].itemName_ + '","paidby_": "' + response[zx].paidby_ + '","sharedIn_": "' + response[zx].sharedIn_.split('__')[1] + '","totalAmountSpend_": "' + response[zx].totalAmountSpend_ + '","shareAmount_": "' + response[zx].shareAmount_ + '","pairToken_": "' + response[zx].pairToken_ + '","issettled_": "' + response[zx].issettled_ + '","groupname_": "' + response[zx].groupname_ + '"}';
        }
        CustomJsonArray.push(Ext.decode(JsonObj));
    }
    //$("#ShowAllEntriesTable tbody").html(dashboardtableHTML);
    Ext.getStore('showAllEntriesStore').loadData(CustomJsonArray);
    Ext.getStore('showAllEntriesStoreReal').loadData(response);
}
function ShowAllEntryF() {
    PageMask(true);
    $.ajax({
        url: "api/AddPartnr/ShowAllEntries",
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
            var dashboardtableHTML = '';
            ShowHideStatus(response.message, 'OK');
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
                sharestring += '==';
                var TEMPsharestring = sharestring.replace(', ==', '').replace('==', '');
                if (shrInCount !== 0)
                    dashboardtableHTML += '<tr id="' + 'ShowAllEntriesRow_' + zx + '"><td align="center"  style="font-size: 10px;"><a href="#Alldata" id="' + 'anchorSno_' + response.data[zx].id_ + '" onclick="ShowEditHistory(this)">' + (parseInt(zx) + 1) + '</a></td><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + TEMPsharestring + '</td><td align="center" style="color:green;">Rs ' + response.data[zx].shareAmount_ + '</td><td align="center"><input type="button"  id="' + 'EditShowAllEntriesBtn_' + zx + '_' + response.data[zx].id_ + '" onclick="EditAllEntriesRow(this)" style="background: url(../assets/images/EditBtnPNG.png) no-repeat center;width: 15px;"/></td></tr>';
                else
                    dashboardtableHTML += '<tr id="' + 'ShowAllEntriesRow_' + zx + '"><td align="center"  style="font-size: 10px;"><a href="#Alldata" id="' + 'anchorSno_' + response.data[zx].id_ + '" onclick="ShowEditHistory(this)">' + (parseInt(zx) + 1) + '</a></td><td align="center" style="font-size: 10px;">' + response.data[zx].dateOfSpend_.split(' ')[0] + '</td><td align="center" style="font-size: 12px;">' + response.data[zx].itemName_ + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].partnerName_ + ':&nbsp;' + '<p style="color:green;font-size: 12px;">Rs ' + response.data[zx].totalAmountSpend_ + '</p>' + '</td><td align="center" style="font-size: 10px;">' + response.data[zx].sharedIn_.split('__')[1] + '</td><td align="center" style="color:green;">Rs' + response.data[zx].shareAmount_ + '</td><td align="center"><input type="button"  id="' + 'EditShowAllEntriesBtn_' + zx + '_' + response.data[zx].id_ + '"  onclick="EditAllEntriesRow(this)" style="background: url(../assets/images/EditBtnPNG.png) no-repeat center;width: 15px;"/></td></tr>';

            }
            //$("#ShowAllEntriesTable tbody").html(dashboardtableHTML);


        }

    });
}







//Show All Entries Grid
function ExtjsshowAllEntriesGrid() {
    Ext.onReady(function () {


        //DATA-STORES
        Ext.create('Ext.data.Store', {
            storeId: 'noticboardStore',
            fields: ['id', 'message', 'groupName', 'insertdate']
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
                        $("#myNewDASHBOARD").remove();
                        if (chart2) {
                            chart2.clear();
                        }
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
                        LoadDashboardFun(store.data.items);
                    }
                    else {
                        var Containers = Ext.ComponentQuery.query('#DashBoardTicketscontainer')[0];
                        Containers.removeAll();
                        if (chart1) {
                            chart1.clear();
                        }
                    }
                }
            }
        });




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

        Ext.create('Ext.data.Store', {
            storeId: 'responseDATAStore',
            fields: ['id', 'fname', 'mobile', 'isActive', 'lname', 'email', 'accounttype', 'partnerID', 'ppassword', 'dateofjoin', 'roomname'],
            listeners: {
                datachanged: function (store, eOpts) {
                    if (store.data.items.length > 0 && store.data.items !== null && store.data.items !== undefined) {
                        BindDropDownShareInPaidby(store.data.items);
                    }
                    else {
                        $("#PaidBy_checkbox").remove();
                        $('#SharedIn_checkbox').remove();
                    }
                }
            }
        });

        Ext.create('Ext.data.Store', {
            storeId: 'showAllEntriesStore',
            fields: ['sno_', 'id_', 'partnerId_', 'partnerName_', 'dateOFInsert_', 'dateOfSpend_', 'itemName_', 'paidby_', 'sharedIn_', 'totalAmountSpend_', 'shareAmount_', 'pairToken_', 'issettled_', 'groupname_']
        });
        Ext.create('Ext.data.Store', {
            storeId: 'showAllEntriesStoreReal',
            fields: ['id_', 'partnerId_', 'partnerName_', 'dateOFInsert_', 'dateOfSpend_', 'itemName_', 'paidby_', 'sharedIn_', 'totalAmountSpend_', 'shareAmount_', 'pairToken_', 'issettled_', 'groupname_']
        });
        Ext.create('Ext.container.Container', {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
        Ext.create('Ext.grid.Panel', {
            title: 'Show Entries',
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
            height: 500,
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
                        EditAllEntriesRow(DataIDs__);
                    }
                }
            },
            renderTo: 'ShowAllEntriesDIV'
        })
            ]
        });




        //NoticeBoard-DataGrid_Pannel
        Ext.create('Ext.container.Container', {
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
					Ext.create('Ext.grid.Panel', {
					    title: 'Notice - Board',
					    store: Ext.data.StoreManager.lookup('noticboardStore'),
					    columns: [
                            { text: 'Id', dataIndex: 'id', flex: 5 / 100 },
                            { text: 'Message', dataIndex: 'message', flex: 95 / 100, cellWrap: true, menuDisabled: true, sortable: false },
					    ],
					    height: 300,
					    renderTo: 'NoticboardDiv'
					})
            ]
        });



        //Dashboard Tickets
        Ext.create('Ext.form.FieldSet', {
            style: "{border: none;}",
            renderTo: 'myNewDASHBOARD',
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

        //Settlement ticket container
        Ext.create('Ext.container.Container', {
            flex: 3,
            id: 'SettlementDivBtnTicketscontainer',
            height: 80,
            style: '{background-color:#F8F8FF;border:none;border-radius: 5px 5px 5px 5px;}',
            renderTo: 'SettlementDivBtn',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                xtype: 'container',
                flex: 1,
                html: '</br>Settlement Dashboard',
                id: 'settlementBTN1',
                margin: '10 10 10 10',
                height: 50,
                style: '{background:#808080;border: none;border-radius: 5px 5px 5px 5px;font-size:22px;color:white;text-decoration: underline;text-align:center;}',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                }
            },
				{
				    xtype: 'container',
				    flex: 0.2,
				    id: 'settlementBTN2',
				    margin: '10 10 10 10',
				    height: 50,
				    style: '{background:#87CEEB;border: none;border-radius: 5px 5px 5px 5px;}',
				    layout: {
				        type: 'vbox',
				        align: 'stretch'
				    },
				    items: [{
				        xtype: 'image',
				        margin: '5 5 5 5',
				        height: 40,
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
				}]
        });
	Ext.create('Ext.container.Container', {
            flex: 1,
            id: 'mysettlementDASHBOARDContainer',
			margin:'20 20 20 20',
            style: '{background-color:black;}',
            renderTo: 'mysettlementDASHBOARD',
            layout: {
                type: 'hbox',
                align: 'middle'
            }
	});


        // Active / In-Active 

    Ext.create('Ext.form.Panel', {
	margin:'10 10 10 10',
	bodyPadding: 10,
    title: 'Active / In-Active Partners',
	layout: 'hbox',
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
    ],
    renderTo: 'ActiveInactionPartnerdiv'
});
	
	
	Ext.create('Ext.container.Container', {
            flex: 1,
            id: 'myTittlePannelContainer',
            height: 40,
			margin:'0 0 0 0',
            style: '{background-color:black;}',
            renderTo: 'myTittlePannel',
            layout: {
                type: 'hbox',
                align: 'left'
            },
			items:[{
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                    },
                    items: [{
                        xtype: 'image',
                        maxWidth: 35,
                        width: 35,
                        height: 30,
                        margin: '5 5 5 5',
                        id: 'logo_Img',
                        src: 'assets/images/roomAccountsLogo2.png',
						autoEl: {
				            tag: 'a'
						},
						listeners: {
				        render: function (comp, eOpts) {
				            comp.mon(comp.el, 'click', function () {
								LoadIndropdown();
				            }, this);
				        }
				        }
                    }]
                },{
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                    },
                    items: [{
                        xtype: 'image',
                        maxWidth: 35,
                        width: 35,
                        height: 30,
                        margin: '5 5 5 5',
                        id: 'onOff_Img',
                        src: 'assets/images/off.png'
                    }]
                },{
                    xtype: 'container',
					style: '{background:#08CB43;}',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'start',
                    },
                    items: [{
                        xtype: 'image',
                        maxWidth: 35,
                        width: 35,
                        height: 30,
                        margin: '5 5 5 5',
                        id: 'group_Img',
                        src: 'assets/images/groupSmall.png',
						autoEl: {
				            tag: 'a'
						},
						listeners: {
				        render: function (comp, eOpts) {
				            comp.mon(comp.el, 'click', function () {
								
				            }, this);
				        }
				        }
                     },{
						xtype: 'label',
						forId: 'groupName',
						style: '{color:white;font-size:12px;}',
						text: USERR.groupName,
						margin: '7 7 7 7'
					   }]
                },{
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start',
                    },
                    items: [{
                        xtype: 'image',
                        maxWidth: 35,
                        width: 35,
                        height: 30,
                        margin: '5 5 5 5',
                        id: 'userSettings_Img',
                        src: 'assets/images/usersettings.png'
                    }]
                }]
	});
	
	
        //End
    });

}
