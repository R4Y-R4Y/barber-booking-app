import { defineConfig } from '@wagmi/cli'
import { react, actions } from '@wagmi/cli/plugins'
import { Abi } from 'viem'

const barberShopAbi = [
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
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "AppointmentBooked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "AppointmentPaid",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "phoneNumber",
        "type": "uint256"
      }
    ],
    "name": "ClientAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      }
    ],
    "name": "ClientRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "clientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPhoneNumber",
        "type": "uint256"
      }
    ],
    "name": "ClientUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "serviceId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "staffId",
        "type": "address"
      }
    ],
    "name": "ServiceAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staffAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "employeeId",
        "type": "address"
      }
    ],
    "name": "StaffAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staffAddress",
        "type": "address"
      }
    ],
    "name": "StaffRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "staffAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newEmployeeId",
        "type": "address"
      }
    ],
    "name": "StaffUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "clients",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNumber",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
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
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "services",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "staffId",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "staff",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "staffId",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_clientAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phoneNumber",
        "type": "uint256"
      }
    ],
    "name": "addClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_clientAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_newName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_newPhoneNumber",
        "type": "uint256"
      }
    ],
    "name": "updateClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_clientAddress",
        "type": "address"
      }
    ],
    "name": "removeClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_staffAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_staffId",
        "type": "address"
      }
    ],
    "name": "addStaff",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_staffAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_newName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_newStaffId",
        "type": "address"
      }
    ],
    "name": "updateStaff",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_staffAddress",
        "type": "address"
      }
    ],
    "name": "removeStaff",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_serviceId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_staffId",
        "type": "address"
      }
    ],
    "name": "addService",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_serviceId",
        "type": "uint256"
      }
    ],
    "name": "viewService",
    "outputs": [
      {
        "internalType": "string",
        "name": "serviceName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "staffId",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_staffId",
        "type": "address"
      }
    ],
    "name": "viewStaff",
    "outputs": [
      {
        "internalType": "string",
        "name": "staffName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "staffId",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_serviceId",
        "type": "uint256"
      }
    ],
    "name": "bookAppointment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_serviceId",
        "type": "uint256"
      }
    ],
    "name": "payForAppointment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

export default defineConfig({
  out: 'src/lib/contract.ts',
  contracts: [{
    name: 'BarberShop',
    address:"0x5b97753C32aeDD0F6e9899AA8E04F8Fe92c64c2B",
    abi: barberShopAbi as Abi,
  }],
  plugins: [
    react(),
    actions()
  ],
})





