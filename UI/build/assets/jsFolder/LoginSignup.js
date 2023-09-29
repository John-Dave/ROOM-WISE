//var BASE_URL = window.location.origin;
//var HOST_URL='http://35.196.135.2';
var reader = new FileReader();
function pageShow() {
		if(window.location.protocol.includes('https:'))
			HOST_URL=HOST_URL.replace('http:','https:')
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
function PageMaskL(flag) {

    if (flag && !(Ext.getCmp('loginSignUpviewport').isMasked())) {
        Ext.getCmp('loginSignUpviewport').mask();
    }
    else {
        if (Ext.getCmp('loginSignUpviewport').isMasked())
            Ext.getCmp('loginSignUpviewport').unmask();
    }
}
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
        Ext.getCmp('StatusDiv').getEl().update('<div id="status"  style="height:40px;background:' + divvColor + '; color:#fff;" align="center"><div style="padding-top: 8px; align:center;">' + msgText + '</div></div>');
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
        Ext.getCmp('StatusDiv').getEl().update('<div id="status"  style="height:40px;background:' + divvColor + '; color:#fff;" align="center"><div style="padding-top: 8px; align:center;">' + msgText + '</div></div>');
    }
}

function addLoginSignup(formFlag) {
		if(window.location.protocol.includes('https:'))
			HOST_URL=HOST_URL.replace('http:','https:')
    var loginSignUpviewportContainer = Ext.ComponentQuery.query('#loginSignUpviewportContainer')[0];
    loginSignUpviewportContainer.removeAll();
    var LoginFormF = {
        xtype: 'form',
        margin: '5 5 5 5',
        bodyPadding: 10,
        id: 'loginForm',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            margin: '5 5 5 5',
            name: 'mobilenumber',
            fieldLabel: 'Mobile',
            allowBlank: false,
            placeHolder: 'Mobile*',
            validator: function (value) {
                var ereg = /^[0]?[789]\d{9}$/;
                var testResult = ereg.test(value);
                return (testResult) ? true : 'Wrong Mobile Number Format.'
            }
        }, {
            xtype: 'textfield',
            margin: '5 5 5 5',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            placeHolder: 'Password*',
            minLength: 6,
            maxLength: 6,
        }, {
            xtype: 'displayfield',
            margin: '10 10 10 10',
            hideEmptyLabel: false
            //value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            icon: 'assets/images/logiin.png',
            autoWidth : true,
            autoHeight : true,
            scale: 'large',
            tooltip : 'Hovered',
            listeners: {
                click: function () {
                    var form = this.up('form').getForm();
                    console.log('form.isValid()', form.isValid());
                    if (form.isValid()) {
                        var out = [];
                        Ext.Object.each(form.getValues(), function (key, value) {
                            out.push(value);
                        });
                        if (out.length === 2) {
                            var postdataa = '{"UserIdORMobile":"' + out[0] + '","Password":"' + out[1] + '"}';
                            LoginUser(postdataa);
                        }
                        else {
                            Ext.Msg.alert('Submitted Values', out.join('<br />'));
                        }
                    }
                }
            }
        }]
    }
    var SignUpF = {
        xtype: 'form',
        margin: '5 5 5 5',
        bodyPadding: 10,
        id: 'SignUpForm',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            emptyText: 'Enter EMAIL*',
            margin: '10 10 10 10',
            fieldLabel: 'Email',
            vtype: 'email',
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
        }, {
            xtype: 'textfield',
            name: 'fname',
            emptyText: 'Enter First Name*',
            margin: '10 10 10 10',
            fieldLabel: 'First Name',
            allowBlank: false,
            placeHolder: 'First Name*'
        }, {
            xtype: 'textfield',
            name: 'lname',
            emptyText: 'Enter Last Name*',
            margin: '10 10 10 10',
            fieldLabel: 'Last Name',
            allowBlank: false,
            placeHolder: 'Last Name*'
        }, {
            xtype: 'textfield',
            name: 'password1',
            emptyText: 'Enter Password*',
            margin: '10 10 10 10',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            minLength: 6,
            maxLength: 6,
            placeHolder: 'Password*'
        }, {
            xtype: 'textfield',
            name: 'password2',
            margin: '10 10 10 10',
            inputType: 'password',
            emptyText: 'Enter Confirm Password*',
            fieldLabel: 'Confirm Password',
            allowBlank: false,
            minLength: 6,
            maxLength: 6,
            placeHolder: 'Confirm Password*',
            validator: function (value) {
                var password1 = this.previousSibling('[name=password1]');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
        }, {
            xtype: 'filefield',
            margin: '10 10 10 10',
            id: 'profylPic',
            emptyText: 'Select an image*',
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
                }
            },
            listeners: {
                afterrender: function (cmp) {
                    cmp.fileInputEl.set({
                        accept: 'image/png'
                    });
                },
                change: function (fileUploadComponent, value, eOpts) {
                    var valueElement = Ext.getCmp('profylPic').getEl().down('input[type=file]').dom.files[0];
                    if (valueElement != null && valueElement.size < 120000) {
                        reader = new FileReader();

                        reader.onload = function (e) {
                            Ext.getCmp('profylPic').setValue(e.target.result);
                        };
                        reader.onerror = function (e) {
                            alert('The File APIs are not fully supported in this browser.');
                        };

                        reader.readAsDataURL(valueElement);
                    }
                    else {
                        ShowHideStatus('File Size Not More Than 120 KB !', 'Warning');
                    }
                    
                }
                //buttonConfig: {
                //iconCls: 'upload-icon'
                //}
            }
        }, {
            xtype: 'displayfield',
            margin: '10 10 10 10',
            hideEmptyLabel: false
            //value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'SignUp',
            formBind: true,
            autoWidth: true,
            autoHeight: true,
            icon: 'assets/images/signup.png',
            listeners: {
                click: function () {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        var out = [];
                        Ext.Object.each(form.getValues(), function (key, value) {
                            out.push(value);
                        });
                        SignUp(out);
                    }
                    else {
                        ShowHideStatus('Please Check Form Entries', 'Error');
                    }
                }
            }
        }]
    }



    if (formFlag === 'render') {
        Ext.getCmp('LOGOContainer').setVisible(true);
        loginSignUpviewportContainer.add(LoginFormF);
        Ext.getCmp('loginSignUPpanel').setTitle('		LOGIN - PAGE ');
    }
    else if (formFlag === ' Sign - Up ') {
        Ext.getCmp('LOGOContainer').setVisible(false);
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
        PageMaskL(true);
        var tempData = Ext.decode(Pdata_);
        var UserIDorMobile = tempData.UserIdORMobile;
        var EnterPassword = tempData.Password;
        var ereg = /^[0]?[789]\d{9}$/;

        if (ereg.test(UserIDorMobile) && EnterPassword.length === 6 && UserIDorMobile !== '') {
            var postdataa = '{"UserIdORMobile":"' + UserIDorMobile + '","Password":"' + EnterPassword + '"}';

            $.ajax({
                url: HOST_URL+"/api/AddPartnr/Login",
                type: 'POST',
                beforeSend: function (request) {
                    request.setRequestHeader("x-token-auth", localStorage.getItem('xAuth'));
                },
                dataType: "json",
                xhrFields: {
					withCredentials: true
				},
				crossDomain: true,
                data: postdataa,
                contentType: "application/json; charset=utf-8",
                error: function (response) {
                    PageMaskL(false);
                     ShowHideStatus('Login Failed', 'Error');
                    //$('#ShowLoginmessage p').text(response.message);
                },
                success: function (response, textStatus, xhr) {
					let tokenStr=xhr.getAllResponseHeaders().split('\n').filter(function(val,index){
						if(val.includes('x-token-auth: '))
							return true;
						else
							return false;
						});
					if(response !== undefined && response !== null && response.message==='Partner Login successfully' && tokenStr.length>0){
                    localStorage.setItem('xAuth', tokenStr[0].replace('x-token-auth: ', ''));
                    PageMaskL(false);
                    window.location.replace(BASE_URL+'/index.html');
					}
					else{
						PageMaskL(false);
						ShowHideStatus('Login Failed ! Please check UserName / Password', 'Error');
						}
                }
            });
        }
        else {
            PageMaskL(false);
            //$('#ShowLoginmessage p').text('Please Check User NameORMobile / Password');
            ShowHideStatus("Please Check User NameORMobile / Password", 'Warning');
        }
    } catch (e) { PageMaskL(false); console.log(e); }

}



function SignUp(formOBJarr) {
    PageMask(true);
    var Email = formOBJarr[0].trim();
    var Mobile = formOBJarr[1].trim();
    var FName = formOBJarr[2].trim();
    var LName = formOBJarr[3].trim();
    var Password = formOBJarr[4].trim();
    var CPassword = formOBJarr[5].trim();
    var dataIMG = reader.result;
    reader = new FileReader();
    if (dataIMG === '')
    {
        PageMask(false);
        ShowHideStatus('Please Select Profile Image First', 'Error');
        return;
    }
    if (!(Mobile.indexOf(".") >= 0) && Mobile !== '' && Mobile.length === 10) {
    }
    else {
        PageMask(false);
        ShowHideStatus('Please Check Mobile Number', 'Error');
        return;
    }
    if (FName !== '' && Email !== '' && Mobile.length === 10 && Password.length === 6 && Password === CPassword) {
        var postdataa = '';
        
        postdataa = '{"Id":0,"fname":"' + FName + '","mobile":"' + Mobile + '","isActive":"","lname":"' + LName + '","email":"' + Email + '","accounttype":"","partnerID":"","ppassword":"' + Password + '","dateofjoin":"","roomname":"' + dataIMG + '"}';
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
                ShowHideStatus('Sign-Up Failed', 'Error');
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

