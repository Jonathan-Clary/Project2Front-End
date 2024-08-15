import { TicketStatusEnum } from "../../enums/support-tickets/TicketStatusEnum";
import { TicketTypeEnum } from "../../enums/support-tickets/TicketTypeEnum";

export interface SupportTicketInterface {
    supportTicketId?: number;
    // User HERE
    status: TicketStatusEnum;
    description: string;
    type: TicketTypeEnum;
    createdAt?: Date;
    resolvedAt?: Date;
}