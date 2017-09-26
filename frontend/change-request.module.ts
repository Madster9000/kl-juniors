import * as angular from "angular";

import { ChangeRequestController } from "./change-request.component";
import * as documentsModule from "./documents/documents.module";


angular
    .module("change-request", [documentsModule.name])
    .component("changeRequest", {
        templateUrl: "./change-request.html",
        controller: ChangeRequestController
    });