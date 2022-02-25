import { Component, OnInit } from "@angular/core";
import { User } from "./user.modal";
import { UserService } from "./user.service";

@Component({
  templateUrl: "list-user.component.html",
})
export class ListUserComponent implements OnInit {
  arrUser: User[] = [];
  today: number = Date.now();
  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe((data) => {
      this.arrUser = data;
    });
  }
  ngOnInit(): void {

  }
}
