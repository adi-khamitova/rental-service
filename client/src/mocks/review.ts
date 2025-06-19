import { Review } from "../types/review";

const reviews: Review[] = [
    {
        id: "1",
        date: "2023-10-01T12:00:00Z",
        user: {
            name: "Adelya",
            avatarUrl: "/img/avatar-angelina.jpg",
            isPro: true,
        },
        comment: "hidhly recomend!",
        rating: 5,
    },
    {
        id: "2",
        date: "2023-10-02T12:00:00Z",
        user: {
            name: "your crush",
            avatarUrl: "/img/avatar-max.jpg",
            isPro: false,
        },
        comment: "could be better.",
        rating: 2,
    },
];

export { reviews };