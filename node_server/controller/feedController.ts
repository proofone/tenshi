import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { FeedItem } from "../models/messages";
import { FeedItemCreationParams, FeedService } from "./feedService";


@Route("posts")
export class FeedItemController extends Controller {
    @Get()
    public async getFeedItems(

        ): Promise<FeedItem[]> {
        return new FeedService().get();
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createFeedItem(
        @Body() requestBody: FeedItemCreationParams
    ): Promise<any> {
        this.setStatus(201); // set return status 201
        return new FeedService().create(requestBody);
    }
}
