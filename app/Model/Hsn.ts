export class Hsn {
    Id: number;
    Code: string;
    Header1: string;
    Header2: string;
    Header3: string;
    Header4: string;
    CreatedAt: Date;
    Phone:number;

    constructor(){
        this.Phone=75035;
    }

    getHeader() {
        return this.Header1 + " " + this.Header2+" "+this.Header3+" "+this.Header4;
    }
    getDatee() {
        return this.CreatedAt;
    }
}