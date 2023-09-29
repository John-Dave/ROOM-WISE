using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class SettlementPayment
    {
        public string groupname_ { get; set; }
        public int ref_id_ { get; set; }
        public string to_paypartnerid_ { get; set; }
        public string to_paypartnername_ { get; set; }
        public string to_paycurrentamount_ { get; set; }
        public string amount_ { get; set; }
        public string from_paypartnerid_ { get; set; }
        public string from_paypartnername_ { get; set; }
        public string from_paycurrentamount_ { get; set; }
        public string MinusCurrentAccountStatus_ { get; set; }
        public string PlusCurrentAccountStatus_ { get; set; }
        public int MinusPartnerID_ { get; set; }

        public int SettlementPaymentInsert(SettlementPayment SettleInfo)
        {
            int successFlag = 0;
            //List<LogModel> lstClaims = new List<LogModel>();
            var prams = new MySqlParameter[12];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    DateTime yyyDate;
                    bool isValid = DateTime.TryParse(DateTime.Now.ToString(), out yyyDate);
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, SettleInfo.groupname_);
                    prams[1] = db.MakeInParam("ref_id_", MySqlDbType.Int32, 0, SettleInfo.ref_id_);
                    prams[2] = db.MakeInParam("to_paypartnerid_", MySqlDbType.VarChar, 50, SettleInfo.to_paypartnerid_);
                    prams[3] = db.MakeInParam("to_paypartnername_", MySqlDbType.VarChar, 50, SettleInfo.to_paypartnername_);
                    prams[4] = db.MakeInParam("to_paycurrentamount_", MySqlDbType.VarChar, 50, SettleInfo.to_paycurrentamount_);
                    prams[5] = db.MakeInParam("amount_", MySqlDbType.VarChar, 50, SettleInfo.amount_);
                    prams[6] = db.MakeInParam("from_paypartnerid_", MySqlDbType.VarChar, 50, SettleInfo.from_paypartnerid_);
                    prams[7] = db.MakeInParam("from_paypartnername_", MySqlDbType.VarChar, 50, SettleInfo.from_paypartnername_);
                    prams[8] = db.MakeInParam("from_paycurrentamount_", MySqlDbType.VarChar, 50, SettleInfo.from_paycurrentamount_);
                    prams[9] = db.MakeInParam("MinusCurrentAccountStatus_", MySqlDbType.VarChar, 50, SettleInfo.MinusCurrentAccountStatus_);
                    prams[10] = db.MakeInParam("PlusCurrentAccountStatus_", MySqlDbType.VarChar, 50, SettleInfo.PlusCurrentAccountStatus_);
                    prams[11] = db.MakeInParam("MinusPartnerID_", MySqlDbType.Int32, 0, SettleInfo.MinusPartnerID_);
                    successFlag = db.RunProc("insertsettlementpayment", prams);
                    return successFlag;
                }
                catch (Exception ex)
                {
                    return 0;
                }
            }

        }

       
    }
}