using AutoMapper;
using Messenger.Core.Models;
using Messenger.Domain.Entities;
using Messenger.Domain.Models;

namespace Messenger.Backend.Mapping;

public class MessagesMapper : Profile
{
    public MessagesMapper()
    {
        CreateMap<Message, MessageDto>();
        CreateMap<Message, MessagePreviewDto>();
    }
}