import { Component, OnInit } from "@angular/core";
import { User } from "./user.modal";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  templateUrl: "add-user.component.html",
})
export class AddUserComponent implements OnInit {
  public user: User;
  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    fullname: new FormControl(),
  });
  constructor(
    private userService: UserService,
    private routerService: Router
  ) {}
  ngOnInit(): void {
    this.user = new User();
    this.user.created = moment(new Date()).valueOf();
  }
  addUser() {
    this.user.username = this.userForm.get("username").value;
    this.user.password = this.userForm.get("password").value;
    this.user.fullname = this.userForm.get("fullname").value;
    this.userService.addUser(this.user).subscribe((data) => {
      if (data && data.username) {
        this.routerService.navigate(["/manage-user/list"]);
      }
    });
  }
}
