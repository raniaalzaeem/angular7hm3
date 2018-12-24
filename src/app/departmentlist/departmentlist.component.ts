import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../app/department.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  departments=this.departmentservices.departments
  constructor(private departmentservices:DepartmentService,private router:Router) { }

  ngOnInit() {
  }
  
  selecteddepartment(data){
    console.log(data)
    this.router.navigate(['/departmentdetails',data.id])

  }
}
