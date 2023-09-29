using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace WebApiTest.Models
{
    public class ResponseModel
    {
        public ResponseModel()
        {
            this.Logs = "";
            this.ShowAllEntry = "";
            this.DashboardData = "";
            this.SettlementTickets = "";
            this.getGetAllAccountHistory = "";
           
        }

            public string Message { set; get; }
            public bool Status { set; get; }
            public List<object> ResponseData { set; get; }
            public object Data { set; get; }
            public object Logs { set; get; }
            public object ShowAllEntry { set; get; }
            public object DashboardData { set; get; }
            public object SettlementTickets { set; get; }
            public object getGetAllAccountHistory { set; get; }

    }
}