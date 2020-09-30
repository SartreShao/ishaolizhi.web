import { Ref } from "vue";
import _ from "lodash";
import * as Api from "@/api";

export default {
  sendMessage: async (
    name: Ref<string>,
    email: Ref<string>,
    message: Ref<string>,
    buttonText: Ref<string>
  ) => {
    if (_.trim(name.value).length === 0) {
      alert("请填写您的姓名");
      return;
    }

    if (_.trim(email.value).length === 0) {
      alert("请填写您的邮箱");
      return;
    }

    if (_.trim(message.value).length === 0) {
      alert("请填写您的想说的话");
      return;
    }

    try {
      buttonText.value = "正在发送...";
      await Api.Message.createMessage(name.value, email.value, message.value);
      name.value = "";
      email.value = "";
      message.value = "";
      buttonText.value = "发送";
      alert("发送成功");
    } catch (error) {
      alert("发送失败，网络可能出现了一些问题");
    }
  }
};
