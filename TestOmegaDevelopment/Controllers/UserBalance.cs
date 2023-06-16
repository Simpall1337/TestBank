using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using TestOmegaDevelopment.DBconnect;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using TestOmegaDevelopment.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TestOmegaDevelopment.Controllers
{

    [ApiController]
    [Route("balance")]
    public class UserBalance : Controller
    {
        [HttpPost("balance")]
        public IActionResult balance(client cl)
        {
            using (OmegaDevelopmentContext db = new OmegaDevelopmentContext())
            {
                var users = db.Userdata.ToList();
               
                foreach (var user in users)
                {
                    if (user.Userlogin == cl.Userlogin)
                    {
                        var data = new { balance = user.Balance };

                        string json = JsonConvert.SerializeObject(data);

                        return Content(json, "application/json");
                    }
                }

                return BadRequest();
            }
        }
    }
}
