import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { FormGroup,FormControl,Validators, FormArray } from '@angular/forms';
import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile.model';

@Component({
  selector: 'app-mobile-add',
  templateUrl: './mobile-add.component.html',
  styleUrls: ['./mobile-add.component.css']
})
export class MobileAddComponent implements OnInit {
  newMobileForm: FormGroup;
  names: string [] = ['test', 'badari'] ;
  
  constructor(private route: ActivatedRoute, 
    private mobileService: MobileService,
    private router: Router) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => { console.log(params);}
    //   );

      this.newMobileForm = new FormGroup({
        'brand': new FormControl('apple',[Validators.required]),
        'model': new FormControl(null, Validators.required),
        'shortDesc': new FormControl(null,Validators.required),
        'longDesc': new FormControl(null, Validators.required),
        'imgUrl': new FormControl(null),   
        'dControls': new FormArray([])    
      });
  }

  get getDynamicControls() {
   return (this.newMobileForm.get('dControls') as FormArray).controls;
  }

  onSubmit(){
    const mobile: Mobile = new Mobile(
      this.newMobileForm.value.brand,
      this.newMobileForm.value.model,
      this.newMobileForm.value.shortDesc,
      this.newMobileForm.value.longDesc,
      this.newMobileForm.value.imgUrl,      
    );
    this.mobileService.addMobile(mobile);
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  addControl(){    
    const control = new FormControl(null, [Validators.required, this.testTextValue.bind(this)]);
    (<FormArray>this.newMobileForm.get('dControls')).push(control);
  }

  //custom validator
  testTextValue(control: FormControl): {[s: string]: boolean} {
    if (this.names.indexOf(control.value) != - 1){
        return {'textisrestricted': true};
    }
    return null;
  }

}
