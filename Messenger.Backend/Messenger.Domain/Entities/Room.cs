namespace Messenger.Core.Entities;

public class Room : Entity
{
    public ICollection<Message> Messages { get; set; }

    public ICollection<UserRoom> UserRooms { get; set; }
}