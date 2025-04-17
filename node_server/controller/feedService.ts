import { InsertOneResult, WriteError, WriteConcernError } from "mongodb";
import { FeedItem } from "../models/messages";
import { feedColl } from "../mongoDB";
import { posts } from "../tests/newsfeed_test_data"

export type FeedItemCreationParams = Pick<FeedItem, "body" | "created_date">;

export class FeedService {
  public async get(
    mod_ts_gt?: number,
    mod_ts_lt?: number,
    size: number = 50
  ): Promise<FeedItem[]> {
    console.info(`GET request to feeds, start_ts: ${mod_ts_gt}, end_ts: ${mod_ts_lt}`)
    
    const query = {mod_date: {}}

    if (typeof mod_ts_gt === "number" && Number.isInteger(mod_ts_gt)) {
      Object.assign(query.mod_date, {
        $gt: new Date(mod_ts_gt)
      })
    }
    if (typeof mod_ts_lt === "number" && Number.isInteger(mod_ts_lt)) {
      Object.assign(query.mod_date, {
        $lt: new Date(mod_ts_lt)
      })
    }
    return posts
    // const cursor = feedColl.find(query)

    // return cursor.sort('_id', -1).limit(size).toArray()
  }

  public async create(cparams: FeedItemCreationParams): Promise<InsertOneResult<FeedItem>|WriteConcernError|WriteError> {
    let result = await feedColl.insertOne(
      {
        author_id: 1, // TODO: author id by request cookie value
        status: "sent",
        ...cparams,
      }      
    ).catch((err: WriteConcernError | WriteError) => {
      return err
    })
    return result 
  }
}
