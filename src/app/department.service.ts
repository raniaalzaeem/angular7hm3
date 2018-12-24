import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
departments=[
{ 
  id:1,
  title:"department1",
  description:"department data data data"
},
{ 
  id:2,
  title:"department2",
  description:"department data data data"
},
{ 
  id:3,
  title:"department3",
  description:"department data data data"
},
{ 
  id:4,
  title:"department4",
  description:"department data data data"
}
  
]
  constructor() { }
}
