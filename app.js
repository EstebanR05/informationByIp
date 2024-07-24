const $form = document.querySelector("#form");
const $ipInput = document.querySelector("#input");
const $submit = document.querySelector("#submit");
const $results = document.querySelector("#results");

const fetchingIpInfo = (ip) => {
  return fetch(`https://api.ipfind.com/?ip=${ip}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $ipInput;
  console.log("hereee!", value);
  if (!value) return;

  $submit.setAttribute("disable", "");
  $submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchingIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $submit.removeAttribute("disable");
  $submit.removeAttribute("aria-busy");
});
