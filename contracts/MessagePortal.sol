// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessagePortal {
    string public message;

    event MessageChanged(address indexed user, string newMessage);

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
        emit MessageChanged(msg.sender, newMessage);
    }
}
