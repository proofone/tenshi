import { FeedItem } from "../models/messages";
import { feedColl } from "../mongoDB";

export type FeedItemCreationParams = Pick<FeedItem, "body" | "created_date">;

export class FeedService {
  public async get(id?: number, name?: string): Promise<FeedItem[]> {
    let result: FeedItem[] | PromiseLike<FeedItem[]>
    if (id || name) {
      const result = await feedColl.findOne() // TODO: define filter
    }
    else {
      const cursor = feedColl.find() // TODO: params!
      result = cursor.toArray()
    }
    return result
  }

  public create(cparams: FeedItemCreationParams): FeedItem {
    return {
      author_id: 1,
      status: "sent",
      ...cparams,
    };
  }
}
