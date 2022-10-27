pragma solidity ^0.8.17;
contract SolidityTest
{
   uint my_calling_time;  // contract initilizing time
   uint my_timestamp;  // after how many time the time capsule will open
   string my_info;   // info of time capsule here it is string which we will improve
   address makers_address; // time capsule makers address
   mapping(address => bool) friends;

   modifier check_address() {
      require (friends[msg.sender]);  // only maker can access the time capsule
         _;
   }

   modifier is_owner() {
      require (msg.sender==makers_address); 
         _;
   }

   modifier correct_time() {
      if(block.timestamp > my_calling_time + my_timestamp){      // contract will initialize after a certain time
         _;
      }
   }
   
   function set_time(uint starting_time,uint timestamp) private {
      my_calling_time = starting_time;  //recieve time info from frontend
      my_timestamp = timestamp; 
   }

   function recieve_data (string memory info) public{
      my_info = info ;  // recieve info from frontend
      makers_address = msg.sender;
      friends[makers_address] = true;
   } 

   function add_friend (address friend_addr) public is_owner {
       friends[friend_addr] = true;
   }
   
   function show_data () public view correct_time check_address returns(string memory info)  {
      info = my_info;  // returns the info 
   }

}