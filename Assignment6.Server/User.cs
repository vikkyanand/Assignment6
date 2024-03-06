// User.cs
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Assignment6.Server.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("FirstName")]
        public string FirstName { get; set; }

        [BsonElement("LastName")]
        public string LastName { get; set; }

        [BsonElement("Address")]
        public string Address { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Location")]
        public string Location { get; set; }
    }
}
