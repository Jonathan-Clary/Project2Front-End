import internal from "stream";
import { HotelInterface } from "./HotelInterface";
import { UserInterface } from "./UserInterface";

export interface BookingInterface{

    stayId: number,
    User: UserInterface,
    userId: number, 
    Hotel: HotelInterface,
    hotelId: number,
    bookedDate: "",
    endDate: ""

}