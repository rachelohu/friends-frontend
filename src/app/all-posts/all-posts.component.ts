import { Component, OnInit } from '@angular/core';
import { FriendService } from "../friend.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  //property to receive FriendService
  tdsrv: FriendService;

  constructor(friendService: FriendService) { 
    // Assign the service as a property of component
    this.tdsrv = friendService;

  }

  ngOnInit(): void {
    // grab the friend on component initialization
    this.tdsrv.getFriends();
  }

}
