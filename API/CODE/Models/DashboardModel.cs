using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class DashboardModel
    {
        public string partnerName_ { get; set; }
        public string spendAmount_ { get; set; }
        public string consumeAmount_ { get; set; }
        public string TotalAmountStatus_ { get; set; }


        public List<DashboardModel> GetDashboardValue(string groupname_)
        {
            DataTable table = null;
            List<DashboardModel> lstClaims = new List<DashboardModel>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupname_);
                    table = db.GetDataSet("getDashboardValue", prams).Tables[0]; ;

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            DashboardModel objClaim = new DashboardModel
                            {
                                partnerName_ = (dr["partnerName"]).ToString(),
                                spendAmount_ = (dr["spendAmount"]).ToString(),
                                consumeAmount_ = (dr["consumeAmount"]).ToString(),
                                TotalAmountStatus_ = (dr["TotalAmountStatus"]).ToString(),
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

        public List<DashboardModel> getGetAllAccountHistory(string groupname_)
        {
            DataTable table = null;
            List<DashboardModel> lstClaims = new List<DashboardModel>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupname_);
                    table = db.GetDataSet("getGetAllAccountHistory", prams).Tables[0]; ;

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            DashboardModel objClaim = new DashboardModel
                            {
                                partnerName_ = (dr["partnerName"]).ToString(),
                                spendAmount_ = (dr["spendAmount"]).ToString(),
                                consumeAmount_ = (dr["consumeAmount"]).ToString(),
                                TotalAmountStatus_ = (dr["TotalAmountStatus"]).ToString(),
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