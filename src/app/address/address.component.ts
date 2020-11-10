import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formData= new Address();
  addresses : Address[]
  constructor( private addresService : AddressService) { }

  ngOnInit(): void {
    this.addresService.readAddress().subscribe(
      (data)=>{

             this.addresses=data.map((document)=>{
              return{
                id: document.payload.doc.id,
                ...document.payload.doc.data() as {}
              } as Address
             }
             )
             console.log("Data recived >>",data )

      }
      )
  }

  saveData(){
    console.log("saving Data")
    console.log(this.formData)
    if (this.formData.id==null)
    {
      this.addresService.saveAddress(this.formData)

    }
    else{
      this.addresService.updateAddress(this.formData)
    }

    this.formData= new Address
  }

  editData(address : Address)
  {
     this.formData=address
  }

  deleteData(address :Address)
  {
    this.addresService.deleteAddress(address)
  }
}
