// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
contract SolidityTest
{
   uint my_calling_time;  // contract initilizing time
   uint my_timestamp;  // after how many time the time capsule will open
   string my_info;   // info of time capsule here it is string which we will improve
   address makers_address; // time capsule makers address
   mapping (address => address ) private users; // address of all the users who can access the smart contract as specified by the user

   modifier check_address() {
      require (msg.sender == users[makers_address]);  // only maker can access the time capsule
         _;
   }

   modifier correct_time() {
      if(block.timestamp > my_calling_time + my_timestamp){      // contract will initialize after a certain time
         _;
      }
   }

   function add_users(address user_address) public {
      users[makers_address] = user_address;  // users are added by the owner
   }
   
   function set_time(uint starting_time,uint timestamp) public {
      my_calling_time = starting_time;  //recieve time info from frontend
      my_timestamp = timestamp; 
   }

   function recieve_data (string memory info) public{
      my_info = info ;  // recieve info from frontend
   } 
   function show_data () public view correct_time check_address returns(string memory info)  {
      info = my_info;  // returns the info 
   }

}