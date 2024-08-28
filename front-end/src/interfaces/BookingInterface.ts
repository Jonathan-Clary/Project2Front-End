import internal from "stream";
import { HotelInterface } from "./HotelInterface";
import { UserInterface } from "./UserInterface";

export interface BookingInterface{

    stayId:string,
    user: UserInterface,
    hotel: HotelInterface,
    hotelId: string,
    bookedDate: "",
    endDate: ""

}

//made User and Hotel lowercase and removed UserId to align with database