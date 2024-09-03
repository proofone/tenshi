import { FeedItem } from "../models/messages";
import { feedColl } from "../mongoDB";

export type FeedItemCreationParams = Pick<FeedItem, "body" | "created_date">;

export class FeedService {
  public async get(id?: number, name?: string): Promise<FeedItem[]> {
    let result: FeedItem[] | PromiseLike<FeedItem[]> | FeedItem | null
    console.log(`Get request to feeds, id: ${id}, name: ${name}`)
    
    if (id || name) {
      result = await feedColl.findOne() // TODO: define filter
    }
    else {
      const cursor = feedColl.find({}) // TODO: params!
      result = cursor.toArray()
    }

    return result
  }

  public async create(cparams: FeedItemCreationParams): Promise<FeedItem> {
    let result = await feedColl.insertOne(
      {
        author_id: 1, // TODO: author id by request cookie value
        status: "sent",
        ...cparams,
      }      
    ).catch(err => {
      result = err
    })
    return result 
  }
}
