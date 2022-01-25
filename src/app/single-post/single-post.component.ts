import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FriendService } from "../friend.service";
import { Friend } from "../../types";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id: number | null = null; // variable for param id
  route; // variable for route service
  tdsrv; // variable for friend service
  post: Friend = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    instagram: "",
  }; // variable to hold the selected post
  router: Router; // variable to hold router service

  constructor(route: ActivatedRoute, friendService: FriendService, router: Router) {
    //assign services to properties
    this.route = route;
    this.tdsrv = friendService;
    this.router = router; // variable for friend service
  }

  ngOnInit(): void {
    //get the URL Param
    this.route.params.subscribe((params) => {
      // store the id in our properties
      this.id = params["id"];
      // find post from our service with the to selected friend
      const post = this.tdsrv.friends.find((p) => p.id == params.id);
      // if post exists assign it to post property
      if (post) {
        this.post = post;
      }
    });
  }

  // function to delete a friend
  async deleteFriend() {
    await this.tdsrv.DeleteFriend(this.post);
    this.router.navigate(["/"]);
  }
}