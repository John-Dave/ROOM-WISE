using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiTest.Models
{
    public class SettlementPaymentPostData
    {
        public int Plus_ID { get; set; }
        public int Minus_ID { get; set; }
        public int Amount { get; set; }

        public bool InsertSettlementPAYMENT(SettlementPaymentPostData obj, string groupName)
        {
            try
            {
                List<SettlementModel> lst = (new SettlementModel()).GetSettlementById(obj.Plus_ID, obj.Minus_ID, groupName);

                if ((!obj.Amount.ToString().Contains("-")) && lst.Count == 2 && obj.Amount <= Convert.ToInt32(lst[1].currentamountStatus_.Replace("-", "")) && obj.Amount <= Convert.ToInt32(lst[0].currentamountStatus_.Replace("-", "")) && obj.Amount != 0)
                {
                    int MinusCurrentAccountStatus = (Convert.ToInt32(lst[1].currentamountStatus_) + obj.Amount);
                    int PlusCurrentAccountStatus = (Convert.ToInt32(lst[0].currentamountStatus_) - obj.Amount);
                    SettlementPayment PaymentOBJ = new SettlementPayment();
                    PaymentOBJ.groupname_ = lst[0].groupName_;
                    PaymentOBJ.ref_id_ = lst[0].id_;
                    PaymentOBJ.to_paypartnerid_ = lst[0].partnerId_;
                    PaymentOBJ.to_paypartnername_ = lst[0].partnername_;
                    PaymentOBJ.to_paycurrentamount_ = lst[0].currentamountStatus_;
                    PaymentOBJ.from_paypartnerid_ = lst[1].partnerId_;
                    PaymentOBJ.from_paypartnername_ = lst[1].partnername_;
                    PaymentOBJ.from_paycurrentamount_ = lst[1].currentamountStatus_;
                    PaymentOBJ.amount_ = obj.Amount.ToString();
                    PaymentOBJ.MinusCurrentAccountStatus_ = MinusCurrentAccountStatus.ToString();
                    PaymentOBJ.PlusCurrentAccountStatus_ = PlusCurrentAccountStatus.ToString();
                    PaymentOBJ.MinusPartnerID_ = lst[1].id_;
                    var tt = (new SettlementPayment()).SettlementPaymentInsert(PaymentOBJ);
                    string LogText = lst[0].partnername_+ "Borrow Rs."+ obj.Amount.ToString()+" From "+ lst[1].partnername_;
                    ActionLogsModels oo = new ActionLogsModels(groupName);
                    oo.WriteLog(LogText);
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch(Exception ex)
            {
                return false;
            }
        }
    }
}