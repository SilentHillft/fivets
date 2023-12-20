"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEntity = void 0;
const common_1 = require("../common");
class ServerEntity extends common_1.Entity {
    get routingBucket() {
        return GetEntityRoutingBucket(this.handle);
    }
    set routingBucket(bucket) {
        this.setRoutingBucket(bucket);
    }
    setRoutingBucket(bucket) {
        SetEntityRoutingBucket(this.handle, bucket);
    }
    getEntityAttachedTo() {
        const src = GetEntityAttachedTo(this.handle);
        if (!src) {
            return null;
        }
        return new ServerEntity(src);
        // TODO: Recognize type of entity and return valid model
    }
}
exports.ServerEntity = ServerEntity;
