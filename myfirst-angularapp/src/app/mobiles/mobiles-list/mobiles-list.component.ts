import { Component, OnInit , EventEmitter,Output, Input, OnDestroy} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Mobile } from '../mobile.model';
import { MobileService} from "../mobile.service";



@Component({
    selector: 'app-mobiles-list',
    templateUrl: './mobiles-list.component.html',
    styleUrls: ['./mobiles-list.component.css']
})
export class MobilesListComponent implements OnInit, OnDestroy{
    // @Input() mobilesList:Mobile[]; 
    //@Output() mobileItemClicked = new EventEmitter<Mobile>();
    mobilesList:Mobile[] = [];
    mobileAdded: Subscription;


    constructor(private mobileService:MobileService, 
        private router: Router,
        private route: ActivatedRoute){}

    ngOnInit() {
      

      this.mobileService.getMobilesData()
        .subscribe(responseData => {
            this.mobilesList = responseData;
        },
        errResp =>{
            console.log(errResp.type);
        });

        this.mobileAdded =  this.mobileService.mobileAdded
            .subscribe(
                (msg: string) => {
                    if (msg == "mobilechanged"){
                        this.mobileService.getMobilesData()
                            .subscribe(responseData => {
                                this.mobilesList = responseData;
                            });
                    }
                }
            );
    }

   addMobile(){
    this.router.navigate(['add'],{relativeTo: this.route});
   }

   ngOnDestroy(){
       this.mobileAdded.unsubscribe();
       this.mobilesList = [];
   }
}