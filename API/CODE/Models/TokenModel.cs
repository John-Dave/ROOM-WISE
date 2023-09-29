using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;
using WebApiTest.Data;
using WebApiTest.Security;
using Microsoft.AspNetCore.Http;

namespace WebApiTest.Models
{
    public class TokenModel
    {
         private readonly IHttpContextAccessor _httpContextAccessor;  
  
        public TokenModel(IHttpContextAccessor httpContextAccessor)  
        {  
            this._httpContextAccessor = httpContextAccessor;  
        }  
        public string token_ { get; set; }
        public bool IsvalidToken_ { get; set; }
        public string message { get; set; }
        public string PartnerName { get; set; }
        public CurrentUserInfo CurrentUserInfo_ { get; set; }
        public TokenModel(LoginPartner user)
        {
            createToken(user);
        }
        public TokenModel(string cukies , string x_token)
        {
            CheckCookie(cukies,x_token);
        }
         public void Set(string key, string value, int? expireTime)  
        {  
            CookieOptions option = new CookieOptions();  
            if (expireTime.HasValue)  
                option.Expires = DateTime.Now.AddMinutes(expireTime.Value);  
            else  
                option.Expires = DateTime.Now.AddMilliseconds(10);  
             _httpContextAccessor.HttpContext.Response.Cookies.Append(key, value, option);  
        }  
        public void createToken(LoginPartner user)
        {
            try
            {
                string userInfoIncooki = "_!_";
                List<AddPartner> objPartner = (new LoginPartner()).LoginF(user);
                if (objPartner.Count == 1)
                {
                    WebApiTest.Security.Encryption.Key = "_!_";
                    userInfoIncooki += objPartner[0].partnerID + "_!_" + objPartner[0].fname + "_!_" + objPartner[0].lname + "_!_" + objPartner[0].accounttype + "_!_" + WebApiTest.Security.Encryption.Encrypt(objPartner[0].ppassword) + "_!_" + objPartner[0].email + "_!_" + objPartner[0].mobile + "_!_" + objPartner[0].roomname;
                    this.CurrentUserInfo_ = new CurrentUserInfo(user);
                    this.message = "User Found";
                    this.IsvalidToken_ = true;
                    this.token_ = System.Guid.NewGuid().ToString()+ userInfoIncooki;
                }
                else
                {
                    this.message = "User Not Found";
                    this.IsvalidToken_ = false;
                    this.token_ = "";
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("##==##_2"+ex.Message);
                this.message = "Unauthorized";
                this.IsvalidToken_ = false;
                this.token_ = "";
            }
        }

        public void CheckCookie(string cukies , string x_token)
        {
            // RequestContext = System.Web.HttpContext.Current.Request;
            string cookieValueFromReq =cukies;//_httpContextAccessor.HttpContext.Request.Cookies["myCookie"].ToString();    
           // HttpCookie myCookie = RequestContext.Cookies["myCookie"];
           var x_token_auth = x_token;//_httpContextAccessor.HttpContext.Request.Headers["x-token-auth"];
            //var ip = RequestContext.Params.AllKeys.ToList();
            string userInfoIncooki = "_!_";
            try
            {
                if (cookieValueFromReq != "" && x_token_auth != "" && x_token_auth != "null")
                {
                    var TempDecryptToken = Encryption.Decrypt(x_token_auth);
                    LoginPartner user = new LoginPartner();//_!_3_UYIW_!_Swaleh_!_Mujeeb_!_Admin_!_7PVXG2ZprOc=
                    user.UserIdORMobile = Regex.Split(TempDecryptToken, "_!_")[1];
                    user.Password = Encryption.Decrypt(Regex.Split(TempDecryptToken, "_!_")[5]);
                    var CurrentUSERSS = new CurrentUserInfo(user);//.Values["token"]
                    if (!string.IsNullOrEmpty(cookieValueFromReq) && CurrentUSERSS != null && TempDecryptToken.Contains("_!_"))
                    {
                        this.CurrentUserInfo_ = CurrentUSERSS;
                        this.IsvalidToken_ = true;
                        userInfoIncooki += CurrentUserInfo_.partnerID + "_!_" + CurrentUserInfo_.fname + "_!_" + CurrentUserInfo_.lname + "_!_" + CurrentUserInfo_.accounttype + "_!_" + WebApiTest.Security.Encryption.Encrypt(CurrentUserInfo_.ppassword) + "_!_" + CurrentUserInfo_.email + "_!_" + CurrentUserInfo_.mobile + "_!_" + CurrentUserInfo_.roomname;
                        this.token_ = System.Guid.NewGuid().ToString() + userInfoIncooki;
                        this.PartnerName = CurrentUserInfo_.fname + " " + CurrentUserInfo_.lname;
                    }
                    else
                    {
                        this.message = "Session Expire";
                        this.token_ = "";
                        this.IsvalidToken_ = false;
                        this.CurrentUserInfo_ = null;
                    }
                }
                else
                {
                    this.message = "Invalid Token";
                    this.token_ = "";
                    this.IsvalidToken_ = false;
                    this.CurrentUserInfo_ = null;
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("####_2"+ex.Message);
                this.IsvalidToken_ = false;
                this.CurrentUserInfo_ = null;
            }
        }
    }
}