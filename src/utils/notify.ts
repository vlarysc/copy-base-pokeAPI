import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
import type { INotify } from "../interfaces/index";

export default function notify({ status, title, text }: INotify) {
  new Notify({
    status: status,
    title: title,
    text: text,
    effect: "fade",
    speed: 300,
    customClass: "",
    customIcon: "",
    showIcon: true,
    showCloseButton: true,
    autoclose: false,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: "right top",
  });
}
