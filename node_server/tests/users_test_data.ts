import { brahmaCommunity, brahmaUser, userPreferences } from "../models/user";


export const testUserPrefs: userPreferences = {
    search_area: {
        point: {
            type: "Point",
            coordinates: [19.1119, 47.419]
          },
        radius: 1000                
    },
  
    follows: {
      topic_ids: ["food", "nature"],
      user_ids: [2, 3],
      community_ids: [],
      entity_ids: []
    },
    
    contactability: {
      by: {
        comms: false,
        users: true,
        otherents: false 
      },
      not_by: {
        user_ids: [4]
      }
    },
  
    theme: "auto",

    privacy_consents: [{necessary: true}],
  
}

export const testUsers = [
    {
        "model": "entities.user",
        "pk": 10,
        "fields": {
            "username": "invited_t1",
            "hometown": "",
            "email": "invited_t1@t.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 9,
        "fields": {
            "username": "Test1_inv1",
            "hometown": "",
            "email": "test1@test.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 8,
        "fields": {
            "username": "NBalint_inv1",
            "hometown": "",
            "email": "nagymihaly.balint@gmail.com"
        }
    },
    {
        "model": "entities.user",
        "pk": 7,
        "fields": {
            "username": "ttt",
            "hometown": "",
            "email": "test1@test.tt"
        }
    },
    {
        "model": "entities.user",
        "pk": 6,
        "fields": {
            "username": "proof87",
            "hometown": "",
            "email": "test6@test.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 5,
        "fields": {
            "username": "micimacko",
            "hometown": "Százholdas Pagony",
            "email": "test5@test.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 4,
        "fields": {
            "username": "bolka",
            "hometown": "",
            "email": "test4@test.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 3,
        "fields": {
            "username": "tádé",
            "hometown": "Baktüttös",
            "email": "test3@test.ttt"
        }
    },
    {
        "model": "entities.user",
        "pk": 2,
        "fields": {
            "username": "mazsola",
            "hometown": "Baktüttös",
            "email": "proof75@gmail.com"
        }
    },
    {
        "model": "entities.user",
        "pk": 1,
        "fields": {
            "username": "proof",
            "hometown": "Budapest",
            "email": "proof87@gmail.com"
        }
    }
] as unknown as brahmaUser[]

export const testCommunities = [
{
    "model": "entities.community", "pk": 7, "fields":
    { "hometown": "Repcelak" }
},
{
    "model": "entities.community", "pk": 6, "fields":
    { "hometown": "négyszögletű kerek erdő" }
},
{
    "model": "entities.community", "pk": 5, "fields":
    { "hometown": "" }
},
{
    "model": "entities.community", "pk": 4, "fields":
    { "hometown": "" }
},
{
    "model": "entities.community", "pk": 3, "fields":
    { "hometown": "" }
},
{
    "model": "entities.community", "pk": 2, "fields":
    { "hometown": "Százholdas Pagony" }
},
{
    "model": "entities.community", "pk": 1, "fields":
    { "hometown": "Baktüttös" }
}
] as unknown as brahmaCommunity[]
