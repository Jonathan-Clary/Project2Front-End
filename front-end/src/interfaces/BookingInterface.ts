import internal from "stream";
import { HotelInterface } from "./HotelInterface";
import { UserInterface } from "./UserInterface";

export interface BookingInterface{

    stayId: number,
    user: UserInterface,
    hotel: HotelInterface,
    hotelId: number,
    bookedDate: "",
    endDate: ""

}

//made User and Hotel lowercase and removed UserId to align with database