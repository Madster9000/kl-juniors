import * as angular from "angular";

import { ChangeRequestController } from "./change-request.component";
import { changeRequestServiceName, ChangeRequestService } from "./services/change-request.service";

import template from "./change-request.html";

import * as documentsServices from "./documents/service/documents.services.module";
import * as documentsModule from "./documents/documents.module";

angular
    .module("change-request", [
        documentsModule.name,
        documentsServices.name
    ])
    .service(changeRequestServiceName, [
        documentsServices.serviceName,
        ChangeRequestService
    ])
    .component("changeRequest", {
        template: template, //require("./change-request.html"),
        controller: [changeRequestServiceName, ChangeRequestController]
    });
