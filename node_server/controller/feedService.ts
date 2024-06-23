import { FeedItem } from "../models/messages";
import { feedColl } from "../mongoDB";

export type FeedItemCreationParams = Pick<FeedItem, "content" | "convo_id" | "created_date">;

export class FeedService {
  public async get(id?: number, name?: string): Promise<FeedItem[]> {
    if (id || name) {
      const result = await feedColl.findOne() // TODO: define filter
    }
    return [{
      content: "cont",
      author_id: 1,
      status: "sent",
      created_date: new Date(1712159000000)
    }];
  }

  public create(cparams: FeedItemCreationParams): FeedItem {
    return {
      author_id: 1,
      status: "sent",
      ...cparams,
    };
  }
}
