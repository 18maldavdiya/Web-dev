import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hanish!!");
  console.log(text);
}

doStuff();