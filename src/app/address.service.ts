import { Injectable } from '@angular/core';
import {Address} from './address';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor( private fireStore : AngularFirestore) { }

  saveAddress(address: Address)
  {
    console.log("from service class ")
    console.log(address)
    this.fireStore.collection("adres").add({...address})
  }

  readAddress(){
    return this.fireStore.collection("adres").snapshotChanges()
  }

  updateAddress(address : Address)
    {
         this.fireStore.doc('adres/'+address.id).update({...address})
    }

    deleteAddress(address : Address)
    {
      this.fireStore.doc('adres/'+address.id).delete()
    }

}
