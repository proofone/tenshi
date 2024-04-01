/**
 * @param {object} point - coordinates in MongoDB format: [lon, lat]
 */
export interface localityArea {
  point: {
    type: "Point"
    coordinates: [number, number]
  }
  radius: number
}

export interface userPreferences {
  search_area: localityArea
  
  follows?: {
    topic_ids?: string[]
    user_ids?: number[]
    community_ids: number[]
    entity_ids: number[]
  }
  
  contactability?: {
    from?: localityArea
    by?: {
      comms: Boolean 
      users: Boolean
      otherents: Boolean 
    }
    not_by?: {
      user_ids: number[]
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

export interface brahmaCommunity {
  pk: number
  fields: {
    members?: number[]
    hometown: string
  }
}

