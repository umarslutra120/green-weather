import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addspecies',
  templateUrl: './addspecies.component.html',
  styleUrls: ['./addspecies.component.css']
})
export class AddspeciesComponent implements OnInit {
order:any;
save:any;
back:any

  constructor(private actvatedRouter:ActivatedRoute) {
    
    this.actvatedRouter.queryParams.subscribe(params=>{
      this.order=params['data']
    if(params['data']=='Add')
    {
      this.order='Add'
      this.save='Save'
      this.back='Cancel'
    }
    else if(params['data1']=='Edit'){
      this.order='Edit'
      this.save="Update"
      this.back='Cancel'
      
    }
    else{
      this.order='View'
      this.save='Back'
    }
      

    })
    
  }

  ngOnInit(): void {

  }
  
  urllink: any = '../assets/kind.png';
  selectFile(event: any) {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.urllink = event.target.result
      }
    }

  }

}


