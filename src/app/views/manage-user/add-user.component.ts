import { Component, OnInit } from "@angular/core";
import { User } from "./user.modal";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  templateUrl: "add-user.component.html",
})
export class AddUserComponent implements OnInit {
  public user: User;
  constructor(
    private userService: UserService,
    private routerService: Router
  ) {}
  ngOnInit(): void {
    this.user = new User();
    this.user.created = moment(new Date()).valueOf();
  }
  addUser(username,fullname,password) {
    this.user.username = username;
    this.user.fullname = fullname;
    this.user.password = password;

    this.userService.addUser(this.user).subscribe((data) => {
      if (data && data.username) {
        this.routerService.navigate(['/manage-user/list']);
      }
    });
  }
}
