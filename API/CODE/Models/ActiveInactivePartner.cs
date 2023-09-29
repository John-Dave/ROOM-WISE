using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class ActiveInactivePartner
    {
        public int ID { get; set; }
        public string flag { get; set; }
        public bool SetActiveInactive(ActiveInactivePartner PartnerStatus)
        {
            int successFlag = 0;
            var prams = new MySqlParameter[2];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("Id_", MySqlDbType.Int32, 0, PartnerStatus.ID);
                    prams[1] = db.MakeInParam("IsActive_", MySqlDbType.VarChar, 50, PartnerStatus.flag.ToLower());
                    successFlag = db.RunProc("SetActiveInactive", prams);
                    if (successFlag > 0)
                        return true;
                    else
                        return false;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
            
        }
    }
}