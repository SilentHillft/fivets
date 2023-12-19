export type Deferrals = {
    /**
     * Initialize deferrals for the current resource. It's required to wait for at least a tick after calling defer before calling update, presentCard or done.
     */
    defer: () => void;
    /**
     * Finalizes a deferral
     * @param failureReason If specified, the connection will be refused, and the user will see the specified message as a result.
     */
    done: (failureReason?: string) => void;
    /**
     * Adds handover data for the client to be able to use at a later point.
     * @param data
     */
    handover: (data: Record<string, any>) => void;
    /**
     * It'll send an <a href="https://adaptivecards.io/">Adaptive Card</a> to the client.
     * @param card
     * @param cb
     */
    presentCard: (card: string | object, cb?: (data: any, rawData: string) => void) => void;
    /**
     * It'll send a progress message to the connecting client.
     * @param message
     */
    update: (message: string) => void;
}