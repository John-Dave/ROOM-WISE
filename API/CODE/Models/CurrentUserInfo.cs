using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Text.RegularExpressions;
using WebApiTest.Data;
using WebApiTest.Security;

namespace WebApiTest.Models
{
    public class CurrentUserInfo
    {
        public int Id { get; set; }
        public string fname { get; set; }
        public string mobile { get; set; }
        public string isActive { get; set; }
        public string lname { get; set; }
        public string email { get; set; }
        public string accounttype { get; set; }
        public string partnerID { get; set; }
        public string ppassword { get; set; }
        public string dateofjoin { get; set; }
        public string roomname { get; set; }

        public CurrentUserInfo(LoginPartner user)
        {
            LoadUser(user);
        }
        private void LoadUser(IDataReader reader)
        {
            this.Id = Convert.ToInt32(reader["Id"]);
            this.fname = (reader["fname"]).ToString();
            this.mobile = (reader["mobile"]).ToString();
            this.isActive = (reader["isActive"]).ToString();
            this.lname = (reader["lname"]).ToString();
            this.email = (reader["email"]).ToString();
            this.accounttype = (reader["accounttype"]).ToString();
            this.partnerID = (reader["partnerID"]).ToString();
            this.ppassword = (reader["ppassword"]).ToString();
            this.dateofjoin = (reader["dateofjoin"]).ToString();
            this.roomname = (reader["roomname"]).ToString();
        }
        private void LoadUser(LoginPartner user)
        {System.Console.WriteLine("##=Password=##  "+user.Password);
        System.Console.WriteLine("##=Mobile=##  "+user.UserIdORMobile);
            IDataReader reader = null;
            try
            {
                using (DbManager db = DbManager.GetDbManager())
                {
                    MySqlParameter[] prams = new MySqlParameter[2];
                    prams[0] = db.MakeInParam("ppassword_", MySqlDbType.VarChar, 50, user.Password);
                    prams[1] = db.MakeInParam("partnerID_", MySqlDbType.VarChar, 50, user.UserIdORMobile);
                    reader = db.GetDataReader("Login_GetLoginDetails", prams);
                    if (reader.Read())
                        LoadUser(reader);
                    else
                        throw new Exception();
                }
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("##=Message=##  "+ex.Message);
                throw new Exception();
            }
            finally
            {
                if (reader != null)
                    reader.Close();
            }
        }
    }
}