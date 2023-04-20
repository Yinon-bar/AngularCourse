import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  public allowNewServer = false;
  public serverName: any = 'Test Server';

  public onCreateServer() {
    alert('Server created');
  }

  public onUpdateServerName(e: any) {
    this.serverName = <HTMLInputElement>e.target.value;
  }
}
