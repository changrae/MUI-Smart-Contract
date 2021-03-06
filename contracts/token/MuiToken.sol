pragma solidity 0.4.24;

import "./PausableToken.sol";
import "../ownership/Claimable.sol";

/**
 * @title MUI Token
 * @dev SovereignWallet Network token
 */
contract MuiToken is PausableToken, Claimable {
    string public constant name = "MUI Token";
    string public constant symbol = "MUI";
    uint8 public constant decimals = 6;
    uint256 public constant TOKEN_SUPPLY = 1000000000; // 1 billion = 1e9 MUI token
    uint256 public constant INITIAL_SUPPLY = TOKEN_SUPPLY * (10 ** uint256(decimals));


    /**
     * Do not accept ether
     */
    function () public payable {
        revert();
    }

    /**
     * @dev Constructor function of the contract
     * @dev In the deployment immediately give all the tokens to the supplier
     * @param supplier address Address of the supplier
     */
    constructor(address supplier) public {
        totalSupply_ = INITIAL_SUPPLY;
        // Give all the supply to the supplier
        balances[supplier] = INITIAL_SUPPLY;
        emit Transfer(0x0, supplier, INITIAL_SUPPLY);
    }
}
