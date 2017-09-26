import { IDocumentDto } from "../../../dto/index";

export const documentsServiceName = "change-request.documents.service";
export interface IDocumentsService {
    save(documents: IDocumentDto[]): void;
    test(): void;
}

export class DocumentService implements IDocumentsService {
    test(): void {
        throw new Error("Method not implemented.");
    }
    save(documents: IDocumentDto[]): void {
        console.log(documents);
    }

}