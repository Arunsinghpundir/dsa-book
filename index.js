let tr = document.querySelector("#tr-main");

async function data() {
  const url = "./data.js";
  const api = await fetch(url);
  const res = await api.json();
  let ol = document.createElement("ol");
  res.DATA.map((i) => {
    if (i.STATUS === "DONE") {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.innerHTML = i.title;
      a.setAttribute("href", i.url);
      li.appendChild(a);
      ol.appendChild(li);
      tr.appendChild(ol);
    } else {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.innerHTML = i.title;
      li.appendChild(a);
      ol.appendChild(li);
      tr.appendChild(ol);
    }
  });
}
data();
