import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";

  

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    },3000)
  }


  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName
  }

  onUpdateServerName(event){
    this.serverName = event.target.value
  }
}
