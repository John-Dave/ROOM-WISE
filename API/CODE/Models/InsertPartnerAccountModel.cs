using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using WebApiTest.Data;

namespace WebApiTest.Models
{
    public class InsertPartnerAccountModel
    {
        public int id_ { get; set; }
        public string partnerId_ { get; set; }
        public string partnerName_ { get; set; }
        public DateTime? dateOFInsert_ { get; set; }
        public string dateOfSpend_ { get; set; }
        public string itemName_ { get; set; }
        public string paidby_ { get; set; }
        public string sharedIn_ { get; set; }
        public string totalAmountSpend_ { get; set; }
        public string shareAmount_ { get; set; }
        public string pairToken_ { get; set; }
        public string issettled_ { get; set; }
        public string groupname_ { get; set; }





        public void DividePartners(InsertPartnerAccountModel PartnerAccount)
        {
            string PairID = System.Guid.NewGuid().ToString();
            int AmountDivideBy = 1;
            if (PartnerAccount.sharedIn_.Contains(','))
                AmountDivideBy = PartnerAccount.sharedIn_.Split(',').Length;
            List<InsertPartnerAccountModel> lstClaims = new List<InsertPartnerAccountModel>();
            if (PartnerAccount.paidby_.Contains(','))
            {
                //string[] TempArr1 = PartnerAccount.partnerId_.Split(',');
                string[] TempArr2 = PartnerAccount.partnerName_.Split(',');
                string[] TempArr3 = PartnerAccount.paidby_.Split(',');
                string[] TempArr4 = PartnerAccount.totalAmountSpend_.Split(',');
                for (int z = 0; z < TempArr3.Length; z++)
                {


                    InsertPartnerAccountModel objPaccount = new InsertPartnerAccountModel
                    {
                        id_ = PartnerAccount.id_,
                        partnerId_ = PartnerAccount.partnerId_,
                        partnerName_ = TempArr2[z].Trim(),
                        dateOFInsert_ = DateTime.Now.Date,
                        dateOfSpend_ =  PartnerAccount.dateOfSpend_,
                        itemName_ = PartnerAccount.itemName_,
                        paidby_ = TempArr3[z].Trim(),
                        sharedIn_ = PartnerAccount.sharedIn_,
                        totalAmountSpend_ =TempArr4[z].Trim(),
                        shareAmount_ =(Convert.ToDouble( TempArr4[z].Trim())/ AmountDivideBy).ToString("0.00"),
                        pairToken_ = PairID,
                        issettled_="0",
                        groupname_= PartnerAccount.groupname_,
                    };

                    lstClaims.Add(objPaccount);
                }
            }
            else
            {
                InsertPartnerAccountModel objPaccount = new InsertPartnerAccountModel
                {
                    id_ = PartnerAccount.id_,
                    partnerId_ = PartnerAccount.partnerId_,
                    partnerName_ = PartnerAccount.partnerName_,
                    dateOFInsert_ = DateTime.Now.Date,
                    dateOfSpend_ = PartnerAccount.dateOfSpend_,
                    itemName_ = PartnerAccount.itemName_,
                    paidby_ = PartnerAccount.paidby_,
                    sharedIn_ = PartnerAccount.sharedIn_,
                    totalAmountSpend_ = PartnerAccount.totalAmountSpend_,
                    shareAmount_ = (Convert.ToDouble(PartnerAccount.totalAmountSpend_.Trim()) / AmountDivideBy).ToString("0.00"),
                    pairToken_ = PairID,
                    issettled_ = "0",
                    groupname_ = PartnerAccount.groupname_,
                };
                lstClaims.Add(objPaccount);
            }

            foreach (InsertPartnerAccountModel item in lstClaims)
            {
                int g = AddPartnerAccount(item);
            }
        }
        
        public int AddPartnerAccount(InsertPartnerAccountModel PartnerAccount)
        {
            int successFlag =0;
            List<AddPartner> lstClaims = new List<AddPartner>();
            var prams = new MySqlParameter[12];
            using (DbManager db = DbManager.GetDbManager())
            {
                try
                {
                    DateTime yyyDate;
                    bool isValid = DateTime.TryParse( PartnerAccount.dateOfSpend_, out yyyDate);
                    prams[0] = db.MakeInParam("partnerId_", MySqlDbType.VarChar, 50, PartnerAccount.partnerId_);
                    prams[1] = db.MakeInParam("partnerName_", MySqlDbType.VarChar, 50, PartnerAccount.partnerName_);
                    prams[2] = db.MakeInParam("dateOfSpend_", MySqlDbType.Date, 0, yyyDate);
                    prams[3] = db.MakeInParam("itemName_", MySqlDbType.VarChar, 50, PartnerAccount.itemName_);
                    prams[4] = db.MakeInParam("paidby_", MySqlDbType.VarChar, 50, PartnerAccount.paidby_);
                    prams[5] = db.MakeInParam("sharedIn_", MySqlDbType.VarChar, 500, PartnerAccount.sharedIn_);
                    prams[6] = db.MakeInParam("totalAmountSpend_", MySqlDbType.VarChar, 50, PartnerAccount.totalAmountSpend_);
                    prams[7] = db.MakeInParam("shareAmount_", MySqlDbType.VarChar, 50, PartnerAccount.shareAmount_);
                    prams[8] = db.MakeInParam("pairToken_", MySqlDbType.VarChar, 50, PartnerAccount.pairToken_);
                    prams[9] = db.MakeInParam("issettled_", MySqlDbType.VarChar, 50, PartnerAccount.issettled_);
                    prams[10] = db.MakeInParam("groupname_", MySqlDbType.VarChar, 50, PartnerAccount.groupname_);
                    prams[11] = db.MakeInParam("id_", MySqlDbType.Int32, 0, PartnerAccount.id_);
                    successFlag = db.RunProc("insert_accountrecord", prams);
                    return successFlag;
                }
                catch (Exception ex)
                {
                    System.Console.WriteLine("AddItem"+ex.Message);
                    return 0;
                }
            }

        }
    }
}