import * as angular from "angular";

import { documentsServiceName, DocumentService } from "./documents.service";

export const name = "change-request.documents.services";
export const serviceName = documentsServiceName;
angular
    .module(name, [])
    .service(documentsServiceName, [DocumentService]);