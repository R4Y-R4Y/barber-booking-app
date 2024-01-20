import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BarberShop
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const barberShopAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AppointmentBooked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AppointmentPaid',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'phoneNumber',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClientAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ClientRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'clientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newPhoneNumber',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClientUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'serviceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'staffId',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ServiceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staffAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'employeeId',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'StaffAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staffAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'StaffRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'staffAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newName',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'newEmployeeId',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'StaffUpdated',
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'clients',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'phoneNumber', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'services',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'staffId', internalType: 'address', type: 'address' },
    ],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'staff',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'staffId', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_clientAddress', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_phoneNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addClient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_clientAddress', internalType: 'address', type: 'address' },
      { name: '_newName', internalType: 'string', type: 'string' },
      { name: '_newPhoneNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateClient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_clientAddress', internalType: 'address', type: 'address' },
    ],
    name: 'removeClient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_staffAddress', internalType: 'address', type: 'address' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_staffId', internalType: 'address', type: 'address' },
    ],
    name: 'addStaff',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_staffAddress', internalType: 'address', type: 'address' },
      { name: '_newName', internalType: 'string', type: 'string' },
      { name: '_newStaffId', internalType: 'address', type: 'address' },
    ],
    name: 'updateStaff',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_staffAddress', internalType: 'address', type: 'address' },
    ],
    name: 'removeStaff',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_serviceId', internalType: 'uint256', type: 'uint256' },
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_staffId', internalType: 'address', type: 'address' },
    ],
    name: 'addService',
    outputs: [],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'viewService',
    outputs: [
      { name: 'serviceName', internalType: 'string', type: 'string' },
      { name: 'staffId', internalType: 'address', type: 'address' },
    ],
  },
  {
    constant: true,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_staffId', internalType: 'address', type: 'address' }],
    name: 'viewStaff',
    outputs: [
      { name: 'staffName', internalType: 'string', type: 'string' },
      { name: 'staffId', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'bookAppointment',
    outputs: [],
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: '_serviceId', internalType: 'uint256', type: 'uint256' }],
    name: 'payForAppointment',
    outputs: [],
  },
] as const

export const barberShopAddress =
  '0x5b97753C32aeDD0F6e9899AA8E04F8Fe92c64c2B' as const

export const barberShopConfig = {
  address: barberShopAddress,
  abi: barberShopAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const useReadBarberShop = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"clients"`
 */
export const useReadBarberShopClients = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'clients',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"owner"`
 */
export const useReadBarberShopOwner = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"services"`
 */
export const useReadBarberShopServices = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'services',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"staff"`
 */
export const useReadBarberShopStaff = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'staff',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"viewService"`
 */
export const useReadBarberShopViewService = /*#__PURE__*/ createUseReadContract(
  {
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'viewService',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"viewStaff"`
 */
export const useReadBarberShopViewStaff = /*#__PURE__*/ createUseReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'viewStaff',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const useWriteBarberShop = /*#__PURE__*/ createUseWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addClient"`
 */
export const useWriteBarberShopAddClient = /*#__PURE__*/ createUseWriteContract(
  { abi: barberShopAbi, address: barberShopAddress, functionName: 'addClient' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateClient"`
 */
export const useWriteBarberShopUpdateClient =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateClient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeClient"`
 */
export const useWriteBarberShopRemoveClient =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeClient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addStaff"`
 */
export const useWriteBarberShopAddStaff = /*#__PURE__*/ createUseWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'addStaff',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateStaff"`
 */
export const useWriteBarberShopUpdateStaff =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateStaff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeStaff"`
 */
export const useWriteBarberShopRemoveStaff =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeStaff',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addService"`
 */
export const useWriteBarberShopAddService =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'addService',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"bookAppointment"`
 */
export const useWriteBarberShopBookAppointment =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'bookAppointment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"payForAppointment"`
 */
export const useWriteBarberShopPayForAppointment =
  /*#__PURE__*/ createUseWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'payForAppointment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const useSimulateBarberShop = /*#__PURE__*/ createUseSimulateContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addClient"`
 */
export const useSimulateBarberShopAddClient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'addClient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateClient"`
 */
export const useSimulateBarberShopUpdateClient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateClient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeClient"`
 */
export const useSimulateBarberShopRemoveClient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeClient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addStaff"`
 */
export const useSimulateBarberShopAddStaff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'addStaff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateStaff"`
 */
export const useSimulateBarberShopUpdateStaff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateStaff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeStaff"`
 */
export const useSimulateBarberShopRemoveStaff =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeStaff',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addService"`
 */
export const useSimulateBarberShopAddService =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'addService',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"bookAppointment"`
 */
export const useSimulateBarberShopBookAppointment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'bookAppointment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"payForAppointment"`
 */
export const useSimulateBarberShopPayForAppointment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'payForAppointment',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__
 */
export const useWatchBarberShopEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"AppointmentBooked"`
 */
export const useWatchBarberShopAppointmentBookedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'AppointmentBooked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"AppointmentPaid"`
 */
export const useWatchBarberShopAppointmentPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'AppointmentPaid',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientAdded"`
 */
export const useWatchBarberShopClientAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientRemoved"`
 */
export const useWatchBarberShopClientRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientUpdated"`
 */
export const useWatchBarberShopClientUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ServiceAdded"`
 */
export const useWatchBarberShopServiceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ServiceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffAdded"`
 */
export const useWatchBarberShopStaffAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffRemoved"`
 */
export const useWatchBarberShopStaffRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffUpdated"`
 */
export const useWatchBarberShopStaffUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffUpdated',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const readBarberShop = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"clients"`
 */
export const readBarberShopClients = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'clients',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"owner"`
 */
export const readBarberShopOwner = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"services"`
 */
export const readBarberShopServices = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'services',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"staff"`
 */
export const readBarberShopStaff = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'staff',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"viewService"`
 */
export const readBarberShopViewService = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'viewService',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"viewStaff"`
 */
export const readBarberShopViewStaff = /*#__PURE__*/ createReadContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'viewStaff',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const writeBarberShop = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addClient"`
 */
export const writeBarberShopAddClient = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'addClient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateClient"`
 */
export const writeBarberShopUpdateClient = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'updateClient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeClient"`
 */
export const writeBarberShopRemoveClient = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'removeClient',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addStaff"`
 */
export const writeBarberShopAddStaff = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'addStaff',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateStaff"`
 */
export const writeBarberShopUpdateStaff = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'updateStaff',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeStaff"`
 */
export const writeBarberShopRemoveStaff = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'removeStaff',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addService"`
 */
export const writeBarberShopAddService = /*#__PURE__*/ createWriteContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'addService',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"bookAppointment"`
 */
export const writeBarberShopBookAppointment = /*#__PURE__*/ createWriteContract(
  {
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'bookAppointment',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"payForAppointment"`
 */
export const writeBarberShopPayForAppointment =
  /*#__PURE__*/ createWriteContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'payForAppointment',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__
 */
export const simulateBarberShop = /*#__PURE__*/ createSimulateContract({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addClient"`
 */
export const simulateBarberShopAddClient = /*#__PURE__*/ createSimulateContract(
  { abi: barberShopAbi, address: barberShopAddress, functionName: 'addClient' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateClient"`
 */
export const simulateBarberShopUpdateClient =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateClient',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeClient"`
 */
export const simulateBarberShopRemoveClient =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeClient',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addStaff"`
 */
export const simulateBarberShopAddStaff = /*#__PURE__*/ createSimulateContract({
  abi: barberShopAbi,
  address: barberShopAddress,
  functionName: 'addStaff',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"updateStaff"`
 */
export const simulateBarberShopUpdateStaff =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'updateStaff',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"removeStaff"`
 */
export const simulateBarberShopRemoveStaff =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'removeStaff',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"addService"`
 */
export const simulateBarberShopAddService =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'addService',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"bookAppointment"`
 */
export const simulateBarberShopBookAppointment =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'bookAppointment',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link barberShopAbi}__ and `functionName` set to `"payForAppointment"`
 */
export const simulateBarberShopPayForAppointment =
  /*#__PURE__*/ createSimulateContract({
    abi: barberShopAbi,
    address: barberShopAddress,
    functionName: 'payForAppointment',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__
 */
export const watchBarberShopEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: barberShopAbi,
  address: barberShopAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"AppointmentBooked"`
 */
export const watchBarberShopAppointmentBookedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'AppointmentBooked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"AppointmentPaid"`
 */
export const watchBarberShopAppointmentPaidEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'AppointmentPaid',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientAdded"`
 */
export const watchBarberShopClientAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientRemoved"`
 */
export const watchBarberShopClientRemovedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientRemoved',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ClientUpdated"`
 */
export const watchBarberShopClientUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ClientUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"ServiceAdded"`
 */
export const watchBarberShopServiceAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'ServiceAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffAdded"`
 */
export const watchBarberShopStaffAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffRemoved"`
 */
export const watchBarberShopStaffRemovedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffRemoved',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link barberShopAbi}__ and `eventName` set to `"StaffUpdated"`
 */
export const watchBarberShopStaffUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: barberShopAbi,
    address: barberShopAddress,
    eventName: 'StaffUpdated',
  })
