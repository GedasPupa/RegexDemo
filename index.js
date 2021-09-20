// atskirti visus sakinius stringe - suskaiciuoti kiek sakiniu is viso
const str = `Lorem Ipsum is simply dummy text of the printing
 and typesetting industry.
  Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an unknown 
 printer took a galley of type and scrambled it to make a type 
 specimen book... It has survived not only five centuries, but 
 also the leap into electronic typesetting, remaining essentially 
 unchanged. It was popularised in the 1960s with the release of 
 Letraset sheets containing Lorem Ipsum passages, and recently 
 with desktop publishing software Aldus PageMaker.`;

const sentenceArr = str.split(/(?:\.+)(?<!\.$)/gu);
for (const key in sentenceArr) {
    console.log(`sentence ${parseInt(key)+1}: ${sentenceArr[key]}`);
};
console.log(sentenceArr.length);

//pirmi pasibandymai:
//Laba diena mano vardas Gediminas. A.K.A Gedas Gedosas. Na ir 
//žinoma mano elektroniniss paštas: gedosas@gmail.com

//(ni)s? (ni)s*
//.(as)
//\w+(as)+\S* --klausimas: kodėl nemato LT raidžių (š-paštas)
//\w+([nds]as)

//iskerpa visa inner texta is html tago:
// ((?<=>).+)(.+(?=<)) //// (?<=>).+?)(.+?(?=<))
//<p>Labas vakaras</p>

// /(?<=m{2})tarzan(?!")/gui
// <.*?>
// Tekstas: aa Tarzan "Tarzan" Tarzan <h1>"Tarzan"</h1> <p>aaa Tarzan</p> "Tarzan" mmTarzan mTarzan

// /^(\.+|.*az)\1$/gmu
//Tekstas: ....
// .mklaz.mklaz
// ..
// .
// ......

// https://alf.nu/RegexGolf
// RegexGolf:

// ((?<=.*?)(fu))(?!.{1,})
// Match all of these…
// ✔fu
// ✔tofu
// ✔snafu	
// and none of these…
// ✔futz (no match)
// ✔fusillade (no match)
// ✔functional (no match)
// ✔discombobulated (no match)

//range: [a-f][a-f][a-f][a-f]

//backrefs: ([a-z]{3})\2.*()\1