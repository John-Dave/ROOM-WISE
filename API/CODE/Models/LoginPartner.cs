using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class LoginPartner
    {
        public string UserIdORMobile { get; set; }
        public string Password { get; set; }

        public List<AddPartner> LoginF(LoginPartner LoginDetail)
        {
            DataTable table = null;
            List<AddPartner> lstClaims = new List<AddPartner>();
            var prams = new MySqlParameter[2];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    prams[0] = db.MakeInParam("ppassword_", MySqlDbType.VarChar, 50, LoginDetail.Password);
                    prams[1] = db.MakeInParam("partnerID_", MySqlDbType.VarChar, 50, LoginDetail.UserIdORMobile);
                    table = db.GetDataSet("Login_GetLoginDetails", prams).Tables[0]; 

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
                                ppassword = (dr["ppassword"]).ToString(),
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
			AddPartner objClaim11 = new AddPartner
                            {
                                Id = 1,
                                mobile = "",
                                fname = "",
                                lname = "",
                                email = "",
                                accounttype = "",
                                partnerID = "",
                                ppassword = "",
                                dateofjoin = "",
                                roomname = ex.Message.ToString(),
                                isActive = "",

                            };
			lstClaims.Add(objClaim11);

                }
            }
            return lstClaims;
        }

       

    }
}
