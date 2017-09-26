import { IDocumentDto } from "./document.dto";
import { IStatusDto } from "./status.dto";
import { IEventDto } from "./event.dto";

export interface IChangeRequestDto {
    name: string;
    status: IStatusDto;
    documents: IDocumentDto[];
    events: IEventDto[];
}