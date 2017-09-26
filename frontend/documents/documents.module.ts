import * as angular from "angular";

import { DocumentsListController } from "./documents-list/documents-list.component";

export const name = "change-request.documents";
angular
    .module(name, [])
    .component("documentsList", {
        templateUrl: "./documents-list/documents-list.html",
        controller: DocumentsListController,
        bindings: {
            documents: "<"
        }
    });