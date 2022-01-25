import { Injectable } from '@angular/core';
import { Friend } from "../types";

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  // url of API
  url = "https://rh-friends.herokuapp.com/friends/";
  // property to hold array of friends from api
  friends: Array<Friend> = [];

  //get friends when service is contructed
  constructor() { 
    this.getFriends();
  }

  // method to get friends
  async getFriends() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.friends = data;
    return data;
  }

    // method to create friends
    async createFriend(friend: Friend) {
      await fetch(this.url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(friend),
      });
  
      this.getFriends();
    }

  // method to update friends
  async updateFriend(friend: Friend) {
    await fetch(this.url + friend.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    });

    this.getFriends();
  }

   // method to delete friends
   async DeleteFriend(friend: Friend) {
    await fetch(this.url + friend.id + "/", {
      method: "delete",
    });

    return this.getFriends();
  }
} 