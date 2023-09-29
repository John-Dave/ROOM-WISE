using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

using System.IO;
using System.Drawing;
using System.Drawing.Imaging;


namespace WebApiTest.Models
{
    public class AddPartner
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
        //Id,fname mobile,isActive,lname,email,accounttype,partnerID,ppassword,dateofjoin

        public List<AddPartner> GetAllPartners(string groupname_)
        {
            DataTable table = null;
            List<AddPartner> lstClaims = new List<AddPartner>();
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, groupname_);
                    table = db.GetDataSet("GetAllPartners", prams).Tables[0]; ;

                    if (table != null && table.Rows.Count > 0)
                    {
                        foreach (DataRow dr in table.Rows)
                        {
                            AddPartner objClaim = new AddPartner
                            {
                                Id = Convert.ToInt32(dr["id"]),
                                mobile = (dr["mobile"]).ToString(),
                                fname = (dr["fname"]).ToString(),
                                lname = (dr["lname"]).ToString(),
                                email = (dr["email"]).ToString(),
                                accounttype = (dr["accounttype"]).ToString(),
                                partnerID = (dr["partnerID"]).ToString(),
                                ppassword = WebApiTest.Security.Encryption.Encrypt((dr["ppassword"]).ToString()),
                                dateofjoin = (dr["dateofjoin"]).ToString(),
                                roomname = (dr["roomname"]).ToString(),
                                isActive = (dr["isActive"]).ToString(),

                            };//Id,fname mobile,isActive,lname,email,accounttype,partnerID,ppassword,dateofjoin,roomname

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
		public bool saveUserImage(string data,string usrID)
		{
			 //
   		try{
				var base64string =data.Replace("data:image/png;base64,", String.Empty);
				var base64array = Convert.FromBase64String(base64string);
				var filePath = Environment.GetEnvironmentVariable("PROFILE_PIC_PATH")+usrID+".png";
				System.IO.File.WriteAllBytes(filePath, base64array);
				//FileStream fs = new FileStream(filePath,FileMode.Open, FileAccess.Read, FileShare.Read);
				return true;
			}
			catch(Exception ex)
			{
				System.Console.WriteLine("####  --# "+ex.Message);
				return false;
			}
		}

        public string AddRoomPartners(AddPartner Partner)
        {
            //Id,fname mobile,isActive,lname,email,accounttype,partnerID,ppassword,dateofjoin,roomname
            string NewInsertedID = "";
            DataTable GetPartnerIDD = null;
            List<AddPartner> lstClaims = new List<AddPartner>();
            var prams = new MySqlParameter[11];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("fname_", MySqlDbType.VarChar, 50, Partner.fname);
                    prams[1] = db.MakeInParam("mobile_", MySqlDbType.VarChar, 50, Partner.mobile);
                    prams[2] = db.MakeInParam("isActive_", MySqlDbType.VarChar, 50, Partner.isActive);
                    prams[3] = db.MakeInParam("lname_", MySqlDbType.VarChar,50, Partner.lname);
                    prams[4] = db.MakeInParam("email_", MySqlDbType.VarChar, 50,Partner.email);
                    prams[5] = db.MakeInParam("accounttype_", MySqlDbType.VarChar, 50, Partner.accounttype);
                    prams[6] = db.MakeInParam("ppassword_", MySqlDbType.VarChar, 50, Partner.ppassword);
                    prams[7] = db.MakeInParam("dateofjoin_", MySqlDbType.VarChar, 50, DateTime.Now.ToShortDateString());
                    prams[8] = db.MakeInParam("roomname_", MySqlDbType.VarChar, 50, Partner.roomname);
                    prams[9] = db.MakeInParam("Id_", MySqlDbType.Int32, 50, Partner.Id);
                    prams[10] = db.MakeInParam("partnerID_", MySqlDbType.VarChar, 50, Partner.partnerID);
                    GetPartnerIDD= db.GetDataSet("AddPartnerInfo", prams).Tables[0];
                    NewInsertedID = GetPartnerIDD.Rows[0]["partnerID"].ToString();
                    return NewInsertedID;

                }
                catch (Exception ex)
                {
                    return NewInsertedID;
                }
            }
            
        }

        //SearchAdmin
        public DataTable SEARCH_ADMIN(string mobile_)
        {
            DataTable table = new DataTable("Search_Results");
            string responseJson="";
            var prams = new MySqlParameter[1];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("mobile_", MySqlDbType.VarChar, 50, mobile_);
                    table = db.GetDataSet("searchAdmin", prams).Tables[0]; ;
                   // responseJson= DataTableToJson(table);
                   return table;
                }
                catch (Exception ex)
                {
                 return table;  
                }
            }
           
        }
        public string DataTableToJson(DataTable table)
        {
            string JSONString = string.Empty;
           // JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
 
    }
}
