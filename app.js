/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 20;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

const errorPara= document.querySelector("#error");
const unorderedlist= document.querySelector("#list");


getList()
  .then(results => {
    results.forEach((hobbit)=>{
      const hobbitLi = document.createElement("li");
      hobbitLi.textContent=hobbit;
      visualList.appendChild(hobbitLi);
    });
  })
  .catch(err => {
    errorPara.textContent=err.message;
  });
