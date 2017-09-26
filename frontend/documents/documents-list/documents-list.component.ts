import { IDocumentDto } from "../../../dto/document.dto";

export class DocumentsListController {
    documents: IDocumentDto[];
    addDocument() {
        this.documents.push({});
    }
}