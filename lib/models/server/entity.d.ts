import { Entity } from "../common";
export declare class ServerEntity extends Entity {
    get routingBucket(): number;
    set routingBucket(bucket: number);
    setRoutingBucket(bucket: number): void;
    getEntityAttachedTo(): ServerEntity;
}
