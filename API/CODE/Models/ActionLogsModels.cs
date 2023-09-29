using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class ActionLogsModels
    {
        public string ActionLogsGroup { get; set; }
        public ActionLogsModels(string groupName)
        {
           CreateLogFile(groupName);
        }
        private void CreateLogFile(string groupName)
        {
            
            try
            {
                this.ActionLogsGroup = groupName;
            }
            catch (Exception ex)
            {
               
            }
        }
       
        public int WriteLog(string Logs)
        {
            int successFlag = 0;
            List<LogModel> lstClaims = new List<LogModel>();
            var prams = new MySqlParameter[3];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    DateTime yyyDate;
                    bool isValid = DateTime.TryParse(DateTime.Now.ToString(), out yyyDate);
                    prams[0] = db.MakeInParam("message_", MySqlDbType.VarChar, 500, Logs);
                    prams[1] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, this.ActionLogsGroup);
                    prams[2] = db.MakeInParam("insertdate_", MySqlDbType.Date, 0, yyyDate);
                    successFlag = db.RunProc("noticeMessageP", prams);
                    return successFlag;
                }
                catch (Exception ex)
                {
                    return 0;
                }
            }

        }
        public List<LogModel> ReadLogs()
        {
            List<LogModel> LogModelObj = new List<LogModel>();
            DataTable table = null;
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, this.ActionLogsGroup);
                    table = db.GetDataSet("getnoticeMessageP", prams).Tables[0];
                    if (table != null && table.Rows.Count > 0)
                    {
                        int indexx = 0;
                        foreach (DataRow dr in table.Rows)
                        {
                            LogModel objClaim = new LogModel
                            {
                                Id = Convert.ToInt32(dr["id"]),
                                Message = (dr["message"]).ToString(),
                                GroupName = (dr["groupname"]).ToString(),
                                Insertdate = (dr["insertdate"]).ToString(),
                            };
                            objClaim.Id = (++indexx);
                            objClaim.Message= objClaim.Message + "   >>     " + objClaim.Insertdate;
                            LogModelObj.Add(objClaim);
                        }
                    }
                }
                catch (Exception ex)
                {


                }
            }
            return LogModelObj;

        }

    }
}