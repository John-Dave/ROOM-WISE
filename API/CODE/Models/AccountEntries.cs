using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;


namespace WebApiTest.Models
{
    public class AccountEntries
    {
        public int id_ { get; set; }
        public string partnerId_ { get; set; }
        public string partnerName_ { get; set; }
        public string dateOFInsert_ { get; set; }
        public string dateOfSpend_ { get; set; }
        public string itemName_ { get; set; }
        public string paidby_ { get; set; }
        public string sharedIn_ { get; set; }
        public string totalAmountSpend_ { get; set; }
        public string shareAmount_ { get; set; }
        public string pairToken_ { get; set; }
        public string issettled_ { get; set; }
        public string groupname_ { get; set; }


        public List<AccountEntries> GetAllAccountEntries(string groupName_)
        {
            DataTable table = null;
            List<AccountEntries> lstClaims = new List<AccountEntries>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {//groupname_
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupName_);
                    table = db.GetDataSet("getAccountentries", prams).Tables[0]; ;

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            AccountEntries objClaim = new AccountEntries
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                partnerId_ = (dr["partnerId"]).ToString(),
                                partnerName_ = (dr["partnerName"]).ToString(),
                                dateOFInsert_ = (dr["dateOFInsert"]).ToString(),
                                dateOfSpend_ = (dr["dateOfSpend"]).ToString(),
                                itemName_ = (dr["itemName"]).ToString(),
                                paidby_ = (dr["paidby"]).ToString(),
                                sharedIn_ = (dr["sharedIn"]).ToString(),
                                totalAmountSpend_ = (dr["totalAmountSpend"]).ToString(),
                                shareAmount_ = (dr["shareAmount"]).ToString(),
                                pairToken_ = (dr["pairToken"]).ToString(),
                                issettled_ = (dr["issettled"]).ToString(),
                                groupname_= (dr["groupname"]).ToString(),
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

        public List<AccountEntries> GetAccountEntriesById(string groupName_,int ID=0)
        {
            DataTable table = null;
            List<AccountEntries> lstClaims = new List<AccountEntries>();
            var prams = new MySqlParameter[2];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("Id_", MySqlDbType.Int32, 0, ID);
                    prams[1] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupName_);
                    table = db.GetDataSet("GetAccountEntriesById", prams).Tables[0]; 

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            AccountEntries objClaim = new AccountEntries
                            {
                                id_ = Convert.ToInt32(dr["id"]),
                                partnerId_ = (dr["partnerId"]).ToString(),
                                partnerName_ = (dr["partnerName"]).ToString(),
                                dateOFInsert_ = (dr["dateOFInsert"]).ToString(),
                                dateOfSpend_ = (dr["dateOfSpend"]).ToString(),
                                itemName_ = (dr["itemName"]).ToString(),
                                paidby_ = (dr["paidby"]).ToString(),
                                sharedIn_ = (dr["sharedIn"]).ToString(),
                                totalAmountSpend_ = (dr["totalAmountSpend"]).ToString(),
                                shareAmount_ = (dr["shareAmount"]).ToString(),
                                pairToken_ = (dr["pairToken"]).ToString(),
                                issettled_ = (dr["issettled"]).ToString(),
                                groupname_ = (dr["groupname"]).ToString(),
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