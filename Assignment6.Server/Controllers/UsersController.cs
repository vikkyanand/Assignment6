using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MongoDB.Driver;
using Assignment6.Server.Models;

namespace Assignment6.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;

        public UsersController(IMongoDatabase database)
        {
            _users = database.GetCollection<User>("Users");
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            var users = _users.Find(user => true).ToList();
            return Ok(users);
        }

        [HttpGet("{id:length(24)}", Name = "GetUser")]
        public ActionResult<User> Get(string id)
        {
            var user = _users.Find<User>(user => user.Id == id).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> Create(User user)
        {
            _users.InsertOne(user);
            return CreatedAtRoute("GetUser", new { id = user.Id }, user);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, User userIn)
        {
            var user = _users.Find<User>(user => user.Id == id).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            _users.ReplaceOne(user => user.Id == id, userIn);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var user = _users.Find<User>(user => user.Id == id).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            _users.DeleteOne(user => user.Id == id);
            return NoContent();
        }
    }
}
