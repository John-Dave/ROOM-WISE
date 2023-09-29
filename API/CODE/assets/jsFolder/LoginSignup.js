function pageShow()
{
//   Ext.Ajax.withCredentials = true;
//Ext.Ajax.useDefaultXhrHeader = false;
//Ext.Ajax.disableCaching = false;
//
//Ext.override(Ext.data.proxy.Ajax, {
//    useDefaultXhrHeader: false,
//    withCredentials: true
//});
//
//Ext.override(Ext.Ajax.request, {
//    useDefaultXhrHeader: false,
//    noCache: false,
//    withCredentials: true
//});
//
//Ext.apply(Ext.Ajax, {
//    useDefaultXhrHeader: false,
//    disableCaching: false,
//    withCredentials: true,
//    headers: {'application/json; charset=utf-8'},
//    cors: true
//});
///*
//  Override Ext.data.Connection for
//  API Path
//*/
//var hitGL=location.host;
//var ihitGL=hitGL;//.split(":");
//Ext.override(Ext.data.Connection, {
//    request: function (options) {
//        var BASEURL=location.protocol+'//'+ihitGL;
//        options.url = options.url.replace('{BASEURL}', BASEURL);
//        this.callParent(arguments);
//        var TaskIP = '';
//    }
//});
}

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}


 function onFileChange(fileUploadComponent, value, eOpts) {
      var file = Ext.getCmp('profylPic').getEl().down('input[type=file]').dom.files[0];
      if (file != null && file.size<32000) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function(oFREvent) {
          callback(reader.result);
        }
		reader.readAsDataURL(xhr.response);
      }
    }
function addLoginSignup(formFlag)
{
		var loginSignUpviewportContainer = Ext.ComponentQuery.query('#loginSignUpviewportContainer')[0];
    loginSignUpviewportContainer.removeAll();
    var LoginFormF={
					xtype: 'form',
					margin:'10 10 10 10',
					bodyPadding: 30,
					id:'loginForm',
					reference: 'form',
					items: [{
						xtype: 'textfield',
						margin:'10 10 10 10',
						name: 'mobilenumber',
						fieldLabel: 'Mobile',
						allowBlank: false,
						placeHolder: 'Mobile*',
						validator: function(value) {
							var ereg = /^[0]?[789]\d{9}$/;
							var testResult = ereg.test(value);
							return (testResult) ? true : 'Wrong Mobile Number Format.'
						}
					}, {
						xtype: 'textfield',
						margin:'10 10 10 10',
						name: 'password',
						inputType: 'password',
						fieldLabel: 'Password',
						allowBlank: false,
						placeHolder: 'Password*',
						minLength: 6,
						maxLength: 6,
					}, {
						xtype: 'displayfield',
						margin:'10 10 10 10',
						hideEmptyLabel: false,
						value: 'Enter any non-blank password'
					}],
					buttons: [{
						text: 'Login',
						formBind: true,
						listeners: {
							click: function (){
								 var form = this.up('form').getForm();
								 console.log('form.isValid()',form.isValid());
								 if (form.isValid()) {
									var out = [];
									Ext.Object.each(form.getValues(), function(key, value){
									out.push(value);
									});
									if(out.length===2)
									{
									var postdataa = '{"UserIdORMobile":"' + out[0] + '","Password":"' + out[1] + '"}';
									 LoginUser(postdataa);
									}
									else{
									Ext.Msg.alert('Submitted Values', out.join('<br />'));
									}
								}
							}
						}
					}]
			}
	var SignUpF={
					xtype: 'form',
					margin:'10 10 10 10',
					bodyPadding: 30,
					id:'SignUpForm',
					reference: 'form',
					items: [{
						xtype: 'textfield',
						name: 'email',
						margin:'10 10 10 10',
						fieldLabel: 'Email',
						vtype: 'email',
						allowBlank: false,
						regex:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
						placeHolder: 'Enter Email*',
						validator: function(value) {
							var ereg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
							var testResult = ereg.test(value);
							return (testResult) ? true : 'Wrong Email Format.'
						}
					},{
						xtype: 'textfield',
						name: 'mobilee',
						margin:'10 10 10 10',
						fieldLabel: 'Mobile',
						allowBlank: false,
						component : {
							type : 'tel'
						},
						minLength: 10,
						maxLength: 10,
						placeHolder: 'Mobile Number*',
						validator: function(value) {
							var ereg = /^[0]?[789]\d{9}$/;
							var testResult = ereg.test(value);
							return (testResult) ? true : 'Wrong Mobile Number Format.'
						}
					},{
						xtype: 'textfield',
						name: 'fname',
						margin:'10 10 10 10',
						fieldLabel: 'First Name',
						allowBlank: false,
						placeHolder: 'First Name*'
					},{
						xtype: 'textfield',
						name: 'lname',
						margin:'10 10 10 10',
						fieldLabel: 'Last Name',
						allowBlank: false,
						placeHolder: 'Last Name*'
					},{
						xtype: 'textfield',
						name: 'password1',
						margin:'10 10 10 10',
						inputType: 'password',
						fieldLabel: 'Password',
						allowBlank: false,
						minLength: 6,
						maxLength: 6,
						placeHolder: 'Password*'
					},{
						xtype: 'textfield',
						name: 'password2',
						margin:'10 10 10 10',
						inputType: 'password',
						fieldLabel: 'Confirm Password',
						allowBlank: false,
						minLength: 6,
						maxLength: 6,
						placeHolder: 'Confirm Password*',
						validator: function(value) {
							var password1 = this.previousSibling('[name=password1]');
							return (value === password1.getValue()) ? true : 'Passwords do not match.'
						}
					},{
						xtype: 'filefield',
						margin:'10 10 10 10',
						id:'profylPic',
						emptyText: 'Select an image',
						fieldLabel: 'Photo',
						regex: /(.)+((\.png)(\w)?)$/i,
						regexText: 'Only PNG image formats are accepted',
						name: 'photo-path',
						fieldLabel: 'Profile Photo',
						buttonText: '',
						reset: function () {
								var me = this,
									clear = me.clearOnSubmit;
								if (me.rendered) {
									me.button.reset(clear);
									me.fileInputEl = me.button.fileInputEl;
									me.fileInputEl.set({
										accept: 'image/*'
									});
									if (clear) {
										me.inputEl.dom.value = '';
									}
									me.callParent();
								}},
						listeners: {
							afterrender:function(cmp){
								cmp.fileInputEl.set({
									accept:'image/png'
								});
							},
							change: function(fileUploadComponent, value, eOpts) {
								console.log('fileUploadComponent',fileUploadComponent);
								console.log('value',value.size);
								console.log('eOpts',eOpts);
								//this.onFileChange(fileUploadComponent, value, eOpts);
							}
						//buttonConfig: {
							//iconCls: 'upload-icon'
						//}
						}
					},{
						xtype: 'displayfield',
						margin:'10 10 10 10',
						hideEmptyLabel: false,
						value: 'Enter any non-blank password'
					}],
					buttons: [{
						text: 'SignUp',
						formBind: true,
						listeners: {
							click: function (){
								 var form = this.up('form').getForm();
								 console.log('form.isValid()',form.isValid());
								 if (form.isValid()) {
									var out = [];
									Ext.Object.each(form.getValues(), function(key, value){
										out.push(key + '=' + value);
									});
									Ext.Msg.alert('Submitted Values', out.join('<br />'));
								}
							}
						}
					}]
				}
				
				
				
				if(formFlag==='render')
				{
					loginSignUpviewportContainer.add(LoginFormF);
					Ext.getCmp('loginSignUPpanel').setTitle('		LOGIN - PAGE ');
				}
				else if(formFlag===' Sign - Up ')
				{
					loginSignUpviewportContainer.add(SignUpF);
					Ext.getCmp('loginSignUPpanel').setTitle('		SIGN-UP - PAGE ');
				}
}


function LoginUser(Pdata_) {
    try {
        var cuki = document.cookie;
        if (cuki !== '' && cuki.indexOf("_!_") >= 0) {
            document.cookie = 'myCookie' + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
        }
        //PageMask(true);
		var tempData=Ext.decode(Pdata_);
        var UserIDorMobile = tempData.UserIdORMobile;
        var EnterPassword = tempData.Password;
		var ereg = /^[0]?[789]\d{9}$/;
		
        if (ereg.test(UserIDorMobile) && EnterPassword.length === 6 && UserIDorMobile !== '') {
            var postdataa = '{"UserIdORMobile":"' + UserIDorMobile + '","Password":"' + EnterPassword + '"}';
            Ext.MessageBox.show({
                title: "",
                msg: 'Please wait...',
                height:50,
                closable: false,
                icon: 'mb-updating2',
                animEl: 'mb7'
            });
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
                    Ext.MessageBox.hide();
                    //PageMask(false);
                    //// ShowHideStatus('Login Failed', 'Error');
                    //$('#ShowLoginmessage p').text(response.message);
                },
                success: function (response, textStatus, xhr) {
                    localStorage.setItem('xAuth', xhr.getAllResponseHeaders().split('\n')[5].replace('x-token-auth: ', ''));
                    Ext.MessageBox.hide();
					//PageMask(false);
                    //location.reload();
                    window.location.replace("index.html");

                }
            });
        }
        else {
            //PageMask(false);
            //$('#ShowLoginmessage p').text('Please Check User NameORMobile / Password');
            ////ShowHideStatus("Please Check User NameORMobile / Password", 'Warning');
        }
    } catch (e) { Ext.MessageBox.hide(); console.log(e); }

}



function SignUp() {
    PageMask(true);
    if (USERR.CukiArr.length > 0)
        var Email = $('#Emailid').val();
    var Mobile = $('#Mobile').val();
    var FName = $('#Firstname').val();
    var LName = $('#Lastname').val();
    var Password = $('#Password').val();
    var CPassword = $('#CPassword').val();
    if (!(Mobile.indexOf(".") >= 0) && Mobile !== '' && Mobile.length === 10) {
    }
    else {
        PageMask(false);
        ShowHideStatus('Please Check Mobile Number', 'Error');
        return;
    }
    if (FName !== '' && Email !== '' && Mobile.length === 10 && Password.length === 6 && Password === CPassword) {
        var postdataa = '';
        if (USERR.accountType === 'Admin')
            postdataa = '{"Id":0,"fname":"' + FName + '","mobile":"' + Mobile + '","isActive":"","lname":"' + LName + '","email":"' + Email + '","accounttype":"Normal","partnerID":"","ppassword":"' + Password + '","dateofjoin":"","roomname":""}';
        else if (USERR.accountType === 'Super') {
            if ($('#SignUp').find('input[type=radio]:checked').val() === undefined && $('#SignUp').find('input[type=radio]:checked').val() === 'undefined') {
                PageMask(false);
                return;
            }
            postdataa = '{"Id":0,"fname":"' + FName + '","mobile":"' + Mobile + '","isActive":"","lname":"' + LName + '","email":"' + Email + '","accounttype":"' + $('#SignUp').find('input[type=radio]:checked').val() + '","partnerID":"","ppassword":"' + Password + '","dateofjoin":"","roomname":""}';
        }

        alert(postdataa);
        $.ajax({
            url: "api/AddPartnr/SignUp",
            type: 'POST',
            beforeSend: function (request) {
                request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
            },
            dataType: "json",
            data: postdataa,
            contentType: "application/json; charset=utf-8",
            error: function (response) {
                PageMask(false);
                ShowHideStatus('Sign-Up Failed', 'Error');
            },
            success: function (response) {
                location.reload();
                PageMask(false);
                ShowHideStatus('Sign-Up Successfully', 'OK');
                $('#ShowUserid p').text(response);

            }
        });
    }
    else {

    }

}
