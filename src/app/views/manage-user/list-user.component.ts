import { Component, OnInit } from "@angular/core";
import { User } from "./user.modal";
import { UserService } from "./user.service";
import * as moment from "moment";

@Component({
  templateUrl: "list-user.component.html"
})
export class ListUserComponent implements OnInit {
  arrUser: User[] = [];
  today: number = moment(new Date()).valueOf();
  p: number = 1;
  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe((data) => {
      this.arrUser = data;
    });
  }
  ngOnInit(): void {
    
  }
}
