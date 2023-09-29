//﻿using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;

﻿using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiTest.Models;
using WebApiTest.ResponseModels;
//using System.Web.Http.Cors;
using System.Web;
//using System.ServiceModel.Channels;
//using System.Web.Security;
//using ScrapingHelp;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;


namespace WebApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "swale--Hello", "value2" };
        }

        // GET api/values/5
       [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
       {
            return "value";
       }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
	
	[HttpGet]
	[Route("Show")]
	 public dynamic show()
        {

            ResponseModel _objResponseModel = new ResponseModel();
            //TokenModel AuthObj = new TokenModel();
            try
            {
              
                    _objResponseModel.Data = (new AccountEntries()).GetAllAccountEntries("aligarh");
                    _objResponseModel.Status = true;
                    _objResponseModel.Message = "Data Received successfully";
                  return  Ok(_objResponseModel);
                     //return Request.CreateResponse<ResponseModel>(HttpStatusCode.OK, _objResponseModel);
             
            }
            catch (Exception ex)
            {
                _objResponseModel.Data = "";
                _objResponseModel.Status = false;
                _objResponseModel.Message = "Unauthorized USER";
              return  Ok(_objResponseModel);
                //return Request.CreateResponse<ResponseModel>(HttpStatusCode.NotFound, _objResponseModel);
            }

        }
    }
}
