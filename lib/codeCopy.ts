export function hashGenerator(hashLimit: number, amount: number) {
  const hashes: string[] = [];
  for (let n = 0; n < amount; n++) {
    let hash = "";
    for (let i = 0; i < hashLimit; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      hash += String(randomNumber);
    }
    if (!hashes.includes(hash)) hashes.push(hash);
  }
  return hashes;
}

export default function (codeBlock: unknown) {
  if (!codeBlock || !(codeBlock instanceof HTMLElement)) return;

  const hashID = hashGenerator(7, 1);
  const btn = document.createElement("button");
  btn.innerHTML = "Copy";

  btn.dataset.forCopy = hashID[0];
  codeBlock.dataset.code = hashID[0];

  btn.addEventListener("click", copy);
  codeBlock.appendChild(btn);
}

function copy(event: Event) {
  const btn = event.currentTarget;
  if (btn && btn instanceof HTMLElement) {
    const ID = btn.dataset.forCopy;
    const pre = document.querySelector(`[data-code='${ID}']`);
    const code = pre?.querySelector("code")?.innerText;
    if (code && ID) {
      navigator.clipboard.writeText(code);
      btn.innerHTML = "Copied!";
      setTimeout(() => (btn.innerHTML = "Copy"), 1000);
    }
  }
}
