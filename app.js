var userAccount;
const contractAddress = "0x874EA6f3C1fA4fE7fc06eC598Fac8FA08a02CC9c";
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_stake",
        "type": "uint256"
      }
    ],
    "name": "StakeToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burnFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_stakeholder",
        "type": "address"
      }
    ],
    "name": "calculateReward",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "isStakeholder",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenPrice",
        "type": "uint256"
      }
    ],
    "name": "modifyTokenBuyPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_stake",
        "type": "uint256"
      }
    ],
    "name": "removeStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_stakeholder",
        "type": "address"
      }
    ],
    "name": "rewardOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_stakeholder",
        "type": "address"
      }
    ],
    "name": "stakeOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalStakes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_stakeholder",
        "type": "address"
      }
    ],
    "name": "userBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
  web3 = new Web3(web3.currentProvider);
const Staking = new web3.eth.Contract(abi, contractAddress);
//UI vars
const loginButton = document.getElementById('loginButton'),
        AddressHolder = document.getElementById('AddressHolder'),
        beforeconnection = document.getElementById('before-connection'),
        ///
        amountID = document.getElementById('amountID'),
        buyTokens = document.getElementById('buyTokens'),
        buyTokensoutput = document.getElementById('buy-Tokens-output'),
        ////////////////////////////////
        stakeID = document.getElementById('stakeID'),
        stakeTokens = document.getElementById('stakeTokens'),
        stakeTokensoutput = document.getElementById('stake-Tokens-output'),
        /////
        unstakeID = document.getElementById('unstakeID'),
        unstakeTokens = document.getElementById('unstakeTokens'),
        unstakeTokensoutput = document.getElementById('unstake-Tokens-output'),
        //
        balanceofTokens = document.getElementById('balanceofTokens'),
        getbalanceoutput = document.getElementById('getbalance-output'),
        ///
        actualbalanceofTokens = document.getElementById('actualbalanceofTokens'),
        actualbalanceofTokensOutput = document.getElementById('actualbalanceofTokens-output'),
        ///
        rewardofTokens = document.getElementById('rewardofTokens'),
        claimrewardsoutput = document.getElementById('claim-rewards-output'),
        ///
        addressID = document.getElementById('addressID'),
        transferamoutID = document.getElementById('transferamoutID'),
        transfer = document.getElementById('transfer'),
        TransferOutput = document.getElementById('transfer-Tokens-output');

        function startContract() {
          web3 = new Web3(web3.currentProvider);
          const Staking = new web3.eth.Contract(abi, contractAddress);
          userAccount = web3.eth.accounts[0];
          setInterval(function() {
            // Check if account has changed
            if (web3.eth.accounts[0] !== userAccount) {
              userAccount = web3.eth.accounts[0];
              
            }
          }, 100);
        }

  window.addEventListener('load',  () => {
   toggleButton()
   }
  );

async function toggleButton() {
// If no MetaMask
if (!window.ethereum) {
  loginButton.innerHTML ='Metamask not installed';
  loginButton.classList.remove('btn-dark');
  loginButton.classList.add('btn-danger');
  beforeconnection.innerHTML = `Please install Metamask to get started <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Download Link</a>`;
}
else {
  loginButton.addEventListener('click',async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            userAccount = accounts[0];
            loginButton.innerHTML ='Connected';
            AddressHolder.innerHTML = `${account}`;
            console.log(`${account}`);
            beforeconnection.innerHTML = `You're set to go.`;
            startContract();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
            alert('user rejected permission');
            }
          }
         });
  }
};



stakeTokens.addEventListener('click',async()=> {
      //If input field is empty
      if(stakeID.value === '') {
        stakeTokensoutput.innerHTML = `Enter amount to stake!!!`;
        return;
      } //if not empty
      else {
        const value = web3.utils.toWei(stakeID.value, "ether");
        await Staking.methods.StakeToken(value).send({from: ethereum.selectedAddress})
        .then(stakeTokensoutput.innerHTML =`Staking ${stakeID.value} STK...`)
        .catch((error) => {
          console.log(error);
          stakeTokensoutput.innerHTML = `An error has occurred`;
        });
        stakeTokensoutput.innerHTML =`${stakeID.value} STK has been staked`;
      }
})
  
      
balanceofTokens.addEventListener('click', getTokenBalance);
async function getTokenBalance() {
const balance = await Staking.methods.stakeOf(ethereum.selectedAddress).call()
.catch( (error) => {
  console.log(error);
  getbalanceoutput.innerHTML =`An error has occured`; });
  const stakedBalance = web3.utils.fromWei(balance, "ether");
  getbalanceoutput.innerHTML = `Staked Balance is : ${stakedBalance} $STK`;
}

actualbalanceofTokens.addEventListener('click', BalanceOf);
async function BalanceOf() {
const balance = await Staking.methods.balanceOf(ethereum.selectedAddress).call()
.catch( (error) => {
  console.log(error);
  getbalanceoutput.innerHTML =`An error has occured`; });
 const  userbalance = web3.utils.fromWei(balance, "ether");
  actualbalanceofTokensOutput.innerHTML = `Balance is : ${userbalance} STK`;

 

}

buyTokens.addEventListener('click', buySTK)
async function buySTK() {
  if(amountID.value == '') {
    buyTokensoutput.innerHTML = `Input an amount to buy in ETH!!!`;
    return;
  } else {
  await Staking.methods.buyTokens(ethereum.selectedAddress).send({from: ethereum.selectedAddress, value: web3.utils.toWei(amountID.value, "ether")})
  .then(
    buyTokensoutput.innerHTML = `Tokens bought`
  )
  .catch((error) => {
    console.log(error);
    buyTokensoutput.innerHTML =`An error has occured`; });
  }
}

unstakeTokens.addEventListener('click',Unstake);
async function Unstake() {
  const value = web3.utils.toWei(unstakeID.value,"ether");
  unstakeTokensoutput.innerHTML = `Unstaking in progress...`
  await Staking.methods.removeStake(value).send({from: ethereum.selectedAddress})
  .then(unstakeTokensoutput.innerHTML = `Unstaked`)
  .catch((error) => {
    if(error.code == 4001) {
      unstakeTokensoutput.innerHTML = `User rejected Tx`;
    } else {
    unstakeTokensoutput.innerHTML = `An error has occured`;
    }
  })
  
  // unstakeTokensoutput.innerHTML = `Unstaked`;

}

transfer.addEventListener('click',TransferTokens);

async function TransferTokens() {
  const to = addressID.value;
  const value = web3.utils.toWei(transferamoutID.value,"ether");
  await Staking.methods.transfer(to, value).send({from: ethereum.selectedAddress})
  .then(
    TransferOutput.innerHTML = `Transferring tokens...`
  )
  .catch((error) => {
    if(error.code == 4001) {
      TransferOutput.innerHTML = `User rejected Tx`;
    }  else {
      TransferOutput.innerHTML = `An error has occured`;
      }

  })
  TransferOutput.innerHTML =`Transferred ${transferamoutID.value} $STK`;
}

rewardofTokens.addEventListener('click',ClaimRewards);

async function ClaimRewards() {
  await Staking.methods.withdrawReward().send({from: ethereum.selectedAddress})
  .then(claimrewardsoutput.innerHTML = `Claimed weekly rewards`)
  .catch((error) => {
    if(error.code == 4001) {
      claimrewardsoutput.innerHTML = `User rejected Tx`;
    } else {
      claimrewardsoutput.innerHTML = `An error has occured, it's most likely not yet time to claim your rewards`;
    }
  })
}