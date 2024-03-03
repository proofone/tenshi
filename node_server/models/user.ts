export interface userPreferences {
    theme: "dark"|"light"|"auto",
}
export interface userDetails {
    follows: {
      user_ids: []
      community_ids: []
      entity_ids: []
    },
}
export interface brahmaUser {
  pk: number
  fields: {
    username: string
    email: string
    hometown: string
  }
}

