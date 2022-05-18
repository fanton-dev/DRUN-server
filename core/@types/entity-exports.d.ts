import {LocationModel, PaymentCardModel} from './models';

/**
 * Source export object structure.
 *
 * @exports
 * @interface SourceExport
 */
export interface SourceExport {
  getIp(): string;
  getBrowser(): string;
  getReferrer(): string;
}

/**
 * ValidatorExport object structure.
 *
 * @exports
 * @interface ValidatorExport
 */
export interface Validator {
  validateIdentifier(identifier: string): void;
  validateLocation(location: LocationModel): void;
  validateRoute(
    homeLocation: LocationModel,
    senderLocation: LocationModel,
    receiverLocation: LocationModel,
    maxDistance: number,
  ): number;
  validatePaymentCard(paymentCard: PaymentCardModel): void;
}

/**
 * Order export object structure.
 *
 * @exports
 * @interface OrderExport
 */
export interface OrderExport {
  getId(): string;
  getSender(): PersonExport;
  getReceiver(): PersonExport;
  getPaymentCardToken(): string;
  getSource(): SourceExport;
  getCreatedOn(): number;
}

/**
 * Sender/Receiver export object structure.
 *
 * @exports
 * @interface PersonExport
 */
export interface PersonExport {
  getId(): string;
  getLocation(): LocationExport;
}

/**
 * Location export object structure.
 *
 * @exports
 * @interface LocationExport
 */
export interface LocationExport {
  getLatitude(): number;
  getLongitude(): number;
}

/**
 * Payment export object structure.
 *
 * @exports
 * @interface PaymentExport
 */
export interface PaymentExport {
  getId(): string;
  getOrderId(): string;
  getPaymentCardToken(): string;
  getCreatedOn(): number;
  getCompletedOn(): number | undefined;
  isCompleted(): boolean;
  markAsCompleted(): number;
}

/**
 * User export object structure.
 *
 * @export
 * @interface UserExport
 */
export interface UserExport {
  getId(): string;
  getToken(): string;
  getPhoneNumber(): string;
}

/**
 * Drone export object structure.
 *
 * @interface DroneExport
 */
 interface DroneExport {
  getId(): string;
  getSource(): SourceExport;
  getHomeLocation(): LocationExport;
  getIsBusy(): boolean;
  getConnectedOn(): number;
  markAsBusy(): boolean;
  markAsNotBusy(): boolean;
}

/**
 * Delivery export object structure.
 *
 * @exports
 * @interface DeliveryExport
 */
export interface DeliveryExport {
  getId(): string;
  getOrderId(): string;
  getDrone(): DroneExport;
  setDrone(droneExport: DroneExport): DroneExport;
  getSenderLocation(): LocationExport;
  getReceiverLocation(): LocationExport;
  getCreatedOn(): number;
  getCompletedOn(): number | undefined;
  markAsCompleted(): number;
}