using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class AccountHistoryEntries
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
        public string updateBy_ { get; set; }
        public string updateByID_ { get; set; }
        public int updateRefRecordId_ { get; set; }



        public List<AccountHistoryEntries> GetAccountEntriesHistoryById(string groupname_,int ID = 0)
        {
            DataTable table = null;
            List<AccountHistoryEntries> lstClaims = new List<AccountHistoryEntries>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    List<AccountEntries> AccountEntriesLst = (new AccountEntries()).GetAccountEntriesById(groupname_,ID);
                    if (AccountEntriesLst.Count == 1)
                    {

                        prams[0] = db.MakeInParam("Id_", MySqlDbType.Int32, 0, ID);
                        table = db.GetDataSet("GetAccountEntriesHistoryById", prams).Tables[0];

                        if (table != null && table.Rows.Count > 0)
                        {
                            AccountHistoryEntries objClaim1 = new AccountHistoryEntries
                            {
                                id_ = AccountEntriesLst[0].id_,
                                partnerId_ = AccountEntriesLst[0].partnerId_,
                                partnerName_ = AccountEntriesLst[0].partnerName_,
                                dateOFInsert_ = AccountEntriesLst[0].dateOFInsert_,
                                dateOfSpend_ = AccountEntriesLst[0].dateOfSpend_,
                                itemName_ = AccountEntriesLst[0].itemName_,
                                paidby_ = AccountEntriesLst[0].paidby_,
                                sharedIn_ = AccountEntriesLst[0].sharedIn_,
                                totalAmountSpend_ = AccountEntriesLst[0].totalAmountSpend_,
                                shareAmount_ = AccountEntriesLst[0].shareAmount_,
                                pairToken_ = AccountEntriesLst[0].pairToken_,
                                issettled_ = AccountEntriesLst[0].issettled_,
                                updateBy_ = "",
                                updateByID_ = "",
                                updateRefRecordId_ = 0,
                            };

                            lstClaims.Add(objClaim1);
                            foreach (DataRow dr in table.Rows)
                            {
                                AccountHistoryEntries objClaim = new AccountHistoryEntries
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
                                    updateBy_ = (dr["updateBy"]).ToString(),
                                    updateByID_ = (dr["updateBy"]).ToString(),
                                    updateRefRecordId_ = Convert.ToInt32(dr["updateRefRecordId"]),
                                };

                                lstClaims.Add(objClaim);
                            }
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