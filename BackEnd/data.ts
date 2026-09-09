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
                    start : "8:00",
                    end : "9:30"
                },
                {
                    day : "W",
                    start : "8:00",
                    end : "9:30"
                }
            ]
        },
        {
            id : "CSE311-2",
            faculty : "Mr. B",
            slots : [
                {
                    day : "S",
                    start : "8:00",
                    end : "9:30"
                },
                {
                    day : "T",
                    start : "8:00",
                    end : "9:30"
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
                        start : "1:00",
                        end : "2:30"
                    },
                    {
                        day : "T",
                        start : "1:00",
                        end : "2:30"
                    }
                ]
            }
        ]
    }
]