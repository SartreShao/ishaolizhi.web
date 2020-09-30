import { Message } from "./types";

export default {
  createMessage: async (name: string, email: string, message: string) => {
    try {
      const object = await new Message()
        .set("name", name)
        .set("email", email)
        .set("message", message)
        .set("isRead", false)
        .save();
      console.log("createMessage success", object);
      return object;
    } catch (error) {
      console.log("createMessage error", error);
      throw error;
    }
  }
};
