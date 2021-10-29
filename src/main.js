import { createApp } from "vue";
import App from "./App";
import icons from "@/components/icons";
import UIcomponents from "@/components/UI";

const app = createApp(App);

icons.forEach((icon) => {
  app.component(icon.name, icon);
});

UIcomponents.forEach((UIcomponent) => {
  app.component(UIcomponent.name, UIcomponent);
});

app.mount("#app");
