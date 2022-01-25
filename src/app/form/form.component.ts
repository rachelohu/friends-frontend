import { Component, OnInit } from '@angular/core';
import { FriendService } from "../friend.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  first_name: string = ""; // variable for first name form field
  last_name: string = "";
  email: string = "";
  phone: string = "";
  instagram: string = "";
  tdsrv: FriendService; // variable for friend service
  route: ActivatedRoute; // variable for route service
  id: number | null | undefined = null; // variable for edited post if editing
  buttonLabel = "Add Friend";
  router: Router; // variable for router service

  constructor(friendService: FriendService, route: ActivatedRoute, router: Router) {
    this.tdsrv = friendService;
    this.route = route;
    this.router = router;
  }

  // check to see if a post need to be edited by looking for an id
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // fetch post from friend service if there is an id in url
      const post = this.tdsrv.friends.find((p) => p.id == params["id"]);
      if (post) {
        this.first_name = post.first_name;
        this.last_name = post.last_name;
        this.email = post.email;
        this.phone = post.phone;
        this.instagram = post.instagram;
        this.id = post.id;
        this.buttonLabel = "Edit Friend";
      }
    });
  }

  async handleSubmit() {
    console.log("test");
    //if there is an id, edit the post, if not, create a new post
    if (this.id) {
      //update the friend with the form data
      this.tdsrv.updateFriend({
        id: this.id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        instagram: this.instagram,
      });
    } else {
      //create friend with the form data
      this.tdsrv.createFriend({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        instagram: this.instagram,
      });
    }
    // send back to main page
    this.router.navigate(["/"]);
  }
}
