import { Component } from '@angular/core';

@Component({
  selector: 'app-dispo-main',
  templateUrl: './dispo-main.component.html',
  styleUrls: ['./dispo-main.component.css']
})
export class DispoMainComponent {
  lotTriggered: boolean = false;
  lotStatusActive: boolean = false;

  triggerLot() {
    this.lotTriggered = true;
    this.lotStatusActive = false;
  }

  setLotStatusActive() {
    this.lotStatusActive = true;
    this.lotTriggered = false;
  }
}
