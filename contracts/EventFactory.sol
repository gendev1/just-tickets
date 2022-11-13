// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./nft.sol";
import {POAP} from "./poap.sol";

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Event_Manager {
    using Counters for Counters.Counter;
    Counters.Counter private _eventIds;
    struct eventData {
        string name;
        string location;
        uint256 eventTime;
        address poap;
    }
    mapping(uint256 => address) eventAddressess;
    mapping(address => uint256) eventIds;
    mapping(uint256 => eventData) eventSpecifics;
    mapping(uint256 => address) PoapAddressess;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function create_event(
        string memory _name,
        string memory _location,
        address _manager,
        uint256 _ticketCap,
        string memory _description,
        uint256 timestamp
    ) external returns (uint256 event_id) {
        NFT eventAddress = new NFT(_manager, _ticketCap, "", _description);
        POAP poapAddress = new POAP(_manager, _ticketCap, "", _description);
        event_id = _eventIds.current();
        eventIds[address(eventAddress)] = event_id;
        eventAddressess[event_id] = address(eventAddress);
        eventData memory _eventData = eventData({
            name: _name,
            location: _location,
            eventTime: timestamp,
            poap: address(poapAddress)
        });
        PoapAddressess[event_id] = address(poapAddress);
        eventSpecifics[event_id] = _eventData;
        _eventIds.increment();
    }

    function eventDetailsById(uint256 _id)
        external
        view
        returns (eventData memory)
    {
        return eventSpecifics[_id];
    }

    function eventAddressById(uint256 _id) external view returns (address) {
        return eventAddressess[_id];
    }

    function eventIdbyAddress(address _event_address)
        external
        view
        returns (uint256)
    {
        return eventIds[_event_address];
    }

    function verifyBurnAndValidate(
        uint256 _event_Id,
        address owner,
        uint256 _tokenId
    ) external returns (uint256 poap_id) {
        require(msg.sender == owner, "Only verifier can do this!");
        NFT(eventAddressess[_event_Id]).burnAndValidate(owner, _tokenId);
        return POAP(PoapAddressess[_event_Id]).mintPOAP(owner);
    }
}
