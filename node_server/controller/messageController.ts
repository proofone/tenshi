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
import { Message } from "../models/messages";
import { MessageService, MessageCreationParams } from "./messageService";


@Route("messages")
export class MessageController extends Controller {
    
    @Get()
    public async getMessage(

        ): Promise<Message | Message[] | null> {
        return new MessageService().get();
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createMessage(
        @Body() requestBody: MessageCreationParams
    ): Promise<Message> {
        this.setStatus(201); // set return status 201
        return new MessageService().create(requestBody);
    }
}
