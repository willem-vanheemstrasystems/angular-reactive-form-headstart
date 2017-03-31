import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { Address, Hero, states } from '../shared/data-model';
import { HeroService }           from '../shared/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges, OnInit {

  myForm: FormGroup;
  // heroForm = new FormGroup ({
  //   name: new FormControl()
  // });

  constructor(
    private _fb: FormBuilder,
    private heroService: HeroService) { 

  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', Validators.required ] // WAS new FormControl()
    });
  }

  ngOnChanges() {}  

}
