using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiWebApplication.Controllers
{
    [ApiController]  
    [Route("api/[controller]/[action]")]
    public class GameController : ControllerBase
    {
        public string Get()
        {
            return "/Game1/Index.html";
        }

    }
}
