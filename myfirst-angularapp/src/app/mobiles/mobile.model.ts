export class Mobile{
    company:string;
    model:string;
    shortDesc:string;
    longDesc:string;
    imgUrl:string;
    id?: string;

    constructor(company:string, model:string,
                 shortDesc:string, longDesc:string, imgUrl:string, id?:string){
                    this.company=company;
                    this.model=model;
                    this.shortDesc = shortDesc;
                    this.longDesc = longDesc;
                    this.imgUrl = imgUrl;
                    this.id = id;
    }
}