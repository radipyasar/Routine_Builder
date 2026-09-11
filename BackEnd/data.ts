export interface Slot {
    day : string;
    start : string;
    end : string;
}

export interface Section {
    id : string;
    faculty : string;
    slots : Slot[];
}

export interface Course {
    code : string;
    sections : Section[];
}

export const courses : Course[] = [
    {
       code : "CSE311",
       sections : [
        {
            id : "CSE311-1",
            faculty : "Mr. A",
            slots : [
                {
                    day : "M",
                    start : "08:00",
                    end : "09:30"
                },
                {
                    day : "W",
                    start : "08:00",
                    end : "09:30"
                }
            ]
        },
        {
            id : "CSE311-2",
            faculty : "Mr. B",
            slots : [
                {
                    day : "S",
                    start : "08:00",
                    end : "09:30"
                },
                {
                    day : "T",
                    start : "08:00",
                    end : "09:30"
                }
            ]
        }
       ]
    },
    {
        code : "CSE215",
        sections : [
            {
                id : "CSE215-1",
                faculty : "Mr. C",
                slots : [
                    {
                        day : "R",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE215-2",
                faculty : "Mr. D",
                slots : [
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    }
]