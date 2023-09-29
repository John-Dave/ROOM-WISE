using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiTest.Models
{
    public class LogModel
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public string GroupName { get; set; }
        public string Insertdate { get; set; }
    }
}