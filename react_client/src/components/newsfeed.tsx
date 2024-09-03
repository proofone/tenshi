import React, { SyntheticEvent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FeedItem } from "../../../node_server/models/messages";
import { useGetFeedItemQuery, useCreateFeedItemMutation, CreateFeedItemApiArg } from "../redux/openapiStore";
import { LoadingSpinner } from "./misc";


export const NewsFeedPostForm = (loading: boolean) => {
    const [addPost, { isLoading: isUpdating }] = useCreateFeedItemMutation()

    function handleSubmit(e: SyntheticEvent) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        
        // Compose data object for the new post
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        formData.append('created_date', new Date().toISOString());
        const formJson = Object.fromEntries(formData) as CreateFeedItemApiArg;
  
        addPost({pickFeedItemBodyOrCreatedDate: formJson})
    }
    return [
        <Form id='newsfeedpostform' className="my-2" onSubmit={handleSubmit} method='POST'>
            <Form.Label visuallyHidden={true}>Posztod szövege</Form.Label>
            <Form.Control name="body" id="postbody" as="textarea" placeholder="Posztod szövege">
            </Form.Control>

            <Button variant="primary" type="submit" disabled={loading||isUpdating}>Submit</Button>
        </Form>
    ]
}

export const FeedItemEl = ({ body, author_id, created_date }: FeedItem) => {
    let postHeader = `User ${author_id}`
    let PostFooter = () => {
        return <div className="d-flex justify-content-between">
            <span>{created_date.toLocaleString()}</span>
            <Button variant="outline-primary m-1" size='sm'>Comment</Button>
        </div>
    }
    return <Card className={"newsfeed-post"}>
        <Card.Header>{postHeader}</Card.Header>
        <Card.Body>
        {body}
        </Card.Body>
        <PostFooter />
    </Card>
}

export const NewsFeed = () => {
    const {
        data: posts, isLoading, isSuccess, isError, error
      } = useGetFeedItemQuery()
    let content = [<LoadingSpinner />]

    console.log(`Posts: ${posts?.length}, loading: ${isLoading}, success: ${isSuccess}`)
    
    if (isSuccess) {
        content = posts.map((pprops: FeedItem, i) => <FeedItemEl key={i} {...pprops}></FeedItemEl>)
    } else if (isError) {
        content = [<div className="text-danger">{error.error}</div>]
        console.log(error)
    }

    return <><NewsFeedPostForm loading={isLoading}></NewsFeedPostForm>{content}
    </>
}
