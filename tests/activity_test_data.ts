import { Project, Action } from "../node_server/models/activities";


export const testProject: Project = {
    creator_id: 1,
    parent_id: undefined,
    title: "Teszt Projekt",
    description: "Projekt leírása, amiben kifejtem az alapvető célokat, a megvalósításhoz választott módszereket, akciótípusokat, a célközönség jellemzőit.",
    topics: ["food", "nature"],
    tags: ["community", "selfsuff"],
    status: "ongoing",
    created_date: new Date(2024, 2, 1, 12),
    mod_date: new Date(2024, 2, 2, 12)
  
}

export const testAction: Action = {
    creator_id: 1,
    parent_id: undefined,
    title: "Teszt Esemény",
    description: "Esemény leírása, Program, mit kell hozni, stb.",
    start: new Date(2024, 2, 3, 12),
    end: new Date(2024, 2, 3, 14),
    location: "https://meet.google.com/mbb-fjdb-aan",
    topics: ["food"],
    tags: ["community", "selfsuff", "gardening"],
    status: "open",
    created_date: new Date(2024, 2, 2, 11),
    mod_date: new Date(2024, 2, 2, 13),
    tasks: [
        {
            creator_id: 1,
            title: "Rekeszeket hozni",
            status: "draft",
            created_date: new Date(2024, 2, 2, 12),
            mod_date: new Date(2024, 2, 2, 17),
            deadline: new Date(2024, 2, 3, 17),
        },
        {
            creator_id: 1,
            title: "Jelenléti ívet nyomtatni",
            status: "open",
            created_date: new Date(2024, 2, 2, 15),
            mod_date: new Date(2024, 2, 2, 18),
            deadline: new Date(2024, 2, 3, 12),
            responsible_id: 1,
            contributions: [
                {
                    user_id: 3,
                    role: "resolver",
                    result: "partial"
                }
            ]
        },
    ]

}
