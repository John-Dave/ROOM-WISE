using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;
using WebApiTest.Data;

namespace WebApiTest.Models
{

    public class SettlementModel
    {
        public int id_ { get; set; }
        public string partnerId_ { get; set; }
        public string partnername_ { get; set; }
        public string spend_ { get; set; }
        public string consumed_ { get; set; }
        public string settlementID_ { get; set; }
        public string dateofSettlement_ { get; set; }
        public string groupName_ { get; set; }
        public string settlementBy_ { get; set; }
        public string amountStatus_ { get; set; }
        public string settlementStatus_ { get; set; }
        public string currentamountStatus_ { get; set; }
        public string unquieToken_ { get; set; }
        public List<GetSettlementPaymentModel> paymentHistory_ { get; set; }

        public List<SettlementModel> GetSettlement(string groupname_)
        {
            DataTable table = null;
            List<SettlementModel> lstClaims = new List<SettlementModel>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupname_);
                    table = db.GetDataSet("getSettlementValues", prams).Tables[0]; ;
                    string DataFlag = "All"; 
                    if (table != null && table.Rows.Count > 0)
                    {
                        List<GetSettlementPaymentModel> TempHoldpaymentHistory_ = (new GetSettlementPaymentModel()).GetAllSettlementPaymentHistoryByToken(groupname_, table.Rows[0]["unquieToken"].ToString());
                        foreach (DataRow dr in table.Rows)
                        {
                            if ((dr["amountStatus"]).ToString().Contains("-"))
                                DataFlag = "Minus";
                            if (!(dr["amountStatus"]).ToString().Contains("-"))
                                DataFlag = "Plus";
                            SettlementModel objClaim = new SettlementModel
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                partnerId_ = (dr["partnerId"]).ToString(),
                                partnername_ = (dr["partnername"]).ToString(),
                                spend_ = (dr["spend"]).ToString(),
                                consumed_ = (dr["consumed"]).ToString(),
                                settlementID_ = (dr["settlementID"]).ToString(),
                                dateofSettlement_ = (dr["dateofSettlement"]).ToString(),
                                groupName_ = (dr["groupName"]).ToString(),
                                settlementBy_ = (dr["settlementBy"]).ToString(),
                                amountStatus_ = (dr["amountStatus"]).ToString(),
                                settlementStatus_ = (dr["settlementStatus"]).ToString(),
                                currentamountStatus_ = (dr["currentamountStatus"]).ToString(),
                                unquieToken_ = (dr["unquieToken"]).ToString(),
                                paymentHistory_ = GetPaymenthistoryNodes(TempHoldpaymentHistory_, (dr["id"]).ToString(), DataFlag),//(new GetSettlementPaymentModel()).GetSettlementPaymentHistoryByID((dr["groupName"]).ToString(), (dr["unquieToken"]).ToString(), (dr["id"]).ToString(), DataFlag),
                            };

                            lstClaims.Add(objClaim);
                        }
                    }
                }
                catch (Exception ex)
                {


                }
            }
            return lstClaims;
        }


        public List<GetSettlementPaymentModel> GetPaymenthistoryNodes(List<GetSettlementPaymentModel> TempHoldpaymentHistory_,string ID = "0", string DataFlag = "All")
        {
            List<GetSettlementPaymentModel> GetPaymenthistoryNodesReturn = new List<GetSettlementPaymentModel>();
            if (DataFlag == "Plus") {
                GetPaymenthistoryNodesReturn = TempHoldpaymentHistory_.Where(u => u.ref_id_ == Convert.ToInt32(ID)).ToList();
            }
            else {
                if (DataFlag == "Minus")
                {
                    GetPaymenthistoryNodesReturn = TempHoldpaymentHistory_.Where(u => u.MinusPartnerID_ == Convert.ToInt32(ID)).ToList();
                }
                else
                {
                    GetPaymenthistoryNodesReturn = TempHoldpaymentHistory_;
                }
            }
            return GetPaymenthistoryNodesReturn;
        }

        public List<SettlementModel> GetSettlementById(int PlusID,int MinusID, string groupname_)
        {
            DataTable table = null;
            List<SettlementModel> lstClaims = new List<SettlementModel>();
            var prams = new MySqlParameter[3];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("PlusAmountId_", MySqlDbType.Int32, 0, PlusID);
                    prams[1] = db.MakeInParam("MinusAmountId_", MySqlDbType.Int32, 0, MinusID);
                    prams[2] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupname_);
                    table = db.GetDataSet("getSettlementValuesById", prams).Tables[0]; ;

                    if (table != null && table.Rows.Count ==2)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            SettlementModel objClaim = new SettlementModel
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                partnerId_ = (dr["partnerId"]).ToString(),
                                partnername_ = (dr["partnername"]).ToString(),
                                spend_ = (dr["spend"]).ToString(),
                                consumed_ = (dr["consumed"]).ToString(),
                                settlementID_ = (dr["settlementID"]).ToString(),
                                dateofSettlement_ = (dr["dateofSettlement"]).ToString(),
                                groupName_ = (dr["groupName"]).ToString(),
                                settlementBy_ = (dr["settlementBy"]).ToString(),
                                amountStatus_ = (dr["amountStatus"]).ToString(),
                                settlementStatus_ = (dr["settlementStatus"]).ToString(),
                                currentamountStatus_ = (dr["currentamountStatus"]).ToString(),
                                unquieToken_ = (dr["unquieToken"]).ToString(),
                                paymentHistory_ = null,
                            };

                            lstClaims.Add(objClaim);
                        }
                    }
                }
                catch (Exception ex)
                {


                }
            }
            if (lstClaims[0].id_ == MinusID && lstClaims.Count == 2)
                lstClaims.Reverse();
            return lstClaims;
        }

        //GetAll Settlements
        public Object GetAllSettlements(string roomName_,string IDs)
        {
            DataTable table = new DataTable("AllSettlements");
            string responseJson="";
            var prams = new MySqlParameter[2];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {System.Console.WriteLine("###roomName_ "+roomName_);
                    prams[0] = db.MakeInParam("roomname_", MySqlDbType.VarChar, 50, roomName_);
                    prams[1] = db.MakeInParam("opts_", MySqlDbType.VarChar, 100, IDs);
                    table = db.GetDataSet("getAllSettlements", prams).Tables[0];
                    if(table.Rows.Count>0)
                        return table;
                    else
                        return "{MESSAGE:No record found}";  
                }
                catch (Exception ex)
                {
                    System.Console.WriteLine("ggetAllSettlements"+ex.Message);
                 return "{MESSAGE:Internal server error}";  
                }
            }
        }
    }
}