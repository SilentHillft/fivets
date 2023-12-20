import { Entity } from "../common";
import {RoutingBucketMode} from "../../enums";

export class ServerEntity extends Entity {
    public get routingBucket() {
        return GetEntityRoutingBucket(this.handle);
    }

    public set routingBucket(bucket: number) {
        this.setRoutingBucket(bucket);
    }

    public setRoutingBucket(bucket: number) {
        SetEntityRoutingBucket(this.handle, bucket);
    }

    public getEntityAttachedTo() {
        const src = GetEntityAttachedTo(this.handle);

        if (!src) {
            return null;
        }
        return new ServerEntity(src);

        // TODO: Recognize type of entity and return valid model
    }
}
