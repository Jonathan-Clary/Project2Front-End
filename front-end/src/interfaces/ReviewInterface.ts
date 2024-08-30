import { HotelInterface } from "./HotelInterface";
import { UserInterface } from "./UserInterface";

export interface ReviewInterface {
    reviewText: string;
    hotel: HotelInterface;
    stars: String
    userId: UserInterface["userId"]; 
}