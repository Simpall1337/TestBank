using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using TestOmegaDevelopment.DBconnect;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using TestOmegaDevelopment.Models;

namespace TestOmegaDevelopment.Controllers
{
	[ApiController]
	[Route("login")]
	public class UserLoginingcs : Controller
    {
		[HttpPost("login")]
		public IActionResult login(client cl)
		{
			using (OmegaDevelopmentContext db = new OmegaDevelopmentContext())
			{
                var users = db.Userdata.ToList();

                foreach (var user in users)
				{
                    if (user.Userlogin == cl.Userlogin && user.Pin == cl.Pin)
                    {
                       
                        return Ok();
                    }
                }
                
                return BadRequest();
            }
		}

        



    }



}
