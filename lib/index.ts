export default function html(...args: any[]) {
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
