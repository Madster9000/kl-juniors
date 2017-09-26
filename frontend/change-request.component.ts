import { IChangeRequestDto } from "../dto/change-request.dto"
import { IChangeRequestService } from "./services/change-request.service";

export class ChangeRequestController {
    private readonly _changeRequestService: IChangeRequestService;
    // bindings
    changeRequest: IChangeRequestDto;

    constructor(changeRequestService: IChangeRequestService) {
        this._changeRequestService = changeRequestService;
    }

    save() {
        this._changeRequestService
            .changeStatus(this.changeRequest, { name: "newStatus" });
    }
}