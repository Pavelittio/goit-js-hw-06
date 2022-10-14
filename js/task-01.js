const categoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, categoriesEl.length);
categoriesEl.forEach(category=>{
    console.log(``);

    const elementH2 = category.firstElementChild;
    console.log(`Category:`,elementH2.textContent);

    const elementList = category.lastElementChild.children;
    console.log(`Elements:`, elementList.length);
})