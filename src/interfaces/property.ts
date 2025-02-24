

export interface IProperty{
    id:number,
    idowner:number,
    title:string,
    type:'apartamento' |'casa' | 'quitinete',
    about:string,
    city:string,
    state:string,
    price:number,
    published:Date,
    gallery:string[]

}