using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiTest.Models;
using WebApiTest.ResponseModels;
using System.Web;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using WebApiTest.Data;



namespace WebApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddPartnrController : ControllerBase
    {


        [HttpGet]
        [Route("GetAllPartners")]
        public dynamic GetAllPartners()
        {
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                    JSONresponseModel _objResponseModel = new JSONresponseModel();
                    GetAllPartner ResponseClass = new GetAllPartner();
                    List<object> tempLST = new List<object>();
                    ResponseClass.Data= (new AddPartner()).GetAllPartners(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.Logs= (new ActionLogsModels(AuthObj.CurrentUserInfo_.roomname)).ReadLogs();
                    ResponseClass.ShowAllEntry= (new AccountEntries()).GetAllAccountEntries(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.DashboardData= (new DashboardModel()).GetDashboardValue(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.SettlementTickets = (new SettlementModel()).GetSettlement(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.getGetAllAccountHistory= (new DashboardModel()).getGetAllAccountHistory(AuthObj.CurrentUserInfo_.roomname);
                    tempLST.Add(ResponseClass); 
                    _objResponseModel.ResponseData = tempLST; 
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Data Received successfully";
                  return  Ok(_objResponseModel);
                }
                else
                {
                    JSONresponseModel _objResponseModel = new JSONresponseModel();
                    _objResponseModel.ResponseData = null;
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                  return  Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("####  --# "+ex.Message);
                JSONresponseModel _objResponseModel = new JSONresponseModel();
                _objResponseModel.ResponseData =null;
                _objResponseModel.Status = AuthObj.IsvalidToken_;
                _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
            }

        }


        [HttpGet]
        [Route("GetDashboard")]
        public dynamic GetDashboardV()
        {
            ResponseModel _objResponseModel = new ResponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {          
                    _objResponseModel.Data = (new DashboardModel()).GetDashboardValue(AuthObj.CurrentUserInfo_.roomname);
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = "Data Received successfully";
                  return  Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                   return Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                _objResponseModel.Data = "";
                _objResponseModel.Status = AuthObj.IsvalidToken_;
                _objResponseModel.Message = "Unauthorized USER";
               return Ok(_objResponseModel);
            }

        }

        [HttpGet]
        [Route("ShowAllEntries")]
        public dynamic ShowAllEntries()
        {

            ResponseModel _objResponseModel = new ResponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                    _objResponseModel.Data = (new AccountEntries()).GetAllAccountEntries(AuthObj.CurrentUserInfo_.roomname);
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = "Data Received successfully";
                  return  Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                 return   Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                _objResponseModel.Data = "";
                _objResponseModel.Status = AuthObj.IsvalidToken_;
                _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
            }

        }

        [HttpGet]
        [Route("ShowEntriesByID/{id}")]
        // [HttpGet("{id}")]
        public dynamic ShowEntriesByID(int ID=0)
        {

            ResponseModel _objResponseModel = new ResponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                    _objResponseModel.Data = (new AccountEntries()).GetAccountEntriesById(AuthObj.CurrentUserInfo_.roomname, ID);
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = "Data Received successfully";
                   return Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                   return Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                _objResponseModel.Data = "";
                _objResponseModel.Status = AuthObj.IsvalidToken_;
                _objResponseModel.Message = "Unauthorized USER";
               return Ok(_objResponseModel);
            }

        }

        [HttpGet]
        [Route("ShowEntriesHistoryByID/{id}")]
        public dynamic ShowEntriesHistoryByID(int ID = 0)
        {

            ResponseModel _objResponseModel = new ResponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                    _objResponseModel.Data = (new AccountHistoryEntries()).GetAccountEntriesHistoryById(AuthObj.CurrentUserInfo_.roomname, ID);
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = "Data Received successfully";
                   return Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                  return  Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                _objResponseModel.Data = "";
                _objResponseModel.Status = AuthObj.IsvalidToken_;
                _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
            }

        }

        [HttpPost]
        [Route("SignUp")]
        public dynamic AddRoomPartner(AddPartner Partner)
        {
            try
            {
				//TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
					string TempMsg="Account Created successfully";
					if(Partner.Id !=0 && Partner.ppassword.Contains("xxxxxx"))
					{
						Partner.ppassword="xxxxxx";
						TempMsg="Updated successfully";
					}
                    Partner.accounttype = "Admin";
                    Partner.isActive = "true";
                    var ImgStr=Partner.roomname;
                    Partner.roomname = "xxx";
                    string iid = new AddPartner().AddRoomPartners(Partner);
                    bool isImgSave=false;
                    if(Partner.Id ==0)
                     isImgSave=(new AddPartner()).saveUserImage(ImgStr,iid);
                    ResponseModel _objResponseModel = new ResponseModel();

                    if(iid.Contains("Already"))
						TempMsg=iid;
                    _objResponseModel.Data = iid;
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = TempMsg;
                  return  Ok(_objResponseModel);
            }
            catch (Exception ex){
                ResponseModel _objResponseModel = new ResponseModel();
                _objResponseModel.Data = "";
                _objResponseModel.Status = false;
                _objResponseModel.Message = ex.Message.ToString();
               return Ok(_objResponseModel);
            }

        }

        [HttpPost]
        [Route("Login")]
        public dynamic GetPartnerByUseridORMobile(LoginPartner PartnerInfo)
        {
            try
            {
                //HttpCookie myCookie = System.Web.HttpContext.Current.Request.Cookies["myCookie"];
                ResponseModel _objResponseModel = new ResponseModel();
                TokenModel objAuth = new TokenModel(PartnerInfo);
                if (objAuth.IsvalidToken_)
                {
                    HttpContext.Response.Cookies.Append("myCookie", objAuth.token_, new CookieOptions
                        {
                        Expires = DateTime.Now.AddDays(30)
                        });
                        HttpContext.Response.Headers.Add("X-Token-Auth",WebApiTest.Security.Encryption.Encrypt(objAuth.token_));
                    _objResponseModel.Data = ((new LoginPartner()).LoginF(PartnerInfo)) ;
                    _objResponseModel.Status = objAuth.IsvalidToken_;
                    _objResponseModel.Message = "Partner Login successfully";
                   return Ok(_objResponseModel);
                }
                else {
                    _objResponseModel.Data = ((new LoginPartner()).LoginF(PartnerInfo)).Count;
                    _objResponseModel.Status = objAuth.IsvalidToken_;
                    _objResponseModel.Message = objAuth.message;
                  return  Ok(_objResponseModel);
                }
                
                
            }
            catch (Exception ex) {
                ResponseModel _objResponseModel = new ResponseModel();
                _objResponseModel.Data = "";
                _objResponseModel.Status = false;
                _objResponseModel.Message = ex.Message.ToString();
              return  Ok(_objResponseModel);
            }

        }


        [HttpGet]
        [Route("Logout")]
        public dynamic Logout()
        {
            TokenModel objAuth = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                //HttpCookie myCookie = System.Web.HttpContext.Current.Request.Cookies["myCookie"];
                //myCookie.Expires = DateTime.Now.AddDays(-1);
                //FormsAuthentication.SignOut();
                //HttpCookie ck = new HttpCookie("myCookie", "");
                //System.Web.HttpContext.Current.Response.Cookies.Add(ck);
                //System.Web.HttpContext.Current.Request.Cookies.Remove("myCookie");
                ////System.Web.HttpContext.Current.Session.Abandon();
                if (objAuth.IsvalidToken_)
                {
                    // System.Web.HttpContext.Current.Response.Cookies.Clear();
                    ResponseModel _objResponseModel = new ResponseModel();
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = false;
                    _objResponseModel.Message = "Logout Successfully";
                  return  Ok(_objResponseModel);
                }
                else
                {
                    // System.Web.HttpContext.Current.Response.Cookies.Clear();
                    ResponseModel _objResponseModel = new ResponseModel();
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = false;
                    _objResponseModel.Message = "Unauthorized";
                   return Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                // System.Web.HttpContext.Current.Response.Cookies.Clear();
                ResponseModel _objResponseModel = new ResponseModel();
                _objResponseModel.Data = "";
                _objResponseModel.Status = false;
                _objResponseModel.Message = "Logout Successfully";
               return Ok(_objResponseModel);
            }
        }
        [HttpGet]
        [Route("GetIp")]
        public dynamic GetIp()
        {
            try
            {
                // GetIpAddressModel objData = new GetIpAddressModel();
                // objData.ip=System.Web.HttpContext.Current.Request.UserHostAddress;
                ResponseModel _objResponseModel = new ResponseModel();
                 _objResponseModel.Data = "";
                _objResponseModel.Status = true;
                _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
            }
            catch (Exception ex)
            {
                ResponseModel _objResponseModel = new ResponseModel();
              return  Ok(_objResponseModel);
            }
        }



        [HttpPost]
        [Route("AddItem")]
        public dynamic AddAccountItem(InsertPartnerAccountModel PartnerInfo)
        {
           // ResponseModel _objResponseModel = new ResponseModel();
            JSONresponseModel _objResponseModel = new JSONresponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {

                    InsertPartnerAccountModel mm = new InsertPartnerAccountModel();
                    PartnerInfo.groupname_ = AuthObj.CurrentUserInfo_.roomname;
                mm.DividePartners(PartnerInfo);
                // _objResponseModel.Data = "";
                //     _objResponseModel.Status = true;
                //     _objResponseModel.Message = "Add Account successfully";
                    ActionLogsModels oo = new ActionLogsModels(AuthObj.CurrentUserInfo_.roomname);
                    string LogText = "";
                    if (PartnerInfo.id_ == 0)
                        LogText = AuthObj.PartnerName + "  ,      Add-Item  : " + PartnerInfo.itemName_ ;
                    else
                        LogText = AuthObj.PartnerName + "  ,     Update-Item : " + PartnerInfo.itemName_ + " ,    Record Number : " + PartnerInfo.id_ ;
                        oo.WriteLog(LogText);
                       /////////////
                    GetAllPartner ResponseClass = new GetAllPartner();
                    List<object> tempLST = new List<object>();
                    ResponseClass.Data= (new AddPartner()).GetAllPartners(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.Logs= (new ActionLogsModels(AuthObj.CurrentUserInfo_.roomname)).ReadLogs();
                    ResponseClass.ShowAllEntry= (new AccountEntries()).GetAllAccountEntries(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.DashboardData= (new DashboardModel()).GetDashboardValue(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.SettlementTickets = (new SettlementModel()).GetSettlement(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.getGetAllAccountHistory= (new DashboardModel()).getGetAllAccountHistory(AuthObj.CurrentUserInfo_.roomname);
                    tempLST.Add(ResponseClass); 
                    _objResponseModel.ResponseData = tempLST;
                     _objResponseModel.Status =true;
                    _objResponseModel.Message = "Add Account successfully"; 
                      return  Ok(_objResponseModel);
                }
                else
                {
                    // _objResponseModel.Data = "";
                    // _objResponseModel.Status = AuthObj.IsvalidToken_;
                    // _objResponseModel.Message = "Unauthorized USER";
                    _objResponseModel.ResponseData = null;
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
                  return  Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("####  --# "+ex.Message);
                    _objResponseModel.ResponseData = null;
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
            }



        }

        [HttpPost]
        [Route("SetActiveInactive")]
        public dynamic SetActiveInactive(ActiveInactivePartner PartnerStatus)
        {
            JSONresponseModel _objResponseModel = new JSONresponseModel();
            try
            {
                bool stat = Convert.ToBoolean(PartnerStatus.flag);
                //  HttpCookie myCookie = System.Web.HttpContext.Current.Request.Cookies["myCookie"];
                //ResponseModel _objResponseModel = new ResponseModel();
                TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
                if (AuthObj.IsvalidToken_)
                {
                    // _objResponseModel.Data = ((new ActiveInactivePartner()).SetActiveInactive(PartnerStatus));
                    // _objResponseModel.Status = AuthObj.IsvalidToken_;
                    // _objResponseModel.Message = "Update successfully";
                    //////////
                     GetAllPartner ResponseClass = new GetAllPartner();
                    List<object> tempLST = new List<object>();
                    ResponseClass.Data=((new ActiveInactivePartner()).SetActiveInactive(PartnerStatus));
                    ResponseClass.Data= (new AddPartner()).GetAllPartners(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.Logs= (new ActionLogsModels(AuthObj.CurrentUserInfo_.roomname)).ReadLogs();
                    ResponseClass.ShowAllEntry= (new AccountEntries()).GetAllAccountEntries(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.DashboardData= (new DashboardModel()).GetDashboardValue(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.SettlementTickets = (new SettlementModel()).GetSettlement(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.getGetAllAccountHistory= (new DashboardModel()).getGetAllAccountHistory(AuthObj.CurrentUserInfo_.roomname);
                    tempLST.Add(ResponseClass); 
                    _objResponseModel.ResponseData = tempLST;
                     _objResponseModel.Status =true;
                    _objResponseModel.Message = "Update successfully"; 
                   return Ok(_objResponseModel);
                }
                else
                {
                    // _objResponseModel.Data = "";
                    // _objResponseModel.Status = AuthObj.IsvalidToken_;
                    // _objResponseModel.Message = "Unable to Update";
                     _objResponseModel.ResponseData = null;
                    _objResponseModel.Status = AuthObj.IsvalidToken_;
                    _objResponseModel.Message = "Unable to Update";
                   return Ok(_objResponseModel);
                }


            }
            catch (Exception ex)
            {
                  _objResponseModel.ResponseData = null;
                    _objResponseModel.Status = false;
                    _objResponseModel.Message = "Unable to Update";
               return Ok(_objResponseModel);
            }

        }


        [HttpGet]
        [Route("Settlement")]
        public dynamic Settlement()
        {
            SettleModel PartnerInfo = new SettleModel();
            try
            {//token=ca8a56f3-1cf0-4f03-85b2-3e93434c3a34_!_3_UYIW_!_Swaleh_!_Mujeeb_!_Admin
                // HttpCookie myCookie = System.Web.HttpContext.Current.Request.Cookies["myCookie"];
                string myCookie = HttpContext.Request.Cookies["myCookie"].ToString();
                ResponseModel _objResponseModel = new ResponseModel();
                TokenModel objAuth = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
               var lstt= (new SettlementModel()).GetSettlement(objAuth.CurrentUserInfo_.roomname);
                if (objAuth.IsvalidToken_&& myCookie!=null&& lstt.Count==0)
                {
                    PartnerInfo.groupName_ = objAuth.CurrentUserInfo_.roomname;
                    PartnerInfo.settlementBy_ =Regex.Split( myCookie,"_!_")[1];
                    PartnerInfo.settlementStatus_ = "0";
                    _objResponseModel.Data = (new SettleModel()).Settlement(PartnerInfo);
                    _objResponseModel.Status = objAuth.IsvalidToken_;
                    _objResponseModel.Message = "Settlement successfully";
                    ActionLogsModels oo = new ActionLogsModels(objAuth.CurrentUserInfo_.roomname);
                    string LogText = objAuth.CurrentUserInfo_.fname + " "+ objAuth.CurrentUserInfo_.lname + "  ,      Settled Account"  ;
                    oo.WriteLog(LogText);
                   return Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.Data = "";
                    _objResponseModel.Status = objAuth.IsvalidToken_;
                    _objResponseModel.Message = "Please Settled Your Previous Settlement";
                    return Ok(_objResponseModel);
                }


            }
            catch (Exception ex)
            {
                ResponseModel _objResponseModel = new ResponseModel();
                _objResponseModel.Data = "";
                _objResponseModel.Status = false;
                _objResponseModel.Message = ex.Message.ToString();
                return Ok(_objResponseModel);
            }

        }


        [HttpPost]
        [Route("SettlementPaymentAPI")]
        public dynamic SettlementPayment_API(SettlementPaymentPostData PartnerInfo)
        {
            JSONresponseModel _objResponseModel = new JSONresponseModel();
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                    _objResponseModel.Status = (new SettlementPaymentPostData()).InsertSettlementPAYMENT(PartnerInfo, AuthObj.CurrentUserInfo_.roomname);
                    /////
                      GetAllPartner ResponseClass = new GetAllPartner();
                    List<object> tempLST = new List<object>();

                    ResponseClass.Data= (new AddPartner()).GetAllPartners(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.Logs= (new ActionLogsModels(AuthObj.CurrentUserInfo_.roomname)).ReadLogs();
                    ResponseClass.ShowAllEntry= (new AccountEntries()).GetAllAccountEntries(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.DashboardData= (new DashboardModel()).GetDashboardValue(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.SettlementTickets = (new SettlementModel()).GetSettlement(AuthObj.CurrentUserInfo_.roomname);
                    ResponseClass.getGetAllAccountHistory= (new DashboardModel()).getGetAllAccountHistory(AuthObj.CurrentUserInfo_.roomname);
                    tempLST.Add(ResponseClass); 
                    _objResponseModel.ResponseData = tempLST;
                     _objResponseModel.Status =true;
                    _objResponseModel.Message = "Update successfully"; 
                    if (_objResponseModel.Status)
                        _objResponseModel.Message = "Paid successfully";
                    else
                        _objResponseModel.Message = "Please Check Amount";
                    return Ok(_objResponseModel);
                }
                else
                {
                    _objResponseModel.ResponseData =null;
                    _objResponseModel.Status = false;
                    _objResponseModel.Message = "Please Login";
                    return Ok(_objResponseModel);
                }
            }
            catch (Exception ex)
            {
                _objResponseModel.ResponseData =null;
                _objResponseModel.Status = false;
                _objResponseModel.Message = "Unauthorized USER";
                return Ok(_objResponseModel);
            }



        }


        //searchAdmin
        [HttpGet]
        [Route("searchAdmin/{mobile_}")]
        public dynamic searchAdmin(string mobile_)
        {
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                {
                   System.Console.WriteLine("heare");
                    return Ok( (new AddPartner()).SEARCH_ADMIN(mobile_));
                }
                else
                {
                   return Ok("{MESSAGE:UN-AUTHERISE USER}");
                }
            }
            catch (Exception ex)
            {
                return Ok("{ERROR:internal server error}");
            }



        }

        [HttpGet]
        [Route("getAllSettlements/{IDs}")]
        public dynamic getAllSettlements(string IDs)
        {
            TokenModel AuthObj = new TokenModel(HttpContext.Request.Cookies["myCookie"].ToString(), HttpContext.Request.Headers["X-Token-Auth"]);
            try
            {
                if (AuthObj.IsvalidToken_)
                    return Ok( (new SettlementModel()).GetAllSettlements(AuthObj.CurrentUserInfo_.roomname,IDs));
                else
                   return Ok("{MESSAGE:UN-AUTHERISE USER}");
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("g#getAllSettlements"+ex.Message);
                return Ok("{ERROR:internal server error}");
            }



        }

    }
}

