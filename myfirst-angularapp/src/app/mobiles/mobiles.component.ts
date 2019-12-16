import { Component, Input, OnChanges} from '@angular/core';
import { Mobile } from './mobile.model';
import { MobileService } from "./mobile.service";


@Component({
    selector: 'app-mobiles',
    templateUrl: 'mobiles.component.html',
    styleUrls: ['mobiles.component.css'],
})
export class MobilesComponent {
    @Input() selectedCategory:string;
    mobiles: Mobile[];

    constructor(private mobileService: MobileService){}
   
    ngOnChanges(){

        // if (this.selectedCategory == "mobiles"){
        //     this.mobiles = this.mobileService.getMobilesData();
        // }
        // else
        // {
        //     this.mobiles = null;
        // }
    }





}