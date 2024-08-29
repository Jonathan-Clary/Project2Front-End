import { HotelInterface } from "./HotelInterface";
import { UserInterface } from "./UserInterface";

export interface FavoriteInterface {
    createdAt: Date;
    favoriteId: string;
    hotel: HotelInterface;
    user: UserInterface; 
}