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
    public class SettleModel
    {
        public string settlementBy_ { get; set; }
        public string groupName_ { get; set; }
        public string settlementStatus_ { get; set; }
        public int Settlement(SettleModel SettleInfo)
        {
            int successFlag = 0;
            List<LogModel> lstClaims = new List<LogModel>();
            var prams = new MySqlParameter[4];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    DateTime yyyDate;
                    bool isValid = DateTime.TryParse(DateTime.Now.ToString(), out yyyDate);
                    prams[0] = db.MakeInParam("settlementBy_", MySqlDbType.VarChar, 50, SettleInfo.settlementBy_);
                    prams[1] = db.MakeInParam("groupName_", MySqlDbType.VarChar, 50, SettleInfo.groupName_);
                    prams[2] = db.MakeInParam("settlementStatus_", MySqlDbType.VarChar, 50, SettleInfo.settlementStatus_);
                    prams[3] = db.MakeInParam("unquieToken_", MySqlDbType.VarChar, 200, System.Guid.NewGuid().ToString());
                    successFlag = db.RunProc("InsertSettlementValue", prams);
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