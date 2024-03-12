
export interface localityArea {
  point: {
    type: "Point"
    coordinates: [number, number]
  }
  radius: number
}

export interface userPreferences {
  search_area: localityArea
  
  follows: {
    topic_ids: []
    user_ids: []
    community_ids: []
    entity_ids: []
  }
  
  contactability: {
    from: localityArea
    by: {
      comms: Boolean 
      users: Boolean
      otherents: Boolean 
    }
    not_by: {
      user_ids: []
    }
  }

  theme: "dark" | "light" | "auto"

  privacy_consents: Object[]
}

export interface brahmaUser {
  pk: number
  fields: {
    username: string
    email: string
    hometown: string
  }
}

