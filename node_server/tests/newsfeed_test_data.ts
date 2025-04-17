import { FeedItem } from "../models/messages.js";

export const posts: FeedItem[] = [{  //demo feed data!
  author_id: 1,
  title: 'HalihóÓ',
  status: "sent",
  created_date: new Date('2025-04-16T12:30:34.565Z'),  
  body: 'Ez az első poszt',
},
{
  author_id: 1,
  body: 'Lorem ipsum',
  status: "sent",
  created_date: new Date('2025-04-15T12:30:34.565Z'),  
},
{
  author_id: 2,
  title: "Lorem",
  body: "Lorem Ipsum is simply dummy <a href='#'>text</a> of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  status: "sent",
  created_date: new Date('2025-04-14T12:30:34.565Z'),  
},
]
