# Welcome to the TIME-CAPSULE project of HELLO FOSS
Hey! Glad to see ya here. This is a web3 based project that aims on creating an encryted time-capsule.
## What is Time-Capsule?
Time Capsule "Smart contracts" are used on the Ethereum Blockchain with the objective of creating a discoverable, trackable record of its existence for future generations. 

They are like legacy that you give to your future geenrations and are encrypted until the time you decide to break it.

## Different types of Time-Capsule
There are various different types of time-capsules. The major ones are listed below:
<ul>
<li><b>Safe</b>: allows you to store data in a decentralised manner, and retrieve it at any time.
</li>
<li><b>Big Day</b>:  On that chosen day, the protocol will be triggered and the recipients will receive the keys to open their capsule.
</li>
<li><b>Countdown</b>:  if the capsule is not opened within the allotted time, the capsule is automatically given to the chosen recipients who can then open it.
</li>
<li><b>Consent Protocol</b>: allowing your trusted ones to request access to your capsule at any time. In the event of no response within the chosen time frame, the protocol will be triggered and your loved ones will be able to access the content of the time capsule.
</li>
<li><b>Death Protocol</b>: The Death Protocol offers the possibility to create a capsule that can only be opened after the creator has passed away.</li>
 
</ul>



Ready to dive in the deep world of Web3 and decentralised applications? This is an open-source repository for the project in  which you can contribute.<br>
Contributions of any type, that would benefit the repo and add more functionality to it by fixing the bugs will be considered for the merge with the main repo.
<br>
You can contribute as by fixing bugs, errors and issues, also you can imrove the repo by adding features, optimising the application, making the frontend better, etc. Any pull request that would contribute to the improvement of the repo will be considered for the merge.
<br>
# Getting Started

First of all you'll need to fork the repo to your GitHub. To do this click the fork button in the upper right hand corner of a repo page. 

Now clone the repo as:<br>
```shell
git clone https://github.com/navyanshmahla/hello-foss-blockchain.git 
```
Once you're done with cloning the repo, you can start working with it.

But <b>WAIT!</b> You'll need to install the dependencies in order to work with the project locally. For that do:
<br>
```shell
npm install
npm start
```
The `npm start` command will trigger the deployment server and you can actually see the code working. We recommend you guys to use <i>Node Package manager (NPM)</i> in place of <i>Yarn</i> for this project. 

## Tech Stacks used

In order to understand the codebase and contribute, you must first understand the tech-stacks and for that we've compiled some resources for you guys to learn from:

### ReactJS

The frontend of the dApp (decentralised application) is written in ReactJS. Now React is a huge framework. It can't simply be grasped in a short time. So we are only going to focus on relevant part of React only which will be useful for us!<br>
You can learn the basics of React from <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> from this YouTube playlist</a>. STOP JUST WATCHING ALL THE VIDEOS!! You don't have to! We recommend watching videos from <b>1-24</b>, <b>26</b> and <b>44-57</b>. These are short videos, try watching them on 1.5x or 2x to cover up the content quickly. 

### Solidity
Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, and we'll use it for Ethereum.

Don't panic if you can't relate to terms like blockchain, smart-contracts, etc. 

You can learn about smart-contracts from <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI&ab_channel=SimplyExplained"> here </a>. 

Also, learning about Solidity is important, so we recommand you guys go through <a href="https://www.dappuniversity.com/articles/solidity-tutorial"> this page </a>. <br>

### Other tech stacks used

By now you must have known about the two major tech stacks used: React and Solidity.

The other tech stacks that we are going to use: <b>Hardhat, ether.js, Firebase, Metamask and web3.js. </b> Don't panic just by looking at them XD! They are pretty simple to "just-know". No need to know them to fullest to contribute to repo. Try-out googling your way-through in order to know more about them. <br>
Hardhat is used in a replacement of Truffle and Genache. <br><br>
Ether.js is used to integrate Metamask wallet to our Frontend. It is necessary to integrate a crypto wallet (the best one is Metamask) in order to see your dApp working on Ethereum blockchain. Basically, metamsk provides a gateway to interact with the blockchain. <br><br>
Web3.js is used to integrate the Solidity code to the frontend code so that they can communicate well with each other.<br>

# Understanding the Repo

The repo is fairly complicated to those who are seeing it for the first and are pretty new to programming. The main source file of this repo consists of a direcotry named `Components` which consists the JavaScript file of all the ReactJS components used. 

You'll get to see a file named `firebaseConfig.js` which is basically the JS file for configuring the Firebase storage. Why are we using Firebase? Because for time-capsule, we must select a file. The file has to passed to the smart contract in order to store it on the blockchain. For that, Firebase is used. File saved on Firebase is redirected to the smart contract (IPFS). 

The test directory consists of any test that you write. 

You can find the solidity code in `./contracts/Lock.sol`. 

