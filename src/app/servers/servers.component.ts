import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  public serverCreated: boolean = false;
  public allowNewServer = false;
  public serverName: any = 'Test Server';

  public onCreateServer() {
    this.serverCreated = true;
  }

  public onUpdateServerName(e: any) {
    this.serverName = <HTMLInputElement>e.target.value;
  }
}
