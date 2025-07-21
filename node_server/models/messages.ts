

interface BaseMessage {
  author_id: number
  parent_id?: string
  status: "draft" | "sent" | "deleted"
  created_date: Date | string // TODO: 1 type!
  mod_date?: Date | string
  media_ids?: string[]
}
interface FeedItemContent{
  title?: string
  body: string
  sections?: Array<FeedItemContent | Media>
}
export interface Conversation {
  participant_ids: string[]
  last_msg_date: Date
  last_msg_snip: string
  last_msg_seen_by: string[]
}
export interface Message extends BaseMessage{
  content: string
  convo_id: string
  recipient_id?: string
}
export interface FeedItem extends BaseMessage, FeedItemContent {
  topics?: string[]
  tags?: string[]
}
export interface Media extends BaseMessage {
  caption: string
  ext_id?: string
  url?: string
}
