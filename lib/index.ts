export default function html(...args: any[]) {
  const txt = raw(...args);

  const temp = document.createElement("template");
  temp.innerHTML = txt;
  return temp.content.cloneNode(true);
}

export function raw(...args: any[]) {
  const [template, ...param] = args;

  let text = "";
  if (typeof template === "string") {
    text = template;
  } else if (template) {
    template.forEach((v: any, i: number) => {
      text += v;
      if (param[i]) {
        text += param[i];
      }
    });
  }
  return text;
}
