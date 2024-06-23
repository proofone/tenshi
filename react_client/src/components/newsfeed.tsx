import React, { SyntheticEvent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FeedItem } from "../../../node_server/models/messages";
import { useGetMessageQuery, useCreateMessageMutation } from "../redux/openapiStore";
import { LoadingSpinner } from "./misc";


export const NewsFeedPostForm = () => {
    function handleSubmit(e: SyntheticEvent) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    }
    return [
        <Form id='newsfeedpostform' className="my-2" onSubmit={handleSubmit} method='POST'>
            <Form.Label visuallyHidden={true}>Posztod szövege</Form.Label>
            <Form.Control name="text" id="posttext" as="textarea" placeholder="Posztod szövege">
            </Form.Control>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    ]
}

export const FeedItemEl = ({ body, author_id, created_date }: FeedItem) => {
    let postHeader, postFooter = ""
    postFooter = created_date.toLocaleString()
    return <Card className={"newsfeed-post"}>
    <Card.Header>{postHeader}</Card.Header>
    <Card.Body>
      {body}
    </Card.Body>
    {postFooter}
  </Card>

}

export const NewsFeed = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetMessageQuery()
    let content = [<LoadingSpinner />]

    if (isSuccess) {
        content = posts.map(pprops => <FeedItemEl {...pprops}></FeedItemEl>)
    } else if (isError) {
        content = [<div className="text-danger">{error.toString()}</div>]
        console.log(error)
    }

    return <><NewsFeedPostForm></NewsFeedPostForm>{content}
    </>
}
