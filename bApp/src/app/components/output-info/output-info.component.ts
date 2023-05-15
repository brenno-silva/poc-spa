import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as singleSpa from 'single-spa';
// @ts-ignore
import { MyInfo, getSubjectTest } from '@poc-utility/utility';

@Component({
  selector: 'bApp-output-info',
  templateUrl: './output-info.component.html',
  styleUrls: ['./output-info.component.css']
})
export class OutputInfoComponent implements OnInit {
  observableMsg: string = "";
  eventMsg: string = "";
  localstorageMsg: string = "";
  myInfo: MyInfo = new MyInfo();
  myObservable = getSubjectTest();

  constructor(private ref: ChangeDetectorRef) { }
  
  ngOnInit() {
    this.localstorageMsg = this.myInfo.getInformation() ?? "Sem dados";

    this.myObservable.subscribe({
      next: (message: string) => {
        this.observableMsg = message;
        this.ref.detectChanges();
      }
    });

    addEventListener("sendData", (utilityMsg: any) => { 
      this.eventMsg = utilityMsg.detail.name; 
      this.ref.detectChanges();
    });
  }

  goToApp() {
    singleSpa.navigateToUrl("/aapp")
  }
}
