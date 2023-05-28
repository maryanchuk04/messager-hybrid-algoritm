using Messenger.Domain.Enums;

namespace Messenger.Core.Models;

public class RoomDto
{
    public Guid Id { get; set; }

    public List<UserDto> Users { get; set; }

    public TypeEncryption TypeEncryption { get; set; }

    public List<MessageDto>? Messages { get; set; } = new ();
}