using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiTest.ResponseModels
{
    public class JSONresponseModel
    {
        public string Message { set; get; }
        public bool Status { set; get; }
        public List<object> ResponseData { set; get; }
    }
}