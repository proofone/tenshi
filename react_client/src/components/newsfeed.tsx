import React, { SyntheticEvent } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Post } from "../../../node_server/models/messages";
import { useGetPostsQuery } from "../redux/api";
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

export const FeedItem = ({ body, author_id, created_date }: Post) => {
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
      } = useGetPostsQuery('')
    let content = [<LoadingSpinner />]

    if (isSuccess) {
        content = posts.map(pprops => <FeedItem {...pprops}></FeedItem>)
    } else if (isError) {
        content = [<div className="text-danger">{error.toString()}</div>]
        console.log(error)
    }

    return <><NewsFeedPostForm></NewsFeedPostForm>{content}
    </>
}
