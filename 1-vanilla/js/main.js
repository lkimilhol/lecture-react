import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";

const tag = "[main]";
document.addEventListener("DOMContentLoaded", main);

// MVC 패턴을 사용한다
function main() {
  console.log(tag, "main");

  // 모델을 생성한다
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView()
  };

  new Controller(store, views);
}
