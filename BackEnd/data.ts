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
        code : "CSE299",
        sections : [
            {
                id : "CSE299-1",
                faculty : "SFR21",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CSE299-2",
                faculty : "SFR1",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE299-3",
                faculty : "MSRb",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE299-4",
                faculty : "AFE",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE299-7",
                faculty : "MLE",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE299-8",
                faculty : "ITN",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE299-9",
                faculty : "ITN",
                slots : [
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE299-10",
                faculty : "TNS1",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE299-11",
                faculty : "MUO",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE299-13",
                faculty : "SMSL",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE299-14",
                faculty : "SMSL",
                slots : [
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE323",
        sections : [
            {
                id : "CSE323-1",
                faculty : "NvA",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE323-2",
                faculty : "NvA",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE323-3",
                faculty : "Auq",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE323-4",
                faculty : "MSLK",
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
            },
            {
                id : "CSE323-5",
                faculty : "NJL",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE323-6",
                faculty : "SSI",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE323-7",
                faculty : "SSI",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE323-9",
                faculty : "SMSL",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE373",
        sections : [
            {
                id : "CSE373-1",
                faculty : "SfM1",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE373-2",
                faculty : "ARa2",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE373-3",
                faculty : "ARa2",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE373-4",
                faculty : "STI",
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
            },
            {
                id : "CSE373-5",
                faculty : "STI",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE373-6",
                faculty : "Iqn",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE373-7",
                faculty : "OISD",
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
            },
            {
                id : "CSE373-8",
                faculty : "OISD",
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
                id : "CSE373-9",
                faculty : "SUS",
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
            }
        ]
    },
    {
        code : "CSE425",
        sections : [
            {
                id : "CSE425-1",
                faculty : "MSK1",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE425-2",
                faculty : "MSK1",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE425-3",
                faculty : "SSI",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE425-4",
                faculty : "SUS",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE425-5",
                faculty : "SUS",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE425-6",
                faculty : "EzM",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE425-7",
                faculty : "EzM",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE425-9",
                faculty : "MDAR",
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
            }
        ]
    },
    {
        code : "CSE438",
        sections : [
            {
                id : "CSE438-1",
                faculty : "Auq",
                slots : [
                    {
                        day : "S",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "T",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "CSE438-2",
                faculty : "RjP",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE438L",
        sections : [
            {
                id : "CSE438L-1",
                faculty : "AUQ",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE438L-2",
                faculty : "RJP",
                slots : [
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE445",
        sections : [
            {
                id : "CSE445-1",
                faculty : "SfM1",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE445-2",
                faculty : "SfM1",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE445-3",
                faculty : "JSA",
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
                id : "CSE445-4",
                faculty : "Rtk",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE445-5",
                faculty : "SfR1",
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
                id : "CSE445-6",
                faculty : "MAQM",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE445-7",
                faculty : "MSRb",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE465",
        sections : [
            {
                id : "CSE465-1",
                faculty : "SfM1",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE465-2",
                faculty : "NbM",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE465-3",
                faculty : "NbM",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE465-4",
                faculty : "AzK",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE465-5",
                faculty : "AFE",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE465-6",
                faculty : "OISD",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            }
        ]
    },
    {
        code : "CHE101L",
        sections : [
            {
                id : "CHE101L-1",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-2",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-3",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-4",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-5",
                faculty : "MH1",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-6",
                faculty : "MH1",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-7",
                faculty : "PYN",
                slots : [
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-8",
                faculty : "MALM",
                slots : [
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-9",
                faculty : "MH1",
                slots : [
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-10",
                faculty : "MH1",
                slots : [
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-11",
                faculty : "MH1",
                slots : [
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-12",
                faculty : "MH1",
                slots : [
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-13",
                faculty : "HML",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-14",
                faculty : "HML",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-15",
                faculty : "MRKL",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-16",
                faculty : "MRKL",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-17",
                faculty : "ADP",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-18",
                faculty : "ADP",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-19",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-20",
                faculty : "MH1",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-21",
                faculty : "HML",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-22",
                faculty : "HML",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-23",
                faculty : "MEH",
                slots : [
                    {
                        day : "W",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-24",
                faculty : "MEH",
                slots : [
                    {
                        day : "W",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-25",
                faculty : "MRKL",
                slots : [
                    {
                        day : "R",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-26",
                faculty : "MRKL",
                slots : [
                    {
                        day : "R",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-27",
                faculty : "MAZM",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-28",
                faculty : "MAZM",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-29",
                faculty : "MMR3",
                slots : [
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-30",
                faculty : "MMR3",
                slots : [
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-31",
                faculty : "MMR3",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-32",
                faculty : "MMR3",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-33",
                faculty : "PYN",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-34",
                faculty : "PYN",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-35",
                faculty : "MALM",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-36",
                faculty : "FZD",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-37",
                faculty : "FZD",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-38",
                faculty : "FZD",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-39",
                faculty : "FZD",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-40",
                faculty : "FZD",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-41",
                faculty : "FZD",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101L-42",
                faculty : "MEH",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-43",
                faculty : "MEH",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-44",
                faculty : "MEH",
                slots : [
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-45",
                faculty : "MEH",
                slots : [
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-46",
                faculty : "MAZM",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-47",
                faculty : "MALM",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101L-48",
                faculty : "AVC",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101L-49",
                faculty : "AVC",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            }
        ]
    },
    {
        code : "BEN205",
        sections : [
            {
                id : "BEN205-1",
                faculty : "NJb",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "BEN205-2",
                faculty : "Rme",
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
            },
            {
                id : "BEN205-3",
                faculty : "Snj",
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
            },
            {
                id : "BEN205-4",
                faculty : "NJb",
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
            },
            {
                id : "BEN205-5",
                faculty : "Snj",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "BEN205-6",
                faculty : "Rme",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "BEN205-7",
                faculty : "NJb",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "BEN205-8",
                faculty : "NJb",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "BEN205-9",
                faculty : "Rme",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "BEN205-10",
                faculty : "Rme",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "BEN205-11",
                faculty : "ADy",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "BEN205-12",
                faculty : "TBA",
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
                id : "BEN205-13",
                faculty : "TBA",
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
                id : "BEN205-14",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "ENG111",
        sections : [
            {
                id : "ENG111-1",
                faculty : "TAA",
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
            },
            {
                id : "ENG111-2",
                faculty : "HMe",
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
            },
            {
                id : "ENG111-3",
                faculty : "SDMA",
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
            },
            {
                id : "ENG111-4",
                faculty : "TAA",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-5",
                faculty : "NPn",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-6",
                faculty : "HMe",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-7",
                faculty : "FAA",
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
            },
            {
                id : "ENG111-8",
                faculty : "AHRF",
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
            },
            {
                id : "ENG111-9",
                faculty : "FzM",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "ENG111-10",
                faculty : "FAA",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "ENG111-11",
                faculty : "AHRF",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "ENG111-12",
                faculty : "NSj",
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
                id : "ENG111-13",
                faculty : "NPn",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-14",
                faculty : "MNK",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-15",
                faculty : "SZn",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "ENG111-16",
                faculty : "NSj",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "ENG111-17",
                faculty : "SZn",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "ENG111-18",
                faculty : "MNK",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "ENG111-19",
                faculty : "NCA",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "ENG111-20",
                faculty : "SNCY",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "ENG111-21",
                faculty : "MCY",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "ENG111-22",
                faculty : "TSHN",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            }
        ]
    },
    {
        code : "EEE111",
        sections : [
            {
                id : "EEE111-1",
                faculty : "Aqu",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111-2",
                faculty : "Iih",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111-3",
                faculty : "NCK",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111-4",
                faculty : "MSLK",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-5",
                faculty : "Rtk",
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
            },
            {
                id : "EEE111-6",
                faculty : "NaNr",
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
                id : "EEE111-7",
                faculty : "NaNr",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-8",
                faculty : "MSLK",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111-9",
                faculty : "Mkl",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-10",
                faculty : "JSA",
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
            },
            {
                id : "EEE111-11",
                faculty : "JSA",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-12",
                faculty : "SSH1",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "EEE111-13",
                faculty : "SSH1",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-14",
                faculty : "SvS",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "EEE111-15",
                faculty : "SvS",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "EEE111-18",
                faculty : "ACQ",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            }
        ]
    },
    {
        code : "EEE111L",
        sections : [
            {
                id : "EEE111L-1",
                faculty : "Aqu",
                slots : [
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "EEE111L-2",
                faculty : "Iih",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "EEE111L-3",
                faculty : "NCK",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "EEE111L-4",
                faculty : "MSLK",
                slots : [
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "EEE111L-5",
                faculty : "RtK",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-6",
                faculty : "NaNr",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "EEE111L-7",
                faculty : "NaNr",
                slots : [
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "EEE111L-8",
                faculty : "MSLK",
                slots : [
                    {
                        day : "R",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "EEE111L-9",
                faculty : "Mkl",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-10",
                faculty : "JSA",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-11",
                faculty : "JSA",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-12",
                faculty : "SSH1",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-13",
                faculty : "SSH1",
                slots : [
                    {
                        day : "W",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-14",
                faculty : "SvS",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-15",
                faculty : "SVS",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "EEE111L-18",
                faculty : "ACQ",
                slots : [
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "MAT350",
        sections : [
            {
                id : "MAT350-1",
                faculty : "AKAd",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "MAT350-2",
                faculty : "AKAd",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "MAT350-3",
                faculty : "HAr",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "MAT350-4",
                faculty : "HAr",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "MAT350-5",
                faculty : "UMM",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "MAT350-6",
                faculty : "ATA",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "MAT350-7",
                faculty : "MTH",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "MAT350-8",
                faculty : "MTH",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "MAT350-9",
                faculty : "MTH",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "MAT350-10",
                faculty : "PNG",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "MAT350-11",
                faculty : "PNG",
                slots : [
                    {
                        day : "M",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "W",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "MAT350-13",
                faculty : "ATA",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            }
        ]
    },
    {
        code : "PHI104",
        sections : [
            {
                id : "PHI104-1",
                faculty : "MNT",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHI104-2",
                faculty : "LFR",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHI104-3",
                faculty : "LFR",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PHI104-4",
                faculty : "LFR",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PHI104-6",
                faculty : "SYN",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PHI104-7",
                faculty : "MMEE",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHI104-8",
                faculty : "MmEe",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHI104-9",
                faculty : "MMEE",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PHI104-10",
                faculty : "AJA",
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
            },
            {
                id : "PHI104-11",
                faculty : "AJA",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PHI104-12",
                faculty : "AJA",
                slots : [
                    {
                        day : "S",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "T",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE332",
        sections : [
            {
                id : "CSE332-1",
                faculty : "ALHQ",
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
                id : "CSE332-2",
                faculty : "TnR",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332-3",
                faculty : "ALHQ",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CSE332-4",
                faculty : "MAQM",
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
            },
            {
                id : "CSE332-5",
                faculty : "NLH",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332-6",
                faculty : "NJL",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332-8",
                faculty : "TnF",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332-9",
                faculty : "Sfm",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CSE332-10",
                faculty : "Sfm",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332-11",
                faculty : "TnR",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CSE332-12",
                faculty : "MAQM",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            }
        ]
    },
    {
        code : "CSE332L",
        sections : [
            {
                id : "CSE332L-1",
                faculty : "ALHQ",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE332L-2",
                faculty : "TNR",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332L-3",
                faculty : "ALHQ",
                slots : [
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE332L-4",
                faculty : "MAQM",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332L-5",
                faculty : "NLH",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332L-6",
                faculty : "NJL",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332L-7",
                faculty : "TnF",
                slots : [
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE332L-8",
                faculty : "TNF",
                slots : [
                    {
                        day : "R",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332L-9",
                faculty : "Sfm",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CSE332L-10",
                faculty : "Sfm",
                slots : [
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CSE332L-11",
                faculty : "TNR",
                slots : [
                    {
                        day : "W",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CSE332L-12",
                faculty : "MAQM",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            }
        ]
    },
    {
        code : "CHE101",
        sections : [
            {
                id : "CHE101-1",
                faculty : "TBA",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-2",
                faculty : "MBE",
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
                id : "CHE101-3",
                faculty : "SZF",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-4",
                faculty : "ACN",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-11",
                faculty : "SOH",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-13",
                faculty : "ABI",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CHE101-14",
                faculty : "MABA",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CHE101-15",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CHE101-16",
                faculty : "MAZM",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "CHE101-17",
                faculty : "ABI",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101-18",
                faculty : "AYS",
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
                id : "CHE101-19",
                faculty : "MABA",
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
                id : "CHE101-20",
                faculty : "PYN",
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
                id : "CHE101-21",
                faculty : "TBA",
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
                id : "CHE101-22",
                faculty : "SZF",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-23",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-24",
                faculty : "SNHT",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-25",
                faculty : "SNHT",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-26",
                faculty : "MRKL",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-27",
                faculty : "SMD1",
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
            },
            {
                id : "CHE101-28",
                faculty : "NKA",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-29",
                faculty : "NKA",
                slots : [
                    {
                        day : "M",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "W",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "CHE101-30",
                faculty : "MAZM",
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
                id : "CHE101-31",
                faculty : "MASM",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-32",
                faculty : "SQU",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-33",
                faculty : "MTN2",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-34",
                faculty : "MASM",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-35",
                faculty : "SQU",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-36",
                faculty : "MTN2",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-37",
                faculty : "MMR3",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-38",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-39",
                faculty : "SMD1",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101-40",
                faculty : "ACN",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "CHE101-41",
                faculty : "ACN",
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
            },
            {
                id : "CHE101-42",
                faculty : "SOH",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-43",
                faculty : "MRKL",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-44",
                faculty : "FZD",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-45",
                faculty : "TBA",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "CHE101-46",
                faculty : "TBA",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-47",
                faculty : "TBA",
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
                id : "CHE101-48",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-49",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "CHE101-50",
                faculty : "MKR",
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
                id : "CHE101-51",
                faculty : "MBE",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101-52",
                faculty : "MKR",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101-53",
                faculty : "TBA",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "CHE101-55",
                faculty : "LIZN",
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
            },
            {
                id : "CHE101-56",
                faculty : "LIZN",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "CHE101-57",
                faculty : "LIZN",
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
            }
        ]
    },
    {
        code : "PHY108L",
        sections : [
            {
                id : "PHY108L-1",
                faculty : "ZUM",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-2",
                faculty : "ZUM",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-3",
                faculty : "ZUM",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-4",
                faculty : "HrR",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHY108L-5",
                faculty : "HrR",
                slots : [
                    {
                        day : "M",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHY108L-6",
                faculty : "HrR",
                slots : [
                    {
                        day : "W",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHY108L-7",
                faculty : "RUH",
                slots : [
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-8",
                faculty : "SCG",
                slots : [
                    {
                        day : "S",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHY108L-9",
                faculty : "SCG",
                slots : [
                    {
                        day : "T",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PHY108L-10",
                faculty : "ZBM",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "S",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-11",
                faculty : "SLU",
                slots : [
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PHY108L-12",
                faculty : "AIT",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PHY108L-13",
                faculty : "KSd",
                slots : [
                    {
                        day : "A",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            }
        ]
    },
    {
        code : "PBH101",
        sections : [
            {
                id : "PBH101-1",
                faculty : "SBAH",
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
            },
            {
                id : "PBH101-2",
                faculty : "SBAH",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PBH101-3",
                faculty : "SBAH",
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
            },
            {
                id : "PBH101-4",
                faculty : "SNL",
                slots : [
                    {
                        day : "R",
                        start : "08:00",
                        end : "09:30"
                    },
                    {
                        day : "A",
                        start : "08:00",
                        end : "09:30"
                    }
                ]
            },
            {
                id : "PBH101-5",
                faculty : "AIR",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "PBH101-6",
                faculty : "Sbs",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-7",
                faculty : "SgD",
                slots : [
                    {
                        day : "S",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "T",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-8",
                faculty : "SHMF",
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
            },
            {
                id : "PBH101-9",
                faculty : "MIMd",
                slots : [
                    {
                        day : "S",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "T",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "PBH101-10",
                faculty : "SbS",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PBH101-11",
                faculty : "MIMd",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-12",
                faculty : "TBA",
                slots : [
                    {
                        day : "S",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "T",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-13",
                faculty : "AIR",
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
            },
            {
                id : "PBH101-14",
                faculty : "SHMF",
                slots : [
                    {
                        day : "S",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "T",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-15",
                faculty : "SzP",
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
                id : "PBH101-16",
                faculty : "SYK",
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
                id : "PBH101-17",
                faculty : "AIR",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "PBH101-18",
                faculty : "ZZS",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PBH101-19",
                faculty : "TBA",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PBH101-20",
                faculty : "AIR",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-21",
                faculty : "RCR",
                slots : [
                    {
                        day : "M",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "W",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-22",
                faculty : "TBA",
                slots : [
                    {
                        day : "M",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "W",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-23",
                faculty : "SNL",
                slots : [
                    {
                        day : "M",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "W",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PBH101-24",
                faculty : "RCR",
                slots : [
                    {
                        day : "M",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "W",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-25",
                faculty : "SHMF",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-26",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PBH101-27",
                faculty : "NZZ",
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
                id : "PBH101-28",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PBH101-29",
                faculty : "TBA",
                slots : [
                    {
                        day : "R",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "A",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-30",
                faculty : "SgD",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PBH101-31",
                faculty : "SoM",
                slots : [
                    {
                        day : "R",
                        start : "18:00",
                        end : "19:30"
                    },
                    {
                        day : "A",
                        start : "18:00",
                        end : "19:30"
                    }
                ]
            },
            {
                id : "PBH101-32",
                faculty : "BCh",
                slots : [
                    {
                        day : "S",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "T",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PBH101-33",
                faculty : "Sbs",
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
                id : "PBH101-34",
                faculty : "Sbs",
                slots : [
                    {
                        day : "R",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "A",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PBH101-35",
                faculty : "SoM",
                slots : [
                    {
                        day : "R",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "A",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PBH101-36",
                faculty : "SYK",
                slots : [
                    {
                        day : "R",
                        start : "16:20",
                        end : "17:50"
                    },
                    {
                        day : "A",
                        start : "16:20",
                        end : "17:50"
                    }
                ]
            },
            {
                id : "PBH101-37",
                faculty : "SgD",
                slots : [
                    {
                        day : "R",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "A",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PBH101-38",
                faculty : "TBA",
                slots : [
                    {
                        day : "S",
                        start : "14:40",
                        end : "16:10"
                    },
                    {
                        day : "T",
                        start : "14:40",
                        end : "16:10"
                    }
                ]
            },
            {
                id : "PBH101-39",
                faculty : "SzP",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            },
            {
                id : "PBH101-40",
                faculty : "Szp",
                slots : [
                    {
                        day : "M",
                        start : "13:00",
                        end : "14:30"
                    },
                    {
                        day : "W",
                        start : "13:00",
                        end : "14:30"
                    }
                ]
            },
            {
                id : "PBH101-41",
                faculty : "HtN",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            },
            {
                id : "PBH101-42",
                faculty : "SgD",
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
            },
            {
                id : "PBH101-43",
                faculty : "AIR",
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
                id : "PBH101-44",
                faculty : "TBA",
                slots : [
                    {
                        day : "M",
                        start : "09:40",
                        end : "11:10"
                    },
                    {
                        day : "W",
                        start : "09:40",
                        end : "11:10"
                    }
                ]
            }
        ]
    },
    {
        code : "MAT483",
        sections : [
            {
                id : "MAT483-1",
                faculty : "MTH",
                slots : [
                    {
                        day : "M",
                        start : "11:20",
                        end : "12:50"
                    },
                    {
                        day : "W",
                        start : "11:20",
                        end : "12:50"
                    }
                ]
            }
        ]
    }
]