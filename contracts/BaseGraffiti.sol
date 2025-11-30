// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract BaseGraffiti {
    struct Tag {
        address author;
        uint256 blockNumber;
        uint256 timestamp;
        string message;
    }

    Tag[] public tags;

    event NewTag(address indexed author, uint256 indexed index, string message);

    ///message The text you want to store (max 80 chars)
    function write(string calldata _message) external {
        require(bytes(_message).length <= 80, "Message too long");

        tags.push(
            Tag({
                author: msg.sender,
                blockNumber: block.number,
                timestamp: block.timestamp,
                message: _message
            })
        );

        emit NewTag(msg.sender, tags.length - 1, _message);
    }

    function totalTags() external view returns (uint256) {
        return tags.length;
    }

    function getTag(uint256 index)
        external
        view
        returns (
            address author,
            uint256 blockNumber,
            uint256 timestamp,
            string memory message
        )
    {
        require(index < tags.length, "Index out of bounds");
        Tag storage t = tags[index];
        return (t.author, t.blockNumber, t.timestamp, t.message);
    }
}

