import { IChangeRequestDto } from "../../dto/change-request.dto";
import { IStatusDto } from "../../dto/status.dto";
import { IDocumentsService } from "../documents/service/documents.service";

export const changeRequestServiceName = "change-request.service";

export interface IChangeRequestService {
    changeStatus(changeRequest: IChangeRequestDto, status: IStatusDto);
}

export class ChangeRequestService implements IChangeRequestService {
    private readonly _documentsService: IDocumentsService;

    constructor(documentsService: IDocumentsService) {
        this._documentsService = documentsService;
    }
    changeStatus(changeRequest: IChangeRequestDto, status: IStatusDto) {
        // workflow
        this._documentsService.save(changeRequest.documents);
        changeRequest.status = status;
    }
}