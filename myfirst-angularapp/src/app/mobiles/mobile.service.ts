import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Mobile } from './mobile.model';
import { Subject } from 'rxjs'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class MobileService{
    mobiles: Mobile [] = [];
    mobileAdded = new Subject<string>();

    constructor(private http: HttpClient){}  



    getMobilesData(){
        // return this.mobiles.slice();   //retruns copy of the array 
        //    return this.mobiles.slice();   //retruns ref of the array 
        this.mobiles.splice(0);
        return this.http.get<Mobile []>("https://badarilearningapp.firebaseio.com/mobiles.json")
            .pipe(
                map(responseData => {
                    let mobile: Mobile;
                    for (const key in responseData){
                        if (responseData.hasOwnProperty(key)){
                            const resp = {...responseData[key], id: key};
                            mobile = new Mobile(
                                resp['company'],
                                resp['model'],
                                resp['shortDesc'],
                                resp['longDesc'],
                                resp['imgUrl'],
                                resp['id']                                
                            );
                            this.mobiles.push(mobile);
                        }
                    }
                    return this.mobiles;
                }), catchError(errorRes => {
                    return throwError(errorRes.error);
                })
            );
    }

    getMobile(index: number){
      return  this.mobiles[index];
    }

    addMobile(mobile: Mobile){
        console.log(mobile);
        this.http.post("https://badarilearningapp.firebaseio.com/mobiles.json", mobile)
            .subscribe( (responseData) => {
                 this.mobileAdded.next('mobilechanged');                
            });

    }

    updateMobile(index: number, mobile: Mobile){
        this.mobiles[index] = mobile;
        this.mobileAdded.next('mobilechanged');        
    }
    

}