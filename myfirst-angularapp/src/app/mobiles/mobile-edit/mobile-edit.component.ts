import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Mobile } from '../mobile.model';
import { MobileService } from "../mobile.service";

@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.css']
})
export class MobileEditComponent implements OnInit {
  text: string = " Edit Works...";
  mobileId: number = 0;
  @ViewChild('f',{static: false}) addMobileForm: NgForm;
  mobile: Mobile;

  constructor(private router: Router, private route: ActivatedRoute, private mobileServcie: MobileService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => { 
          this.mobileId = params['id'];
          if (this.mobileId != null) {
            this.text = "Template Driven form - Edit works...";
            this.mobile = this.mobileServcie.getMobile(this.mobileId);
          }
          else {
            this.text = "Add works...";
          }
         }
      )
  }


  onSubmit(){
    console.log(this.addMobileForm)
    console.log(this.addMobileForm.value.brand)
    this.mobileServcie.updateMobile(this.mobileId, new Mobile(
      this.addMobileForm.value.brand,
      this.addMobileForm.value.model,
      this.addMobileForm.value.shortDesc,
      this.addMobileForm.value.longDesc,
      this.addMobileForm.value.imgUrl));
    this.router.navigate(['/mobiles'], {relativeTo: this.route});
  }

}
