using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class GetSettlementPaymentModel
    {
        public int id_ { get; set; }
        public string groupname_ { get; set; }
        public int ref_id_ { get; set; }
        public string to_paypartnerid_ { get; set; }
        public string to_paypartnername_ { get; set; }
        public string to_paycurrentamount_ { get; set; }
        public string amount_ { get; set; }
        public string paydate_ { get; set; }
        public string from_paypartnerid_ { get; set; }
        public string from_paypartnername_ { get; set; }
        public string from_paycurrentamount_ { get; set; }
        public string unquieToken_ { get; set; }
        public int MinusPartnerID_ { get; set; }

        public List<GetSettlementPaymentModel> GetSettlementPaymentHistoryByID(string GroupName,string uniqueToken, string ID = "0",string DataFlag="All")
        {
            DataTable table = null;
            List<GetSettlementPaymentModel> lstClaims = new List<GetSettlementPaymentModel>();
            var prams = new MySqlParameter[4];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("id_", MySqlDbType.Int32, 0,Convert.ToInt32(ID));
                    prams[1] = db.MakeInParam("groupName_", MySqlDbType.VarChar, 50, GroupName);
                    prams[2] = db.MakeInParam("uniqueToken_", MySqlDbType.VarChar, 50, uniqueToken);
                    prams[3] = db.MakeInParam("DataFlag_", MySqlDbType.VarChar, 50, DataFlag);
                    table = db.GetDataSet("GetSettlementPaymentHistoryByID", prams).Tables[0];

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            GetSettlementPaymentModel objClaim = new GetSettlementPaymentModel
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                groupname_ = (dr["groupname"]).ToString(),
                                ref_id_ = Convert.ToInt32(dr["ref_id"]),
                                to_paypartnerid_ = (dr["to_paypartnerid"]).ToString(),
                                to_paypartnername_ = (dr["to_paypartnername"]).ToString(),
                                to_paycurrentamount_ = (dr["to_paycurrentamount"]).ToString(),
                                amount_ = (dr["amount"]).ToString(),
                                paydate_ = (dr["paydate"]).ToString(),
                                from_paypartnerid_ = (dr["from_paypartnerid"]).ToString(),
                                from_paypartnername_ = (dr["from_paypartnername"]).ToString(),
                                from_paycurrentamount_ = (dr["from_paycurrentamount"]).ToString(),
                                unquieToken_ = (dr["unquieToken"]).ToString(),
                                MinusPartnerID_ = Convert.ToInt32(dr["MinusPartnerID"]),

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


        public List<GetSettlementPaymentModel> GetAllSettlementPaymentHistoryByToken(string GroupName, string uniqueToken)
        {
            DataTable table = null;
            List<GetSettlementPaymentModel> lstClaims = new List<GetSettlementPaymentModel>();
            var prams = new MySqlParameter[2];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupName_", MySqlDbType.VarChar, 50, GroupName);
                    prams[1] = db.MakeInParam("uniqueToken_", MySqlDbType.VarChar, 50, uniqueToken);
                    table = db.GetDataSet("GetAllSettlementPaymentHistoryByToken", prams).Tables[0];

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            GetSettlementPaymentModel objClaim = new GetSettlementPaymentModel
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                groupname_ = (dr["groupname"]).ToString(),
                                ref_id_ = Convert.ToInt32(dr["ref_id"]),
                                to_paypartnerid_ = (dr["to_paypartnerid"]).ToString(),
                                to_paypartnername_ = (dr["to_paypartnername"]).ToString(),
                                to_paycurrentamount_ = (dr["to_paycurrentamount"]).ToString(),
                                amount_ = (dr["amount"]).ToString(),
                                paydate_ = (dr["paydate"]).ToString(),
                                from_paypartnerid_ = (dr["from_paypartnerid"]).ToString(),
                                from_paypartnername_ = (dr["from_paypartnername"]).ToString(),
                                from_paycurrentamount_ = (dr["from_paycurrentamount"]).ToString(),
                                unquieToken_ = (dr["unquieToken"]).ToString(),
                                MinusPartnerID_ = Convert.ToInt32(dr["MinusPartnerID"]),

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
    }
}