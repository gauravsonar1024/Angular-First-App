import { PipeTransform ,Pipe} from "@angular/core";
import { Iproduct } from "./product";

@Pipe({
    name : 'productFilter'
})

export class  ProductFilterPipe implements PipeTransform
{
    transform(value : Iproduct[],filterby : string): Iproduct[]
    {
        filterby = filterby ? filterby.toLocaleLowerCase() : null;
        return filterby ? value.filter((product : Iproduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterby)  !== -1) : value;
    }

}