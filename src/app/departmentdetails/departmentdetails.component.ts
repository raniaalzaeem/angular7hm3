import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  //template:' <h2> Selected Department id = {{depid}} </h2> ',
  styleUrls: ['./departmentdetails.component.css']
})

export class DepartmentdetailsComponent implements OnInit {

  departments=this.departmentservic.departments;

  public depid;
  public deptitle;
  public depdesc;

  constructor(private departmentservic:DepartmentService, private route:ActivatedRoute) { }

  ngOnInit() {

    let id=parseInt(this.route.snapshot.paramMap.get('id'))
    this.depid=id;
    let desc = this.departmentservic.departments.find(x => x.id === id).description;
    this.depdesc = desc;
    let title = this.departmentservic.departments.find(x => x.id === id).title;
    this.deptitle = title;
 
  }


}
