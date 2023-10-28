import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ChangeNameEvent,
  ChangeTwitterNameEvent,
  TransferEvent
} from "../generated/Contract/Contract"

export function createChangeNameEventEvent(name: string): ChangeNameEvent {
  let changeNameEventEvent = changetype<ChangeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeNameEventEvent
}

export function createChangeTwitterNameEventEvent(
  name: string
): ChangeTwitterNameEvent {
  let changeTwitterNameEventEvent = changetype<ChangeTwitterNameEvent>(
    newMockEvent()
  )

  changeTwitterNameEventEvent.parameters = new Array()

  changeTwitterNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeTwitterNameEventEvent
}

export function createTransferEventEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TransferEvent {
  let transferEventEvent = changetype<TransferEvent>(newMockEvent())

  transferEventEvent.parameters = new Array()

  transferEventEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEventEvent
}
