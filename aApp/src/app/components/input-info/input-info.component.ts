import { Component, OnInit } from '@angular/core';
import * as singleSpa from 'single-spa';
// @ts-ignore
import { MyInfo, dispatchMyEvent, getSubjectTest, setSubjectTest } from '@poc-utility/utility';

@Component({
  selector: 'aApp-input-info',
  templateUrl: './input-info.component.html',
  styleUrls: ['./input-info.component.css']
})
export class InputInfoComponent implements OnInit {
  intputMsg: string = "";
  stateMsg: string = "";
  localstorageMsg: string = "";
  myInfo: MyInfo = new MyInfo();
  myObservable = getSubjectTest();

  ngOnInit(): void {
    this.myObservable.subscribe({
      next: (message: string) => {
        this.stateMsg = message;
      }
    });
    this.localstorageMsg = this.myInfo.getInformation() ?? "Sem dados";
  }

  sendData() {
    dispatchMyEvent(this.intputMsg);
    setSubjectTest(this.intputMsg);
    this.myInfo.setInformation(this.intputMsg);
  }

  goToRoute(path: string) {
    singleSpa.navigateToUrl(path);
  }
}
