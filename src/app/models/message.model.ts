
export interface Message {
    id: String;
    ids: String;
    toId: String;
    fromId: String;
    category: String;
    type: String;
    text: String;
    image: String;
    sentAt: Date;
    receivedAt: Date;
    received: Boolean;
}
