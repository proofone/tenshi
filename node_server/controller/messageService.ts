import { WithId } from "mongodb";
import { Message } from "../models/messages";
import { messagesColl } from "../mongoDB";

export type MessageCreationParams = Pick<Message, "content" | "convo_id" | "created_date">;

export class MessageService {
  public async get(id?: number, name?: string): Promise<Message[]> {
    let result: Message | Message[] | PromiseLike<Message[]> | null
    
    if (id || name) {
      result = await messagesColl.findOne<Message>({id: id, name: name}) // TODO: define filter
    }
    else {
      const cursor = messagesColl.find() // TODO: params!
      result = cursor.toArray()
    }
    
    return result
    /* dummy message array:
     [{
      convo_id: "1",
      content: "cont",
      author_id: 1,
      status: "sent",
      created_date: new Date(1712159000000)
    }];
    */
  }

  public create(cparams: MessageCreationParams): Message {
    return {
      author_id: 1,
      status: "sent",
      ...cparams,
    };
  }
}
