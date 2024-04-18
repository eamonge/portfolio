import { green, lightBlue, yellow } from "@mui/material/colors";

export const appointments = [
    {
        title: 'Available',
        startDate: new Date("2024-01-29T08:00:00"),
        endDate: new Date("2024-01-29T10:30:00"),
        id: 0,
        priorityId: 1,
        location: 'Room 1',
    }, {
        title: 'Break',
        startDate: new Date("2024-01-29T10:30:00"),
        endDate: new Date("2024-01-29T13:00:00"),
        id: 0,
        location: 'Room 1',
    }, {
        title: 'Available',
        startDate: new Date("2024-01-29T13:00:00"),
        endDate: new Date("2024-01-29T15:30:00"),
        id: 0,
        priorityId: 1,
        location: 'Room 1',
    }, {
        title: 'Research',
        startDate: new Date("2024-01-29T15:30:00"),
        endDate: new Date("2024-01-29T17:00:00"),
        id: 0,
        location: 'Room 1',
    }
];

export const priorities = [
    { id: 1, text: 'Active', color: green },
    { id: 2, text: 'Break', color: yellow },
    { id: 3, text: 'Research', color: lightBlue },
]