const searchBook = () => {
  const search = document.querySelector("#search-text");
  const searchText = search.value;
  fetch(`https://openlibrary.org/search.json?q=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayBook(data.docs[0]));
};

const displayBook = (book) => {
  const showResult = document.querySelector("#show-result");
  const div = document.createElement("div");
  div.classList.add("col");
  //   books.forEach((book) => {
  console.log(book);
  div.innerHTML = `
      <div  class="card">
    <h3 class="text-center">Book Author Name: ${book.author_name[0]}</h3>
      <div class="card-body">
        <h4 class="card-title">Book Name: ${book.title}</h4>
        <h5>Publish Year: ${book.first_publish_year}</h5>
        <h6>Publisher: ${book.publisher}</h6>
        <p>Book Count: ${book.edition_count}</p>
      </div>
      `;
  showResult.appendChild(div);
  //   });
};
