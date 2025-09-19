
export type ReviewType  = {
    comment:string,
}
type ProductAttributesType = {
  tag: string;
  values: string[];
  color?: string;
}
export type ProductType ={
 title:string,
 stars:number,
 price:string,
 mainDetails:string[],
 quanitty:number,
 contact:string,
 shippingStatus:boolean,
 refundDays?:number,

 vendor:string,
 categories:string,
 tags:string,
 descriptionCode?:string,
 reviews:[ReviewType],
 attributes:ProductAttributesType[]
}